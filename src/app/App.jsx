import React from 'react';
window.Streamly = window.Streamly || {};

(function () {

const { useEffect, useState } = React;
const { categories, videos } = window.Streamly.services;
const { nextHistoryIds, selectSessionVideos } = window.Streamly.store;
const { useVideoFilters } = window.Streamly.hooks;
const {
  Header,
  Sidebar,
  YouTubePlayer,
  VideoActions,
  Recommendations,
  CategoryStrip,
  VideoFeed,
  PageHeader,
  VideoCollection,
  ShortsView,
  SubscriptionsView,
  LibraryView,
  SettingsView,
  ModalPanel,
  MobileNav,
  Toast,
} = window.Streamly.components;

function App() {
  const [activeView, setActiveView] = useState('home');
  const [activeCategory, setActiveCategory] = useState('Усе');
  const [query, setQuery] = useState('');
  const [selectedVideo, setSelectedVideo] = useState(videos[0]);
  const [autoplay, setAutoplay] = useState(false);
  const [likedIds, setLikedIds] = useState([]);
  const [savedIds, setSavedIds] = useState([]);
  const [historyIds, setHistoryIds] = useState([videos[0].id]);
  const [subscribed, setSubscribed] = useState(false);
  const [showSidebar, setShowSidebar] = useState(() => window.innerWidth > 980);
  const [openPanel, setOpenPanel] = useState(null);
  const [toast, setToast] = useState('');
  const { feedRef, filteredVideos, visibleVideos, canLoadMore, loadMore } = useVideoFilters({
    videos,
    activeCategory,
    query,
    activeView,
  });

  const isLiked = likedIds.includes(selectedVideo.id);
  const isSaved = savedIds.includes(selectedVideo.id);
  const { savedVideos, likedVideos, watchedVideos, watchLaterVideos } = selectSessionVideos(videos, {
    savedIds,
    likedIds,
    historyIds,
  });

  useEffect(() => {
    if (!toast) return undefined;
    const timer = window.setTimeout(() => setToast(''), 2400);
    return () => window.clearTimeout(timer);
  }, [toast]);

  function notify(message) {
    setToast(message);
  }

  function scrollToFeed() {
    feedRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  function selectVideo(video, shouldAutoplay = true) {
    setActiveView('home');
    setSelectedVideo(video);
    setAutoplay(shouldAutoplay);
    setOpenPanel(null);
    setHistoryIds((current) => nextHistoryIds(current, video.id));
    window.scrollTo({ top: 0, behavior: 'smooth' });
    notify(`Відкрито YouTube відео: ${video.title}`);
  }

  function chooseCategory(category, view = 'home') {
    setActiveView(view);
    setActiveCategory(category);
    scrollToFeed();
    notify(category === 'Усе' ? 'Показано всі відео' : `Категорія: ${category}`);
  }

  function goHome() {
    setActiveView('home');
    setQuery('');
    setActiveCategory('Усе');
    selectVideo(videos[0], false);
  }

  function handleSearch(event) {
    event.preventDefault();
    setActiveView('home');
    setActiveCategory('Усе');
    scrollToFeed();
    notify(query.trim() ? `Пошук: ${query.trim()}` : 'Показано всі відео');
  }

  function handleVoiceSearch() {
    setActiveView('home');
    setQuery('React');
    setActiveCategory('Усе');
    scrollToFeed();
    notify('Голосовий пошук: React');
  }

  function handleSidebarItem(item) {
    setActiveView(item.view);
    setOpenPanel(null);

    if (item.view === 'home') {
      goHome();
      return;
    }
    if (item.view === 'explore') {
      setActiveCategory('Усе');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      notify('Огляд відкрито');
      return;
    }
    if (item.view === 'shorts') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      notify('Shorts відкрито');
      return;
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function toggleId(setter, id) {
    setter((current) => (current.includes(id) ? current.filter((item) => item !== id) : [...current, id]));
  }

  function shareVideo() {
    const url = `https://www.youtube.com/watch?v=${selectedVideo.youtubeId}`;
    if (navigator.clipboard) navigator.clipboard.writeText(url).catch(() => {});
    notify('Посилання YouTube скопійовано');
  }

  function renderMainContent() {
    if (activeView === 'home') {
      return (
        <>
          <section className="watch-section" aria-label="Поточне відео">
            <div className="player-column">
              <YouTubePlayer video={selectedVideo} autoplay={autoplay} />
              <VideoActions
                video={selectedVideo}
                subscribed={subscribed}
                liked={isLiked}
                saved={isSaved}
                onSubscribe={() => {
                  setSubscribed((value) => !value);
                  notify(subscribed ? 'Підписку скасовано' : 'Ви підписалися на канал');
                }}
                onLike={() => {
                  toggleId(setLikedIds, selectedVideo.id);
                  notify(isLiked ? 'Лайк прибрано' : 'Лайк поставлено');
                }}
                onShare={shareVideo}
                onSave={() => {
                  toggleId(setSavedIds, selectedVideo.id);
                  notify(isSaved ? 'Відео прибрано зі збережених' : 'Відео збережено');
                }}
              />
            </div>

            <Recommendations videos={videos} selectedVideo={selectedVideo} onSelectVideo={selectVideo} />
          </section>

          <CategoryStrip
            categories={categories}
            activeCategory={activeCategory}
            onChooseCategory={(category) => chooseCategory(category, 'home')}
          />
          <VideoFeed
            videos={visibleVideos}
            totalCount={filteredVideos.length}
            onSelectVideo={selectVideo}
            feedRef={feedRef}
            canLoadMore={canLoadMore}
            onLoadMore={loadMore}
          />
        </>
      );
    }

    if (activeView === 'explore') {
      return (
        <section className="page-stack">
          <PageHeader title="Огляд" subtitle="Популярні категорії та відео для перегляду." />
          <CategoryStrip
            categories={categories}
            activeCategory={activeCategory}
            onChooseCategory={(category) => chooseCategory(category, 'explore')}
          />
          <VideoFeed
            videos={visibleVideos}
            totalCount={filteredVideos.length}
            onSelectVideo={selectVideo}
            feedRef={feedRef}
            title={activeCategory === 'Усе' ? 'Популярне зараз' : activeCategory}
            canLoadMore={canLoadMore}
            onLoadMore={loadMore}
          />
        </section>
      );
    }

    if (activeView === 'shorts') {
      return <ShortsView videos={videos.slice(0, 80)} onSelectVideo={selectVideo} />;
    }

    if (activeView === 'subscriptions') {
      return (
        <SubscriptionsView
          subscribed={subscribed}
          selectedVideo={selectedVideo}
          videos={videos}
          onSelectVideo={selectVideo}
          onSubscribe={() => {
            setSubscribed(true);
            notify('Ви підписалися на канал');
          }}
        />
      );
    }

    if (activeView === 'library') {
      return (
        <LibraryView
          savedVideos={savedVideos}
          watchedVideos={watchedVideos}
          likedVideos={likedVideos}
          onSelectVideo={selectVideo}
        />
      );
    }

    if (activeView === 'history') {
      return (
        <section className="page-stack">
          <PageHeader title="Історія" subtitle="Відео, які ви відкривали під час цієї сесії." />
          <VideoCollection
            title="Переглянуті"
            videos={watchedVideos}
            onSelectVideo={selectVideo}
            emptyTitle="Історія порожня"
            emptyText="Відкрийте будь-яке відео, щоб воно зʼявилося тут."
          />
        </section>
      );
    }

    if (activeView === 'watchLater') {
      return (
        <section className="page-stack">
          <PageHeader title="Дивитися пізніше" subtitle="Відео, які ви зберегли для перегляду." />
          <VideoCollection
            title="Список"
            videos={watchLaterVideos}
            onSelectVideo={selectVideo}
            emptyTitle="Список порожній"
            emptyText="Натисніть “Зберегти” під відео, щоб додати його сюди."
          />
        </section>
      );
    }

    if (activeView === 'settings') {
      return <SettingsView />;
    }

    return null;
  }

  return (
    <div className="app-shell">
      <Header
        query={query}
        onQueryChange={setQuery}
        onSearch={handleSearch}
        onVoiceSearch={handleVoiceSearch}
        onToggleSidebar={() => setShowSidebar((value) => !value)}
        onHome={goHome}
        onOpenPanel={setOpenPanel}
      />

      <div className={showSidebar ? 'layout' : 'layout sidebar-closed'}>
        <Sidebar
          activeView={activeView}
          visible={showSidebar}
          onItemClick={handleSidebarItem}
        />

        <main className="content">{renderMainContent()}</main>
      </div>

      <MobileNav activeCategory={activeCategory} onChooseCategory={chooseCategory} />
      <ModalPanel
        type={openPanel}
        videos={videos}
        selectedVideo={selectedVideo}
        subscribed={subscribed}
        savedIds={savedIds}
        historyIds={historyIds}
        onClose={() => setOpenPanel(null)}
        onSelectVideo={selectVideo}
      />
      <Toast message={toast} />
    </div>
  );
}

window.Streamly.app = {
  ...(window.Streamly.app || {}),
  App,
};

})();

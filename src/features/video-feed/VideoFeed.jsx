/** @jsx React.createElement */
window.Streamly = window.Streamly || {};

(function () {

const { Icons } = window.Streamly.shared;
const { VideoCard } = window.Streamly.components;

function VideoFeed({
  videos,
  totalCount,
  onSelectVideo,
  feedRef,
  title = 'Рекомендовано',
  subtitle,
  canLoadMore = false,
  onLoadMore,
}) {
  const total = totalCount ?? videos.length;

  return (
    <section className="feed-section" aria-label="Стрічка відео" ref={feedRef}>
      <div className="section-heading">
        <h2>{title}</h2>
        <span>{subtitle || `${total} результатів`}</span>
      </div>

      <div className="video-grid">
        {videos.map((video) => (
          <VideoCard key={video.id} video={video} onSelectVideo={onSelectVideo} />
        ))}
      </div>

      {videos.length === 0 && (
        <div className="empty-state">
          <Icons.MonitorPlay size={36} />
          <h3>Нічого не знайдено</h3>
          <p>Спробуйте інший запит або поверніться до категорії “Усе”.</p>
        </div>
      )}

      {canLoadMore && (
        <div className="load-more-row">
          <button className="load-more-button" onClick={onLoadMore}>
            Показати ще
          </button>
          <span>
            Показано {videos.length} з {total}
          </span>
        </div>
      )}
    </section>
  );
}

window.Streamly.components = {
  ...(window.Streamly.components || {}),
  VideoFeed,
};

})();

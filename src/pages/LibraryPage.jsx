import React from 'react';
window.Streamly = window.Streamly || {};

(function () {

const { PageHeader, VideoCollection } = window.Streamly.components;

function LibraryView({ savedVideos, watchedVideos, likedVideos, onSelectVideo }) {
  return (
    <section className="page-stack">
      <PageHeader title="Бібліотека" subtitle="Збережені відео, історія переглядів і вподобання." />
      <VideoCollection
        title="Збережені"
        videos={savedVideos}
        onSelectVideo={onSelectVideo}
        emptyTitle="Немає збережених відео"
        emptyText="Натисніть “Зберегти” під відео, щоб воно зʼявилося тут."
      />
      <VideoCollection
        title="Нещодавно переглянуті"
        videos={watchedVideos}
        onSelectVideo={onSelectVideo}
        emptyTitle="Історія порожня"
        emptyText="Відкриті відео будуть показані тут."
      />
      <VideoCollection
        title="Вподобані"
        videos={likedVideos}
        onSelectVideo={onSelectVideo}
        emptyTitle="Немає вподобань"
        emptyText="Поставте лайк відео, щоб додати його в цей список."
      />
    </section>
  );
}

window.Streamly.components = {
  ...(window.Streamly.components || {}),
  LibraryView,
};

})();

import React from 'react';
window.Streamly = window.Streamly || {};

(function () {

const { VideoCard, EmptyState } = window.Streamly.components;

function VideoCollection({ title, subtitle, videos, emptyTitle, emptyText, onSelectVideo }) {
  return (
    <section className="feed-section">
      <div className="section-heading">
        <h2>{title}</h2>
        <span>{subtitle || `${videos.length} відео`}</span>
      </div>

      {videos.length > 0 ? (
        <div className="video-grid">
          {videos.map((video) => (
            <VideoCard key={video.id} video={video} onSelectVideo={onSelectVideo} />
          ))}
        </div>
      ) : (
        <EmptyState title={emptyTitle} text={emptyText} />
      )}
    </section>
  );
}

window.Streamly.components = {
  ...(window.Streamly.components || {}),
  VideoCollection,
};

})();

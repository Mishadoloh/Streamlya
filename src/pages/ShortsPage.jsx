import React from 'react';
window.Streamly = window.Streamly || {};

(function () {

const { Icons } = window.Streamly.shared;
const { PageHeader } = window.Streamly.components;
const { getThumbnail } = window.Streamly.utils;

function ShortsView({ videos, onSelectVideo }) {
  return (
    <section className="shorts-section">
      <PageHeader title="Shorts" subtitle="Короткі відео у вертикальному форматі." />
      <div className="shorts-grid">
        {videos.map((video) => (
          <button className="short-card" key={video.id} onClick={() => onSelectVideo(video)}>
            <img src={getThumbnail(video)} alt="" />
            <span className="short-play">
              <Icons.Play size={22} fill="currentColor" />
            </span>
            <strong>{video.title}</strong>
            <small>{video.channel}</small>
          </button>
        ))}
      </div>
    </section>
  );
}

window.Streamly.components = {
  ...(window.Streamly.components || {}),
  ShortsView,
};

})();

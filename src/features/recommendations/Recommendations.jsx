/** @jsx React.createElement */
window.Streamly = window.Streamly || {};

(function () {

const { getThumbnail } = window.Streamly.utils;

function Recommendations({ videos, selectedVideo, onSelectVideo }) {
  const recommendations = videos.filter((video) => video.id !== selectedVideo.id).slice(0, 5);

  return (
    <aside className="recommendations" aria-label="Рекомендовані відео">
      <div className="section-heading">
        <h2>Далі</h2>
        <span>YouTube рекомендації</span>
      </div>
      {recommendations.map((video) => (
        <button className="recommendation" key={video.id} onClick={() => onSelectVideo(video)}>
          <div className="mini-thumb">
            <img src={getThumbnail(video)} alt="" />
            <span>{video.duration}</span>
          </div>
          <div>
            <strong>{video.title}</strong>
            <span>{video.channel}</span>
            <small>{video.views} · {video.age}</small>
          </div>
        </button>
      ))}
    </aside>
  );
}

window.Streamly.components = {
  ...(window.Streamly.components || {}),
  Recommendations,
};

})();

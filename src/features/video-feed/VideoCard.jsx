/** @jsx React.createElement */
window.Streamly = window.Streamly || {};

(function () {

const { Icons } = window.Streamly.shared;
const { getThumbnail } = window.Streamly.utils;

function VideoCard({ video, onSelectVideo }) {
  return (
    <article className="video-card">
      <button className="thumbnail" onClick={() => onSelectVideo(video)} aria-label={`Відкрити ${video.title}`}>
        <img src={getThumbnail(video)} alt="" />
        <span className={video.duration === 'LIVE' ? 'duration live' : 'duration'}>{video.duration}</span>
      </button>
      <div className="card-body">
        <div className="avatar small" style={{ background: video.accent }}>{video.avatar}</div>
        <div>
          <button className="title-button" onClick={() => onSelectVideo(video)}>
            {video.title}
          </button>
          <p>
            {video.channel}
            {video.verified && <Icons.ShieldCheck size={14} />}
          </p>
          <span>{video.views} переглядів · {video.age}</span>
        </div>
      </div>
    </article>
  );
}

window.Streamly.components = {
  ...(window.Streamly.components || {}),
  VideoCard,
};

})();

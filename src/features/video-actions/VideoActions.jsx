import React from 'react';
window.Streamly = window.Streamly || {};

(function () {

const { Icons } = window.Streamly.shared;

function VideoActions({ video, subscribed, liked, saved, onSubscribe, onLike, onShare, onSave }) {
  return (
    <div className="video-meta">
      <div className="channel-row">
        <div className="avatar" style={{ background: video.accent }}>{video.avatar}</div>
        <div className="channel-copy">
          <strong>
            {video.channel}
            {video.verified && <Icons.ShieldCheck size={16} />}
          </strong>
          <span>{video.views} переглядів · {video.age}</span>
        </div>
        <button className={subscribed ? 'subscribe-button subscribed' : 'subscribe-button'} onClick={onSubscribe}>
          {subscribed ? 'Підписано' : 'Підписатися'}
        </button>
      </div>

      <div className="action-row">
        <button className={liked ? 'metric-button active' : 'metric-button'} onClick={onLike}>
          <Icons.ThumbsUp size={18} />
          <span>{liked ? '12,5 тис.' : '12 тис.'}</span>
        </button>
        <button className="metric-button" onClick={onShare}>
          <Icons.Share2 size={18} />
          <span>Поділитися</span>
        </button>
        <button className={saved ? 'metric-button active' : 'metric-button'} onClick={onSave}>
          <Icons.Heart size={18} />
          <span>{saved ? 'Збережено' : 'Зберегти'}</span>
        </button>
      </div>

      <h1 className="watch-title">{video.title}</h1>
      <p className="description">{video.description}</p>
    </div>
  );
}

window.Streamly.components = {
  ...(window.Streamly.components || {}),
  VideoActions,
};

})();

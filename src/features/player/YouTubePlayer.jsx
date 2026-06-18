/** @jsx React.createElement */
window.Streamly = window.Streamly || {};

(function () {

const { getYoutubeUrl } = window.Streamly.utils;

function YouTubePlayer({ video, autoplay }) {
  return (
    <div className="player real-player" style={{ '--accent': video.accent }}>
      <iframe
        key={`${video.youtubeId}-${autoplay ? 'play' : 'idle'}`}
        className="youtube-frame"
        src={getYoutubeUrl(video, autoplay)}
        title={video.title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      />
    </div>
  );
}

window.Streamly.components = {
  ...(window.Streamly.components || {}),
  YouTubePlayer,
};

})();

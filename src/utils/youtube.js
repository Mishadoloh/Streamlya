window.Streamly = window.Streamly || {};

(function () {

function getThumbnail(video) {
  return `https://i.ytimg.com/vi/${video.youtubeId}/hqdefault.jpg`;
}

function getYoutubeUrl(video, autoplay) {
  const params = new URLSearchParams({
    rel: '0',
    modestbranding: '1',
    playsinline: '1',
    autoplay: autoplay ? '1' : '0',
  });

  if (autoplay) params.set('mute', '1');
  return `https://www.youtube.com/embed/${video.youtubeId}?${params.toString()}`;
}
window.Streamly.utils = {
  ...(window.Streamly.utils || {}),
  getThumbnail,
  getYoutubeUrl,
};

})();

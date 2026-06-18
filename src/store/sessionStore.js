window.Streamly = window.Streamly || {};

(function () {

const HISTORY_LIMIT = 8;

function nextHistoryIds(currentIds, videoId) {
  return [videoId, ...currentIds.filter((id) => id !== videoId)].slice(0, HISTORY_LIMIT);
}

function selectSessionVideos(videos, { savedIds, likedIds, historyIds }) {
  const savedVideos = videos.filter((video) => savedIds.includes(video.id));
  const likedVideos = videos.filter((video) => likedIds.includes(video.id));
  const watchedVideos = historyIds.map((id) => videos.find((video) => video.id === id)).filter(Boolean);

  return {
    savedVideos,
    likedVideos,
    watchedVideos,
    watchLaterVideos: savedVideos,
  };
}


window.Streamly.store = {
  ...(window.Streamly.store || {}),
  nextHistoryIds,
  selectSessionVideos,
};

})();

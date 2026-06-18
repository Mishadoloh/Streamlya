import React from 'react';
window.Streamly = window.Streamly || {};

(function () {

const { useEffect, useMemo, useRef, useState } = React;

function useVideoFilters({ videos, activeCategory, query, activeView }) {
  const [visibleCount, setVisibleCount] = useState(60);
  const feedRef = useRef(null);

  const filteredVideos = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return videos.filter((video) => {
      const matchesCategory = activeCategory === 'Усе' || video.category === activeCategory;
      const searchable = [video.title, video.channel, video.category].join(' ').toLowerCase();
      return matchesCategory && searchable.includes(normalizedQuery);
    });
  }, [activeCategory, query, videos]);

  const visibleVideos = useMemo(
    () => filteredVideos.slice(0, visibleCount),
    [filteredVideos, visibleCount],
  );

  useEffect(() => {
    setVisibleCount(60);
  }, [activeCategory, query, activeView]);

  return {
    feedRef,
    filteredVideos,
    visibleVideos,
    canLoadMore: visibleCount < filteredVideos.length,
    loadMore: () => setVisibleCount((count) => count + 60),
  };
}


window.Streamly.hooks = {
  ...(window.Streamly.hooks || {}),
  useVideoFilters,
};

})();

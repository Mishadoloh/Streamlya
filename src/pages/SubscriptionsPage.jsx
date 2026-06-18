import React from 'react';
window.Streamly = window.Streamly || {};

(function () {

const { PageHeader, VideoCollection } = window.Streamly.components;

function SubscriptionsView({ subscribed, selectedVideo, videos, onSelectVideo, onSubscribe }) {
  const channelVideos = videos.filter((video) => video.channel === selectedVideo.channel);
  const suggestedChannels = [...new Map(videos.map((video) => [video.channel, video])).values()];

  return (
    <section className="page-stack">
      <PageHeader
        title="Підписки"
        subtitle={subscribed ? `Нові відео з каналу ${selectedVideo.channel}.` : 'Оберіть канал і натисніть “Підписатися”, щоб наповнити стрічку.'}
      />

      {subscribed ? (
        <VideoCollection
          title={selectedVideo.channel}
          videos={channelVideos}
          onSelectVideo={onSelectVideo}
          emptyTitle="Немає нових відео"
          emptyText="Коли канал опублікує нові відео, вони зʼявляться тут."
        />
      ) : (
        <div className="channel-grid">
          {suggestedChannels.map((video) => (
            <button className="channel-card" key={video.channel} onClick={() => { onSelectVideo(video, false); onSubscribe(); }}>
              <div className="avatar large" style={{ background: video.accent }}>{video.avatar}</div>
              <strong>{video.channel}</strong>
              <span>{video.category}</span>
              <small>Підписатися</small>
            </button>
          ))}
        </div>
      )}
    </section>
  );
}

window.Streamly.components = {
  ...(window.Streamly.components || {}),
  SubscriptionsView,
};

})();

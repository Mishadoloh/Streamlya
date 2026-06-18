import React from 'react';
window.Streamly = window.Streamly || {};

(function () {

const { getThumbnail } = window.Streamly.utils;

function ModalPanel({ type, videos, selectedVideo, subscribed, savedIds, historyIds, onClose, onSelectVideo }) {
  if (!type) return null;

  const saved = videos.filter((video) => savedIds.includes(video.id));
  const watched = historyIds.map((id) => videos.find((video) => video.id === id)).filter(Boolean);

  const content = {
    subscribed: {
      title: 'Підписки',
      text: subscribed ? 'Ви підписані на канал поточного відео.' : 'Натисніть “Підписатися”, щоб додати канал.',
      items: subscribed ? [selectedVideo] : [],
    },
    saved: {
      title: 'Бібліотека',
      text: saved.length ? 'Ваші збережені YouTube відео:' : 'Збережених відео поки немає.',
      items: saved,
    },
    history: {
      title: 'Історія',
      text: watched.length ? 'Останні відкриті відео:' : 'Історія переглядів порожня.',
      items: watched,
    },
    watchLater: {
      title: 'Дивитися пізніше',
      text: saved.length ? 'Тут показані відео, збережені для перегляду.' : 'Додайте відео кнопкою “Зберегти”.',
      items: saved,
    },
    settings: {
      title: 'Налаштування',
      text: 'Контент відкривається через вбудований YouTube-плеєр. Дані переглядів, збереження і підписки зберігаються в поточній сесії.',
      items: [],
    },
    create: {
      title: 'Створити відео',
      text: 'Форма завантаження відео буде доступна після підключення акаунта автора.',
      items: [],
    },
    notifications: {
      title: 'Сповіщення',
      text: 'Плеєр оновлено: тепер відкриває реальні YouTube відео.',
      items: [videos[0], videos[2]],
    },
    profile: {
      title: 'Профіль',
      text: 'Гість Streamly. Лайки, історія і бібліотека живуть у стані React.',
      items: [],
    },
  }[type];

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-card" onClick={(event) => event.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Закрити">×</button>
        <h2>{content.title}</h2>
        <p>{content.text}</p>
        <div className="modal-list">
          {content.items.map((video) => (
            <button key={video.id} onClick={() => onSelectVideo(video)}>
              <img src={getThumbnail(video)} alt="" />
              <span>{video.title}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

window.Streamly.components = {
  ...(window.Streamly.components || {}),
  ModalPanel,
};

})();

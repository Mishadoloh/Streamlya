import React from 'react';
import { createRoot } from 'react-dom/client';
import '../styles.css';

window.React = React;
window.Streamly = window.Streamly || {};

async function bootstrap() {
  await import('../types/video.js');
  await import('../utils/youtube.js');
  await import('../services/videoCatalog.js');
  await import('../shared/ui/Icons.jsx');
  await import('../shared/config/navigation.js');
  await import('../store/sessionStore.js');
  await import('../hooks/useVideoFilters.js');
  await import('../components/layout/Header.jsx');
  await import('../components/layout/Sidebar.jsx');
  await import('../components/layout/PageHeader.jsx');
  await import('../components/navigation/MobileNav.jsx');
  await import('../shared/ui/Toast.jsx');
  await import('../features/player/YouTubePlayer.jsx');
  await import('../features/video-actions/VideoActions.jsx');
  await import('../features/recommendations/Recommendations.jsx');
  await import('../features/video-feed/CategoryStrip.jsx');
  await import('../features/video-feed/VideoCard.jsx');
  await import('../features/video-feed/EmptyState.jsx');
  await import('../features/video-feed/VideoFeed.jsx');
  await import('../features/video-feed/VideoCollection.jsx');
  await import('../features/modal/ModalPanel.jsx');
  await import('../pages/ShortsPage.jsx');
  await import('../pages/SubscriptionsPage.jsx');
  await import('../pages/LibraryPage.jsx');
  await import('../pages/SettingsPage.jsx');
  await import('./App.jsx');

  const { App } = window.Streamly.app;

  createRoot(document.getElementById('root')).render(<App />);
}

bootstrap();

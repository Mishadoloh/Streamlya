window.Streamly = window.Streamly || {};

(function () {

const { Icons } = window.Streamly.shared;

const sidebar = [
  { label: 'Головна', icon: Icons.Home, view: 'home' },
  { label: 'Огляд', icon: Icons.Compass, view: 'explore' },
  { label: 'Shorts', icon: Icons.Sparkles, view: 'shorts' },
  { label: 'Підписки', icon: Icons.Wifi, view: 'subscriptions' },
  { label: 'Бібліотека', icon: Icons.Library, view: 'library' },
  { label: 'Історія', icon: Icons.History, view: 'history' },
  { label: 'Дивитися пізніше', icon: Icons.Clock3, view: 'watchLater' },
  { label: 'Налаштування', icon: Icons.Settings, view: 'settings' },
];

const mobileNav = [
  { label: 'Home', icon: Icons.Home, category: 'Усе' },
  { label: 'Games', icon: Icons.Gamepad2, category: 'Ігри' },
  { label: 'Horror', icon: Icons.Flame, category: 'Хорори' },
  { label: 'Letsplay', icon: Icons.Film, category: 'Летсплеї' },
  { label: 'Music', icon: Icons.Music2, category: 'Музика' },
];


window.Streamly.config = {
  ...(window.Streamly.config || {}),
  sidebar,
  mobileNav,
};

})();

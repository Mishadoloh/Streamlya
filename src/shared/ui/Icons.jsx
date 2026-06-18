/** @jsx React.createElement */
window.Streamly = window.Streamly || {};

(function () {

function SvgIcon({ children, size = 20, fill = 'none', ...props }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={fill}
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      {children}
    </svg>
  );
}

const Icons = {
  Menu: (props) => (
    <SvgIcon {...props}>
      <path d="M4 6h16" />
      <path d="M4 12h16" />
      <path d="M4 18h16" />
    </SvgIcon>
  ),
  Play: (props) => (
    <SvgIcon {...props}>
      <path d="M8 5v14l11-7z" />
    </SvgIcon>
  ),
  Search: (props) => (
    <SvgIcon {...props}>
      <circle cx="11" cy="11" r="7" />
      <path d="m20 20-3.5-3.5" />
    </SvgIcon>
  ),
  Mic: (props) => (
    <SvgIcon {...props}>
      <path d="M12 3a3 3 0 0 0-3 3v6a3 3 0 0 0 6 0V6a3 3 0 0 0-3-3Z" />
      <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
      <path d="M12 19v3" />
    </SvgIcon>
  ),
  Bell: (props) => (
    <SvgIcon {...props}>
      <path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9" />
      <path d="M13.7 21a2 2 0 0 1-3.4 0" />
    </SvgIcon>
  ),
  User: (props) => (
    <SvgIcon {...props}>
      <path d="M20 21a8 8 0 0 0-16 0" />
      <circle cx="12" cy="8" r="4" />
    </SvgIcon>
  ),
  Home: (props) => (
    <SvgIcon {...props}>
      <path d="m3 10 9-7 9 7" />
      <path d="M5 10v10h14V10" />
      <path d="M9 20v-6h6v6" />
    </SvgIcon>
  ),
  Compass: (props) => (
    <SvgIcon {...props}>
      <circle cx="12" cy="12" r="10" />
      <path d="m16 8-2.2 5.8L8 16l2.2-5.8Z" />
    </SvgIcon>
  ),
  Sparkles: (props) => (
    <SvgIcon {...props}>
      <path d="m12 3 1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8Z" />
      <path d="m19 16 .8 2.2L22 19l-2.2.8L19 22l-.8-2.2L16 19l2.2-.8Z" />
    </SvgIcon>
  ),
  Wifi: (props) => (
    <SvgIcon {...props}>
      <path d="M5 12.5a11 11 0 0 1 14 0" />
      <path d="M8.5 16a6 6 0 0 1 7 0" />
      <path d="M12 20h.01" />
    </SvgIcon>
  ),
  Library: (props) => (
    <SvgIcon {...props}>
      <path d="M4 19.5V5a2 2 0 0 1 2-2h12" />
      <path d="M8 7h12v14H8z" />
      <path d="M12 11h4" />
    </SvgIcon>
  ),
  History: (props) => (
    <SvgIcon {...props}>
      <path d="M3 12a9 9 0 1 0 3-6.7" />
      <path d="M3 4v5h5" />
      <path d="M12 7v5l3 2" />
    </SvgIcon>
  ),
  Clock3: (props) => (
    <SvgIcon {...props}>
      <circle cx="12" cy="12" r="10" />
      <path d="M12 6v6l4 2" />
    </SvgIcon>
  ),
  Settings: (props) => (
    <SvgIcon {...props}>
      <circle cx="12" cy="12" r="3" />
      <path d="M19.4 15a1.7 1.7 0 0 0 .3 1.9l.1.1-2 3.5-.2-.1a1.7 1.7 0 0 0-2.1.3l-.4.3-4-.1-.4-.3a1.7 1.7 0 0 0-2.1-.3l-.2.1-2-3.5.1-.1a1.7 1.7 0 0 0 .3-1.9 1.7 1.7 0 0 0-1.6-1.1H5v-4h.2a1.7 1.7 0 0 0 1.6-1.1 1.7 1.7 0 0 0-.3-1.9l-.1-.1 2-3.5.2.1a1.7 1.7 0 0 0 2.1-.3l.4-.3h4l.4.3a1.7 1.7 0 0 0 2.1.3l.2-.1 2 3.5-.1.1a1.7 1.7 0 0 0-.3 1.9A1.7 1.7 0 0 0 21 9.8h.2v4H21a1.7 1.7 0 0 0-1.6 1.2Z" />
    </SvgIcon>
  ),
  ShieldCheck: (props) => (
    <SvgIcon {...props}>
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
      <path d="m9 12 2 2 4-4" />
    </SvgIcon>
  ),
  ThumbsUp: (props) => (
    <SvgIcon {...props}>
      <path d="M7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3" />
      <path d="M7 11 11 2a3 3 0 0 1 3 3v4h5a2 2 0 0 1 2 2l-1 7a4 4 0 0 1-4 4H7Z" />
    </SvgIcon>
  ),
  Share2: (props) => (
    <SvgIcon {...props}>
      <circle cx="18" cy="5" r="3" />
      <circle cx="6" cy="12" r="3" />
      <circle cx="18" cy="19" r="3" />
      <path d="m8.6 13.5 6.8 4" />
      <path d="m15.4 6.5-6.8 4" />
    </SvgIcon>
  ),
  Heart: (props) => (
    <SvgIcon {...props}>
      <path d="M20.8 5.6a5.5 5.5 0 0 0-7.8 0L12 6.7l-1-1.1a5.5 5.5 0 0 0-7.8 7.8L12 22l8.8-8.6a5.5 5.5 0 0 0 0-7.8Z" />
    </SvgIcon>
  ),
  MonitorPlay: (props) => (
    <SvgIcon {...props}>
      <rect x="3" y="4" width="18" height="13" rx="2" />
      <path d="m10 8 5 3-5 3Z" />
      <path d="M8 21h8" />
      <path d="M12 17v4" />
    </SvgIcon>
  ),
  Flame: (props) => (
    <SvgIcon {...props}>
      <path d="M8.5 14.5A4.5 4.5 0 0 0 17 12c0-4-4-5-4-9-2.5 2-5 5-5 9 0 .9.2 1.8.5 2.5Z" />
      <path d="M12 22a5 5 0 0 0 5-5c0-1.6-.7-3-2-4 .1 2-1 3.5-3 4-1.8-.5-2.8-1.7-3-3.5A5 5 0 0 0 12 22Z" />
    </SvgIcon>
  ),
  Film: (props) => (
    <SvgIcon {...props}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M7 5v14" />
      <path d="M17 5v14" />
      <path d="M3 10h4" />
      <path d="M17 10h4" />
      <path d="M3 14h4" />
      <path d="M17 14h4" />
    </SvgIcon>
  ),
  Gamepad2: (props) => (
    <SvgIcon {...props}>
      <path d="M6 12h4" />
      <path d="M8 10v4" />
      <path d="M15 13h.01" />
      <path d="M18 11h.01" />
      <path d="M5.5 8h13A3.5 3.5 0 0 1 22 11.5v3A3.5 3.5 0 0 1 18.5 18c-2 0-2.5-2-4-2h-5c-1.5 0-2 2-4 2A3.5 3.5 0 0 1 2 14.5v-3A3.5 3.5 0 0 1 5.5 8Z" />
    </SvgIcon>
  ),
  Music2: (props) => (
    <SvgIcon {...props}>
      <path d="M9 18V5l12-2v13" />
      <circle cx="6" cy="18" r="3" />
      <circle cx="18" cy="16" r="3" />
    </SvgIcon>
  ),
};


window.Streamly.shared = {
  ...(window.Streamly.shared || {}),
  Icons,
};

})();

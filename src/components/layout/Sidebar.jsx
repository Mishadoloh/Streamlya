import React from 'react';
window.Streamly = window.Streamly || {};

(function () {

const { sidebar } = window.Streamly.config;

function Sidebar({ activeView, visible, onItemClick }) {
  return (
    <aside className={visible ? 'sidebar' : 'sidebar is-hidden'} aria-label="Навігація">
      {sidebar.map((item) => {
        const Icon = item.icon;
        const isActive = activeView === item.view;

        return (
          <button className={isActive ? 'nav-item active' : 'nav-item'} key={item.label} onClick={() => onItemClick(item)}>
            <Icon size={20} />
            <span>{item.label}</span>
          </button>
        );
      })}
    </aside>
  );
}

window.Streamly.components = {
  ...(window.Streamly.components || {}),
  Sidebar,
};

})();

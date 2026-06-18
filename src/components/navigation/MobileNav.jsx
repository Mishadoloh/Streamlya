import React from 'react';
window.Streamly = window.Streamly || {};

(function () {

const { mobileNav } = window.Streamly.config;

function MobileNav({ activeCategory, onChooseCategory }) {
  return (
    <nav className="mobile-nav" aria-label="Мобільна навігація">
      {mobileNav.map((item) => {
        const Icon = item.icon;
        return (
          <button
            key={item.label}
            className={activeCategory === item.category ? 'active' : ''}
            onClick={() => onChooseCategory(item.category)}
          >
            <Icon size={20} />
            <span>{item.label}</span>
          </button>
        );
      })}
    </nav>
  );
}

window.Streamly.components = {
  ...(window.Streamly.components || {}),
  MobileNav,
};

})();

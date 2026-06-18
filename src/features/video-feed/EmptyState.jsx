import React from 'react';
window.Streamly = window.Streamly || {};

(function () {

const { Icons } = window.Streamly.shared;

function EmptyState({ title, text }) {
  return (
    <div className="empty-state">
      <Icons.MonitorPlay size={36} />
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  );
}

window.Streamly.components = {
  ...(window.Streamly.components || {}),
  EmptyState,
};

})();

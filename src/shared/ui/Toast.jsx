import React from 'react';
window.Streamly = window.Streamly || {};

(function () {



function Toast({ message }) {
  return message ? <div className="toast">{message}</div> : null;
}

window.Streamly.components = {
  ...(window.Streamly.components || {}),
  Toast,
};

})();

/** @jsx React.createElement */
window.Streamly = window.Streamly || {};

(function () {



function PageHeader({ title, subtitle }) {
  return (
    <section className="page-header">
      <h1>{title}</h1>
      {subtitle && <p>{subtitle}</p>}
    </section>
  );
}

window.Streamly.components = {
  ...(window.Streamly.components || {}),
  PageHeader,
};

})();

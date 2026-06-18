/** @jsx React.createElement */
window.Streamly = window.Streamly || {};

(function () {

const { PageHeader } = window.Streamly.components;

function SettingsView() {
  const options = [
    ['Автовідтворення', 'Увімкнено для відео, відкритих зі стрічки.'],
    ['Тема', 'Світла тема'],
    ['Мова', 'Українська'],
    ['Вбудований плеєр', 'YouTube iframe'],
  ];

  return (
    <section className="page-stack">
      <PageHeader title="Налаштування" subtitle="Параметри перегляду та вигляду інтерфейсу." />
      <div className="settings-list">
        {options.map(([title, value]) => (
          <button className="settings-row" key={title}>
            <span>{title}</span>
            <strong>{value}</strong>
          </button>
        ))}
      </div>
    </section>
  );
}
window.Streamly.components = {
  ...(window.Streamly.components || {}),
  SettingsView,
};

})();

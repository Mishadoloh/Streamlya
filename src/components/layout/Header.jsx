/** @jsx React.createElement */
window.Streamly = window.Streamly || {};

(function () {

const { Icons } = window.Streamly.shared;

function Header({ query, onQueryChange, onSearch, onVoiceSearch, onToggleSidebar, onHome, onOpenPanel }) {
  return (
    <header className="topbar">
      <div className="brand-group">
        <button className="icon-button" aria-label="Відкрити меню" onClick={onToggleSidebar}>
          <Icons.Menu size={22} />
        </button>
        <button className="brand" onClick={onHome} aria-label="Streamly home">
          <span className="brand-mark">
            <Icons.Play size={17} fill="currentColor" />
          </span>
          <span>Streamly</span>
        </button>
      </div>

      <form className="searchbar" onSubmit={onSearch}>
        <label className="sr-only" htmlFor="search">Пошук відео</label>
        <input
          id="search"
          value={query}
          onChange={(event) => onQueryChange(event.target.value)}
          placeholder="Пошук YouTube відео"
        />
        <button aria-label="Пошук">
          <Icons.Search size={19} />
        </button>
        <button className="voice-button" type="button" aria-label="Голосовий пошук" onClick={onVoiceSearch}>
          <Icons.Mic size={18} />
        </button>
      </form>

      <div className="top-actions">
        <button className="ghost-button" onClick={() => onOpenPanel('create')}>Створити</button>
        <button className="icon-button" aria-label="Сповіщення" onClick={() => onOpenPanel('notifications')}>
          <Icons.Bell size={20} />
        </button>
        <button className="profile-button" aria-label="Профіль" onClick={() => onOpenPanel('profile')}>
          <Icons.User size={18} />
        </button>
      </div>
    </header>
  );
}

window.Streamly.components = {
  ...(window.Streamly.components || {}),
  Header,
};

})();

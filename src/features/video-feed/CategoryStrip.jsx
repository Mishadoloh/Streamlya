import React from 'react';
window.Streamly = window.Streamly || {};

(function () {



function CategoryStrip({ categories, activeCategory, onChooseCategory }) {
  return (
    <section className="category-strip" aria-label="Категорії">
      {categories.map((category) => (
        <button
          className={activeCategory === category ? 'chip active' : 'chip'}
          key={category}
          onClick={() => onChooseCategory(category)}
        >
          {category}
        </button>
      ))}
    </section>
  );
}

window.Streamly.components = {
  ...(window.Streamly.components || {}),
  CategoryStrip,
};

})();

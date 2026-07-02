// Shop page — filter by type
const filterBtns = document.querySelectorAll('.filter-btn');
const shopCards = document.querySelectorAll('.shop-card');

if (filterBtns.length && shopCards.length) {
  const emptyState = document.querySelector('.empty-state');

  filterBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      filterBtns.forEach((b) => b.classList.remove('is-active'));
      btn.classList.add('is-active');

      const filter = btn.dataset.filter;
      let visibleCount = 0;

      shopCards.forEach((card) => {
        const matches = filter === 'all' || card.dataset.type === filter;
        card.hidden = !matches;
        if (matches) visibleCount++;
      });

      if (emptyState) emptyState.hidden = visibleCount > 0;
    });
  });
}

// Product page — gallery thumbnails
const galleryMain = document.getElementById('gallery-main');
const thumbs = document.querySelectorAll('.thumb');

if (galleryMain && thumbs.length) {
  thumbs.forEach((thumb) => {
    thumb.addEventListener('click', () => {
      thumbs.forEach((t) => t.classList.remove('is-active'));
      thumb.classList.add('is-active');

      const img = thumb.dataset.img;
      if (img) {
        galleryMain.innerHTML = `<img src="${img}" alt="Cherry beaded necklace">`;
      } else {
        const label = thumb.dataset.label || 'photo coming soon';
        galleryMain.innerHTML = `<div class="placeholder-photo"><span>${label}</span></div>`;
      }
    });
  });
}

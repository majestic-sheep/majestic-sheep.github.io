document.addEventListener('DOMContentLoaded', function () {
  const cards = Array.from(document.querySelectorAll('.card'));
  const modal = document.getElementById('modal');
  const modalOverlay = document.getElementById('modalOverlay');
  const modalClose = document.getElementById('modalClose');
  const modalTitle = document.getElementById('modalTitle');
  const modalDesc = document.getElementById('modalDesc');

    function openModal(title, htmlContent) {
    modalTitle.textContent = title || 'Details';
    modalDesc.innerHTML = htmlContent || '';
    modal.classList.remove('hidden');
    modal.setAttribute('aria-hidden', 'false');
    document.body.classList.add('modal-open'); // freeze background scroll
    modalClose.focus();
    }

    function closeModal() {
    modal.classList.add('hidden');
    modal.setAttribute('aria-hidden', 'true');
    modalDesc.innerHTML = '';
    document.body.classList.remove('modal-open'); // restore scroll
    }

  cards.forEach(card => {
    card.addEventListener('click', () => {
      const t = card.getAttribute('data-title') || card.querySelector('.name')?.textContent;
      const h = card.querySelector('.full-content')?.innerHTML || '';
      openModal(t, h);
    });

    const arrow = card.querySelector('.arrow');
    if (arrow) {
      arrow.addEventListener('click', ev => {
        ev.stopPropagation();
      });
    }

    card.setAttribute('tabindex', '0');
    card.addEventListener('keydown', ev => {
      if (ev.key === 'Enter' || ev.key === ' ') {
        ev.preventDefault();
        card.click();
      }
    });
  });

  modalOverlay.addEventListener('click', closeModal);
  modalClose.addEventListener('click', closeModal);

  document.addEventListener('keydown', ev => {
    if (ev.key === 'Escape' && !modal.classList.contains('hidden')) {
      closeModal();
    }
  });
});

function dropToggle(id, buttonImage) {
    let ele = document.getElementById(id)
    let img = document.getElementById(buttonImage)
    if (ele.style.display === "block") {
        ele.style.display = "none";
        img.style.transform = "rotate(90deg)";
    } else {
        ele.style.display = "block";
        img.style.transform = "rotate(180deg)";
    }
}
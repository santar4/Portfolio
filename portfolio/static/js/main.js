// --- Scroll reveal ---
(function () {
  var revealEls = document.querySelectorAll('.reveal');

  if (!revealEls.length) return;

  if (!('IntersectionObserver' in window)) {
    revealEls.forEach(function (el) { el.classList.add('in-view'); });
    return;
  }

  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
  );

  revealEls.forEach(function (el) { observer.observe(el); });
})();

// --- Mobile nav (burger) ---
(function () {
  var burger = document.getElementById('burger');
  var nav = document.getElementById('nav');

  if (!burger || !nav) return;

  burger.addEventListener('click', function () {
    var isOpen = document.body.classList.toggle('nav-open');
    burger.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });

  nav.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
      document.body.classList.remove('nav-open');
      burger.setAttribute('aria-expanded', 'false');
    });
  });
})();

// --- Footer year ---
(function () {
  var yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
})();

(function () {
  var form = document.getElementById('contactForm');
  if (!form) return;

  form.addEventListener('submit', async function (e) {
    e.preventDefault();

    var button = form.querySelector('button[type="submit"]');
    button.disabled = true;
    button.textContent = 'Надсилання...';

    var formData = new FormData(form);

    try {
      var response = await fetch('/contact/submit/', {
        method: 'POST',
        body: formData,
        headers: {
          'X-CSRFToken': document.querySelector('[name=csrfmiddlewaretoken]').value
        }
      });

      if (response.ok) {
        window.location.href = '/thanks/';
      } else {
        alert('Не вдалося надіслати повідомлення');
        button.disabled = false;
        button.textContent = 'Надіслати';
      }
    } catch (error) {
      alert('Помилка з’єднання');
      button.disabled = false;
      button.textContent = 'Надіслати';
    }
  });
})();
/* ===== Certificates ===== */
document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.cert-card');
  if (!cards.length) return;

  // Створюємо модальне вікно один раз
  const modal = document.createElement('div');
  modal.className = 'cert-modal';
  modal.innerHTML = `
    <div class="cert-modal__backdrop"></div>
    <div class="cert-modal__content">
      <button class="cert-modal__close" aria-label="Закрити">×</button>
      <img class="cert-modal__img" src="" alt="">
      <a class="cert-modal__pdf" href="#" target="_blank" rel="noopener" style="display:none">
        Відкрити PDF ↗
      </a>
    </div>
  `;
  document.body.appendChild(modal);

  const backdrop = modal.querySelector('.cert-modal__backdrop');
  const closeBtn = modal.querySelector('.cert-modal__close');
  const modalImg = modal.querySelector('.cert-modal__img');
  const modalPdf = modal.querySelector('.cert-modal__pdf');

  function openModal(imgSrc, pdfHref, title) {
    modalImg.src = imgSrc;
    modalImg.alt = title || 'Сертифікат';

    if (pdfHref) {
      modalPdf.href = pdfHref;
      modalPdf.style.display = 'inline-block';
    } else {
      modalPdf.style.display = 'none';
    }

    modal.classList.add('is-open');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    modal.classList.remove('is-open');
    document.body.style.overflow = '';
    // Очищаємо src, щоб не тримати велике зображення в пам'яті
    setTimeout(() => {
      modalImg.src = '';
    }, 300);
  }

  cards.forEach(card => {
    const img = card.querySelector('.cert-frame img');
    const link = card.querySelector('.cert-link');
    const title = card.querySelector('h3')?.textContent || '';

    if (!img) return;

    card.style.cursor = 'pointer';

    card.addEventListener('click', (e) => {
      // Якщо клікнули саме на посилання PDF — не відкриваємо модалку
      if (e.target.closest('.cert-link')) return;

      const pdfHref = link ? link.href : null;
      openModal(img.src, pdfHref, title);
    });
  });

  // Закриття
  closeBtn.addEventListener('click', closeModal);
  backdrop.addEventListener('click', closeModal);

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('is-open')) {
      closeModal();
    }
  });
});
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

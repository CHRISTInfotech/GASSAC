document.addEventListener('DOMContentLoaded', function () {
  const CONTACT_EMAIL = 'info@gassac.org';
  const form = document.querySelector('.contact-form');
  if (!form) return;
  form.addEventListener('submit', function (event) {
    event.preventDefault();
    const name = form.name.value;
    const email = form.email.value;
    const subject = form.subject.value;
    const message = form.message.value;
    const body = `Name: ${name}\nEmail: ${email}\n\n${message}`;
    const mailto = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
  });
});

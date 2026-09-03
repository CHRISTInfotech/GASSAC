document.addEventListener('DOMContentLoaded', function () {
  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();

  document.querySelectorAll('a[href="international-executive-members.html"]').forEach(function (link) {
    if (link.textContent.trim() === 'International Executive') {
      link.textContent = 'International Executive Members';
    }
  });
});

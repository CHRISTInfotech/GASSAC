const TEAM = [
  ['Dr. Tejaswini Patil', 'President'],
  ['Prof. Jagruti Patel', 'Vice President'],
  ['Dr. Ajabrao Ingle', 'Secretary'],
  ['Dr. Basavaraj Yallur', 'Joint Secretary'],
  ['Dr. Jyoti Wakode', 'Treasurer'],
  ['Dr. Sunil Shinde', 'Deputy Treasurer'],
  ['Dr. Diksha Kadam', 'Coordinator'],
  ['Dr. Sachin Chavan', 'Executive Member'],
  ['Dr. Savita Patil', 'Executive Member'],
  ['Dr. Gajanan Tayde', 'Executive Member'],
  ['Dr. Vibhuti Khedekar', 'Executive Member'],
  ['Dr. Chumki Biswas', 'Executive Member'],
  ['Dr. Ram Gaikwad', 'Executive Member'],
  ['Prof. Kalpesh Patkar', 'Executive Member'],
  ['Dr. Navodita Bhatt', 'Executive Member']
];

document.addEventListener('DOMContentLoaded', function () {
  const grid = document.getElementById('teamGrid');
  if (!grid) return;
  grid.innerHTML = TEAM.map(([name, role]) => `
    <div class="col-sm-6 col-lg-4">
      <article class="person-card">
        <div class="avatar">${name.charAt(0)}</div>
        <div>
          <h2>${name}</h2>
          <p>${role}</p>
        </div>
      </article>
    </div>
  `).join('');
});

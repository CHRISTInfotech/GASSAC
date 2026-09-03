const TEAM = [
  { name: 'Dr. Tejaswini Patil', role: 'President', image: 'Dr. Tejshwini Patil President.jpeg', email: '', phone: '' },
  { name: 'Prof. Jagruti Patel', role: 'Vice President', image: 'Prof. Jagruti Patel.. VICE PRESIDENT.jpeg', email: '', phone: '' },
  { name: 'Dr. Ajabrao Ingle', role: 'Secretary', image: 'Dr Ajabrao Ingle.jpg', email: 'gassac26@gmail.com', phone: '8408963675' },
  { name: 'Dr. Basavaraj Yallur', role: 'Joint Secretary', image: 'Prof.Basavaraj Yallur.jpeg', email: 'basavarajyallur7@gmail.com', phone: '9481742882' },
  { name: 'Dr. Jyoti Wakode', role: 'Treasurer', image: 'Dr. Jyoti Wakode Treasurer.jpeg', email: '', phone: '' },
  { name: 'Dr. Sunil Shinde', role: 'Deputy Treasurer', image: 'Dr. Sunil Eknath Shinde Executive Member.jpeg', email: '', phone: '' },
  { name: 'Dr. Diksha Kadam', role: 'Coordinator', image: 'Dr Diksha Kadam.jpg', email: 'deeks10@gmail.com', phone: '8149430876' },
  { name: 'Dr. Sachin Chavan', role: 'Executive Member', image: 'Dr. Sachin Chavhan Executive Member.jpeg', email: '', phone: '' },
  { name: 'Dr. Savita Patil', role: 'Executive Member', image: 'Dr. Savita Patil Executive Member.jpeg', email: '', phone: '' },
  { name: 'Dr. Gajanan Tayde', role: 'Executive Member', image: 'Dr. Gajanan Tayde Executive Member.jpeg', email: '', phone: '' },
  { name: 'Dr. Vibhuti Khedekar', role: 'Executive Member', image: 'Dr. Vibhuti Executive Member.jpeg', email: '', phone: '' },
  { name: 'Dr. Chumki Biswas', role: 'Executive Member', image: 'Dr.Chumki Biswas Executive Member.jpeg', email: '', phone: '' },
  { name: 'Dr. Ram Gaikwad', role: 'Executive Member', image: 'Dr. Ram Gaikwad Executive Member.jpeg', email: '', phone: '' },
  { name: 'Dr. Kalpesh Patkar', role: 'Executive Member', image: 'Prof. Kalpesh Patkar Executive Member.jpeg', email: '', phone: '' },
  { name: 'Dr. Navodita Bhatt', role: 'Executive Member', image: 'Dr. Navodita Bhatt Executive Member.jpeg', email: '', phone: '' },
  { name: 'Ms. Noirrita Priyadarshini', role: 'Executive Member', image: 'Noirrita Priyadarshini.jpeg', email: '', phone: '' }
];

const TEAM_IMAGE_PATH = 'assets/images/team/';
const FALLBACK_IMAGE = 'emptyuserimg.jpeg';

function contactLink(type, value, name) {
  const icon = type === 'email' ? 'bi-envelope' : 'bi-telephone';
  const label = type === 'email' ? `Email ${name}` : `Call ${name}`;
  if (!value) {
    return `<span class="team-contact-link unavailable" aria-label="${type} "><i class="bi ${icon}"></i><span></span></span>`;
  }
  const href = type === 'email' ? `mailto:${value}` : `tel:${value.replace(/\s/g, '')}`;
  return `<a class="team-contact-link" href="${href}" aria-label="${label}" title="${value}"><i class="bi ${icon}"></i><span>${value}</span></a>`;
}

document.addEventListener('DOMContentLoaded', function () {
  const grid = document.getElementById('teamGrid');
  if (!grid) return;

  grid.innerHTML = TEAM.map(member => {
    const image = member.image || FALLBACK_IMAGE;
    return `
      <div class="team-column">
        <article class="person-card">
          <img class="team-photo" src="${TEAM_IMAGE_PATH}${image}" alt="Portrait of ${member.name}" onerror="this.onerror=null;this.src='${TEAM_IMAGE_PATH}${FALLBACK_IMAGE}'">
          <h2>${member.name}</h2>
          <p>${member.role}</p>
          <div class="team-contact-links">
            ${contactLink('email', member.email, member.name)}
            ${contactLink('phone', member.phone, member.name)}
          </div>
        </article>
      </div>`;
  }).join('');
});

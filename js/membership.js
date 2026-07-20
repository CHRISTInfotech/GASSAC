const MEMBERSHIPS = {
  institutional: { frequency: 'One-time', fee: '₹11,000', name: 'Institutional member' },
  founder: { frequency: 'One-time', fee: '₹10,000', name: 'Founder member' },
  life: { frequency: 'One-time', fee: '₹5,000', name: 'Life member' },
  annual: { frequency: 'Per year', fee: '₹1,000', name: 'Annual member' },
  student: { frequency: 'Per year', fee: '₹500', name: 'Student member' },
  donor: { frequency: 'One-time', fee: '₹5,000', name: 'Donor member' },
  enthusiast: { frequency: 'Per year', fee: '₹200', name: 'Literary & social enthusiast' }
};

document.addEventListener('DOMContentLoaded', function () {
  const tableBody = document.getElementById('feeTableBody');
  if (!tableBody) return;
  tableBody.innerHTML = Object.values(MEMBERSHIPS).map(plan => `
    <tr>
      <td>${plan.name}</td>
      <td class="text-center">${plan.frequency}</td>
      <td class="text-end fw-bold">${plan.fee}</td>
    </tr>
  `).join('');
});

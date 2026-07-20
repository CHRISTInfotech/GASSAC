document.addEventListener('DOMContentLoaded', function () {
  const memberships = {
    institutional: { frequency: 'One-time', fee: '₹11,000', name: 'Institutional member' },
    founder: { frequency: 'One-time', fee: '₹10,000', name: 'Founder member' },
    life: { frequency: 'One-time', fee: '₹5,000', name: 'Life member' },
    annual: { frequency: 'Per year', fee: '₹1,000', name: 'Annual member' },
    student: { frequency: 'Per year', fee: '₹500', name: 'Student member' },
    donor: { frequency: 'One-time', fee: '₹5,000', name: 'Donor member' },
    enthusiast: { frequency: 'Per year', fee: '₹200', name: 'Literary & social enthusiast' }
  };
  const category = document.getElementById('memberCategory');
  const frequency = document.getElementById('memberFrequency');
  const result = document.getElementById('contributionResult');
  const emptyResult = '<div><i class="bi bi-wallet2 fs-2"></i><p class="mb-0 mt-2">Your contribution will appear here.</p></div>';
  category.addEventListener('change', function () {
    const plan = memberships[this.value];
    frequency.innerHTML = '<option value="">Choose frequency</option>';
    result.innerHTML = emptyResult;
    frequency.disabled = !plan;
    if (plan) frequency.insertAdjacentHTML('beforeend', `<option value="${plan.frequency}">${plan.frequency}</option>`);
  });
  frequency.addEventListener('change', function () {
    const plan = memberships[category.value];
    result.innerHTML = plan && this.value ? `<div><span class="small text-uppercase">${plan.name}</span><strong>${plan.fee}</strong><span>${plan.frequency}</span></div>` : emptyResult;
  });
});

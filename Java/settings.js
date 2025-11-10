
function ajustarTamanoCard() {
  const img = document.querySelector('.Info_Prueba img');
  const card = document.querySelector('.Info_Prueba .card');
  
  if (!img || !card) return;
  
  const w = img.getBoundingClientRect().width;
  card.style.width = Math.max(200, w / 2) + 'px';
}

document.addEventListener('DOMContentLoaded', () => {
  const img = document.querySelector('.Info_Prueba img');
  if (img) {
    img.addEventListener('load', ajustarTamanoCard);
    window.addEventListener('resize', ajustarTamanoCard);
    ajustarTamanoCard();
  }
});




(() => {
  'use strict';
  
  document.addEventListener('DOMContentLoaded', () => {
    const forms = document.querySelectorAll('.needs-validation');
    
    Array.from(forms).forEach(form => {
      form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }
        
        form.classList.add('was-validated');
      }, false);
    });
  });
})();

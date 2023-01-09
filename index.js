const prevBtn = document.querySelector('.arrow-button_prev');
const nextBtn = document.querySelector('.arrow-button_next');

prevBtn.addEventListener('click', (e) => changeSlide(e));
nextBtn.addEventListener('click', (e) => changeSlide(e));

function changeSlide(e) {
  const checkedRadio = document.querySelector('input:checked');
  return e.target.classList.contains('arrow-button_prev')
    ? (checkedRadio.previousElementSibling.checked = true)
    : (checkedRadio.nextElementSibling.checked = true);
}

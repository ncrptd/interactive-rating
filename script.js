let submitBtn = document.querySelector('.submit');
let submittedPage = document.querySelector('.submitted-page');
let submitPage = document.querySelector('.submit-page');
let ratingBox = document.querySelector('.rating-box');
let ratingScore = document.querySelector('.rating-score');
let rating;

function selectionFunc(target) {
  target.style.color = 'white';
  rating = target.innerText;
  let selected = ratingBox.querySelectorAll('.selected');
  for (let elem of selected) {
    elem.classList.remove('selected');
    console.log(elem);
  }
  target.classList.add('selected');
}

ratingBox.addEventListener('click', (event) => {
  let target = event.target.closest('.rating');
  if (!target) return;
  selectionFunc(target);
});

submitBtn.addEventListener('click', () => {
  if (!rating) return;
  submittedPage.style.display = 'block';
  submitPage.style.display = 'none';
  ratingScore.innerText = rating;
});

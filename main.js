let currentIndex = 1;
let backBtn = document.querySelector('.slider-control .back');
let nextBtn = document.querySelector('.slider-control .next');
let allImages = document.querySelector('.slider .images').children;
let imagesElement = document.querySelectorAll('.slider .images .image');
let imagesArray = Array.from(allImages);
let sliderNumbers = document.querySelector('.slider-numbers');
let currentTitle = document.querySelector('.slider-control .current');
imagesArray.forEach((img, index) => {
  let liNumber = document.createElement('li');
  liNumber.className = 'number';
  liNumber.setAttribute('index-number', index + 1)
  if (index === currentIndex-1) {
    liNumber.classList.add('active');
  }
  liNumber.innerHTML = index + 1;
  sliderNumbers.appendChild(liNumber);
})
let numberElement = document.querySelectorAll('.slider-numbers .number');
currentTitle.innerHTML = `#img ${currentIndex}/${imagesArray.length}`;
backBtn.onclick = goBack;
nextBtn.onclick = goNext;
numberElement.forEach(num => {
  num.addEventListener('click', () => goToNum(num))
})
function check() {
  imagesElement.forEach((img) => {
    img.classList.remove('active');
  });
  numberElement.forEach((num) => {
    num.classList.remove('active');
  })
  backBtn.classList.remove('disabled');
  nextBtn.classList.remove('disabled');
  currentTitle.innerHTML = `#img ${currentIndex}/${imagesArray.length}`;
  currentIndex <= 1 ? backBtn.classList.add('disabled') : '';
  currentIndex >= allImages.length ? nextBtn.classList.add('disabled') : '';
  allImages[currentIndex-1].classList.add('active');
  numberElement.forEach((num) => {
    num.getAttribute('index-number') == currentIndex ? num.classList.add('active') : '';
  })
}
function goBack() {
  currentIndex > 1 ? currentIndex-- : currentIndex ;
  check();
}
function goNext() {
  currentIndex < allImages.length ? currentIndex++ : nextBtn.classList.add('disabled');
  check();
}
function goToNum(num) {
  currentIndex = num.getAttribute('index-number');
  check();
}
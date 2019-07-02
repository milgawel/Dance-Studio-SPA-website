// #######    HEADER     #########

$('header').mousemove(function (e) {
  let moveX = (e.pageX * -0.5 / 15 - 25);
  let moveY = (e.pageY * -0.5 / 15 - 255);
  $(this).css('background-position', moveX + 'px ' + moveY + 'px')
})

// ##### FIXED NAVBAR #####

const body = document.body;
const element = document.getElementById("navBar");
const btnToTop = document.querySelector(".scrollToTopButton");

document.addEventListener("scroll", function () {
  let scrollAmt = window.pageYOffset || document.documentElement.scrollTop;
  if (window.innerHeight / 1.2 >= scrollAmt)
    element.style.display = "none";
  else
    element.style.display = "block";
});
document.addEventListener("scroll", function () {
  let scrollAmt = window.pageYOffset || document.documentElement.scrollTop;
  if (window.innerHeight / 2 >= scrollAmt)
    btnToTop.style.display = "none";
  else
    btnToTop.style.display = "block";
});

// ###########   NAVIGATION   #############

const button_aboutUs = document.querySelector('.button_aboutUs');
const button_schedule = document.querySelector('.button_schedule');
const button_prices = document.querySelector('.button_prices');
const button_contact = document.querySelector('.button_contact');
const button_signUp = document.querySelector('.button_signUp');
const scrollToTopButton = document.querySelector('.scrollToTopButton');

button_aboutUs.addEventListener('click', function scrollToElement() {
  window.scrollTo(0, 89 * window.innerHeight / 100);
});

button_schedule.addEventListener('click', function scrollToElement() {
  window.scrollTo(0, 195 * window.innerHeight / 100);
});

button_prices.addEventListener('click', function scrollToElement() {
  window.scrollTo(0, 296 * window.innerHeight / 100);
});

button_contact.addEventListener('click', function scrollToElement() {
  window.scrollTo(0, 396 * window.innerHeight / 100);
});

scrollToTopButton.addEventListener('click', function scrollToElement() {
  window.scrollTo(0, 0);
});

const navBar_button_aboutUs = document.querySelector('.navBar_button_aboutUs');
const navBar_button_schedule = document.querySelector('.navBar_button_schedule');
const navBar_button_prices = document.querySelector('.navBar_button_prices');
const navBar_button_contact = document.querySelector('.navBar_button_contact');
const navBar_button_signUp = document.querySelector('.navBar_button_signUp');

navBar_button_aboutUs.addEventListener('click', function scrollToElement(e) {
  window.scrollTo(0, 89 * window.innerHeight / 100);
  e.preventDefault();
});

navBar_button_schedule.addEventListener('click', function scrollToElement(e) {
  window.scrollTo(0, 195 * window.innerHeight / 100);
  e.preventDefault();
});

navBar_button_prices.addEventListener('click', function scrollToElement(e) {
  window.scrollTo(0, 296 * window.innerHeight / 100);
  e.preventDefault();
});

navBar_button_contact.addEventListener('click', function scrollToElement(e) {
  window.scrollTo(0, 396 * window.innerHeight / 100);
  e.preventDefault();
});

// ######### PRICE LIST #########

let object1 = $('#icon1');
let object2 = $('#icon2');
let object3 = $('#icon3');
let object4 = $('#icon4');
let object5 = $('#icon5');
let object6 = $('#icon6');
let object7 = $('#icon7');
let object8 = $('#icon8');

$('body').mousemove(function (e) {
  let valueX = (e.pageX * -0.5 / 15 + 15);
  let valueY = (e.pageY * -0.5 / 15 + 100);
  object1.css({
    'transform': 'translate3d(' + valueX + 'px,' + valueY + 'px,0) rotate(20deg)'
  });
});

$('body').mousemove(function (e) {
  let valueX = (e.pageX * -0.5 / 15 + 25);
  let valueY = (e.pageY * -0.51 / 100);

  object2.css({
    'transform': 'translate3d(' + valueX + 'px,' + valueY + 'px,0) rotate(20deg)'
  });
});

$('body').mousemove(function (e) {
  let valueX = (e.pageX * 0.5 / -15 + 30);
  let valueY = (e.pageY * 0.5 / -5 + 250);
  object3.css({
    'transform': 'translate3d(' + valueX + 'px,' + valueY + 'px,0) rotate(20deg)'
  });
});

$('body').mousemove(function (e) {
  let valueX = (e.pageX * -0.5 / 25 + 50);
  let valueY = (e.pageY * -0.5 / 25 + 50);
  object4.css({
    'transform': 'translate3d(' + valueX + 'px,' + valueY + 'px,0) rotate(20deg)'
  });
});

$('body').mousemove(function (e) {
  let valueX = (e.pageX * -0.5 / -25 - 40);
  let valueY = (e.pageY * -0.5 / -25 - 50);

  object5.css({
    'transform': 'translate3d(' + valueX + 'px,' + valueY + 'px,0) rotate(20deg)'
  });
});

$('body').mousemove(function (e) {
  let valueX = (e.pageX * -0.5 / -35 - 20);
  let valueY = (e.pageY * -0.5 / -35 - 40);

  object6.css({
    'transform': 'translate3d(' + valueX + 'px,' + valueY + 'px,0) rotate(20deg)'
  });
});

$('body').mousemove(function (e) {
  let valueX = (e.pageX * -0.5 / 15);
  let valueY = (e.pageY * -0.5 / 15 + 70);

  object7.css({
    'transform': 'translate3d(' + valueX + 'px,' + valueY + 'px,0) rotate(20deg)'
  });
});

$('body').mousemove(function (e) {
  let valueX = (e.pageX * -0.5 / -10 - 70);
  let valueY = (e.pageY * -0.5 / -10 - 80);

  object8.css({
    'transform': 'translate3d(' + valueX + 'px,' + valueY + 'px,0) rotate(20deg)'
  });
});

// ########   CONTACT PAGE    #########

function initMap() {
  const studio = {
    lat: 50.075605,
    lng: 20.035321
  };
  let map = new google.maps.Map(
    document.getElementById('map'), {
      zoom: 14,
      center: studio
    });
  var marker = new google.maps.Marker({
    position: studio,
    map: map
  });
}
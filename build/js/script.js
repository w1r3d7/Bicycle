'use strict';
var mainNav = document.querySelector('.nav');
var headerToggle = mainNav.querySelector('.nav__toggle');

mainNav.classList.remove('nav--nojs');

headerToggle.addEventListener('click', function () {
  if (mainNav.classList.contains('nav--closed')) {
    mainNav.classList.remove('nav--closed');
    mainNav.classList.add('nav--opened');
  } else {
    mainNav.classList.add('nav--closed');
    mainNav.classList.remove('nav--opened');
  }
});

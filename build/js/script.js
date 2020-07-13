'use strict';
(function () {
  var mainNav = document.querySelector('.nav');
  var headerToggle = mainNav.querySelector('.nav__toggle');

  var navList = mainNav.querySelector('.nav__list');
  var navLinks = navList.querySelectorAll('a');

  var replaceClasses = function (element, addClass, removeClass) {
    element.classList.add(addClass);
    element.classList.remove(removeClass);
  };

  navLinks.forEach(function (it) {
    it.addEventListener('click', function () {
      if (mainNav.classList.contains('nav--opened')) {
        replaceClasses(mainNav, 'nav--closed', 'nav--opened');
      }
    });
  });

  mainNav.classList.remove('nav--nojs');

  headerToggle.addEventListener('click', function () {
    if (mainNav.classList.contains('nav--closed')) {
      replaceClasses(mainNav, 'nav--opened', 'nav--closed');
    } else {
      replaceClasses(mainNav, 'nav--closed', 'nav--opened');
    }
  });
})();

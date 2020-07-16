'use strict';
(function () {
  var mainNav = document.querySelector('.nav');
  var headerToggle = mainNav.querySelector('.nav__toggle');

  var navList = mainNav.querySelector('.nav__list');
  var navLinks = navList.querySelectorAll('a');

  mainNav.classList.remove('nav--nojs');

  var replaceClasses = function (element, addClass, removeClass) {
    element.classList.add(addClass);
    element.classList.remove(removeClass);
  };

  var onClickLink = function () {
    if (mainNav.classList.contains('nav--opened')) {
      replaceClasses(mainNav, 'nav--closed', 'nav--opened');
    }
  }

  for (var i = 0; i < navLinks.length; i++) {
    navLinks[i].addEventListener('click', onClickLink);
  }



  headerToggle.addEventListener('click', function () {
    if (mainNav.classList.contains('nav--closed')) {
      replaceClasses(mainNav, 'nav--opened', 'nav--closed');
    } else {
      replaceClasses(mainNav, 'nav--closed', 'nav--opened');
    }
  });
})();

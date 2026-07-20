/* ============================================================
   FINDOR — Shared behaviors (navbar, footer year, mobile drawer)
   Vanilla JS + jQuery (jQuery digunakan untuk beberapa micro-interaction)
   ============================================================ */

$(function () {
  /* --- Navbar scroll shadow --- */
  $(window).on('scroll', function () {
    if ($(window).scrollTop() > 20) {
      $('.fn-pill').addClass('scrolled');
      $('.fn-nav-wrapper').addClass('scrolled');
    } else {
      $('.fn-pill').removeClass('scrolled');
      $('.fn-nav-wrapper').removeClass('scrolled');
    }
  });

  /* --- Mobile drawer toggle --- */
  $('#fnToggle').on('click', function () {
    const isOpen = $('#fnDrawerWrap').hasClass('open');
    if (isOpen) {
      closeDrawer();
    } else {
      openDrawer();
    }
  });

  function openDrawer() {
    $('#fnDrawerWrap').addClass('open');
    $('#fnBackdrop').addClass('open');
    $('#fnToggleIconMenu').hide();
    $('#fnToggleIconClose').show();
    $('body').css('overflow', 'hidden');
  }
  function closeDrawer() {
    $('#fnDrawerWrap').removeClass('open');
    $('#fnBackdrop').removeClass('open');
    $('#fnToggleIconMenu').show();
    $('#fnToggleIconClose').hide();
    $('body').css('overflow', '');
  }
  $('#fnBackdrop').on('click', closeDrawer);
  $('.fn-m-link, .fn-m-cta, .fn-m-login').on('click', closeDrawer);
  $(document).on('keydown', function (e) {
    if (e.key === 'Escape') closeDrawer();
  });

  /* --- Mark active nav link based on current page --- */
  const path = window.location.pathname.split('/').pop() || 'index.html';
  $('.fn-link, .fn-m-link').each(function () {
    const href = $(this).attr('href');
    if (href === path) $(this).addClass('active');
  });
});

/* --- Helper: build WhatsApp deep link --- */
function findorWaLink(number, message) {
  const clean = (number || '').replace(/[^0-9]/g, '');
  return `https://wa.me/${clean}?text=${encodeURIComponent(message || '')}`;
}

/* --- Helper: read query params --- */
function findorQueryParams() {
  return Object.fromEntries(new URLSearchParams(window.location.search));
}

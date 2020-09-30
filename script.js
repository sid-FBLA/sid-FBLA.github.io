window.addEventListener('DOMContentLoaded', (event) => {
  //Navbar Show On Scroll Up, Remove On Scroll Down
  // add padding top to show content behind navbar
  $('body').css('padding-top', $('.navbar').outerHeight() + 'px')

  // detect scroll top or down
  if ($('.smart-scroll').length > 0) { // check if element exists
    var last_scroll_top = 0;
    $(window).on('scroll', function() {
        scroll_top = $(this).scrollTop();
        if(scroll_top < last_scroll_top) {
            $('.smart-scroll').removeClass('scrolled-down').addClass('scrolled-up');
        }
        else {
            $('.smart-scroll').removeClass('scrolled-up').addClass('scrolled-down');
        }
        last_scroll_top = scroll_top;
    });
  }

  //Dyanmic footer

  const body = document.querySelector('body');
  const wrapper = document.querySelector('.wrapper');
  const footer = document.querySelector('.footer');
  console.log(wrapper);

  let footerHeight = footer.offsetHeight;
  let vh = window.innerHeight;
  console.log(footerHeight);
  console.log(vh);

  let wrapperHeight = vh-footerHeight;
  wrapper.style.minHeight = wrapperHeight + 'px';

  console.log(wrapperHeight);
  console.log(wrapper.offsetHeight);

});

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

  //Enable Tooltips
  $(function () {
    $('[data-toggle="tooltip"]').tooltip()
  });

  //Enable Modals
  $('#myModal').on('shown.bs.modal', function () {
    $('#myInput').trigger('focus')
  });

  //Getting modal video to stop playing on "hide"
  $('.modal').on('hidden.bs.modal', function(e) {
    var $iframes = $(e.target).find('iframe');
    $iframes.each(function(index, iframe){
      $(iframe).attr('src', $(iframe).attr('src'));
    });
  });

  //Next Modal Button
  let modalList = document.querySelectorAll('.modal');
  let modalNextButtonList = document.querySelectorAll('.modal .next-modal');

  //Loops through array of Modals and Modal Next Buttons
  for(let i = 0; i < modalNextButtonList.length; i += 1) {
    let modalNextButton = modalNextButtonList[i];
    modalNextButton.addEventListener('click', function() {
      //Gets ID of current and next modal
      let currentModalID = modalList[i].id;
      let nextModalID = modalList[i + 1].id;
      //Hides Current Modal, selects via ID
      $('#' + currentModalID).modal('hide');
      //Shows Next Modal, selects via ID
      $('#' + nextModalID).modal('show');
    });
  }

});

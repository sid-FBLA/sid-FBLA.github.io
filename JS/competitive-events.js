window.addEventListener('DOMContentLoaded', (event) => {
//function setAttributes()

const srcList = new Array();

  function createTopic(parentID, modalID, title, src, description, badge, badgeSrc) {
    //creating src list array
    const srcListPairs = new Array();
    srcListPairs.push(modalID);
    srcListPairs.push(src);
    srcList.push(srcListPairs)
    //creating list item indentation is to describe DOM Appearance
    const parent = document.querySelector('#' + parentID);
    const ul = parent.firstElementChild;
    const li = document.createElement('LI');
    li.classList.add('list-group-item');
    ul.appendChild(li);
      const liA = document.createElement('A');
      liA.classList.add('topic', 'topic-red','topic-play', 'topic-play-red');
      liA.setAttribute('data-toggle', 'modal');
      liA.setAttribute('data-target', '#' + modalID);
      li.appendChild(liA);
        const liDiv = document.createElement('DIV');
        liDiv.classList.add('d-inline-flex', 'align-items-center');
        liA.appendChild(liDiv);
          const liI = document.createElement('I');
          liI.classList.add('far', 'fa-play-circle', 'play-red');
          liDiv.appendChild(liI);
          const liP = document.createElement('P');
          liP.innerHTML = title;
          liDiv.appendChild(liP);
    //Creating Modal For li
    const div0 = document.createElement('DIV');
    div0.classList.add('modal', 'fade');
    div0.setAttribute('id', modalID);
    div0.setAttribute('tabindex', '-1');
    div0.setAttribute('role', 'dialog');
    div0.setAttribute('aria-labelledby', 'exampleModalCenterTitle');
    div0.setAttribute('aria-hidden', 'true');
    ul.appendChild(div0);
      const div1 = document.createElement('DIV');
      div1.classList.add('modal-dialog', 'modal-dialog-centered', 'modal-xl');
      div1.setAttribute('role', 'document');
      div0.appendChild(div1);
        const div2 = document.createElement('DIV');
        div2.classList.add('modal-content');
        div1.appendChild(div2);
          const div3 = document.createElement('DIV');
          div3.classList.add('modal-header');
          div2.appendChild(div3);
            const div0H5 = document.createElement('H5');
            div0H5.classList.add('modal-title', 'w-100', 'text-center');
            div0H5.innerHTML = title;
            div3.appendChild(div0H5);
            const div0Button = document.createElement('BUTTON');
            div0Button.classList.add('close');
            div0Button.setAttribute('type', 'button');
            div0Button.setAttribute('data-dismiss', 'modal');
            div0Button.setAttribute('aria-label', 'Close');
            div3.appendChild(div0Button);
              const div0Span = document.createElement('SPAN');
              div0Span.setAttribute('aria-hidden', 'true');
              div0Span.innerHTML = '&times;';
              div0Button.appendChild(div0Span);
          const divBody = document.createElement('DIV');
          divBody.classList.add('modal-body', 'embed-responsive', 'embed-responsive-16by9');
          div2.appendChild(divBody);
            const divBodyIframe = document.createElement('IFRAME');
            //Loads YT Video Only When clicked, reduces load time this is done below
            divBody.appendChild(divBodyIframe);
            //Only loads modal video when modal is pressed
            document.addEventListener('click', function() {
              //SetTimeout Function gives time for class change
              setTimeout(function() {
                const modal = document.querySelectorAll('.modal');
                for (let i = 0; i < modal.length; i += 1) {
                  if (modal[i].classList.contains('show')) {
                    //gets modalID of the modal w/ class 'show'
                    const modalID = modal[i].id;
                    let modalIDindex;
                    //searches in array for index of this modal
                    for (let i = 0; i < srcList.length; i += 1) {
                      if (srcList[i][0] === modalID) {
                        modalIDindex = i;
                      }
                    };
                    const src = srcList[modalIDindex][1];
                    const divBodyIframe = document.querySelectorAll('.modal iframe');
                    divBodyIframe[i].classList.add('modal-video', 'embed-responsive-item');
                    divBodyIframe[i].setAttribute('src', 'https://www.youtube.com/embed/' + src);
                    divBodyIframe[i].setAttribute('allowfullscreen', '');
                  }
                };
              }, 250)
            });
          const divFooter = document.createElement('DIV');
          divFooter.classList.add('modal-footer');
          div2.appendChild(divFooter);
            const divFooterP = document.createElement('P');
            divFooterP.classList.add('description', 'w-100');
            divFooterP.innerHTML = description;
            divFooter.appendChild(divFooterP);
            const divFooterButtonPrev = document.createElement('BUTTON');
            divFooterButtonPrev.setAttribute('type', 'button');
            divFooterButtonPrev.classList.add('btn', 'btn-secondary', 'prev-modal');
            divFooterButtonPrev.setAttribute('data-dismiss', 'modal');
            divFooterButtonPrev.innerHTML = 'Previous Video';
            divFooter.appendChild(divFooterButtonPrev);
            const divFooterButtonNext = document.createElement('BUTTON');
            divFooterButtonNext.setAttribute('type', 'button');
            divFooterButtonNext.classList.add('btn', 'btn-primary', 'next-modal');
            divFooterButtonNext.innerHTML = 'Next Video';
            divFooter.appendChild(divFooterButtonNext);
            console.log(srcList);
            if (badge === "quizlet") {
              const quizletBadge = document.createElement('A');
              quizletBadge.setAttribute('target', '_blank');
              quizletBadge.setAttribute('href', badgeSrc);
              quizletBadge.classList.add('badge', 'badge-primary', 'ml-1', 'mt-n2');
              quizletBadge.innerHTML = 'Quizlet';
              li.appendChild(quizletBadge);
            } else {
            };
  };

  //A-G
  createTopic('A-G', 'modal1', 'How To Win FBLA Introduction To Financial Math',
  'MY_8HY6Al68', 'Arthur Zhang - FBLA SLC Introduction To Financial Math 3rd Place <br>' +
  'This video has been made by Arthur Zhang who placed 3rd in the State Leadership Conference for FBLA Introduction To Financial Math');

  //H-N
  createTopic('H-N', 'modal2', 'How To Win FBLA Introduction To Business Communications',
  'BppvEJGbOXI', 'Jeffrey Xu - FBLA SLC Introduction To Business Communications Champion(FBLA)',
  'Jeffrey Xu - FBLA SLC Introduction To Business Communications Champion(FBLA)',
  'This video has been made by Jeffrey Xu the State Leadership Conference Champion for Introduction To Business Communications');

  //O-T
  createTopic('O-T', 'modal3', 'How To Win FBLA Sales Presentation',
  '_7ZOU8KYmDY', 'Holden Baris - FBLA SLC Sales Presentation Champion(FBLA) <br>' +
  'This video has been made by Holden Baris the State Leadership Conference Champion for Sales Presentation');

  createTopic('O-T', 'modal3a', 'How To Create A Sales Presentation',
  '6IuFrP5aZBA', 'Holden Baris - FBLA SLC Sales Presentation Champion(FBLA) <br>' +
  'This video has been made by Holden Baris the State Leadership Conference Champion for Sales Presentation');

  createTopic('O-T', 'modal3b', 'How To Present A Sales Presentation',
  'LzVMjOrmduA', 'Holden Baris - FBLA SLC Sales Presentation Champion(FBLA) <br>' +
  'This video has been made by Holden Baris the State Leadership Conference Champion for Sales Presentation');

  createTopic('O-T', 'modal4', 'How To Win FBLA Social Media Campaign',
  '5JmcPlqX8IE', 'Matthew Zhang - FBLA SLC Social Media Campaign 3rd Place(FBLA) <br>' +
  'This video has been made by Matthew Zhang who placed 3rd in the State Leadership Conference for FBLA Social Social Media Campaign');

  //U-Z

});

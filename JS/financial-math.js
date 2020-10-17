//DO NOT WAIT FOR DOM CONTENT TO LOAD
//function setAttributes()

function createTopic(parentID, modalID, title, src, description) {
  //creating list item indentation is to describe DOM Appearance
  const parent = document.querySelector('#' + parentID);
  const ul = document.createElement('UL');
  ul.classList.add('list-group', 'list-group-flush');
  parent.appendChild(ul);
  const li = document.createElement('LI');
  li.classList.add('list-group-item');
  ul.appendChild(li);
    const liA = document.createElement('A');
    liA.classList.add('topic', 'topic-blue', 'topic-play');
    liA.setAttribute('data-toggle', 'modal');
    liA.setAttribute('data-target', '#' + modalID);
    li.appendChild(liA);
      const liDiv = document.createElement('DIV');
      liDiv.classList.add('d-inline-flex', 'align-items-center');
      liA.appendChild(liDiv);
        const liI = document.createElement('I');
        liI.classList.add('far', 'fa-play-circle');
        liDiv.appendChild(liI);
        const liP = document.createElement('P');
        liP.innerHTML = title;
        liDiv.appendChild(liP);
  console.log(li);
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
          divBodyIframe.classList.add('modal-video', 'embed-responsive-item');
          divBodyIframe.setAttribute('src', 'https://www.youtube.com/embed/' + src);
          divBody.appendChild(divBodyIframe);
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
          divFooterButtonPrev.innerHTML = 'Previous Video';
          divFooter.appendChild(divFooterButtonPrev);
          const divFooterButtonNext = document.createElement('BUTTON');
          divFooterButtonNext.setAttribute('type', 'button');
          divFooterButtonNext.classList.add('btn', 'btn-primary', 'next-modal');
          divFooterButtonNext.innerHTML = 'Next Video';
          divFooter.appendChild(divFooterButtonPrev);
  console.log(ul);
};

createTopic('consumerCredit', 'modal23', 'Using the Average Daily Balance Method',
'OldVg3gVJmQ', 'Siddharth Pandey - Founder(FBLA)');

//Work for tommorow, get the content explained with the HTML, explain what the JS is "saying" in HTML

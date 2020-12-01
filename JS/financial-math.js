window.addEventListener('DOMContentLoaded', (event) => {
//function setAttributes()

const srcList = new Array();

  function createTopic(parentID, modalID, title, src, description, badge, badgeSrc) {
    /*TO DO:
    -Create DOM Description
    */
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
      liA.classList.add('topic', 'topic-blue','topic-play', 'topic-play-blue');
      liA.setAttribute('data-toggle', 'modal');
      liA.setAttribute('data-target', '#' + modalID);
      li.appendChild(liA);
        const liDiv = document.createElement('DIV');
        liDiv.classList.add('d-inline-flex', 'align-items-center');
        liA.appendChild(liDiv);
          const liI = document.createElement('I');
          liI.classList.add('far', 'fa-play-circle', 'play-blue');
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
            //Only loads modal video when modal is pressed, set on every click event
            document.addEventListener('click', function() {
              //SetTimeout Function gives time for class change
              setTimeout(function() {
                const modal = document.querySelectorAll('.modal');
                for (let i = 0; i < modal.length; i += 1) {
                  if (modal[i].classList.contains('show')) {
                    //gets modalID of the modal w/ class 'show' defined here for scope
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

  //Basic Math Concepts (For Financial Math)
  createTopic('basicMathConcepts', 'modal1', 'Calculating Wage After Taxes',
  'Mt4NoACfIBg', 'Siddharth Pandey - Founder(FBLA)');

  createTopic('basicMathConcepts', 'modal2', 'Developing A Budget',
  'v87cP1JAFME', 'Siddharth Pandey - Founder(FBLA) <br>' +
  'Answers: Radio-3750, Print Advertising-6750, Trade Shows-4500, Conventions-15000, Catalogs & Brochures-10500, Online Advertising-6000');

  createTopic('basicMathConcepts', 'modal3', 'Balancing A Checkbook',
  'Qx8JWF54wW4', 'Siddharth Pandey - Founder(FBLA)');

  createTopic('basicMathConcepts', 'modal4', 'Analyzing Problems For Missing/Irrelevant Data (Video Needed)',
  '', 'Siddharth Pandey - Founder(FBLA)');

  createTopic('basicMathConcepts', 'modal5', 'Identifying Business Math Terms',
  'KLjFXKSPdNw', 'Shreya Pandey - Content Creator(FBLA)', 'quizlet', 'https://quizlet.com/_8velyn?x=1jqt&i=37cj5h');

  createTopic('basicMathConcepts', 'modal6', 'Applying Relational Operations In A Logical Expression',
  '-TP7_nZqeZg', 'Siddharth Pandey - Founder(FBLA)');

  createTopic('basicMathConcepts', 'modal7', 'Applying Relational Operations In A Logical Expression (1 Variable)',
  'lg7hgFYnDjE', 'Siddharth Pandey - Founder(FBLA)');

  createTopic('basicMathConcepts', 'modal8', 'Applying Relational Operations In A Logical Expression (2 Variables)',
  'y0O0qIfgzeY', 'Siddharth Pandey - Founder(FBLA)');

  createTopic('basicMathConcepts', 'modal9', 'Constructing And Drawing Figures With Given Perimeters And Areas',
  'Tmc1nUErBAQ', 'Siddharth Pandey - Founder(FBLA)');

  createTopic('basicMathConcepts', 'modal10', 'Interpreting Scale Drawings',
  'kvCF0ISk-6c', 'Siddharth Pandey - Founder(FBLA)');

  //Consumer Credit
  createTopic('consumerCredit', 'modal11', 'Defining Credit And Credit Terms',
  'N08GPv3d9G0', 'Shreya Pandey - Content Creator(FBLA)');

  createTopic('consumerCredit', 'modal12', 'Identifying Costs And Benefits Of Various Types Of Credit - Revolving Credit',
  'Rm4h0CmNnzM', 'Siddharth Pandey - Founder(FBLA)');

  createTopic('consumerCredit', 'modal13', 'Identifying Costs And Benefits Of Various Types Of Credit - Installment And Open Credit',
  'GtPNcwhpPAQ', 'Siddharth Pandey - Founder(FBLA)');

  createTopic('consumerCredit', 'modal14', 'Calculating Sales Tax On Purchase',
  'afvU_vquh28', 'Shreya Pandey - Member of BME(FBLA)');

  createTopic('consumerCredit', 'modal14a', 'Calculating Sales Tax',
  'QwSNEVBGZgc', 'Siddharth Pandey - Founder(FBLA) <br>' +
  '0:18 - Sid says "Our final price is equal to cost*sales tax. "' +
  'Sid means cost*(1+sales tax) as the sales tax is being added to the initial cost.' +
  "He often uses 'x' to refer to sales tax. Whenever he says a number*x is the sales tax he means a number*(1+x) is the sales tax." +
  'This is somewhat cleared up towards the end of the video.');

  createTopic('consumerCredit', 'modal15', 'Computing Total Purchase Price With Interest Added',
  'uF4xXDA79FU', 'Siddharth Pandey - Founder(FBLA)');

  //Costs Of Owning An AutoMobile
  createTopic('consumerCredit', 'modal16', 'Computing The Costs Of Owning An Automobile',
  '736x_a3Ti2U', 'Shreya Pandey - Member of BME(FBLA)');

  createTopic('consumerCredit', 'modal17', 'Computing Finance Charge From Single Payment Loan',
  'cHUBiu-v0pI', 'Siddharth Pandey - Founder(FBLA)');

  createTopic('consumerCredit', 'modal18', 'Comparing Installment And Revolving Credit Costs (Part 1)',
  'W2r8sivG_pM', 'Kevin Li - Competed In Introduction To Financial Math At State Level(FBLA) <br>' +
  'This is a two-part video which ends abruptly. <br>' +
  'Important Note: Interest on installment and revolving credit are paid on the outstanding principal.' +
  ' For example, if $5000 was borrowed, with an interest of 5%/month and $500 was paid back each month then after the first month (5000*1.05) - 500,' +
  ' would be owed, the subsequent month (4750*1.05) - 500, would be owed and so on, so forth.');

  createTopic('consumerCredit', 'modal19', 'Comparing Installment And Revolving Credit Costs (Part 2)',
  'tgZ_PDCDQa0', 'Kevin Li - Competed In Introduction To Financial Math At State Level(FBLA) <br>' +
  'This is a two-part video which ends abruptly. <br>' +
  'Important Note: Interest on installment and revolving credit are paid on the outstanding principal.' +
  ' For example, if $5000 was borrowed, with an interest of 5%/month and $500 was paid back each month then after the first month (5000*1.05) - 500,' +
  ' would be owed, the subsequent month (4750*1.05) - 500, would be owed and so on, so forth.');

  createTopic('consumerCredit', 'modal20', 'Calculating Installment Loan Costs (Part 1)',
  'miCsQM7nS1U', 'Siddharth Pandey - Founder(FBLA)');

  createTopic('consumerCredit', 'modal21', 'Calculating Installment Loan Costs (Part 2)',
  '_JfBwiqCcqs', 'Siddharth Pandey - Founder(FBLA)');

  createTopic('consumerCredit', 'modal22', 'Finding Estimated APR Using A Table',
  '6obQtnpwZkI', 'Siddharth Pandey - Founder(FBLA)');

  createTopic('consumerCredit', 'modal23', 'Using the Average Daily Balance Method',
  'OldVg3gVJmQ', 'Siddharth Pandey - Founder(FBLA)');

  //Data Analysis And Probability
  createTopic('dataAnalysisAndProbability', 'modal24', 'Using A Data Set To Determine Mean, Median And Mode',
  'pfLnTMSBEww', 'Siddharth Pandey - Founder(FBLA)');

  createTopic('dataAnalysisAndProbability', 'modal25', 'Determining Which Average Best Represents Central Tendency',
  'hhMMPNDof2A', "Siddharth Pandey - Founder(FBLA) <br>" +
  " 1:07 Siddharth says moved to the left but meant to say moved to the right.");

  createTopic('dataAnalysisAndProbability', 'modal26', 'Distinguishing Simple And Weighted Averages and Calculating Each',
  '0GI5jmNCuRo', 'Siddharth Pandey - Founder(FBLA)');

  createTopic('dataAnalysisAndProbability', 'modal27', 'Constructing A Line Graph',
  'Om70qTqVUK0', "Siddharth Pandey - Founder(FBLA) <br>" +
  " This graph should be given a title: Annual Revenue From 2010-2016");

  createTopic('dataAnalysisAndProbability', 'modal28', 'Constructing A Bar Graph',
  'JTwga1D52oo', 'Siddharth Pandey - Founder(FBLA)');

  createTopic('dataAnalysisAndProbability', 'modal29', 'Constructing A Histogram (Part 1)',
  'm-GdSyyLmMI', 'Siddharth Pandey - Founder(FBLA)');

  createTopic('dataAnalysisAndProbability', 'modal30', 'Constructing A Histogram (Part 2)',
  'xmeqvlNZWcc', 'Siddharth Pandey - Founder(FBLA)');

  createTopic('dataAnalysisAndProbability', 'modal31', 'Constructing A Pie Chart (Part 1)',
  'xmUFrblltyk', 'Siddharth Pandey - Founder(FBLA) <br>' +
  'This video ends abruptly because of our five-minute video cap, take a look at part 2 for closure');

  createTopic('dataAnalysisAndProbability', 'modal32', 'Construcing A Pie Chart (Part 2)',
  'q4htEiHss-I', 'Siddharth Pandey - Founder(FBLA) <br>' +
  'This video ends abruptly because of our five-minute video cap. Thanks For Watching!');

  //Written Summary Of Findings In Tables Charts, etc...

  createTopic('dataAnalysisAndProbability', 'modal33', 'Interpreting And Making Predictions From A Graph',
  'fkMWwsi70Fw', 'Siddharth Pandey - Founder(FBLA)');


  //Discounts

  createTopic('discounts', 'modal34', 'Identifying Various Types Of Discounts (Video Needed)',
  '', 'Siddharth Pandey - Founder(FBLA)');

  createTopic('discounts', 'modal35', 'Calculating Percent Discount',
  'KvXCy8bfbnU', 'Siddharth Pandey - Founder(FBLA)');

  createTopic('discounts', 'modal36', 'Calculating Cash Discounts And Net Selling Price',
  'aK3OXABa6v0', 'Siddharth Pandey - Founder(FBLA)');

  createTopic('discounts', 'modal37', 'Calculating Chain Discounts And Net Selling Price',
  'vQMRbpjFSpY', 'Siddharth Pandey - Founder(FBLA)');

  createTopic('discounts', 'modal38', 'Calculating Trade Discounts And Net Selling Price',
  'dFK4Bnv8rVE', 'Siddharth Pandey - Founder(FBLA)');

  //Percentages
  createTopic('percentages', 'modal39', 'Identifying Base, Rate And Percentage',
  'MDwc986NJuQ', 'Siddharth Pandey - Founder(FBLA) <br>' +
  '0:57, Siddharth said "2" but meant to say "5"');

  createTopic('percentages', 'modal40', 'Percentage "Formula" Explanation',
  'WLAJUVevZxQ', 'Siddharth Pandey - Founder(FBLA) <br>' +
  'Terminology: <br>' +
  'The variable we are solving for (we called this "w" in the proof) -- Base <br>' +
  'The percentage (we called this the "%" in the proof) -- Rate <br>' +
  'The first number shown (we called this the "#" in the proof) -- Part(Percentage, Portion)');

  createTopic('percentages', 'modal41', 'Solving For Base, Rate And Percentage',
  'ivRUKfmm9FI', 'Siddharth Pandey - Founder(FBLA) <br>' +
  '0:54 Siddharth says "times by r over r" but means "times by r"');

  createTopic('percentages', 'modal42', 'Calculating The Rate Or Base Of Increase Or Decrease Of An Item',
  'VVNRvN74gfI', 'Siddharth Pandey - Founder(FBLA) <br>');

  createTopic('percentages', 'modal43', 'Calculating The Markup Or Markdown Of An Item',
  '5_YlPFRdZ0g', 'Siddharth Pandey - Founder(FBLA) <br>');

  createTopic('percentages', 'modal44', 'Currency Conversion(Taken from "decimals" portion of FBLA requirement)',
  '-3JLwNxjVV8', 'Siddharth Pandey - Founder(FBLA) <br>');

  //Interest

  createTopic('interest', 'modal45', 'Introducing Interest',
  'fUyma1oAYG0', 'Siddharth Pandey - Founder(FBLA)')

  createTopic('interest', 'modal46', 'Calculating Simple Interest',
  'Ih17PKUsQiU', 'Siddharth Pandey - Founder(FBLA) <br>');

  createTopic('interest', 'modal46a', 'Simple Interest "Formulas"',
  'SicaUXce6-A', 'Siddharth Pandey - Founder(FBLA) <br>');

  createTopic('interest', 'modal47', 'Introducing Compounding',
  '2qz3hbdbEgk', 'Siddharth Pandey - Founder(FBLA) <br>' +
  'Simple Interest = $731 -- we gain 200% interest on our principle amount every day.' +
  ' This means that we gain an additional $2 every day for 365 days + our initial first dollar.');

  createTopic('interest', 'modal48', 'Calculating Compound Interest',
  'N6qBBmiMLD0', 'Siddharth Pandey - Founder(FBLA) <br>' +
  '1:30 - Sid writes 1.05/12 = 1.0175, what he means is 1 + 0.05/12 = 1.0175,' +
  ' this number represents the change in value from month to month.' +
  'Note: This video includes a small mistake and description has been changed look on the YT description.');

  createTopic('interest', 'modal49', 'Explaining Compound Interest Equation',
  'Llcy5tQG6Ks', 'Siddharth Pandey - Founder(FBLA) <br>');

  createTopic('interest', 'modal50', 'APR VS APY',
  'ikV9t99gkN8', 'Siddharth Pandey - Founder(FBLA) <br>' +
  '3:43 - 3:48 Siddharth says "This percent is not the same as this percent over here."' +
  ' His pen cursor is not showing up for some reason. He is comparing the APY percent to the APR percent.');

  //Practice Test
  createTopic('practiceTest', 'modal51', 'Introduction To Financial Math Practice Test #1 (Part 1)',
  'jghlJqkMdOQ', 'Siddharth Pandey - Founder(FBLA) <br>' +
  'Feel free to look to our YouTube channel for additional practice test content');

  createTopic('practiceTest', 'modal52', 'Introduction To Financial Math Practice Test #1 (Part 2)',
  'a1Xw670Phzc', 'Siddharth Pandey - Founder(FBLA)');

  createTopic('practiceTest', 'modal53', 'Introduction To Financial Math Practice Test #1 (Part 3)',
  '5sTopCjhHfw', 'Siddharth Pandey - Founder(FBLA)');

  createTopic('practiceTest', 'modal54', 'Introduction To Financial Math Practice Test #1 (Part 4)',
  'QZ3jvmGIkjI', 'Siddharth Pandey - Founder(FBLA)');

  createTopic('practiceTest', 'modal55', 'Introduction To Financial Math Practice Test #1 (Part 5)',
  'Qzsy3DKr_P8', 'Siddharth Pandey - Founder(FBLA)');

  createTopic('practiceTest', 'modal56', 'Business Calculations Practice Test #1 (Part 1)',
  'VtWbNJCo8EE', 'Siddharth Pandey - Founder(FBLA)');

  createTopic('practiceTest', 'modal57', 'Business Calculations Practice Test #1 (Part 2)',
  'LJhMokvi7ms', 'Siddharth Pandey - Founder(FBLA)');

  createTopic('practiceTest', 'modal58', 'Business Calculations Practice Test #1 (Part 3)',
  'Hd5A6opVXcI', 'Siddharth Pandey - Founder(FBLA)');

  createTopic('practiceTest', 'modal59', 'Business Calculations Practice Test #1 (Part 4)',
  'BD9OcyTO-vE', 'Siddharth Pandey - Founder(FBLA)');



//Work for tommorow, get the content explained with the HTML, explain what the JS is "saying" in HTML

});

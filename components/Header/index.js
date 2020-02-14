// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

function Header() {

const header = document.createElement('div');
const date = document.createElement('span');
const title = document.createElement('h1');
const temp = document.createElement('span');
//end created elements

date.textContent = "MARCH 28, 2019";
title.textContent = "Lambda Times";
temp.textContent = '98°';
//end textContent

header.classList.add('header');
date.classList.add('span');
temp.classList.add('temp');
//end class lists



header.append(date, title, temp);
headerContainer.append(header);
//end append children

return header;

}
const headerContainer = document.querySelector('.header-container');
headerContainer.append(Header());
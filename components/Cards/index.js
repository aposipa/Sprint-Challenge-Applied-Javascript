// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

axios.get('https://lambda-times-backend.herokuapp.com/articles')
    .then(response => {
        console.log(response.data.articles);
        response.data.articles.javascript.forEach(item =>{
            cardsContainer.append(Articles(item))
            
})

response.data.articles.bootstrap.forEach(item =>{
    cardsContainer.append(Articles(item))
    
})
response.data.articles.technology.forEach(item =>{
    cardsContainer.append(Articles(item))
    
})

response.data.articles.jquery.forEach(item =>{
    cardsContainer.append(Articles(item))
    
})
response.data.articles.node.forEach(item =>{
    cardsContainer.append(Articles(item))
    
})

})


function Articles(object) {

const card = document.createElement('div');
const headline = document.createElement('div');
const authorTitle = document.createElement('div');
const imgContainer = document.createElement('div');
const img = document.createElement('img');
const authorName = document.createElement('span');
//end create element

card.append(headline, authorTitle);
authorTitle.append(imgContainer, authorName);
imgContainer.append(img);
//end appending children

card.classList.add('card');
headline.classList.add('headline');
authorTitle.classList.add('author');
imgContainer.classList.add('img-container');
//end create class

headline.textContent = 'Headline: ' + object.headline;
img.src = object.authorPhoto;
authorName.textContent = 'By: ' + object.authorName;

return card;
}
const cardsContainer = document.querySelector('.cards-container');
// cardsContainer.append(Articles());




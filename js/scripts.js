let employees = [];
const gallery = document.querySelector('.gallery')
const body = document.querySelector('body');
//Fetches random user api list and parses it into json format
// fetch(url)
//   .then(response => response.json())
//   .then(data => displayData(data.results))

$.ajax({
  url: 'https://randomuser.me/api/?results=12&nat=us',
  dataType: 'json',
  success: function(data) {
    displayData(data.results)
    // displayModal(data.results)
  }
});
const card = document.querySelectorAll('.card');
console.log(card)

// const button = event.target;
// closeBtn.addEventListener('click', //remove modal popup)
// let card = document.getElementsByTagName('div .card')

// let closeBtn = document.createElement('BUTTON')
// closeBtn.setAttribute('id','modal-close-btn')
// const modal = document.createElement('div');
// modal.setAttribute('class', 'modal-container')
// console.log(modal)

// let closeBtn = document.querySelector('#modal-close-btn');
card.addEventListener('click', function(){
  console.log('test')
})

// ---------------------------------------------
//                  FUNCTIONS
// ---------------------------------------------
// function getEmployees(response){
//   let employees = response;
//   console.log(employees)
//   return employees
// }

function displayData(data){
data.map(function(person){
   const html = `<div class="card">
        <div class="card-img-container">
            <img class="card-img" src="${person.picture.large}" alt="profile picture">
        </div>
        <div class="card-info-container">
            <h3 id="name" class="card-name cap">${person.name.first} ${person.name.last}</h3>
            <p class="card-text">${person.email}</p>
            <p class="card-text cap">${person.location.city}, ${person.location.state}</p>
        </div>
    </div>
    `;
    gallery.innerHTML += html;
    // $('gallery').append(html);
  });
};

function displayModal(data){
  data.map(function(person){
  const dob = new Date(person.dob.date)
  body.innerHTML = `
    <div class="modal-container">
      <div class="modal">
          <button type="button" id="modal-close-btn" class="modal-close-btn"><strong>X</strong></button>
          <div class="modal-info-container">
              <img class="modal-img" src="${person.picture.large}" alt="profile picture">
              <h3 id="name" class="modal-name cap">${person.name.first} ${person.name.last}</h3>
              <p class="modal-text">${person.email}</p>
              <p class="modal-text cap"> ${person.location.city}, ${person.location.state}</p>
              <hr>
              <p class="modal-text">${person.cell}</p>
              <p class="modal-text">${person.location.street} ${person.location.postcode}</p>
              <p class="modal-text">Birthday: ${dob.toLocaleDateString('en-us')}</p>
          </div>
      </div>`
  })
}

// closeBtn.addEventListener('click', function(){
// modal.style.display = 'none'
// console.log('test')
// })

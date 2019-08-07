const url = 'https://randomuser.me/api/?results=12'
const gallery = document.querySelector('.gallery')
const name = document.getElementById('name');
var results;
fetch(url)
  .then(response => response.json())
  .then(data => displayData(data.results))
  // .then(data => loopData(data.results))

// ---------------------------------------------
//                  FUNCTIONS
// ---------------------------------------------

// function loopData(data){
//   for (let i=0;i<=11;i++)
//   {
//     displayData(data.results[i]);
//     console.log(data.results[i])
//
//   }
// };
function displayData(data){
data.map(function(person){
  gallery.innerHTML = `<div class="card">
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
  })
  // })
};

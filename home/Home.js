// "headers: {
//     "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTI5MDRkOTEzOWM0MzAwMTg4MTQ1Y2MiLCJpYXQiOjE2OTcxODcwMzMsImV4cCI6MTY5ODM5NjYzM30.jQeZjSLOSXbeA8HSVXTn67pk4stEkalEpQoUHeQYh0w"
//     }"

// const Card= function (manga) {
//      const rowan=document.getElementById("mangashy")

//      manga.forEach((anime) => {

//         const colonna=document.createElement("div")

//         colonna.classList.add('col', 'col-12', 'col-sm-6', 'col-md-3')

//         colonna.innerHTML = `
//           <div class="card">
//             <img src="${anime.imageUrl}" class="card-img-top" alt="">
//            <div class="card-body">
//             <h5 class="card-title">${anime.name}</h5>
//             <p  class="card-text">${anime.description}</p>
//             <p  class="card-text">${anime.brand}</p>
//             <p  class="card-text">Costa:"${anime.price}€</p>"
//            </div>
//           </div>
//           `
//         rowan.appendChild(colonna)
//     })
// }



// const Home=function () {
//     fetch("https://striveschool-api.herokuapp.com/api/product/",{
//         headers:{
//             "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTI5MDRkOTEzOWM0MzAwMTg4MTQ1Y2MiLCJpYXQiOjE2OTcxODgzOTYsImV4cCI6MTY5ODM5Nzk5Nn0.1WqZardy76HvpAQTSGumix_YUXaoYB_l39CiOZlLg0A"
//         }
//     })

//     .then((response)=>{
//         if (response.ok) {
            
//             Card()
//         }else{
//             console.log("si è verificato un errore")
//         }
//     })

    
//     .catch((err)=>{
//          console.log("ecco l'errore",err)
//     })
// }
// Home()


const deleteCard = document.querySelectorAll('.btn-danger ');


deleteCard.forEach(button => {
  button.addEventListener('click', () => {
    
      const card = button.parentElement;
      
      card.remove();
  });
});


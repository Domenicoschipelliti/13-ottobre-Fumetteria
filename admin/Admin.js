const pubblica=document.getElementById("button")

pubblica.addEventListener("submit",function(e){
 e.preventDefault()
 

  const nameOut = document.getElementById('namein')

  const description = document.getElementById('description')

  const priceOut = document.getElementById('price')

  const ImageUrl = document.getElementById('imageUrl')

  const marchio=document.getElementById("brand")


 const insiemi={
    name: nameOut.value ,
    description:description.value ,
    price:priceOut.value ,
    imageUrl:ImageUrl.value,
    brand:marchio.value

   

    

 }

 fetch("https://striveschool-api.herokuapp.com/api/product/",{

 method: 'POST',

 body:JSON.stringify(insiemi),

 headers:{
     "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTI5MDRkOTEzOWM0MzAwMTg4MTQ1Y2MiLCJpYXQiOjE2OTcxODgzOTYsImV4cCI6MTY5ODM5Nzk5Nn0.1WqZardy76HvpAQTSGumix_YUXaoYB_l39CiOZlLg0A",
 'Content-Type': 'application/json'
 },
})

.then((resp)=>{
 if (resp.ok) {
    
     
    alert("Fummetto Pubblicato")
    return resp.json()
    
 }else{
     console.log("Errore nella pubblicazione")
    
 }
})


.catch((err)=>{
  console.log("ecco l'errore",err)
  })
 })
 

 




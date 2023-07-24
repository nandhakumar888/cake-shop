const nextButton = document.getElementById("next-button");

nextButton.addEventListener("click", () => {
  window.location.href = "index.html";
});

const nextPage = document.getElementById("next-page");

nextPage.addEventListener("click", () => {
  window.location.href = "seeoneverything.html";
});

const nextStory = document.getElementById("next-story");

nextStory.addEventListener("click", () => {
  window.location.href = "mystory.html";
});

const nextContact = document.getElementById("next-contact");

nextContact.addEventListener("click", () => {
  window.location.href = "contact.html";
});

const nextCake = document.getElementById("next-cake");

nextCake.addEventListener("click", () => {
  window.location.href = "cakes.html";
});

const nextPastry = document.getElementById("next-pastry");

nextPastry.addEventListener("click", () => {
  window.location.href = "cakesandpastry.html";
});

const nextSee = document.getElementById("next-see");

nextSee.addEventListener("click", () => {
  window.location.href = "seeoneverything.html";
});

// const product = [
//     {
//         id : 0,
//         Image: 'image/Rectangle 5(1).png',
//         title: 'Choco Hugz',
//         price: 200,
//     },
//     {
//         id : 1,
//         Image: 'image/Rectangle 5.png',
//         title: 'Choco Hugz',
//         price: 200,
//     },
//     {
//         id : 0,
//         Image: 'image/Rectangle 5(1).png',
//         title: 'Choco Hugz',
//         price: 200,
//     },
//     {
//         id : 0,
//         Image: 'image/Rectangle 5(1).png',
//         title: 'Choco Hugz',
//         price: 200,
//     },
//     {
//         id : 0,
//         Image: 'image/Rectangle 5(1).png',
//         title: 'Choco Hugz',
//         price: 200,
//     },
// ];

// const categories = [...new Set(product.map((item)=>{return item}))]

//         let i=0;
//         document.getElementById('root').innerHTML = categories.map((item)=>
//         {
//             var {image, title, price} = item;
//             return(
//                 `<div class="box">
//                 <div class='img-box'>
//                 <img class='images' src=${image}></img>
//                 </div>
//                 <div class='bottom'>
//                 <p>${title}</p>
//                 <h2>${price}.00</h2>`
//                 + "<button onClick='addtocart("+(i++)+")'>Add to cart</button>  "
// +   `</div>
// </div>`            )
//         }).join('');

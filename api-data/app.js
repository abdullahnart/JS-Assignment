// let promise = new Promise((resolve,reject)=>{
//     console.log("status");
//     // resolve("hogya");
//     reject("hi nowa");  
// });

// // promise.then((res)=>{
// //     console.log(res);
// // })

// promise.catch((err)=>{
//     console.log(err);
// })
// console.log(promise);

let box = document.getElementById("box");
let loader = document.getElementById("loader");
// let btn = document.querySelector("button");
function getData(){
    console.log("sa");
    fetch('https://fakestoreapi.com/products')
    .then((res)=>{
        return res.json();
    })
    .then((data)=>{
        console.log(data[0]);
        cardData(data);
    })
    .catch((err)=>{
        console.log(err);
    })

}
// btn.addEventListener("click",getData);
getData();

function cardData(data){
    const {category,description,id,image,price,title} = data;
    data.forEach((item)=>{
        box.innerHTML += 
        `<div class="col hp">
<div class="card h-100 shadow-sm">
    <img src="${item.image}" class="card-img-top" alt="product.title" />

  <div class="label-top shadow-sm">
    <a class="text-white" target="_blank" href="#">${item.category}</a>
  </div>
  <div class="card-body">
    <div class="clearfix mb-3">
      <span class="float-start badge rounded-pill bg-success">$${item.price}</span>

      <span class="float-end"><a href="#" class="small text-muted text-uppercase aff-link">${item.rating.rate}</a></span>
    </div>
    <h5 class="card-title">
      <a target="_blank" href="#">${item.title.slice(0,50)}</a>
    </h5>
    <p class="card-text">${item.description.slice(0,100)}..</p>

    <div class="d-grid gap-2 my-4">

      <a href="#" class="btn btn-warning bold-btn">add to cart</a>

    </div>
  </div>
</div>
</div>`;
    })
    
}


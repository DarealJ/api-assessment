const apiUrl = "https://fakestoreapi.com/products"

let image1 = document.querySelector(".img1");
let cont1 =document.querySelector(".cont1")
let name1 =document.querySelector("#name1")
let price1 = document.querySelector("#price1")
let descript1 = document.querySelector("#descript1") 
let image2 = document.querySelector(".img2");
let cont2 =document.querySelector(".cont2")
let name2 =document.querySelector("#name2")
let price2 = document.querySelector("#price2")
let descript2 = document.querySelector("#descript2") 


async function myProduct() {
    const response = await fetch(apiUrl);

    let data = await response.json();
    // cont1.innerHTML = data


    image1.src = "data[0].image"
    name1.innerHTML = data[0].title
    price1.innerHTML = "Price:" + "$" + data[0].price
    descript1.innerHTML = "Description:" + data[0].description

    image2.src = "data[0].image"
    name2.innerHTML = data[1].title
    price2.innerHTML = "Price:" + "$" + data[0].price
    descript2.innerHTML = "Description:" + data[0].description

    console.log(data);
    console.log(data[0].image);
}

myProduct()
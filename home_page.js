
// const pro_details1=[
//     {id:"img8",
//     img:"photos/d8.jpg",
//     name:"Apple iPhone 13 (128GB) - Starlight",
//     price: 41999
//     },
//     {
//         id:"img9",
//     img:"photos/d9.jpg",
//     name:"iQOO Z9x 5G (Tornado Green, 6GB RAM, 128GB Storage) | Snapdragon 6 Gen 1 with 560k+ AnTuTu Score | 6000mAh Battery with 7.99mm Slim Design | 44W FlashCharge",
//     price: 41999
//     },
//     {
//         id:"img10",
//     img:"photos/d10.jpg",
//     name:"iQOO Z9x 5G (Tornado Green, 6GB RAM, 128GB Storage) | Snapdragon 6 Gen 1 with 560k+ AnTuTu Score | 6000mAh Battery with 7.99mm Slim Design | 44W FlashCharge",
//     price: 41999
//     },
//     {
//         id:"img11",
//     img:"photos/d11.jpg",
//     name:"iQOO Z9x 5G (Tornado Green, 6GB RAM, 128GB Storage) | Snapdragon 6 Gen 1 with 560k+ AnTuTu Score | 6000mAh Battery with 7.99mm Slim Design | 44W FlashCharge",
//     price: 41999
//     },
//     {
//         id:"img12",
//     img:"photos/d12.jpg",
//     name:"iQOO Z9x 5G (Tornado Green, 6GB RAM, 128GB Storage) | Snapdragon 6 Gen 1 with 560k+ AnTuTu Score | 6000mAh Battery with 7.99mm Slim Design | 44W FlashCharge",
//     price: 41999
//     },
//     {
//         id:"img13",
//     img:"photos/d13.jpg",
//     name:"iQOO Z9x 5G (Tornado Green, 6GB RAM, 128GB Storage) | Snapdragon 6 Gen 1 with 560k+ AnTuTu Score | 6000mAh Battery with 7.99mm Slim Design | 44W FlashCharge",
//     price: 41999
//     },
//     {
//         id:"img14",
//     img:"photos/d14.jpg",
//     name:"iQOO Z9x 5G (Tornado Green, 6GB RAM, 128GB Storage) | Snapdragon 6 Gen 1 with 560k+ AnTuTu Score | 6000mAh Battery with 7.99mm Slim Design | 44W FlashCharge",
//     price: 41999
//     }
    

// ]
// const pro_details2={
//     img1:{id:"img1",
//     img:"photos/d1.jpg",
//     name:"Apple iPhone 13 (128GB) - Starlight",
//     price: 41999
//     },
//     img2:{
//         id:"img2",
//     img:"photos/d2.jpg",
//     name:"iQOO Z9x 5G (Tornado Green, 6GB RAM, 128GB Storage) | Snapdragon 6 Gen 1 with 560k+ AnTuTu Score | 6000mAh Battery with 7.99mm Slim Design | 44W FlashCharge",
//     price: 41999
//     },
//     img3:{
//         id:"img3",
//     img:"photos/d3.jpg",
//     name:"iQOO Z9x 5G (Tornado Green, 6GB RAM, 128GB Storage) | Snapdragon 6 Gen 1 with 560k+ AnTuTu Score | 6000mAh Battery with 7.99mm Slim Design | 44W FlashCharge",
//     price: 41999
//     },
//     img4:{
//         id:"img4",
//     img:"photos/d4.jpg",
//     name:"iQOO Z9x 5G (Tornado Green, 6GB RAM, 128GB Storage) | Snapdragon 6 Gen 1 with 560k+ AnTuTu Score | 6000mAh Battery with 7.99mm Slim Design | 44W FlashCharge",
//     price: 41999
//     },
//     img5:{
//         id:"img5",
//     img:"photos/d5.jpg",
//     name:"iQOO Z9x 5G (Tornado Green, 6GB RAM, 128GB Storage) | Snapdragon 6 Gen 1 with 560k+ AnTuTu Score | 6000mAh Battery with 7.99mm Slim Design | 44W FlashCharge",
//     price: 41999
//     },
//     img6:{
//         id:"img6",
//     img:"photos/d6.jpg",
//     name:"iQOO Z9x 5G (Tornado Green, 6GB RAM, 128GB Storage) | Snapdragon 6 Gen 1 with 560k+ AnTuTu Score | 6000mAh Battery with 7.99mm Slim Design | 44W FlashCharge",
//     price: 41999
//     },
//     img7:{
//         id:"img7",
//     img:"photos/d7.jpg",
//     name:"iQOO Z9x 5G (Tornado Green, 6GB RAM, 128GB Storage) | Snapdragon 6 Gen 1 with 560k+ AnTuTu Score | 6000mAh Battery with 7.99mm Slim Design | 44W FlashCharge",
//     price: 41999
//     }
    

// }
// /*
// let b_count=1;
// document.querySelector('.bodi').innerHTML=`<img class="add" src="photos/temp${b_count}.jpg">`;
// setInterval(()=>{
//     document.querySelector('.bodi').innerHTML=`<img class="add" src="photos/temp${b_count}.jpg">`;
//     if(b_count===7){
//         b_count=1;
//     }
//     else{
//         b_count++;
//     }
// },5000);
// */




// let firsthtml="";
// Object.values(pro_details1).forEach((item)=>{
//     firsthtml+=``
// })
// document.querySelector(".products").innerHTML=firsthtml;

// let secondhtml="";
// Object.values(pro_details2).forEach((item)=>{
//     secondhtml +=``
// }
// )
// document.querySelector('.second-row-of-items').innerHTML=secondhtml;
// document.querySelector(".cart-count-num").innerHTML=0;
// let cart_count=1;

// const addcartbuttons=document.querySelectorAll('.add-to-cart-button');
// addcartbuttons.forEach(button=>{
//     button.addEventListener('click',()=>{
//         document.querySelector('.cart-count-num').innerHTML=cart_count;
//         cart_count++;
//     })
// })
/*
let cart_items="";
addcartbuttons.forEach(item=>{
    item.addEventListener('click',()=>{
        const det=item.dataset.productId;
        Object.values(pro_details1).forEach(prod=>{
            if(prod.id===det){
                cart_items +=`<div class="maincart">
        <div class="img1">
       
            <img class="cart-img" src="${prod.img}">
        </div>
        <div class="pro-det">
            <div class="pro-name">${prod.name}

        </div>
        <div class="stock-button">In stock</div>
        <div class="elig-button">Eligible for FREE Shipping</div>
        <div class="price-text">
            <div style="font-weight: bolder; font-size: 20px;">Price:</div>
            <div style="font-size: 17px;margin-left: 7px; font-weight: bold;color: #b12704; font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;">&#8377;${prod.price}</div>
        </div>
        <div class="quen-button-div"><button class="qty-button">Qty: 1</button></div>
    </div>
    </div>`
            }
        })
        
    })
})
    */

/*const addcart=document.querySelectorAll('.add-to-cart-button');
addcart.forEach(button=>{
    button.addEventListener('click',()=>{
        let link=button.dataset.productId;
        Object.values(pro_details1).forEach(pro=>{
            if(pro.id === link){
                cart_items.push(pro)
            }
        })
        
    })
    
})*/


function printsearch(){
    
    document.querySelector(".searchbar").value="";
}
function check_enter(){
    if(event.key==="Enter"){
        printsearch();
    }
}
function signed(){
    var dropdown = document.querySelector(".js-signin");
    if(dropdown.style.display==="block"){
        dropdown.style.display="none";
    }
    else{
        dropdown.style.display="block";
    }
}


let images = [
    "static/d_photos/temp1.jpg",
    "static/d_photos/temp2.jpg",
    "static/d_photos/temp3.jpg",

    "static/d_photos/temp4.jpg",
    "static/d_photos/temp5.jpg",
    "static/d_photos/temp6.jpg",
    "static/d_photos/temp7.jpg"
];

let index = 0;

function changeImage() {
    index = (index + 1) % images.length;
    document.getElementById("changingImage").src = images[index];
}

setInterval(changeImage, 10000);
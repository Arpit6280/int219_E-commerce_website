$(document).ready(function(){

    $('#search, .fa-search').mouseenter(function(){
        $('.logo').hide();
    });

    $('#search, .fa-search').mouseleave(function(){
        $('.logo').show();
    });

    $('.fa-bars').click(function(){
        $('.navbar').toggle();
        $(this).toggleClass('fa-times');
    });

    $('.navbar, .navbar a').click(function(){
        $('.navbar').hide();
        $('.fa-bars').removeClass('fa-times');
    });

    $(window).on('scroll load',function(){

        if($(window).scrollTop() > 20){
            $('#header').css({
                'background':'#EB4D4B',
                'box-shadow':'0 .1rem .3rem #000'
            });
        }else{
            $('#header').css({
                'background':'#333',
                'box-shadow':'none'
            });
        }

    });

    $('.home-slider').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        items:1,
        autoplay:true
    });

    $('.product-slider').owlCarousel({
        loop:true,
        nav:true,
        items:3,
        autoplay:true,
        center:true,
        responsive:{
            0:{
                items:1,
                nav:true
            },
            600:{
                items:2
            },
            1000:{
                items:3
            }
        }
    });

    $('.review-slider').owlCarousel({
        loop:true,
        nav:true,
        items:1,
        autoplay:true
    });

    $('.brand-slider').owlCarousel({
        loop:true,
        items:4,
        nav:false,
        dots:false,
        autoplay:true,
        responsive:{
            0:{
                items:1
            },
            400:{
                items:2
            },
            550:{
                items:3
            },
            1000:{
                items:4
            }
        }
    });

});



let carts= document.querySelectorAll('a button');

let products= [
    {
        name:"Adidas Shoe",
        tag:"shoe31",
        price:600,
        incart:0
    },
    {
        name:"Women cloth",
        tag:"cloth1",
        price:1300,
        incart:0
    },
    {
        name:"Apple watch",
        tag:"watch41",
        price:5500,
        incart:0
    },

    //  shoes
    
    {
        name:"Asian sports shoe",
        tag:"shoe1",
        price:550,
        incart:0
    },
    {
        name:"Allen Cooper",
        tag:"shoe2",
        price:450,
        incart:0
    },
    {
        name:"Sparx Running Shoe",
        tag:"shoe3",
        price:650,
        incart:0
    },
    {
        name:"Bata Formal Shoe",
        tag:"shoe4",
        price:950,
        incart:0
    },
    {
        name:"Tassel Formal Shoe",
        tag:"shoe5",
        price:1450,
        incart:0
    },


    //Watches start
    
    {
        name:"Timex analog",
        tag:"watch1",
        price:4550,
        incart:0
    },
    {
        name:"Time Wear Analog",
        tag:"watch2",
        price:450,
        incart:0
    },
    {
        name:"GOQii",
        tag:"watch3",
        price:4650,
        incart:0
    },
    {
        name:"Casio Edifice",
        tag:"watch42",
        price:27550,
        incart:0
    },


    // shirts

    {
        name:"Sherwani set",
        tag:"shirt1",
        price:2550,
        incart:0
    },
    {
        name:"EyeBogler",
        tag:"shirt2",
        price:450,
        incart:0
    },
    {
        name:"Urbano T-shirt",
        tag:"shirt3",
        price:650,
        incart:0
    },
    {
        name:"Hooded Jacket",
        tag:"shirt4",
        price:1550,
        incart:0
    },


    //Women's cloths

    {
        name:"Cloth1",
        tag:"cloth1",
        price:750,
        incart:0
    },
    {
        name:"Cloth2",
        tag:"cloth2",
        price:850,
        incart:0
    },
    {
        name:"Cloth3",
        tag:"cloth3",
        price:650,
        incart:0
    },
    {
        name:"Cloth4",
        tag:"cloth41",
        price:850,
        incart:0
    },
    {
        name:"Cloth5",
        tag:"cloth5",
        price:850,
        incart:0
    },
 
    // smartphones

    {
        name:"Xiaomi 11 Lite",
        tag:"phone1",
        price:25550,
        incart:0
    },
    {
        name:"MotoRola G 60",
        tag:"phone2",
        price:18450,
        incart:0
    },
    {
        name:"Oppo A55",
        tag:"phone3",
        price:15650,
        incart:0
    },
    {
        name:"OnePlus 9R 5G",
        tag:"phone4",
        price:35550,
        incart:0
    },
    {
        name:"iphone 12 pro",
        tag:"phone5",
        price:102900,
        incart:0
    },
    {
        name:"Never Settle",
        tag:"smartphone",
        price:8000,
        incart:0
    }

];

for(let i=0;i<carts.length;++i) {

    //console.log("my loop");
    carts[i].addEventListener('click',()=>{
        //console.log("added to cart",products[i]);
        cartNumbers(products[i]);
        totalCost(products[i]);
    })
}




function onLoadCartNumbers(){
    let productNumbers= localStorage.getItem('cartNumbers');
    if(productNumbers){
        document.querySelector('.left span').textContent=  productNumbers;
    }
}




function cartNumbers(product){
   // console.log("the product clicked is", product);
    let productNumbers=localStorage.getItem('cartNumbers');

    productNumbers=parseInt(productNumbers);

    if(productNumbers){
        localStorage.setItem('cartNumbers', productNumbers + 1);
        document.querySelector('.left span').textContent=  productNumbers + 1;
    }
    else {
        localStorage.setItem('cartNumbers',1);
        document.querySelector('.left span').textContent=1;
    }
    
    setItems(product);
}

function setItems(product)
{
   // console.log("Inside of set items functions");
    //console.log("the product clicked is", product);
    
    let cartItems = localStorage.getItem('productsInCart');
    cartItems=JSON.parse(cartItems);

    if(cartItems != null){
        if(cartItems[product.tag] == undefined) {
            cartItems = {
                ...cartItems,
                [product.tag]:product
            }
        }
        cartItems[product.tag].incart += 1;
    }
    else{

        product.incart=1;
        cartItems={
            [product.tag]: product
        }
    }
    
    /*product.incart=1;
     cartItems={
        [product.tag]:product
    }
    */
    localStorage.setItem("productsInCart", JSON.stringify(cartItems));
}

 function totalCost(product){

    //console.log("the product price is ", product.price);
    let cartCost= localStorage.getItem('totalCost');
    
    console.log("My cartCost is ",cartCost);
    console.log(typeof cartCost);

    if(cartCost != null){
        cartCost= parseInt(cartCost);
        localStorage.setItem("totalCost",cartCost + product.price);
    }
    else{
        localStorage.setItem("totalCost",product.price);
    }

  
 }


 function displayCart(){
     let cartItems=localStorage.getItem("productsInCart");
     cartItems=JSON.parse(cartItems);
     let productContainer= document.querySelector(".products");
     let cartCost= localStorage.getItem('totalCost');
    
     console.log(cartItems);
     if(cartItems && productContainer){
         productContainer.innerHTML = '';
         Object.values(cartItems).map(item=>{
             productContainer.innerHTML +=` 
             <div class="product">
                   <ion-icon name="close-circle"></ion-icon>
                   <img src="./images/${item.tag}.png">
                   <span>${item.name}</span>
                   </div>
                   <div class="prices">${item.price}</div>
                   <div class="quantity">
                  
                   <span>${item.incart}</span>
                   
                   </div>
                   <div class="total">
                   Rs${item.incart * item.price},00
                   </div>
                   `
         });

         productContainer.innerHTML +=`
         <div class="basketTotalContainer">
               <h4 class="basketTotalTitle">
                   Basket Total
                   </h4>
                   <h4 class="basketTotal">
                   Rs${cartCost}.00
                   <h4>`
     }
     //
 }
     let deletes=document.querySelector('ion-icon');
     localStorage.removeItem(deletes);
onLoadCartNumbers();
displayCart();
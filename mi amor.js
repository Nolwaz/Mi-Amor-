//add to cart and cart counter button
let clickButtons = document.querySelectorAll('.mybutton');

clickButtons.forEach(button => {
    button.addEventListener('click', function(event){
        pressButton(event);
        
    });
});

function pressButton(event){
    let button = event.target; 

    if (button.innerText === 'Add To Cart') { 
        button.innerText = 'Item Added';
    
    }if( button.innerText ==='Item Added'){
        setTimeout(function timer(){
        if(button.innerText === 'Item Added'){
            button.innerText = 'Add To Cart';
        }
        },1000)

       
    
}};





const bar = document.querySelector('.words');
const menuBtn = document.querySelector('.menu');

menuBtn.addEventListener('click',showup)

function showup(){
    if(bar.style.display === 'none'){
        bar.style.display = 'flex'
    }else(
        bar.style.display = 'none'
    )
}



//loading page
const loader = document.querySelector('.preloader');

window.addEventListener('load',function(){
 setTimeout(function r(){
       loader.style.display='none';
     },1000)});


     

//see all button     
let mike = document.querySelector('.seeall');

mike.addEventListener('click',madea)

function madea(){
    window.location.href = "shop mi amor.html"

}


//womens collection click button
let womens = document.querySelectorAll('.arrwomen');

womens.forEach(mine => {
    mine.addEventListener('click',woman)
    });

function woman(){
    window.location.href = "mi amoer women.html"

}

//mens collection click button
let mens = document.querySelectorAll('.arrmen');

mens.forEach(mean => {
    mean.addEventListener('click',man2)
    });

function man2(){
    window.location.href = "mi amor men.html"

}

let men2 = document.querySelectorAll('.goto');

men2.forEach(mean2 => {
    mean2.addEventListener('click',man3)
    });

function man3(){
    window.location.href = "mi amor men.html"

}

//go to menu click button
let home = document.querySelector('.search');

home.addEventListener('click',searches)

function searches(){
    window.location.href = "index.html"

};

//popup menu
document.querySelector('.open').addEventListener('click',
    function(){
       document.querySelector('.popup').style.display = 'flex';
       
    }
);

//popup back button
document.querySelector('.icons3').addEventListener('click', 
    function(){
        document.querySelector('.popup').style.display = 'none';


});

//about click button
let abouts = document.querySelectorAll('.aboutus');

abouts.forEach(info => {
info.addEventListener('click',aboutUs)
});

function aboutUs(){
    window.location.href = 'about mi amor.html'
};

//shop all click button
let shops = document.querySelectorAll('#shopnow');

shops.forEach(store => {
store.addEventListener('click',masa)
});

function masa(){
    window.location.href = 'mi amor about.html'

};

//womens collecion click button
let woms = document.querySelectorAll('.womenscol');

woms.forEach(w => {
w.addEventListener('click',collection)
}); 

function collection(){
    window.location.href = "mi amoer women.html"

};

//mens collection click button
let mans = document.querySelectorAll('.menscoll');


mans.forEach(m =>{
m.addEventListener('click',col)
});

function col(){
    window.location.href = "mi amor men.html"

};

const cartIcon = document.querySelector('.icons')
const cartBar = document.querySelector('.cart2')
const cartClose = document.querySelector('.cart-close')

cartIcon.addEventListener('click', () => cartBar.classList.add("active"));
cartClose.addEventListener('click', () => cartBar.classList.remove("active"));

const addCartButtons = document.querySelectorAll('.mybutton')

addCartButtons.forEach(btn => {
    btn.addEventListener("click", event => {
        const productBox = event.target.closest('.new2')
        addProduct(productBox);
    });
});


const cartContent = document.querySelector('.cart-content');
const addProduct = productBox => {
    const productImg = productBox.querySelector('img').src;
    const productName = productBox.querySelector('.name').textContent;
    const productPrice = productBox.querySelector('.price').textContent;

    const cartItems = cartContent.querySelectorAll(".cart-product-title");
    for (let item of cartItems) {
        if (item.textContent === productName){
            alert("This item is already in the cart.")
            return; 
        }
    }

    const cartBox = document.createElement('div');
    cartBox.classList.add('cart-box');


    cartBox.innerHTML = `
    <img src="${productImg}" class="cart-img">
    <div class="cart-details">
    <h2 class="cart-product-title">${productName}</h2>
    <span class="cart-price">${productPrice}</span>
    <div class="cart-quantity">
    <button id="decrement">-</button>
    <span class="number">1</span>
    <button id="increment">+</button>
    </div>
    </div>
    <div class="remove2">
    <button class="remove">remove</button>`;

    cartContent.appendChild(cartBox);

    cartBox.querySelector(".remove").addEventListener("click", () => {
        cartBox.remove();



cartItems = cartItems.filter(item => item.name !== product.name);
    localStorage.setItem("cart", JSON.stringify(cartItems)); 
       
        updateCartCount(-1);
        updateTotal();

    })

    cartBox.querySelector('.cart-quantity').addEventListener('click', event =>{
        const numberElement = cartBox.querySelector(".number");
        const decrementButton = cartBox.querySelector('#decrement');
        let quantity = numberElement.textContent;

        if (event.target.id === "decrement" && quantity > 1){
            quantity--;
            if (quantity === 1 ) {
                decrementButton.style.color = 'black';
            }
        }else if (event.target.id === 'increment') {
                quantity++;
                decrementButton.style.color = 'white';
            }

            numberElement.textContent = quantity;
            updateTotal();

        
    });

    

    updateCartCount(1);
    updateTotal();
    

};


const updateTotal = () => {
    const totalPrice = document.querySelector('.total-price');
    const cartBoxes = cartContent.querySelectorAll('.cart-box');
    let total = 0;

    cartBoxes.forEach(cartBox =>{
        const priceElement = cartBox.querySelector('.cart-price');
        const quantityElement = cartBox.querySelector('.number');
        const price = priceElement.textContent.replace("R","");
        const quantity = quantityElement.textContent;
        total += price * quantity;
    });
    totalPrice.textContent = `R${total}`;

}

let cartItemCount =  0;

    const updateCartCount = change => {
    const cartItemCountBadge = document.querySelector('.cart');
    cartItemCount += change;

    if(cartItemCount > 0){
        cartItemCountBadge.style.visiblity = "visible";
        cartItemCountBadge.textContent = cartItemCount;
    
    }else{
        cartItemCountBadge.style.visiblity = "hidden";
        cartItemCountBadge.textContent ="";
    };
   
}

















//shopping bag click button
let bags = document.querySelectorAll('.shopbag');

bags.forEach(b =>{
b.addEventListener('click',shopBag)
});

function shopBag(){
    window.location.href = "mi amor shopping bag.html"

};

/*search bar
document.querySelector('.icons4').addEventListener('click',
    function(){
       document.querySelector('.search2').style.display = 'flex';
       
    }
)});

// product links

let ducts = document.querySelectorAll('#name1')

ducts.forEach(a => {
a.addEventListener('click',productButton)
});

function productButton(){
    window.location.href = 'product 1.html'
}

const pro2 = document.querySelector('#name2');


pro2.addEventListener('click',productButton2)


function productButton2(){
    window.location.href = 'product 2.html'
}

const pro3 = document.querySelector('#name3');


pro3.addEventListener('click',productButton3)


function productButton3(){
    window.location.href = 'product 3.html'
}

const pro4 = document.querySelector('#name4');


pro4.addEventListener('click',productButton4)


function productButton4(){
    window.location.href = 'product 4.html'
}

const pro5 = document.querySelector('#name5');


pro5.addEventListener('click',productButton5)


function productButton5(){
    window.location.href = 'product 5.html'
}

const product6 = document.querySelector('#name6');


product6.addEventListener('click',productButton6)


function productButton6(){
    window.location.href = 'product 6.html'
}

//product 7
const product7 = document.querySelector('#name7');


product7.addEventListener('click',productButton7)


function productButton7(){
    window.location.href = 'product 7.html'
}

const pro8 = document.querySelector('#name8');


pro8.addEventListener('click',productButton8)


function productButton8(){
    window.location.href = 'product 8.html'
}


const pro9 = document.querySelector('#name9');


pro9.addEventListener('click',productButton9)


function productButton9(){
    window.location.href = 'product 9.html'
}

const pro10 = document.querySelector('#name10');


pro10.addEventListener('click',productButton10)


function productButton10(){
    window.location.href = 'product 10.html'
}

const pro11 = document.getElementById('#name11');


pro11.addEventListener('click',productButton11)


function productButton11(){
    window.location.href = 'product 11.html'
}

const pro12 = document.querySelector('#name12');


pro12.addEventListener('click',productButton12)


function productButton12(){
    window.location.href = 'product 12.html'
}

const pro13 = document.querySelector('#name13');


pro13.addEventListener('click',productButton13)


function productButton13(){
    window.location.href = 'product 13.html'
}

const pro14 = document.querySelector('#name14');


pro14.addEventListener('click',productButton14)


function productButton14(){
    window.location.href = 'product 14.html'
}

const pro15 = document.querySelector('#name15');


pro15.addEventListener('click',productButton15)


function productButton15(){
    window.location.href = 'product 15.html'
}





//back to previous
const p1s = document.querySelectorAll('.back');

p1s.addEventListener('click',function(){
    window.history.back();
});*/
















   











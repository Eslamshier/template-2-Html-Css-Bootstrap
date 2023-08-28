
$(function () {
    'use strict';
    // Adjust Slider Height
    let winH = $(window).height(),
        upperH = $('.upper-bar').innerHeight(),
        navH = $('.navbar').innerHeight();
    $('.slider, .carousel-item').height(winH - (upperH + navH));

    // // Featured Work Shuffle
    $('.featured-work ul li').on('click', function () {
        $(this).addClass('active').siblings().removeClass('active');
        if ($(this).data('class') === 'all') {
            $('.shuffle-imgs .col-md').css('opacity', 1);
        } else {
            $('.shuffle-imgs .col-md').css('opacity', '.08');
            $($(this).data('class')).parent().css('opacity', 1);
        }
    });

});

let cardsContainer = document.querySelector(".category .container .carousel-inner .cardsContainer");
let row = document.querySelector(".category .container .carousel-inner .test-row");

function getrepos() {
    
    fetch('https://fakestoreapi.com/products')
        .then((response) => {
            return response.json();
        })
        .then((repositries) => {
            
            renderCharacters(repositries);
            
    })
};
getrepos();

// function renderCharacters(characters) {
//     characters.forEach(character => {
//         // console.log(character.id);

//         const div = document.createElement('div');
//         const image = document.createElement('img');
//         const name = document.createElement('h3');
//         const species = document.createElement('h3');
//         const like = document.createElement('span');
//         div.classList = 'card'
//         image.classList = 'card-img'
//         like.classList = 'empty'
//         image.src = character.image
//         name.innerText = `Name: ${character.name}`
//         species.innerText =`Species: ${character.species}`
//         like.textContent = 'like'
//         div.appendChild(image)
//         div.appendChild(name)
//         div.appendChild(species)
//         div.appendChild(like)
//         cardsContainer.appendChild(div)
//     });
// };


function getrepos() {
    
    fetch('https://fakestoreapi.com/products')
        .then((response) => {
            return response.json();
        })
        .then((repositries) => {
            
            renderProducts(repositries);
            
    })
};
getrepos();

function renderProducts(products) {
    products.forEach(product => {
        const div = document.createElement('div');
        const image = document.createElement('img');
        const title = document.createElement('h3');
        const category = document.createElement('p');
        const price = document.createElement('span');

        div.classList = 'card'
        image.classList = 'card-img'
        title.classList = 'card-h'
        category.classList = 'card-category'
        price.classList = 'card-span'
        
        image.src = product.image
        title.innerText = `Name: ${product.title}`
        category.innerText =`category: ${product.category}`
        price.innerText = `price: ${product.price}`

        div.appendChild(image)
        div.appendChild(title)
        div.appendChild(category)
        div.appendChild(price)
        cardsContainer.appendChild(div)
        row.appendChild(cardsContainer)

    });
};



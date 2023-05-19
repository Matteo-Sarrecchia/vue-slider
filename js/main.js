const {createApp} = Vue

createApp ({
    data () {
        return {
            positionItem: 0,
            message: "ciao",

            // array di oggetti
            images: [
                {
                    image: 'img/01.webp',
                    title: "Marvel's Spiderman Miles Morale",
                    text: 'Experience the rise of Miles Morales as the new hero masters, incredible, explosive new powers to become his own Spider-Man.'
                }, {
                    image: 'img/02.webp',
                    title: 'Ratchet & Clank: Rift Apart',
                    text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
                }, {
                    image: 'img/03.webp',
                    title: 'Fortnite',
                    text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
                }, {
                    image: 'img/04.webp',
                    title: 'Stray',
                    text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
                }, {
                    image: 'img/05.webp',
                    title: "Marvel's Avengers",
                    text: "Marvel's Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.",
                }
            ]
        }
    },
    methods: {
        nextImg: function(){
            this.positionItem++
            if(this.positionItem === this.images.length ){
                this.positionItem= 0
            }
        },
        prevImg: function(){
            this.positionItem--
            if(this.positionItem < 0){
                this.positionItem= this.images.length -1
            }
        }
    }
}).mount("#container");


// // creo elementi thumb
// images.forEach(element => {

//     const itemThumb = document.createElement("div");
//     containerThumb.append(itemThumb)
//     itemThumb.classList.add("itemThumb")
//     itemThumb.innerHTML += `<img src="${element.image}" alt="">
//     <div class=opacity></div>`
// });


// imposto valore di riferimento
// let positionItem = 0;

// // seleziono tutti gli item
// let item = document.querySelectorAll(".item");

// // aggiungo classe active al primo item
// item[positionItem].classList.add("active");


// // aggiungo evento al click arrow next
// arrowNext.addEventListener("click",function (){nextImage()});

// // aggiungo evento al click arrow prev
// arrowPrev.addEventListener("click",function (){prevImage()});

// // aggiungo evento al click play
// arrowPlay.addEventListener("click",function (){nextImageAuto()});

// // aggiungo evento al click stop
// arrowStop.addEventListener("click",function (){clearInterval(clock)});

// // aggiungo evento al click inversione
// arrowInverse.addEventListener("click",function (){prevImageAuto()});



// // ******************** FUNZIONI ********************

// // funzione per far scorre le immagini avanti manualmente
// function nextImage (){
//     if(positionItem <= images.length - 1){

//         // tolgo la classe active al primo elemento
//         item[positionItem].classList.remove("active");
    
//         // se sono all'ultimo elemento
//         if (positionItem === images.length - 1){
//             positionItem = 0
//         } else {
//             // passo all'elemento successivo
//             positionItem++
//         }

//         // aggiungo la classe active all'elemento successivo
//         item[positionItem].classList.add("active");
//     }     
// }

// // funzione per far scorre le immagini indietro manualmente
// function prevImage(){

//     if(positionItem <= images.length -1){

//         // tolgo la classe active al primo elemento
//         item[positionItem].classList.remove("active");
        
//         // se sono all'ultimo elemento
//         if (positionItem === 0){
//             positionItem = 4
//         }else {
//             // passo all'elemento successivo
//             positionItem--
//         }
        
//         // aggiungo la classe active all'elemento successivo
//         item[positionItem].classList.add("active");
//     }     
// }

// // funzioni per far scorrere le immagini avanti automaticamente
// function nextImageAuto(){
//     // aggiungo timer per far scorrere le immagini
//     clock = setInterval(() => {
//         if(positionItem <= images.length - 1){

//             // tolgo la classe active al primo elemento
//             item[positionItem].classList.remove("active");
        
//             // se sono all'ultimo elemento
//             if (positionItem === images.length - 1){
//                 positionItem = 0
//             } else {
//                 // passo all'elemento successivo
//                 positionItem++
//             }
            
//             // aggiungo la classe active all'elemento successivo
//             item[positionItem].classList.add("active");
//         }     
//     }, 2000)
// }

// // funzione per far scorre le immagini indietro automaticamente
// function prevImageAuto(){
//     // aggiungo timer per far scorrere le immagini
//     clock = setInterval(() => {
//         if(positionItem <= images.length -1){

//             // tolgo la classe active al primo elemento
//             item[positionItem].classList.remove("active");
            
//             // se sono all'ultimo elemento
//             if (positionItem === 0){
//                 positionItem = 4
//             }else {
//                 // passo all'elemento successivo
//                 positionItem--
//             }
            
//             // aggiungo la classe active all'elemento successivo
//             item[positionItem].classList.add("active");
//         }     
//     }, 2000)
// }
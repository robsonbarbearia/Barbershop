/*
=====================================================
 ROBSON BARBEAR
 MAIN.JS - PARTE 1/2

 Funções:
 - Loader inicial
 - Menu mobile
 - Header inteligente
 - Scroll suave
 - Animações de entrada
=====================================================
*/


// ===============================
// LOADER
// ===============================


window.addEventListener("load", () => {


    const loader = document.querySelector(".loader");


    setTimeout(() => {


        loader.style.opacity = "0";


        loader.style.visibility = "hidden";


    }, 1200);



});





// ===============================
// HEADER AO ROLAR
// ===============================


const header = document.querySelector(".header");


window.addEventListener("scroll", () => {


    if(window.scrollY > 80){


        header.style.background = "rgba(8,8,8,0.95)";


        header.style.backdropFilter = "blur(10px)";


    }

    else{


        header.style.background = "transparent";


        header.style.backdropFilter = "none";


    }


});









// ===============================
// MENU MOBILE
// ===============================



const menuButton = document.querySelector(".menu-mobile");

const nav = document.querySelector(".nav-links");



if(menuButton){



menuButton.addEventListener("click", () => {



    nav.classList.toggle("active");



});



}








// FECHAR MENU AO CLICAR NO LINK


const links = document.querySelectorAll(".nav-links a");



links.forEach(link => {


    link.addEventListener("click", () => {


        nav.classList.remove("active");


    });



});









// ===============================
// SCROLL REVEAL
// ===============================



const observerOptions = {


    threshold:0.15


};





const revealObserver = new IntersectionObserver((entries)=>{



    entries.forEach(entry=>{



        if(entry.isIntersecting){



            entry.target.classList.add("show");



        }



    });



}, observerOptions);








const revealElements = document.querySelectorAll(

    ".section-title, .about-grid, .service-card, .gallery-item, .experience-content, .contact-grid"

);





revealElements.forEach(element=>{


    element.classList.add("hidden");


    revealObserver.observe(element);



});









// ===============================
// SCROLL SUAVE NOS LINKS
// ===============================



document.querySelectorAll('a[href^="#"]').forEach(anchor => {


    anchor.addEventListener("click", function(e){


        e.preventDefault();



        const target = document.querySelector(

            this.getAttribute("href")

        );



        if(target){



            target.scrollIntoView({


                behavior:"smooth"


            });



        }



    });



});
/*
=====================================================
 ROBSON BARBEAR
 MAIN.JS - PARTE 2/2

 Funções:
 - Parallax
 - Efeitos visuais
 - Animações extras
 - Melhorias de experiência
=====================================================
*/





// ===============================
// EFEITO PARALLAX NO HERO
// ===============================


const hero = document.querySelector(".hero");



window.addEventListener("scroll", ()=>{


    if(hero){


        let offset = window.scrollY;



        hero.style.backgroundPositionY =

        `${offset * 0.4}px`;



    }



});









// ===============================
// ANIMAÇÃO DOS CARDS
// ===============================


const cards = document.querySelectorAll(".service-card");



cards.forEach(card=>{


    card.addEventListener("mouseenter", ()=>{


        card.style.transition = ".4s ease";


        card.style.transform = "translateY(-12px)";



    });





    card.addEventListener("mouseleave", ()=>{


        if(!card.classList.contains("featured")){


            card.style.transform = "translateY(0)";


        }



    });



});









// ===============================
// EFEITO DE TEXTO NO HERO
// ===============================


const heroTitle = document.querySelector(".hero h1");



if(heroTitle){



    heroTitle.style.opacity="0";


    heroTitle.style.transform="translateY(40px)";



    setTimeout(()=>{



        heroTitle.style.transition="1.2s ease";


        heroTitle.style.opacity="1";


        heroTitle.style.transform="translateY(0)";



    },800);



}









// ===============================
// ANIMAÇÃO DO BOTÃO WHATSAPP
// ===============================


const whatsappButtons = document.querySelectorAll(

".btn-whatsapp, .hero-button, .whatsapp-big"

);




whatsappButtons.forEach(button=>{


    button.addEventListener("mouseenter",()=>{


        button.style.boxShadow =

        "0 0 35px rgba(37,211,102,.45)";



    });




    button.addEventListener("mouseleave",()=>{


        button.style.boxShadow="none";


    });



});









// ===============================
// ANO AUTOMÁTICO NO FOOTER
// ===============================



const year = document.querySelector(".copyright");



if(year){



    const currentYear = new Date().getFullYear();



    year.innerHTML =

    `© ${currentYear} Robson Barbear. Todos os direitos reservados.`;



}









// ===============================
// PROTEÇÃO CONTRA ERROS DE IMAGEM
// ===============================



const images = document.querySelectorAll("img");



images.forEach(img=>{


    img.addEventListener("error",()=>{


        img.style.display="none";



    });



});








// ===============================
// CURSOR PREMIUM (DESKTOP)
// ===============================



const cursor = document.createElement("div");


cursor.classList.add("custom-cursor");


document.body.appendChild(cursor);




document.addEventListener("mousemove",(event)=>{


    cursor.style.left = event.clientX + "px";


    cursor.style.top = event.clientY + "px";



});



document.querySelectorAll("a, button").forEach(element=>{


    element.addEventListener("mouseenter",()=>{


        cursor.classList.add("cursor-active");



    });





    element.addEventListener("mouseleave",()=>{


        cursor.classList.remove("cursor-active");



    });



});

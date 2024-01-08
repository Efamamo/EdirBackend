let load = document.getElementById("more");
let reduce = document.getElementById("hide");
let news = [...document.querySelectorAll(".ind")];
let current = 3;

function showMore() {
    for (var i = 0; i < news.length; i++) {
        news[i].style.display = "flex";
    }
    load.style.display = "none";
    reduce.style.display = "flex";
}

function hide() {
    for (var i = current; i < news.length; i++) {
        news[i].style.display = "none";
    }
    load.style.display = "flex";
    reduce.style.display = "none";
}

load.onclick = showMore;
reduce.onclick = hide;


let E1news = document.getElementById("news1");
function show1News(){
    let ne = [...document.querySelectorAll(".each-news")];
    for (let i=0; i<ne.length; i++){
        ne[i].style.display = "none";
    }
    document.getElementById("news1D").style.display = "block";
}

E1news.onclick = show1News;


let E2news = document.getElementById("news2");
function show2News(){
    let ne = [...document.querySelectorAll(".each-news")];
    for (let i=0; i<ne.length; i++){
        ne[i].style.display = "none";
    }
    document.getElementById("news2D").style.display = "block";
}

E2news.onclick = show2News;

let E3news = document.getElementById("news3");
function show3News(){
    let ne = [...document.querySelectorAll(".each-news")];
    for (let i=0; i<ne.length; i++){
        ne[i].style.display = "none";
    }
    document.getElementById("news3D").style.display = "block";
}

E3news.onclick = show3News;

let E4news = document.getElementById("news4");
function show4News(){
    let ne = [...document.querySelectorAll(".each-news")];
    for (let i=0; i<ne.length; i++){
        ne[i].style.display = "none";
    }
    document.getElementById("news4D").style.display = "block";
}

E4news.onclick = show4News;

let E5news = document.getElementById("news5");
function show5News(){
    let ne = [...document.querySelectorAll(".each-news")];
    for (let i=0; i<ne.length; i++){
        ne[i].style.display = "none";
    }
    document.getElementById("news5D").style.display = "block";
}

E5news.onclick = show5News;

let E6news = document.getElementById("news6");
function show6News(){
    let ne = [...document.querySelectorAll(".each-news")];
    for (let i=0; i<ne.length; i++){
        ne[i].style.display = "none";
    }
    document.getElementById("news6D").style.display = "block";
}

E6news.onclick = show6News;


const humburger = document.querySelector(".humburger");
const navbar = document.querySelector(".header__ul");

humburger.addEventListener('click',()=>{
    humburger.classList.toggle('active');
    navbar.classList.toggle('active');
    
    
})

const contactForm = document.getElementsByClassName('contact-form')[0];
contactForm.addEventListener('submit', function (event) {
    event.preventDefault();
    fetch('https://formspree.io/f/mleyqqag', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        subject: document.getElementById('subject').value,
        message: document.getElementById('message').value
        })
    })
    .then(response => response.json())
    .then(data => {
        document.getElementsByClassName("contact-form__message")[0].style.display = "block";
        document.getElementsByClassName("contact-form__message")[1].style.display = "none";

        contactForm.reset();
        })
    .catch(error => {
        document.getElementsByClassName("contact-form__message")[1].style.display = "block";
        document.getElementsByClassName("contact-form__message")[0].style.display = "none";
        });
});
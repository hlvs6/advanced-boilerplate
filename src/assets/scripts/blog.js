const nav = document.querySelector('.js-blog__aside');
const navList = nav.querySelector('.js-blog__aside-list');
const navBtn = nav.getElementsByClassName('js-blog__aside-item');
const articlesList = document.getElementsByClassName('js-blog__articles');
const articles = document.querySelectorAll(".js-blog__article");
const activeBtnClass = 'blog__aside-menu-item--active';
const speed = 1;
let clickAnimation = false;
let positionArticles = [];
let navBtnArray = Array.from(navBtn);
const articlesArray = Array.from(articles);

navList.children[0].classList.add(activeBtnClass);

window.addEventListener("load", init);

function anchorActive() {
    for (let i = 0; i < navBtn.length; i++) {
        navBtn[i].addEventListener('click', function(e) {
            //Зачем нужна clickanimation
            clickAnimation = true;
            if (!(navBtn[i].classList.contains(activeBtnClass))) {
                for (let j = 0; j < navBtn.length; j++) {
                    navBtn[j].classList.remove(activeBtnClass);
                }
                this.classList.add(activeBtnClass);
            }
        });
    }
}

function init() { 
    anchorActive();
}
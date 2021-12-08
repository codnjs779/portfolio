"use strict";

let contact = document.querySelector("#contact");
let contactBtn = document.querySelector(".mainBtn");
let main = document.querySelector("#main");

let nav_home = document.querySelector("#nav_home");
let nav_about = document.querySelector("#nav_about");
let nav_skill = document.querySelector("#nav_skill");
let nav_mywork = document.querySelector("#nav_mywork");
let nav_contact = document.querySelector("#nav_contact");

let upArrowBtnBox = document.querySelector(".upArrowBtnBox");
let toggleButton = document.querySelector(".navbar__toggle_btn");
let toggleNav = document.querySelector(".navbar__menu");

// nav바 투명도 조절
// const navBarScrollHandler = () => {
//     let currentPrevYoffset = window.pageYOffset;

//     if (prevYoffset < currentPrevYoffset) {
//         navBar.style.opacity = 0.3;
//         main.style.opacity = 0.3;
//         if (currentPrevYoffset > 600) {
//             upArrowBtnBox.style.display = "block";
//         } else {
//             upArrowBtnBox.style.display = "none";
//         }
//     } else {
//         navBar.style.opacity = 1;
//         main.style.opacity = 1;
//     }
// };
//엘리코드 - nav scroll에 따라 투명도 조절

let navBar = document.querySelector("#navbar");
const navBarHeight = navBar.getBoundingClientRect().height;

document.addEventListener("scroll", () => {
    if (window.scrollY > navBarHeight) {
        navBar.classList.add("dark");
    } else {
        navBar.classList.remove("dark");
    }
});

//nav바 클릭시 해당 선택위치 배경 변경

//엘리코드 - 클릭시 해당 위치로
const navbarMenu = document.querySelector(".navbar__menu");
navbarMenu.addEventListener("click", (event) => {
    const target = event.target;
    const link = target.dataset.link;
    if (link == null) {
        return;
    }
    scrollIntoView(link);
});

// contact버튼 클릭시 페이지 이동
const btnonClick = () => {
    scrollIntoView("#contact");
};

//홈 스크롤 하면 투명해짐
const matinContainer = document.querySelector(".main_container");
const mainHeight = main.getBoundingClientRect().height;
document.addEventListener("scroll", () => {
    matinContainer.style.opacity = 1 - window.scrollY / mainHeight;
});

//반복되는 코드 함수로 추출
const scrollIntoView = (selector) => {
    const scrollTo = document.querySelector(selector);
    scrollTo.scrollIntoView({ behavior: "smooth" });
};

//main scoll opacity

const arrowBtnClick = () => {
    main.scrollIntoView();
};

//toggle Btn

const toggleBtn = () => {
    if (toggleNav) {
    }
    console.log("dd");
};

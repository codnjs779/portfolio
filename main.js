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

//contact버튼 클릭시 페이지 이동
// const btnonClick = () => {
//     contact.scrollIntoView();
// };

//nav바 클릭시 해당 선택위치 배경 변경

//엘리코드 - 클릭시 해당 위치로
const navbarMenu = document.querySelector(".navbar__menu");
navbarMenu.addEventListener("click", (event) => {
    console.log(event.target.dataset.link);
    const target = event.target;
    const link = target.dataset.link;
    if (link == null) {
        return;
    }
    const scrollTo = document.querySelector(link);
    scrollTo.scrollIntoView({ behavior: "smooth" });
});

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

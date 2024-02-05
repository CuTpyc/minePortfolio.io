// Підключення функціоналу "Чертоги Фрілансера"
import { heroImageAnimation } from "./animations/heroAnimation.js";
import { heroSubTextAnimation } from "./animations/heroAnimation.js";
import { buttonAnim } from "./buttonAnimation.js";
import { briefsCount } from "./designScripts/briefsCounter.js";
import { isMobile } from "./functions.js";
// Підключення списку активних модулів
import { flsModules } from "./modules.js";

import { gsap } from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger.js";
gsap.registerPlugin(ScrollTrigger);



document.addEventListener('DOMContentLoaded', function (e) {
    briefsCount(gsap)
    heroImageAnimation(gsap)
    buttonAnim(gsap)

    // const swiperItem = document.querySelectorAll('.works__block');
    // const visible = (swiperItem) => {
    //     let swiperArreyItem = swiperItem
    //     for (let i = 0; i < swiperArreyItem.length; i++) {
    //         const element = swiperArreyItem[i];


    //     }
    // }
})



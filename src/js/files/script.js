// Підключення функціоналу "Чертоги Фрілансера"
import { heroImageAnimation } from "./animations/heroAnimation.js";
import { buttonAnim } from "./buttonAnimation.js";
import { isMobile } from "./functions.js";
// Підключення списку активних модулів
import { flsModules } from "./modules.js";

import { gsap } from "gsap";

document.addEventListener('DOMContentLoaded', function (e) {
    heroImageAnimation(gsap)
    buttonAnim(gsap)

})


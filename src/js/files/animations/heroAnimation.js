export function heroImageAnimation(gsap) {
    const tlHero = gsap.timeline({ duration: 0.7 })
    const heroPerson = document.querySelector('.hero__person');
    const heroBackground = document.querySelector('.person-content__background');
    const heroImg = document.querySelector('.person-content__person-img');

    tlHero.fromTo(heroPerson, {
        right: `-500%`,
    }, {
        right: `0%`,
        duration: 1,
    }).to(heroBackground, {
        rotation: -15,
        duration: 1,
    }).to(heroImg, {
        rotation: 15,
        duration: 1,
    }, "<+=0")
}
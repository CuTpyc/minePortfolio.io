import SplitType from "split-type";

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
    }, "<+=0").add(heroTextAnimation(gsap), "<+=0")
}

function changeWordInString() {
    const heroWorker = document.querySelector('.hero__worker')
    const typeArrey = heroWorker.querySelector('div')
    let index = 0
    if (heroWorker && typeArrey) {
        for (let i = 0; i < typeArrey.children.length; i++) {
            const element = typeArrey.children[i];
            element.style.textShadow = '#ffffff 1px 0 2px'
            if (i >= 0 && i <= 4 || i >= 9 && i <= 11 || i >= typeArrey.children.length - 2 && i <= typeArrey.children.length) {
                element.style.fontWeight = 800
            }
            if (i === typeArrey.children.length - 2) {
                element.style.color = '#F3B95F'
            }
            if (i === typeArrey.children.length - 1) {

                element.style.color = '#0B60B0'
            }

            if ((i === typeArrey.children.length - 4) || (i === typeArrey.children.length - 5)) {
                element.style.textShadow = '#ffffff 1px 0 2px'
            }


        }
        console.log(typeArrey.children[0].querySelector('.char'))
    }

}

function heroTextAnimation(gsap) {
    new CircleType(document.getElementById('subTitleAnimated'))
        .radius(384)
        .dir(-1);

    let titleSplit = new SplitType('[titleAnimated]', {
        types: 'lines, words, chars',
        tagName: 'span'
    })

    let subTitleSplit = new SplitType('[subTitleAnimated]', {
        types: 'lines, words, chars',
        tagName: 'span'
    })



    gsap.fromTo('[titleAnimated] .char', {
        y: '100%',
        opacity: 0,

    }, {
        y: '0%',
        opacity: 1,
        duration: 0.4,
        ease: 'Second.out',
        stagger: 0.2,
    })

    gsap.fromTo('[subTitleAnimated] .char', {
        y: '0%',
        opacity: 0,
    }, {
        y: '100%',
        opacity: 1,
        duration: 0.4,
        ease: 'Second.out',
        stagger: 0.075,
    })

    const spanLine = document.querySelector('.hero__worker')
    if (spanLine && spanLine) {
        const item = spanLine.querySelector('.line');
        item.style.textAlign = `center`
    }

    changeWordInString()
}





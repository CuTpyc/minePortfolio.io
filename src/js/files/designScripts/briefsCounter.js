
export function briefsCount(gsap) {
    const breifs = document.querySelectorAll('.spollers__item-content')

    breifs.forEach((item, index) => {
        let spanItem = item.querySelector('span')
        spanItem.innerText = `0${index + 1}.`
    });

    briefsTextAnimation(gsap)
}

function briefsTextAnimation(gsap) {
    const briefsContent = document.querySelector('.breifs__content');
    const briefsItem = briefsContent.querySelectorAll('.spollers__item-content');
    let tl = gsap.timeline({
        // yes, we can add it to an entire timeline!
        scrollTrigger: {
            trigger: briefsContent,
            start: "top 60%", // when the top of the trigger hits the top of the viewport
            end: "bottom", // end after scrolling 500px beyond the start
            scrub: false,
            // markers: true,

        },
        duration: 0.7,
        stagger: 1,
    });

    if (window.innerWidth > 1352.98) {
        tl.fromTo(briefsItem[0], {
            x: `-300%`,
            opacity: 0,
        }, {
            x: '0%',
            opacity: 1,
        })
            .fromTo(briefsItem[1], {
                y: `-300%`,
                opacity: 0,
            }, {
                y: '0%',
                opacity: 1,
            })
            .fromTo(briefsItem[2], {
                x: `300%`,
                opacity: 0,
            }, {
                x: '0%',
                opacity: 1,
            })
            // lower text blocks
            .fromTo(briefsItem[3], {
                x: `-300%`,
                opacity: 0,
            }, {
                x: '0%',
                opacity: 1,
            })
            .fromTo(briefsItem[4], {
                y: `300%`,
                opacity: 0,
            }, {
                y: '0%',
                opacity: 1,
            })
            .fromTo(briefsItem[5], {
                x: `300%`,
                opacity: 0,
            }, {
                x: '0%',
                opacity: 1,
            })
    } else if (window.innerWidth > 767.98 && window.innerWidth <= 1352.98) {
        tl.fromTo(briefsItem[0], {
            x: `-300%`,
            y: `-300%`,
            opacity: 0,
        }, {
            x: '0%',
            y: '0%',
            opacity: 1,
        })
            .fromTo(briefsItem[1], {
                y: `-300%`,
                x: `300%`,
                opacity: 0,
            }, {
                y: '0%',
                x: '0%',
                opacity: 1,
            })

            // lower text blocks
            .fromTo(briefsItem[2], {
                x: `-300%`,
                opacity: 0,
            }, {
                x: '0%',
                opacity: 1,
            })

            .fromTo(briefsItem[3], {
                x: `300%`,
                opacity: 0,
            }, {
                x: '0%',
                opacity: 1,
            })

            .fromTo(briefsItem[4], {
                y: `300%`,
                x: `-300%`,
                opacity: 0,
            }, {
                y: '0%',
                x: '0%',
                opacity: 1,
            })

            .fromTo(briefsItem[5], {
                x: `300%`,
                y: `300%`,
                opacity: 0,
            }, {
                x: '0%',
                y: '0%',
                opacity: 1,
            })
    } else if (window.innerWidth <= 767.98) {
        tl.fromTo(briefsItem[0], {
            x: `-300%`,
            opacity: 0,
        }, {
            x: '0%',
            opacity: 1,
        })
            .fromTo(briefsItem[1], {
                x: `300%`,
                opacity: 0,
            }, {
                x: '0%',
                opacity: 1,
            })
            .fromTo(briefsItem[2], {
                x: `-300%`,
                opacity: 0,
            }, {
                x: '0%',
                opacity: 1,
            })
            .fromTo(briefsItem[3], {
                x: `300%`,
                opacity: 0,
            }, {
                x: '0%',
                opacity: 1,
            })
            .fromTo(briefsItem[4], {
                x: `-300%`,
                opacity: 0,
            }, {
                x: '0%',
                opacity: 1,
            })
            .fromTo(briefsItem[5], {
                x: `300%`,
                opacity: 0,
            }, {
                x: '0%',
                opacity: 1,
            })
    }
    // higher text blocks

}


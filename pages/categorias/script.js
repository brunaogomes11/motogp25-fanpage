const lista_opcoes = document.querySelectorAll('.opcao');
const body = document.querySelector('body');

gsap.set(".motogp-bg", {
    backgroundImage: "url('../../assets/categorias/motogp.webp')",
    xPercent: -100,
    ease: "power2.inOut"
});
gsap.to(".moto2-bg", {
    backgroundImage: "url('../../assets/categorias/moto2.png')",
    duration: 0.5,
    xPercent: -100,
    ease: "power2.inOut",
    onComplete: () => { }
});
gsap.to(".moto3-bg", {
    backgroundImage: "url('../../assets/categorias/moto3.jpg')",
    duration: 0.5,
    xPercent: -100,
    ease: "power2.inOut",
    onComplete: () => { }
});

function changeToMotoGP() {
    gsap.to(".moto3-bg", {
        backgroundImage: "url('../../assets/categorias/moto3.jpg')",
        duration: 0.5,
        xPercent: -100,
        ease: "power2.inOut",
        onComplete: () => { }
    });
    gsap.to(".moto2-bg", {
        backgroundImage: "url('../../assets/categorias/moto2.png')",
        duration: 0.5,
        xPercent: -100,
        ease: "power2.inOut",
        onComplete: () => { }
    });
    gsap.to(".motogp-bg", {
        xPercent: 0,
        duration: 0.5,
        ease: "power2.inOut",
        onComplete: () => {
            body.classList.add('motogp');
            body.classList.remove('moto2', 'moto3');
        }
    });
}
function changeToMoto2() {
    gsap.to(".moto3-bg", {
        backgroundImage: "url('../../assets/categorias/moto3.jpg')",
        duration: 0.5,
        xPercent: -100,
        ease: "power2.inOut",
        onComplete: () => { }
    });
    gsap.to(".moto2-bg", {
        backgroundImage: "url('../../assets/categorias/moto2.png')",
        duration: 0.5,
        xPercent: 0,
        ease: "power2.inOut",
        onComplete: () => { }
    });
    gsap.to(".motogp-bg", {
        xPercent: -100,
        duration: 0.5,
        ease: "power2.inOut",
        onComplete: () => {
            body.classList.add('motogp');
            body.classList.remove('moto2', 'moto3');
        }
    });
}
function changeToMoto3() {
    gsap.to(".moto3-bg", {
        backgroundImage: "url('../../assets/categorias/moto3.jpg')",
        duration: 0.5,
        xPercent: 0,
        ease: "power2.inOut",
        onComplete: () => { }
    });
    gsap.to(".moto2-bg", {
        backgroundImage: "url('../../assets/categorias/moto2.png')",
        duration: 0.5,
        xPercent: -100,
        ease: "power2.inOut",
        onComplete: () => { }
    });
    gsap.to(".motogp-bg", {
        xPercent: -100,
        duration: 0.5,
        ease: "power2.inOut",
        onComplete: () => {
            body.classList.add('motogp');
            body.classList.remove('moto2', 'moto3');
        }
    });

}

document.addEventListener('DOMContentLoaded', () => {
    lista_opcoes.forEach(opcao => {
        opcao.addEventListener('mouseenter', () => {
            switch (opcao.textContent) {
                case 'MotoGP':
                    changeToMotoGP();
                    break;
                case 'Moto 2':
                    changeToMoto2();
                    break;
                case 'Moto 3':
                    changeToMoto3();
                    break;
                default:
                    break;
            }
        });
    });
})


const gotoCategory = (category) => {
    gsap.set(nextSlides, { xPercent: 100 });
    gsap.to(currentSlides, {
        xPercent: -100,
        opacity: 0,
        onComplete: () => (isTweening = false)
    });
}

const gotoSlide = (value) => {
    if (isTweening) return;
    isTweening = true;
    const first = slidesArray[0];
    const currentSlides = [];
    const nextSlides = [];
    slidesArray.forEach((slides) => currentSlides.push(slides[currentIndex]));
    if (first[currentIndex + value]) {
        currentIndex += value;
    } else {
        currentIndex = value > 0 ? 0 : first.length - 1;
    }
    slidesArray.forEach((slides) => nextSlides.push(slides[currentIndex]));
    if (value > 0) {
        gsap.set(nextSlides, { xPercent: 100 });
        gsap.to(currentSlides, {
            xPercent: -100,
            opacity: 0,
            onComplete: () => (isTweening = false)
        });
    } else {
        gsap.set(nextSlides, { xPercent: -100 });
        gsap.to(currentSlides, {
            xPercent: 100,
            opacity: 0,
            onComplete: () => (isTweening = false)
        });
    }
    gsap.to(nextSlides, { xPercent: 0, opacity: 1 });
};

next.addEventListener("click", () => gotoSlide(1));
prev.addEventListener("click", () => gotoSlide(-1));
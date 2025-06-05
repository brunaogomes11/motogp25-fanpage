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


const video = document.querySelector(".video-background");
let src = video.currentSrc || video.src;
const slider = document.getElementById("video-scrub-slider");

/* Make sure the video is 'activated' on iOS */
function once(el, event, fn, opts) {
    var onceFn = function (e) {
        el.removeEventListener(event, onceFn);
        fn.apply(this, arguments);
    };
    el.addEventListener(event, onceFn, opts);
    return onceFn;
}

once(document.documentElement, "touchstart", function (e) {
    video.play();
    video.pause();
});

/* ---------------------------------- */
/* Scroll Control! */

gsap.registerPlugin(ScrollTrigger);

let tl = gsap.timeline({
    defaults: { duration: 1 },
    scrollTrigger: {
        trigger: "#container",
        start: "top top",
        end: "bottom bottom",
        scrub: true,
        onUpdate: (self) => {
            if (slider) {
                slider.value = self.progress * 100;
            }
        },
    },
});

once(video, "loadedmetadata", () => {
    tl.fromTo(
        video,
        {
            currentTime: 0,
        },
        {
            currentTime: video.duration || 1,
            ease: "none",
        }
    );

    if (slider) {
        slider.addEventListener("input", () => {
            if (video.duration) {
                const newTime = (slider.value / 100) * video.duration;
                video.currentTime = newTime;
            }
        });
    }
    slider.value = 0;

});
/* When first coded, the Blobbing was important to ensure the browser wasn't dropping previously played segments, but it doesn't seem to be a problem now. Possibly based on memory availability? */
setTimeout(function () {
    if (window["fetch"]) {
        fetch(src)
            .then((response) => response.blob())
            .then((response) => {
                var blobURL = URL.createObjectURL(response);

                video.setAttribute("src", blobURL);
                video.currentTime = t + 0.01;
            });
    }
    
}, 1000);


const equipes = [
    {
        "nome": "Aprilia Racing",
        "srcVideo": "../../../assets/equipes/motos/aprilla.mp4",
        "pilotos": [
            {
                "nome": "Jorge Martin",
                "srcFoto": "https://resources.motogp.pulselive.com/photo-resources/2025/04/11/ab7fadd1-d2fa-41f7-a19d-833b0561f673/oE9Aa2VY.png?height=1400&width=1800"
            },
            {
                "nome": "Marco Bezzechi",
                "srcFoto": "https://resources.motogp.pulselive.com/photo-resources/2025/02/10/dbd5a0b9-f6c5-4fc8-86b5-546b05232429/5HcsbrNn.png?height=1400&width=1800"
            }
        ]
    },
    {
        "nome": "BK8 Gresini Racing MotoGP",
        "srcVideo": "../../../assets/equipes/motos/bk8.mp4",
        "pilotos": [
            {
                "nome": "Fermin Aldeguer",
                "srcFoto": "https://resources.motogp.pulselive.com/photo-resources/2025/02/28/b9c97a6e-a729-44dc-bcc2-bfa861b092a8/zMpK9tLN.png?height=1400&width=1800"
            },
            {
                "nome": "Alex Marquez",
                "srcFoto": "https://resources.motogp.pulselive.com/photo-resources/2025/02/28/6fff38e2-bd16-4cb0-ac20-3be9ee29ccd3/uzz61wfi.png?height=1400&width=1800"
            }
        ]
    },
    {
        "nome": "Ducati Lenovo Team",
        "srcVideo": "../../../assets/equipes/motos/ducati.mp4",
        "pilotos": [
            {
                "nome": "Marc Marquez",
                "srcFoto": "https://resources.motogp.pulselive.com/photo-resources/2025/02/10/db39c323-167c-4a23-b3ae-75cfe6b06d95/jws78ATZ.png?height=1400&width=1800"
            },
            {
                "nome": "Francesco Bagnaia",
                "srcFoto": "https://resources.motogp.pulselive.com/photo-resources/2025/02/10/2ea90c6c-7b86-4430-bf20-9fb8761ef999/J7PRxOT5.png?height=1400&width=1800"
            }
        ]
    },
    {
        "nome": "Honda HRC Castrol",
        "srcVideo": "../../../assets/equipes/motos/honda-castrol.mp4",
        "pilotos": [
            {
                "nome": "Luca Marini",
                "srcFoto": "https://resources.motogp.pulselive.com/photo-resources/2025/02/10/5ab75f09-d4bc-4f71-baf1-02007e3b5793/iDs8u21V.png?height=1400&width=1800"
            },
            {
                "nome": "Joan Mir",
                "srcFoto": "https://resources.motogp.pulselive.com/photo-resources/2025/02/10/0475f8ae-5a34-4505-a49f-70fe912534ed/x5A64JfJ.png?height=1400&width=1800"
            }
        ]
    },
    {
        "nome": "LCR Honda",
        "srcVideo": "../../../assets/equipes/motos/honda-lcr.mp4",
        "pilotos": [
            {
                "nome": "Johann Zarco",
                "srcFoto": "https://resources.motogp.pulselive.com/photo-resources/2025/02/10/4166e780-86ca-49d8-a42b-4627d26b1f48/I8FgpnEk.png?height=1400&width=1800"
            },
            {
                "nome": "Somkiat Chantra",
                "srcFoto": "https://resources.motogp.pulselive.com/photo-resources/2025/02/10/0475f8ae-5a34-4505-a49f-70fe912534ed/x5A64JfJ.png?height=1400&width=1800"
            }
        ]
    },
    {
        "nome": "Monster Energy Yamaha MotoGP",
        "srcVideo": "../../../assets/equipes/motos/yamaha-monster.mp4",
        "pilotos": [
            {
                "nome": "Fabio Quartararo",
                "srcFoto": "https://resources.motogp.pulselive.com/photo-resources/2025/02/10/6d108ca2-e4fc-4030-ab8d-69c481fcd666/DHp0R5id.png?height=1400&width=1800"
            },
            {
                "nome": "Alex Rins",
                "srcFoto": "https://resources.motogp.pulselive.com/photo-resources/2025/02/10/5e238bf1-7951-4547-97c3-ec62c7af0c92/CxMFdBMs.png?height=1400&width=1800"
            }
        ]
    },
    {
        "nome": "Pertamina Enduro VR46 Racing Team",
        "srcVideo": "../../../assets/equipes/motos/pertamina.mp4",
        "pilotos": [
            {
                "nome": "Franco Morbidelli",
                "srcFoto": "https://resources.motogp.pulselive.com/photo-resources/2025/02/10/a68a0e53-80b3-44b3-a5fe-ed245f817df4/Mxvp8G7i.png?height=1400&width=1800"
            },
            {
                "nome": "Fabio Di Giannantonio",
                "srcFoto": "https://resources.motogp.pulselive.com/photo-resources/2025/02/10/6ae96a17-d675-4dd9-b817-391bc4cd4555/CUaUtv2l.png?height=1400&width=1800"
            }
        ]
    },
    {
        "nome": "Prima Pramac Yamaha MotoGP",
        "srcVideo": "../../../assets/equipes/motos/prima-yamaha.mp4",
        "pilotos": [
            {
                "nome": "Jack Miller",
                "srcFoto": "https://resources.motogp.pulselive.com/photo-resources/2025/02/10/c1787ba0-46dd-4421-acc2-5b752cba4dd8/SNqHTjGK.png?height=1400&width=1800"
            },
            {
                "nome": "Miguel Oliveira",
                "srcFoto": "https://resources.motogp.pulselive.com/photo-resources/2025/04/10/45a86bfe-62cb-4332-9196-9db53d8147f6/3QFNaOUw.png?height=1400&width=1800"
            }
        ]
    },
    {
        "nome": "Red Bull KTM Factory Racing",
        "srcVideo": "../../../assets/equipes/motos/redbull-ktm-fac.mp4",
        "pilotos": [
            {
                "nome": "Brad Binder",
                "srcFoto": "https://resources.motogp.pulselive.com/photo-resources/2025/02/10/a2af759a-5879-47f1-b94c-2b9c48d01852/mjAvgii1.png?height=1400&width=1800"
            },
            {
                "nome": "Pedro Acosta",
                "srcFoto": "https://resources.motogp.pulselive.com/photo-resources/2025/02/10/31931e59-0557-4f74-8fac-326c50dd9d60/I7CE3pUc.png?height=1400&width=1800"
            }
        ]
    },
    {
        "nome": "Red Bull KTM Tech3",
        "srcVideo": "../../../assets/equipes/motos/redbull-ktm-tech.mp4",
        "pilotos": [
            {
                "nome": "Maverick Viñales",
                "srcFoto": "https://resources.motogp.pulselive.com/photo-resources/2025/02/10/af0af1d5-a53c-47ee-988d-8ad6c37fe189/6PCFCrQu.png?height=1400&width=1800"
            },
            {
                "nome": "Enea Bastianini",
                "srcFoto": "https://resources.motogp.pulselive.com/photo-resources/2025/02/10/cc91f6f5-00b2-468d-8bf0-587cb6e586ff/IYo43ylh.png?height=1400&width=1800"
            }
        ]
    },
    {
        "nome": "Trackhouse MotoGP Team",
        "srcVideo": "../../../assets/equipes/motos/trackhouse.mp4",
        "pilotos": [
            {
                "nome": "Raul Fernandez",
                "srcFoto": "https://resources.motogp.pulselive.com/photo-resources/2025/02/10/1bcfb911-d846-4e2b-b759-f67046d2a722/tczdcKow.png?height=1400&width=1800"
            },
            {
                "nome": "Ai Ogura",
                "srcFoto": "https://resources.motogp.pulselive.com/photo-resources/2025/03/14/8878f076-540a-4861-bde9-a748f72d9628/qBvY03bN.png?height=1400&width=1800"
            }
        ]
    },
]


function mudarEquipe(nomeEquipe) {
    let nome_equipe = document.querySelector(".nome-da-equipe");
    let pilotos = document.querySelectorAll(".piloto");
    equipes.forEach((equipe) => {
        if (equipe.nome === nomeEquipe) {
            nome_equipe.textContent = equipe.nome;
            pilotos.forEach((piloto, index) => {
                if (equipe.pilotos[index]) {
                    piloto.querySelector(".nome-piloto").textContent = equipe.pilotos[index].nome;
                    piloto.querySelector(".piloto-foto").src = equipe.pilotos[index].srcFoto;
                } else {
                    piloto.querySelector(".nome-piloto").textContent = "";
                    piloto.querySelector(".piloto-foto").src = "";
                }
            });
            if (video.src !== equipe.srcVideo) {
                video.src = equipe.srcVideo;
                video.load();
                slider.value = 0;
            }
        }
    });

}
// 1. Adicionamos a propriedade "description" em cada animal
const slidesData = [
    {
        title: "Leopardo<br>de Amur",
        status: "Criticamente em Perigo",
        description: "O leopardo-de-amur é um dos felinos mais raros do mundo. Nativo do sudeste da Rússoa e norte da China, é conhecido por sua pelagem grossa adaptada ao clima frio."
    },
    {
        title: "Leão<br>Asiático",
        status: "Em perigo",
        description: "Diferente dos leões africanos, o leão asiático possui uma juba menor e uma dobra de pele longitudinal ao longo da barriga. Hoje vivem apenas na Floresta de Gir, na Índia."
    },
    {
        title: "Tigre<br>Siberiano",
        status:"Endangered",
        description: "Também conhecido como tigre-de-amur, é o maior felino do mundo. Um macho adulto pode pesar mais de 300kg. Eles são solitários e caçam grandes presas em florestas nevadas."
    },
    {
        title: "Urso<br>Pardo",
        status: "Pouco Preocupante",
        description: "O urso-pardo é um dos maiores carnívoros terrestres. Eles são onívoros e hibernam durantem o inverso. Sua força e tamanho impões respeito em todo o hemisfério norte."
    }
];

let currentSlide = 0;

const titleEl = document.getElementById('slide-title');
const statusEl = document.getElementById('slide-status');
// NOVO: Selecionamos o elemento da descrição
const descEl = document.getElementById('slide-description');

const images = document.querySelectorAll('.slide-img');
const nextBtn = document.getElementById('nextBtn');

function nextSlide(){
    images[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % slidesData.length;
    images[currentSlide].classList.add('active');

    // Adicionamos o descEl na lista de coisas para animar
    gsap.to([titleEl, statusEl, descEl], {
        duration: 0.2,
        opacity: 0,
        y: -20,
        onComplete: () => {
            titleEl.innerHTML = slidesData[currentSlide].title;
            statusEl.innerHTML = slidesData[currentSlide].status;
            // NOVO: Atualiza o texto da descrição
            descEl.innerHTML = slidesData[currentSlide].description;

            gsap.fromTo([titleEl, statusEl, descEl],
                {opacity: 0, y: 30 },
                {duration: 0.8, opacity: 1, y: 0, ease: "power2.out"}
            );
        }
    });
}

nextBtn.addEventListener('click', nextSlide);
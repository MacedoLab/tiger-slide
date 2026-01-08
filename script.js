const slidesData = [
    {
        title: "Leopardo<br>de Amur",
        status: "Criticamente em Perigo",
        description: "O leopardo-de-amur é um dos felinos mais raros do mundo. Nativo do sudeste da Rússia e norte da China, é conhecido por sua pelagem grossa adaptada ao clima frio.",
        caracteristicas: "<strong>Peso:</strong> 32 a 48kg<br><strong>Comp:</strong> 1,0 a 1,4m<br><strong>Altura:</strong> 65 a 78cm"
    },
    {
        title: "Leão<br>Asiático",
        status: "Em perigo",
        description: "Vivem exclusivamente na Floresta de Gir, na Índia. Diferenciam-se dos primos africanos pela juba menor e uma dobra de pele na barriga.",
        caracteristicas: "<strong>Peso:</strong> 160 a 190kg<br><strong>Comp:</strong> 1,9 a 2,8m<br><strong>Altura:</strong> 1,0 a 1,2m"
    },
    {
        title: "Tigre<br>Siberiano",
        status:"Em perigo",
        description: "O maior de todos os felinos. Solitário e poderoso, percorre imensas distâncias na neve para caçar. Um macho adulto é um predador sem rivais.",
        caracteristicas: "<strong>Peso:</strong> 180 a 306kg<br><strong>Comp:</strong> 2,7 a 3,3m<br><strong>Altura:</strong> 1,1 a 1,2m"
    },
    {
        title: "Urso<br>Pardo",
        status: "Pouco Preocupante",
        description: "Um gigante onívoro. Embora sua população global esteja estável, subespécies locais enfrentam ameaças. Acumulam gordura no outono para hibernar.",
        caracteristicas: "<strong>Peso:</strong> 250 a 600 kg<br><strong>Comp:</strong> 1,4 a 2,8 m<br><strong>Altura:</strong> Até 3,0 m (em pé)"
    },
    {
        title: "Rinoceronte",
        status: "Em perigo",
        description: "O segundo maior mamífero terrestre. Apesar do nome, é cinza. Sua pele grossa funciona como armadura e seus chifres são feitos de queratina.",
        caracteristicas: "<strong>Peso:</strong> 1.800 a 2.500 kg<br><strong>Comp:</strong> 3,4 a 4,2 m<br><strong>Altura:</strong> 1,5 a 1,8 m"
    }
];

let currentSlide = 0;

const titleEl = document.getElementById('slide-title');
const statusEl = document.getElementById('slide-status');
const descEl = document.getElementById('slide-description');
const caraEl = document.getElementById('slide-caracteristicas');

const images = document.querySelectorAll('.slide-img');
const nextBtn = document.getElementById('nextBtn');

function nextSlide(){
    images[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % slidesData.length;
    images[currentSlide].classList.add('active');

    gsap.to([titleEl, statusEl, descEl, caraEl], {
        duration: 0.2,
        opacity: 0,
        y: -20,
        onComplete: () => {
            titleEl.innerHTML = slidesData[currentSlide].title;
            statusEl.innerHTML = slidesData[currentSlide].status;
            descEl.innerHTML = slidesData[currentSlide].description;
            caraEl.innerHTML = slidesData[currentSlide].caracteristicas;

            gsap.fromTo([titleEl, statusEl, descEl, caraEl],
                {opacity: 0, y: 30 },
                {duration: 0.8, opacity: 1, y: 0, ease: "power2.out"}
            );
        }
    });
}

nextBtn.addEventListener('click', nextSlide);

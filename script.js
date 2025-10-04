// Main Application Code
// Permulaan
document.addEventListener('DOMContentLoaded', function() {
    const stiker1 = document.getElementById('stiker1');
    const stiker1a = document.getElementById('stiker1a');
    const stiker1b = document.getElementById('stiker1b');

    document.querySelector("#hal1").style = "transform:scale(0)";
    document.querySelector(".circ").style = "display:none";
    setTimeout(() => {
        document.querySelector("#hal1").style = "transform:scale(1)";
        document.querySelector(".circ").style = "";
        if (stiker1) stiker1.style = "transform:scale(1)";
    }, 1000);

    // Elemen Background
    const backgroundOverlay = document.querySelector('.background-overlay');
    if (backgroundOverlay) {
        const bgImageUrl = backgroundOverlay.getAttribute('data-src');
        if (bgImageUrl) {
            backgroundOverlay.style.background = `url('${bgImageUrl}') no-repeat center center fixed`;
            backgroundOverlay.style.backgroundSize = 'cover';
        }
    }

    // Input Range Handler
    const tahunLahirInput = document.getElementById('tahunLahir');
    const tahunLahirOutput = document.getElementById('tahunLahirOutput');
    if (tahunLahirInput && tahunLahirOutput) {
        tahunLahirInput.addEventListener('input', () => {
            tahunLahirOutput.textContent = tahunLahirInput.value;
        });
    }

    // Auto Scroll
    const container = document.querySelector(".textOverlay");
    if (container) {
        const scrollInterval = setInterval(() => {
            container.scrollTop += 10;
        }, 50);
    }
});

// Card Data (will be shuffled every time the game starts)
const kartuTemplate = [
    { id: 3, icon: '💖', pesan: 'a treasure that…' },
    { id: 5, icon: '💐', pesan: 'in my heart…' },
    { id: 1, icon: '🎂', pesan: 'Every moment…' },
    { id: 6, icon: '🎉', pesan: 'forever.' },
    { id: 2, icon: '🌹', pesan: 'with you is…' },
    { id: 4, icon: '🍫', pesan: 'priceless…' },
    { id: 1, icon: '🎂', pesan: 'Every moment…' },
    { id: 3, icon: '💖', pesan: 'a treasure that…' },
    { id: 5, icon: '💐', pesan: 'in my heart…' },
    { id: 2, icon: '🌹', pesan: 'with you is…' },
    { id: 4, icon: '🍫', pesan: 'priceless…' },
    { id: 6, icon: '🎉', pesan: 'forever.' }
];

// Animasi Kelopak Bunga
let animationFrameId; // Variabel global untuk menyimpan ID requestAnimationFrame
function mulaiKelopak(canvasId) {
    const canvas = document.getElementById(canvasId);
    if (!canvas) return; // Cek apakah canvas ada
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const kelopak = Array.from({ length: 20 }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 5 + 2,
        speed: Math.random() * 2 + 1
    }));

    function gambarKelopak() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        kelopak.forEach(petal => {
            ctx.beginPath();
            ctx.arc(petal.x, petal.y, petal.radius, 0, Math.PI * 2);
            ctx.fillStyle = '#f87171';
            ctx.fill();
            petal.y += petal.speed;
            if (petal.y > canvas.height) petal.y = -petal.radius;
            petal.x += Math.sin(petal.y / 50) * 2;
        });
        animationFrameId = requestAnimationFrame(gambarKelopak);
    }
    gambarKelopak();
}

// Animasi Hati Jatuh
let intervalHati;
function hatiJatuh() {
    const hati = document.createElement('div');
    hati.className = 'hati';
    hati.innerHTML = `<svg class='line' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><g transform='translate(2.550170, 3.550158)'><path d='M0.371729633,8.89614246 C-0.701270367,5.54614246 0.553729633,1.38114246 4.07072963,0.249142462 C5.92072963,-0.347857538 8.20372963,0.150142462 9.50072963,1.93914246 C10.7237296,0.0841424625 13.0727296,-0.343857538 14.9207296,0.249142462 C18.4367296,1.38114246 19.6987296,5.54614246 18.6267296,8.89614246 C16.9567296,14.2061425 11.1297296,16.9721425 9.50072963,16.9721425 C7.87272963,16.9721425 2.09772963,14.2681425 0.371729633,8.89614246 Z'></path><path d='M13.23843,4.013842 C14.44543,4.137842 15.20043,5.094842 15.15543,6.435842'></path></g></svg>`;
    hati.style.left = Math.random() * 100 + 'vw';
    hati.addEventListener('animationend', () => hati.remove());
    document.body.appendChild(hati);
}

// Buka Envelope
function bukaEnvelope() {
    const envelope = document.getElementById('envelope');
    envelope.classList.remove('close');
    envelope.classList.add('open');
    document.querySelector(".reset").style = "transform:scale(0);opacity:0;transition:all .7s ease";
    setTimeout(() => {
        document.querySelector("#envelope").style = "transform:scale(0);opacity:0;transition:all .7s ease";
        setTimeout(() => {
            pindahHal(3);
            envelope.classList.remove('open');
            envelope.classList.add('close');
        }, 700);
    }, 1200);
}

// Halaman 3: Memory Game
let kartuDibuka = [];
let pasanganCocok = 0;
let gameJalan = false;

function acakKartu(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Halaman 4: Memory Game
function mulaiHal4() {
    kartuDibuka = [];
    pasanganCocok = 0;
    gameJalan = true;
    document.getElementById('kotakPesan').innerHTML = '';
    document.getElementById('statusGame').innerText = '';
    document.getElementById('lanjut').classList.add('sembunyi');
    document.getElementById('ulang').classList.add('sembunyi');

    // Shuffle kartu setiap kali game dimulai agar posisinya selalu random
    const kartu = acakKartu([...kartuTemplate]);

    const papanGame = document.getElementById('papanGame');
    papanGame.innerHTML = '';
    kartu.forEach((card, index) => {
        const elemenKartu = document.createElement('div');
        elemenKartu.className = 'kartu';
        elemenKartu.dataset.id = card.id;
        elemenKartu.innerHTML = `
            <div class="dalemKartu">
                <div class="depanKartu"></div>
                <div class="belakangKartu">${card.icon}</div>
            </div>
        `;
        elemenKartu.addEventListener('click', () => balikKartu(elemenKartu, card, index));
        papanGame.appendChild(elemenKartu);
    });

    mulaiKelopak('game-canvas');
}

function balikKartu(elemenKartu, card, index) {
    if (!gameJalan || kartuDibuka.length >= 2 || elemenKartu.classList.contains('balik')) return;
    elemenKartu.classList.add('balik');
    kartuDibuka.push({ elemen: elemenKartu, card, index });

    if (kartuDibuka.length === 2) {
        const [kartu1, kartu2] = kartuDibuka;
        if (kartu1.card.id === kartu2.card.id) {
            pasanganCocok++;
            kartuDibuka = [];
            if (pasanganCocok === 6) selesaiGame(true);
        } else {
            setTimeout(() => {
                kartu1.elemen.classList.remove('balik');
                kartu2.elemen.classList.remove('balik');
                kartuDibuka = [];
            }, 1000);
        }
    }
}

function selesaiGame(sukses) {
    gameJalan = false;
    const status = document.getElementById('statusGame');
    if (sukses) {
        // Stop petal animation
        if (animationFrameId) {
            cancelAnimationFrame(animationFrameId);
            animationFrameId = null;
        }
        // Remove canvas
        const canvas = document.getElementById('game-canvas');
        if (canvas) {
            canvas.remove();
        }
        // Go to page 5 (photo gallery) first, then page 6 (final message)
        setTimeout(() => { pindahHal(5); }, 800);
    } else {
        status.innerText = 'Your moments are too precious to miss, try again! 🌌';
        document.getElementById('ulang').classList.remove('sembunyi');
    }
}

// Animasi Kembang Api
function mulaiKembangApi(canvasId) {
    const canvas = document.getElementById(canvasId);
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    const fireworks = [];
    const colors = ['#ff6f91', '#ffd1dc', '#ffffff', '#f87171'];

    function createFirework() {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height * 0.5;
        const color = colors[Math.floor(Math.random() * colors.length)];
        const particles = [];

        for (let i = 0; i < 22; i++) {
            const angle = Math.random() * Math.PI * 2;
            const speed = Math.random() * 5 + 2;
            particles.push({
                x: x,
                y: y,
                vx: Math.cos(angle) * speed,
                vy: Math.sin(angle) * speed,
                radius: Math.random() * 3 + 1,
                color: color,
                life: 100,
                alpha: 1
            });
        }
        fireworks.push({ particles });
    }

    let lastFrameTime = 0;
    const frameInterval = 1000 / 60;

    function drawFireworks(timestamp) {
        if (timestamp - lastFrameTime < frameInterval) {
            requestAnimationFrame(drawFireworks);
            return;
        }
        lastFrameTime = timestamp;

        ctx.clearRect(0, 0, canvas.width, canvas.height);
        fireworks.forEach((firework, index) => {
            firework.particles.forEach((particle) => {
                ctx.beginPath();
                ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(${parseInt(particle.color.slice(1, 3), 16)}, ${parseInt(particle.color.slice(3, 5), 16)}, ${parseInt(particle.color.slice(5, 7), 16)}, ${particle.alpha})`;
                ctx.fill();

                particle.x += particle.vx;
                particle.y += particle.vy;
                particle.vy += 0.05;
                particle.alpha -= 0.01;
                particle.life--;

                if (particle.life <= 0) {
                    particle.alpha = 0;
                }
            });

            firework.particles = firework.particles.filter(p => p.life > 0);
            if (firework.particles.length === 0) {
                fireworks.splice(index, 1);
            }
        });

        if (Math.random() < 0.065) createFirework();
        requestAnimationFrame(drawFireworks);
    }

    requestAnimationFrame(drawFireworks);
}

// Page 6: Final Message
function mulaiHal6() {
    const stiker3 = document.getElementById('stiker3');
    const stiker3a = document.getElementById('stiker3a');
    const stiker3b = document.getElementById('stiker3b');
    const tahunLahirInput = document.getElementById('tahunLahir');

    stiker3.style = "transform:scale(1)";
    const usiaKamu = new Date().getFullYear() - parseInt(tahunLahirInput.value);

    const txtDoa = `Happy <b>${usiaKamu}th</b> Birthday! 🎉🎂`;
    const txtPesanAkhir = "<b>Happy Birthday! 🥳</b> Yay.. Someone's getting older! 😆🤏, but Don't worry you're just leveling up! 😉<br><br>May this new chapter be filled with boundless joy, incredible health, and may all your heartfelt prayers be answered. I hope today is just the beginning of a year full of wonderful blessings, unforgettable moments, and all the happiness you deserve";
    const txtLucu = "And may today be the beginning of a year full of blessings and happiness for you 💐<br><br><b><i>Shine on! The world is yours. 🚀<br><br><b><i>Wish you all the best!</i> 🎉🥳</b>";
    const speedText = 20;

    const canvas = document.getElementById('fireworks-canvas');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Tambah delay kecil untuk memastikan element sudah siap
    setTimeout(() => {
        new TypeIt("#teksCinta", {
            strings: txtDoa,
            speed: speedText,
            startDelay: 100,
        afterComplete: function () {
            const cursor = document.querySelector("#teksCinta .ti-cursor");
            if (cursor) cursor.style.display = "none";
            new TypeIt("#pesanAkhir", {
                strings: txtPesanAkhir,
                speed: speedText,
                waitUntilVisible: false,
                afterComplete: function () {
                    const cursor2 = document.querySelector("#pesanAkhir .ti-cursor");
                    if (cursor2) cursor2.style.display = "none";
                    new TypeIt("#teksLucu", {
                        strings: txtLucu,
                        speed: speedText,
                        waitUntilVisible: false,
                        afterComplete: function () {
                            document.querySelector("#teksLucu .ti-cursor").style.display = "none";
                            intervalHati = setInterval(hatiJatuh, 200);
                            document.querySelector("#hal6 .tombol").style = "transform:scale(1);opacity:1;";

                            setTimeout(() => {
                                stiker3.style = "transform:scale(0)";
                                setTimeout(() => {
                                    stiker3a.src = stiker3b.src;
                                    stiker3.style = "transform:scale(1)";
                                }, 300);
                            }, 50);
                            setTimeout(() => { mulaiKembangApi('fireworks-canvas') }, 50);
                        }
                    }).go();
                }
            }).go();
        }
    }).go();
    }, 200); // Delay 200ms untuk memastikan DOM ready
}

// Music Controls
let musicPlaying = false;
function toggleMusic() {
    const music = document.getElementById('bgMusic');
    const button = document.getElementById('musicToggle');

    if (musicPlaying) {
        music.pause();
        button.textContent = '🔇';
        button.classList.remove('playing');
    } else {
        music.play();
        button.textContent = '🔊';
        button.classList.add('playing');
    }
    musicPlaying = !musicPlaying;
}

// Photo Gallery
let currentPhotoIndex = 1;

function changePhoto(n) {
    showPhoto(currentPhotoIndex += n);
}

function currentPhoto(n) {
    showPhoto(currentPhotoIndex = n);
}

function showPhoto(n) {
    const slides = document.getElementsByClassName('photo-slide');
    const dots = document.getElementsByClassName('dot');

    if (n > slides.length) currentPhotoIndex = 1;
    if (n < 1) currentPhotoIndex = slides.length;

    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove('active');
    }
    for (let i = 0; i < dots.length; i++) {
        dots[i].classList.remove('active');
    }

    if (slides[currentPhotoIndex - 1]) {
        slides[currentPhotoIndex - 1].classList.add('active');
    }
    if (dots[currentPhotoIndex - 1]) {
        dots[currentPhotoIndex - 1].classList.add('active');
    }
}

// Auto slideshow (optional)
function autoSlideshow() {
    changePhoto(1);
}
// Uncomment to enable auto slideshow every 4 seconds
// setInterval(autoSlideshow, 4000);

// Navigasi Halaman
function pindahHal(hal) {
    for (let i = 1; i <= 6; i++) {
        if (hal < 6 && i !== 1) {
            const halElement = document.getElementById(`hal${i}`);
            if (halElement) halElement.classList.add('sembunyi');
        }
    }
    if (hal < 6) {
        const halElement = document.getElementById(`hal${hal}`);
        if (halElement) halElement.classList.remove('sembunyi');
    }

    setTimeout(() => {
        if (hal === 2) {
            document.getElementById(`hal${hal - 1}`).style = "transform:scale(0)";
            setTimeout(() => {
                document.getElementById(`hal${hal - 1}`).classList.add('sembunyi');
                document.getElementById(`hal${hal}`).classList.remove('sembunyi');
                setTimeout(() => { document.getElementById(`hal${hal}`).style = "transform:scale(1);transition:all .7s ease"; }, 100);
            }, 700);
        } else if (hal === 3) {
            document.getElementById(`hal${hal}`).style = "transform:scale(1);transition:all .7s ease";
            const tombol = document.querySelector("#hal3 .tombol");
            if (tombol) tombol.style = "transform:scale(1);opacity:1;transition:all .7s ease";
            const stiker2 = document.getElementById('stiker2');
            if (stiker2) stiker2.style = "transform:scale(1)";
        } else if (hal === 4) {
            mulaiHal4();
            document.getElementById(`hal${hal}`).style = "transform:scale(1);transition:all .7s ease";
        } else if (hal === 5) {
            document.getElementById(`hal${hal - 1}`).style = "transform:scale(0);transition:all .7s ease";
            setTimeout(() => {
                document.getElementById(`hal${hal - 1}`).classList.add('sembunyi');
                document.getElementById(`hal${hal}`).classList.remove('sembunyi');
                setTimeout(() => {
                    document.getElementById(`hal${hal}`).style = "transform:scale(1);transition:all .7s ease";
                    currentPhotoIndex = 1; // Reset photo gallery
                }, 100);
            }, 700);
        } else if (hal === 6) {
            document.getElementById(`hal${hal - 1}`).style = "transform:scale(0);transition:all .7s ease";
            setTimeout(() => {
                document.getElementById(`hal${hal - 1}`).classList.add('sembunyi');
                document.getElementById(`hal${hal}`).classList.remove('sembunyi');
                setTimeout(() => { document.getElementById(`hal${hal}`).style = "transform:scale(1);transition:all .7s ease"; }, 100);
                setTimeout(() => { mulaiHal6(); }, 150);
            }, 700);
        } else {
            document.getElementById(`hal${hal - 1}`).style = "transform:scale(0);transition:all .7s ease";
            setTimeout(() => {
                document.getElementById(`hal${hal - 1}`).classList.add('sembunyi');
                document.getElementById(`hal${hal}`).classList.remove('sembunyi');
                setTimeout(() => { document.getElementById(`hal${hal}`).style = "transform:scale(1);transition:all .7s ease"; }, 100);
            }, 700);
        }
    }, 50);
}

// Lihat Gallery Foto Kenangan
function lihatGallery() {
    pindahHal(5);
}

// Share to WhatsApp
function balasWa() {
    const url = window.location.href;
    const text = "Thank you for the birthday wishes! ❤️";
    window.open(`https://wa.me/?text=${encodeURIComponent(text)}`, '_blank');
}

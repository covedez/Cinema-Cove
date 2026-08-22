// ---------- DATA ----------
const cartelera = [
  {title:"Doctor Strange en el Multiverso de la Locura",
    genre:"Ciencia ficción",
    dur:"2h 14m", 
    rating:"14+", 
    poster:"assets/images/doctor_stranger.jpg",
    times:["14:30","17:15","20:00","22:40"]},

  {title:"Spider-man Brand New Day",
    genre:"Acción",
    dur:"1h 58m", rating:"16+",
    poster:"assets/images/spiderman_newday.jpg",
    times:["15:00","18:20","21:10"]},

  {title:"Deadpool y Wolverine",
    genre:"Comedia",
    dur:"1h 42m", rating:"TE",
    poster:"assets/images/deadpool_wolverine.jpg",
    times:["13:00","16:00","19:00"]},

  {title:"Los 4 Fantasticos Primeros Pasos",
    genre:"Acción", dur:"2h 08m", rating:"14+",
    poster:"assets/images/los4fantasticos.jpg",
    times:["14:00","17:00","20:30","23:00"]},

  {title:"Avengers Endgame",
    genre:"Animación",
    dur:"1h 35m", rating:"TE",
    poster:"assets/images/marvel_endgame.jpg",
    times:["12:30","15:15","18:00"]},

  {title:"Avengers Infinity War",
    genre:"Drama",
    dur:"2h 20m",
    rating:"16+",
    poster:"assets/images/marvel_infinity.jpg",
    times:["16:40","19:50","22:30"]},
];

const estrenos = [
  {title:"Avengers Doomsday", 
    genre:"Aventura",
    date:"4 Sep 2026",
    poster:"assets/images/Avengers Doomsday.jpg"},

  {title:"Avengers Secret Wars",
    genre:"Suspenso",
    date:"11 Sep 2026",
    poster:"assets/images/secret wars.jpg"},

  {title:"X Men",
    genre:"Fantasía",
    date:"18 Sep 2026",
    poster:"assets/images/xmen.jpg"},

  {title:"Spider-man Beyond The Spider-verse",
    genre:"Acción",
    date:"25 Sep 2026",
    poster:"assets/images/beyond spiderman.jpg"},
];

const populares = [
  {title:"Deadpool y Wolverine",
    genre:"Ciencia ficción · 2h 14m",
    heat:"92% ocupación",
    poster:"assets/images/deadpool_wolverine.jpg"},

  {title:"Spider-man Brand New Day",
    genre:"Acción · 2h 08m",
    heat:"87% ocupación",
    poster:"assets/images/spiderman_newday.jpg"},

  {title:"Los 4 Fantasticos Primeros Pasos",
    genre:"Thriller · 1h 58m",
    heat:"81% ocupación",
    poster:"assets/images/los4fantasticos.jpg"},

  {title:"Doctor Strange en el Multiverso de la Locura",
    genre:"Animación · 1h 35m",
    heat:"74% ocupación",
    poster:"assets/images/doctor_stranger.jpg"},

  {title:"Avengers Endgame",
    genre:"Comedia · 1h 42m",
    heat:"68% ocupación",
    poster:"assets/images/marvel_endgame.jpg"},
];

// ---------- RENDER CARTELERA / ESTRENOS ----------
const carteleraGrid = document.getElementById('cartelera-grid');
cartelera.forEach(m=>{
  carteleraGrid.innerHTML += `
    <div class="ticket">
      <div class="poster" style="background-image:url('${m.poster}')"><span class="rating">${m.rating}</span></div>
      <div class="perforation"></div>
      <div class="ticket-body">
        <h3>${m.title}</h3>
        <div class="ticket-tags"><span>${m.genre}</span><span>·</span><span>${m.dur}</span></div>
        <div class="showtimes">${m.times.map(t=>`<span>${t}</span>`).join('')}</div>
      </div>
    </div>`;
});

const estrenosGrid = document.getElementById('estrenos-grid');
estrenos.forEach(m=>{
  estrenosGrid.innerHTML += `
    <div class="ticket">
      <div class="poster" style="background-image:url('${m.poster}')"></div>
      <div class="perforation"></div>
      <div class="ticket-body">
        <h3>${m.title}</h3>
        <div class="ticket-tags"><span>${m.genre}</span></div>
        <span class="coming-date">Estreno · ${m.date}</span>
      </div>
    </div>`;
});

const rankList = document.getElementById('rank-list');
populares.forEach((m,i)=>{
  rankList.innerHTML += `
    <div class="rank-item">
      <div class="rank-num">${String(i+1).padStart(2,'0')}</div>
      <div class="rank-thumb" style="background-image:url('${m.poster}')"></div>
      <div class="rank-info"><h4>${m.title}</h4><p>${m.genre}</p></div>
      <div class="rank-heat">${m.heat}</div>
    </div>`;
});

// ---------- HERO CAROUSEL ----------
const slideEls = document.querySelectorAll('.slide');
const dotsWrap = document.getElementById('dots');
let current = 0;
slideEls.forEach((_,i)=>{
  const d = document.createElement('div');
  d.className = 'dot' + (i===0 ? ' active':'');
  d.onclick = ()=> goTo(i);
  dotsWrap.appendChild(d);
});
const dotEls = document.querySelectorAll('.dot');

function goTo(i){
  slideEls[current].classList.remove('active');
  dotEls[current].classList.remove('active');
  current = (i + slideEls.length) % slideEls.length;
  slideEls[current].classList.add('active');
  dotEls[current].classList.add('active');
}
function moveSlide(dir){ goTo(current + dir); }
let autoplay = setInterval(()=> moveSlide(1), 6000);
document.querySelector('.hero').addEventListener('mouseenter', ()=> clearInterval(autoplay));
document.querySelector('.hero').addEventListener('mouseleave', ()=> autoplay = setInterval(()=> moveSlide(1), 6000));

// ---------- LOGIN MODAL ----------
function openLogin(){ document.getElementById('loginModal').classList.add('open'); }
function closeLogin(){ document.getElementById('loginModal').classList.remove('open'); }
document.getElementById('loginModal').addEventListener('click', e=>{
  if(e.target.id === 'loginModal') closeLogin();
});
document.addEventListener('keydown', e=>{
  if(e.key === 'Escape') closeLogin();
});
(() => {
'use strict';
const $=(s,r=document)=>r.querySelector(s), $$=(s,r=document)=>[...r.querySelectorAll(s)];
const reduced=matchMedia('(prefers-reduced-motion: reduce)').matches;

// External links
const links={bandcamp:'https://descienda.bandcamp.com/',instagram:'https://www.instagram.com/desciendafuego/',spotify:'https://open.spotify.com/intl-es/artist/0SxyaTtvftazxnKESp40g5',apple:'https://music.apple.com/us/artist/descienda/1755248660',youtube:'https://music.youtube.com/channel/UCECF5P8sv1IY4-p6Udnh2Sg'};
const socials=$('.socials');
if(socials) socials.innerHTML=`
<a href="${links.bandcamp}" target="_blank" rel="noopener noreferrer" aria-label="Bandcamp"><img src="assets/bandcamp.webp" alt="Bandcamp"></a>
<a href="${links.spotify}" target="_blank" rel="noopener noreferrer" aria-label="Spotify"><svg viewBox="0 0 24 24"><path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm4.58 14.42a.62.62 0 0 1-.86.2c-2.36-1.44-5.34-1.77-8.84-.97a.625.625 0 1 1-.28-1.22c3.83-.87 7.12-.49 9.78 1.13.3.18.39.57.2.86Zm1.23-2.73a.78.78 0 0 1-1.08.26c-2.7-1.66-6.82-2.14-10.02-1.17a.78.78 0 1 1-.45-1.5c3.65-1.1 8.19-.57 11.3 1.34.37.22.48.7.25 1.07Zm.1-2.84C14.67 8.92 9.34 8.74 6.25 9.67a.94.94 0 1 1-.54-1.79c3.55-1.07 9.44-.85 13.16 1.36a.94.94 0 0 1-.96 1.61Z"/></svg></a>
<a href="${links.apple}" target="_blank" rel="noopener noreferrer" aria-label="Apple Music"><svg viewBox="0 0 24 24"><path d="M18.71 12.55c-.03-3.08 2.51-4.58 2.63-4.65a5.66 5.66 0 0 0-4.45-2.4c-1.87-.2-3.68 1.12-4.63 1.12-.97 0-2.43-1.1-4.01-1.07a5.9 5.9 0 0 0-4.97 3.03c-2.15 3.72-.55 9.19 1.51 12.2 1.03 1.47 2.23 3.12 3.81 3.06 1.55-.06 2.13-.98 4-.98 1.84 0 2.39.98 4 .94 1.66-.03 2.71-1.48 3.7-2.96a12.2 12.2 0 0 0 1.69-3.44 5.3 5.3 0 0 1-3.28-4.85ZM15.67 3.52A5.37 5.37 0 0 0 16.9-.35a5.47 5.47 0 0 0-3.53 1.84 5.13 5.13 0 0 0-1.27 3.73 4.52 4.52 0 0 0 3.57-1.7Z"/></svg></a>
<a href="${links.instagram}" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><svg viewBox="0 0 24 24"><path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7Zm10.5 1.5a1 1 0 1 1 0 2 1 1 0 0 1 0-2ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z"/></svg></a>
<a href="${links.youtube}" target="_blank" rel="noopener noreferrer" aria-label="YouTube Music"><svg viewBox="0 0 24 24"><path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8ZM9.6 15.6V8.4L15.8 12l-6.2 3.6Z"/></svg></a>`;

document.addEventListener('contextmenu',e=>e.preventDefault());
document.addEventListener('dragstart',e=>{if(e.target.closest('img'))e.preventDefault()});

// Gallery: always built with plain JS; no dependency can prevent it rendering.
const copy=[
'El alma despierta en un mundo roto y contempla una luz que la atrae y la aterra. Volver a ella implica abandonar aquello que había aprendido a llamar identidad.',
'La contracción abre el espacio de lo separado y la totalidad se fragmenta. Las chispas quedan dispersas dentro de una realidad que ha olvidado su procedencia.',
'La mirada se vuelve hacia dentro. El dominio comienza al reconocer la inclinación, la sombra y aquello que habla desde el interior cuando el yo deja de ocupar todo el espacio.',
'El despertar también puede extraviarse entre falsos destellos. La presencia se oculta mientras la conciencia confunde las formas, el orgullo y el reflejo con aquello que buscaba.',
'El lenguaje se interrumpe ante el rigor. Castigo ocupa el descenso silencioso en el que la conciencia queda frente al peso del juicio.',
'El fuego aparece como práctica interior: atención, contemplación y descenso. En esa llama la separación comienza a perder sus límites.',
'Después del fuego llega el reposo. El movimiento cesa y la conciencia entra en un descanso que no necesita imponerse ni explicarse.',
'Lo fragmentado comienza a integrarse. La sombra deja de ser expulsada y la herida puede revelar aquello que permanecía contenido en ella.',
'Las construcciones de la mente separada pierden consistencia. Al caer sus capas, aquello que parecía sólido revela su carácter provisional.',
'La voluntad de controlar se disuelve. El descenso alcanza su profundidad y lo más bajo toca lo más alto.',
'La pregunta desaparece junto con quien necesitaba formularla. Ya no quedan narrador ni división: solamente el reconocimiento de aquello que nunca estuvo realmente separado.'
];
const gallery=$('#gallery'),modal=$('#modal'),modalImage=$('#modalImage'),modalText=$('#modalText');
if(gallery){
 gallery.replaceChildren();
 copy.forEach((text,i)=>{const b=document.createElement('button');b.type='button';b.className='gallery-item';b.setAttribute('aria-label','Abrir imagen');const img=new Image();img.src=`assets/gallery/${i+1}.webp`;img.alt='';img.loading='lazy';img.draggable=false;b.append(img);b.addEventListener('click',()=>{modalImage.src=img.src;modalText.textContent=text;modal.classList.add('open');modal.setAttribute('aria-hidden','false');document.body.classList.add('modal-open')});gallery.append(b)});
}
const close=()=>{modal?.classList.remove('open');modal?.setAttribute('aria-hidden','true');document.body.classList.remove('modal-open')};
$('#modalClose')?.addEventListener('click',close);modal?.addEventListener('click',e=>{if(e.target===modal)close()});addEventListener('keydown',e=>{if(e.key==='Escape')close()});

// Text glitches: irregular bursts, not a repetitive CSS loop.
$$('.glitch-text').forEach(el=>{if(!el.dataset.text)el.dataset.text=el.innerText.replace(/\n/g,' ')});
if(!reduced){
 const textGlitch=()=>{const a=$$('.glitch-text');if(a.length){const el=a[Math.floor(Math.random()*a.length)];el.classList.add('vhs-glitch');setTimeout(()=>el.classList.remove('vhs-glitch'),150+Math.random()*120)}setTimeout(textGlitch,900+Math.random()*2600)};setTimeout(textGlitch,600);
 const jump=()=>{document.documentElement.style.setProperty('--tear',`${(Math.random()-.5)*14}px`);document.body.classList.add('crt-jump');setTimeout(()=>document.body.classList.remove('crt-jump'),70+Math.random()*90);setTimeout(jump,2600+Math.random()*6200)};setTimeout(jump,1800);
}

// Vanilla Canvas 2D analog signal layer. Transparent: the supplied image remains the real background.
const canvas=$('#analogFx');
if(canvas && !reduced){
 const ctx=canvas.getContext('2d',{alpha:true}); let w=0,h=0,dpr=1,last=0,burst=0,roll=-100;
 function resize(){dpr=Math.min(devicePixelRatio||1,1.5);w=innerWidth;h=innerHeight;canvas.width=Math.round(w*dpr);canvas.height=Math.round(h*dpr);canvas.style.width=w+'px';canvas.style.height=h+'px';ctx.setTransform(dpr,0,0,dpr,0,0)} resize();addEventListener('resize',resize,{passive:true});
 function frame(t){
  ctx.clearRect(0,0,w,h);
  // moving CRT luminance bar
  roll=(roll+0.45)% (h+220)-60;const grad=ctx.createLinearGradient(0,roll-70,0,roll+70);grad.addColorStop(0,'rgba(255,255,255,0)');grad.addColorStop(.5,'rgba(255,180,150,.035)');grad.addColorStop(1,'rgba(255,255,255,0)');ctx.fillStyle=grad;ctx.fillRect(0,roll-70,w,140);
  // sparse analog snow
  for(let i=0;i<Math.min(220,Math.floor(w*h/7000));i++){const a=Math.random()*.055;ctx.fillStyle=`rgba(255,235,225,${a})`;ctx.fillRect(Math.random()*w,Math.random()*h,Math.random()*2+0.5,1)}
  // horizontal dropout / tracking lines
  if(t-last>650+Math.random()*1000){last=t;if(Math.random()>.52)burst=4+Math.floor(Math.random()*6)}
  if(burst>0){const bands=2+Math.floor(Math.random()*4);for(let i=0;i<bands;i++){const y=Math.random()*h,bh=1+Math.random()*8;ctx.fillStyle=`rgba(${Math.random()>.5?'255,65,35':'55,190,205'},${.025+Math.random()*.055})`;ctx.fillRect((Math.random()-.5)*20,y,w,bh);if(Math.random()>.6){ctx.fillStyle='rgba(255,255,255,.035)';ctx.fillRect(0,y+bh+2,w,1)}}burst--}
  // occasional vertical sync edge flare
  if(Math.random()>.992){const x=Math.random()>.5?0:w-10;const g=ctx.createLinearGradient(x,0,x+(x===0?45:-45),0);g.addColorStop(0,'rgba(255,70,35,.10)');g.addColorStop(1,'rgba(255,70,35,0)');ctx.fillStyle=g;ctx.fillRect(Math.min(x,x-45),0,55,h)}
  requestAnimationFrame(frame)
 }requestAnimationFrame(frame);
}
})();

/* Final fixed-image motion pass: intentionally independent of Canvas so the
   background always remains visible even if Canvas effects are unavailable. */
(() => {
  const bg = document.querySelector('.background-image');
  const track = document.querySelector('.tracking-line');
  if (!bg || matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  let x=0,y=0,tx=0,ty=0,t=0;
  addEventListener('pointermove', e => {
    tx=(e.clientX/innerWidth-.5)*5;
    ty=(e.clientY/innerHeight-.5)*3;
  }, {passive:true});
  function drift(){
    t+=.0065;x+=(tx-x)*.018;y+=(ty-y)*.018;
    const dx=Math.sin(t*.83)*2+x, dy=Math.cos(t*.57)*1.2+y;
    bg.style.transform=`scale(1.045) translate3d(${dx}px,${dy}px,0)`;
    requestAnimationFrame(drift);
  }
  requestAnimationFrame(drift);
  function tracking(){
    if(track){
      track.animate([
        {transform:'translateY(0)',opacity:0},
        {opacity:.28,offset:.12},
        {opacity:.10,offset:.82},
        {transform:`translateY(${innerHeight*1.35}px)`,opacity:0}
      ],{duration:950+Math.random()*850,easing:'linear'});
    }
    setTimeout(tracking,2800+Math.random()*5200);
  }
  setTimeout(tracking,1000);
})();


/* v12 — Mobile gallery: autoplay + finger drag/swipe, seamless 11→1 loop. */
(() => {
  const gallery = document.getElementById('gallery');
  if (!gallery) return;

  const mobile = window.matchMedia('(max-width: 800px)');
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
  const REAL_COUNT = 11;
  const STEP = 100 / 3;
  const AUTOPLAY_MS = 3000;
  const TRANSITION_MS = 650;

  let index = 0;
  let timer = null;
  let prepared = false;
  let dragging = false;
  let pointerId = null;
  let startX = 0;
  let currentX = 0;
  let startTranslate = 0;

  const realItems = () =>
    [...gallery.children].filter(el => !el.hasAttribute('data-carousel-clone'));

  const setTransition = (on) => {
    gallery.style.transition = on
      ? `transform ${TRANSITION_MS}ms cubic-bezier(.22,.61,.36,1)`
      : 'none';
  };

  const translateTo = (percent) => {
    gallery.style.transform = `translate3d(${percent}%,0,0)`;
  };

  const goTo = (nextIndex, animate = true) => {
    index = nextIndex;
    setTransition(animate);
    translateTo(-(index * STEP));
  };

  const removeClones = () => {
    gallery.querySelectorAll('[data-carousel-clone]').forEach(el => el.remove());
  };

  function prepare() {
    stopAutoplay();
    removeClones();
    prepared = false;
    index = 0;
    setTransition(false);
    translateTo(0);

    if (!mobile.matches) return;

    const items = realItems();
    if (items.length !== REAL_COUNT) return;

    /* Three leading clones allow 9→10→11→1→2 without a visible jump. */
    items.slice(0, 3).forEach(item => {
      const clone = item.cloneNode(true);
      clone.setAttribute('data-carousel-clone', 'true');
      clone.setAttribute('aria-hidden', 'true');
      clone.tabIndex = -1;
      clone.addEventListener('click', () => item.click());
      gallery.appendChild(clone);
    });

    prepared = true;
    requestAnimationFrame(() => setTransition(true));
  }

  function normalizeAfterEnd() {
    if (index >= REAL_COUNT) {
      setTransition(false);
      index = 0;
      translateTo(0);
      requestAnimationFrame(() => requestAnimationFrame(() => setTransition(true)));
    }
  }

  function next() {
    if (!prepared || dragging) return;
    goTo(index + 1, true);
  }

  function previous() {
    if (!prepared || dragging) return;
    if (index > 0) {
      goTo(index - 1, true);
      return;
    }

    /* Jump invisibly to the equivalent cloned position, then animate backward. */
    setTransition(false);
    index = REAL_COUNT;
    translateTo(-(index * STEP));
    requestAnimationFrame(() => requestAnimationFrame(() => goTo(REAL_COUNT - 1, true)));
  }

  function stopAutoplay() {
    if (timer) clearInterval(timer);
    timer = null;
  }

  function startAutoplay() {
    stopAutoplay();
    if (!prepared || !mobile.matches || reduced.matches || document.hidden) return;
    timer = setInterval(next, AUTOPLAY_MS);
  }

  gallery.addEventListener('transitionend', (e) => {
    if (e.propertyName !== 'transform') return;
    normalizeAfterEnd();
  });

  gallery.addEventListener('pointerdown', (e) => {
    if (!prepared || !mobile.matches) return;
    if (e.pointerType === 'mouse' && e.button !== 0) return;

    dragging = true;
    pointerId = e.pointerId;
    startX = currentX = e.clientX;
    startTranslate = -(index * STEP);
    stopAutoplay();
    setTransition(false);

    try { gallery.setPointerCapture(pointerId); } catch (_) {}
  });

  gallery.addEventListener('pointermove', (e) => {
    if (!dragging || e.pointerId !== pointerId) return;
    currentX = e.clientX;
    const dx = currentX - startX;
    const width = gallery.parentElement?.clientWidth || gallery.clientWidth || 1;
    const deltaPercent = (dx / width) * 100;
    translateTo(startTranslate + deltaPercent);
  });

  function finishDrag(e) {
    if (!dragging || (e && e.pointerId !== pointerId)) return;

    const dx = currentX - startX;
    const width = gallery.parentElement?.clientWidth || gallery.clientWidth || 1;
    const threshold = Math.min(70, width * 0.14);

    dragging = false;
    try { gallery.releasePointerCapture(pointerId); } catch (_) {}
    pointerId = null;

    if (dx <= -threshold) next();
    else if (dx >= threshold) previous();
    else goTo(index, true);

    window.setTimeout(startAutoplay, TRANSITION_MS + 250);
  }

  gallery.addEventListener('pointerup', finishDrag);
  gallery.addEventListener('pointercancel', finishDrag);

  /* Keep vertical page scrolling native while allowing horizontal swipes. */
  gallery.style.touchAction = 'pan-y pinch-zoom';

  const restart = () => {
    prepare();
    startAutoplay();
  };

  if (mobile.addEventListener) mobile.addEventListener('change', restart);
  if (reduced.addEventListener) reduced.addEventListener('change', restart);
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) stopAutoplay();
    else startAutoplay();
  });

  restart();
})();

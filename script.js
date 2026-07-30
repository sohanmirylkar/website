const reduce=matchMedia("(prefers-reduced-motion: reduce)").matches;
document.querySelector("#year").textContent=new Date().getFullYear();
const reveal=new IntersectionObserver(entries=>entries.forEach(e=>e.isIntersecting&&(e.target.classList.add("visible"),reveal.unobserve(e.target))),{threshold:.12});
document.querySelectorAll(".reveal").forEach(el=>reveal.observe(el));
document.querySelectorAll("[data-filter]").forEach(button=>button.addEventListener("click",()=>{
  document.querySelectorAll("[data-filter]").forEach(b=>b.classList.remove("active"));button.classList.add("active");
  document.querySelectorAll(".project").forEach(card=>card.classList.toggle("hidden",button.dataset.filter!=="all"&&card.dataset.cat!==button.dataset.filter));
}));
if(!reduce&&matchMedia("(pointer:fine)").matches){
  const glow=document.querySelector(".cursor-glow");
  addEventListener("pointermove",e=>{glow.style.left=e.clientX+"px";glow.style.top=e.clientY+"px"});
  document.querySelectorAll("[data-tilt]").forEach(card=>{
    card.addEventListener("pointermove",e=>{const r=card.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;card.style.transform=`perspective(1000px) rotateX(${-y*5}deg) rotateY(${x*7}deg)`});
    card.addEventListener("pointerleave",()=>card.style.transform="");
  });
  document.querySelectorAll(".magnetic").forEach(el=>{
    el.addEventListener("pointermove",e=>{const r=el.getBoundingClientRect();el.style.transform=`translate(${(e.clientX-r.left-r.width/2)*.12}px,${(e.clientY-r.top-r.height/2)*.18}px)`});
    el.addEventListener("pointerleave",()=>el.style.transform="");
  });
}

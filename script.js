(function(){
  var btn=document.querySelector('.menu'),ul=document.getElementById('nav-list');
  btn.addEventListener('click',function(){
    var o=ul.classList.toggle('open');btn.setAttribute('aria-expanded',o);
  });
  ul.addEventListener('click',function(e){
    if(e.target.tagName==='A'){ul.classList.remove('open');btn.setAttribute('aria-expanded',false);}
  });
  document.getElementById('ano').textContent=new Date().getFullYear();
})();

(function(){
  var up=document.querySelector('.up'),btn=document.querySelector('.menu'),ul=document.getElementById('nav-list');
  window.addEventListener('scroll',function(){up.hidden=window.scrollY<600},{passive:true});
  document.addEventListener('keydown',function(e){
    if(e.key==='Escape'){ul.classList.remove('open');btn.setAttribute('aria-expanded',false);}
  });
  var links=[].slice.call(document.querySelectorAll('nav a[href^="#"]:not(.btn)'));
  if('IntersectionObserver' in window){
    var io=new IntersectionObserver(function(es){
      es.forEach(function(e){
        if(e.isIntersecting){links.forEach(function(a){a.setAttribute('aria-current',a.getAttribute('href')==='#'+e.target.id?'true':'false');});}
      });
    },{rootMargin:'-40% 0px -55% 0px'});
    ['produtos','servicos','diferenciais','duvidas'].forEach(function(id){var s=document.getElementById(id);if(s)io.observe(s);});
  }
})();

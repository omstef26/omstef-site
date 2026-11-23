// OMStef26 : petites animations (apparition au défilement, étoiles).
(function(){
  var els=document.querySelectorAll('.reveal');
  if('IntersectionObserver' in window){
    var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}})},{threshold:.12,rootMargin:'0px 0px -40px 0px'});
    els.forEach(function(el){io.observe(el)});
  } else els.forEach(function(el){el.classList.add('in')});
  document.querySelectorAll('.stars').forEach(function(s){
    for(var i=0;i<46;i++){var d=document.createElement('i');d.style.left=Math.random()*100+'%';d.style.top=Math.random()*100+'%';
      d.style.animationDelay=(Math.random()*4).toFixed(2)+'s';d.style.animationDuration=(2+Math.random()*3).toFixed(2)+'s';
      var z=Math.random()<.15?3:2;d.style.width=d.style.height=z+'px';s.appendChild(d)}
  });
})();

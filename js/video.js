// Vidéos YouTube : lecteurs intégrés (youtube-nocookie), chargés quand on approche de la vidéo.
document.querySelectorAll('.yt').forEach(function(el){
  var f=document.createElement('iframe');
  f.src='https://www.youtube-nocookie.com/embed/'+el.dataset.id+'?rel=0&modestbranding=1';
  f.title=el.getAttribute('aria-label')||'Vidéo';
  f.loading='lazy';
  f.allow='autoplay; encrypted-media; picture-in-picture; fullscreen';
  f.allowFullscreen=true;
  f.className=el.className.replace('yt','yt-frame');
  el.replaceWith(f);
});

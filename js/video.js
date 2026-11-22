// Vidéo YouTube chargée seulement au clic (aucune connexion à YouTube avant).
document.querySelectorAll('.yt').forEach(function(el){
  var id=el.dataset.id;
  el.addEventListener('click',function(){
    var f=document.createElement('iframe');
    f.src='https://www.youtube-nocookie.com/embed/'+id+'?autoplay=1&rel=0';
    f.title=el.getAttribute('aria-label')||'Vidéo';
    f.allow='autoplay; encrypted-media; picture-in-picture; fullscreen';
    f.allowFullscreen=true;
    el.replaceWith(f);f.className=el.className.replace('yt','yt-frame');
  });
});

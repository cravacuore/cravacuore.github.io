var rythm = new Rythm();

rythm.addRythm('rythm-color', 'color', 0, 10, {
              from: [255,255,0],
              to:[0,0,255]
            });

document.getElementById('play-button').addEventListener('click', function(){
  var icon = document.getElementById('icon');
  if(rythm.stopped === false){
    rythm.stop();
    icon.classList.toggle('fa-pause');
    icon.classList.toggle('fa-play');
  } else {
    rythm.setMusic("assets/you-are-a-pirate.mp3");
    rythm.start();
    icon.classList.toggle('fa-play');
    icon.classList.toggle('fa-pause');
  }
})

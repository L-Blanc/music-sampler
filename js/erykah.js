let music = document.querySelectorAll(".player");
let cover = document.querySelectorAll(".album");

function hideAll() {
  music.forEach(function(el) {
    el.style.display = 'none';
  });
}

hideAll();

let players = document.querySelectorAll('audio');

cover.forEach(function(el) {
  el.onclick = (e) => {
    players.forEach(function(el) {
            el.pause();
            el.currentTime = 0;
        });
    // hide all the divs to ensure that only one will be open
    hideAll();

    switch (e.target.getAttribute('id')) {
      case 'badu':
        document.querySelector('#leaf')
        	.style.display = 'block';
        break;
      case 'gun':
        document.querySelector('#mama')
        	.style.display = 'block';
        break;
      case 'purp':
        document.querySelector('#new')
        .style.display = 'block';
        break;
      case 'cump':
        document.querySelector('#phone')
        .style.display = 'block';
        break;
    } // end of switch


  } // end of function for clicking

}); // end of forEach()

import Player from '@vimeo/player';
import throttle  from 'lodash.throttle';

const iframe = document.querySelector('iframe');


const player = new Player(iframe);

console.log("qwerty");


  const  savedTimeData = localStorage.getItem("videoplayer-current-time");
  const  parsedTimeData = savedTimeData ? JSON.parse(savedTimeData) : null;   



// player.on('play', () => {
//     console.log('Played the video!');
// });


  

if (parsedTimeData !== null) {
    player.setCurrentTime(parsedTimeData).then(() => {
        console.log("Continue playing")
    });
} else {
player.setCurrentTime(0).then(() => {
    console.log("Continue playing")
});

}




player.on('timeupdate', throttle((data) => {
    const currentTime = data.seconds;
    
     localStorage.setItem("videoplayer-current-time", JSON.stringify(currentTime));
    }, 1000));



// player.getVideoTitle().then(function(title) {
//     console.log('title:', title);
// });


// console.log("123")
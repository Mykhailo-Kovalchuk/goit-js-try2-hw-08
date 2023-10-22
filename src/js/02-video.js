import Player from '@vimeo/player';
import throttle  from 'lodash.throttle';

const iframe = document.querySelector('iframe');


const player = new Player(iframe);

console.log("qwerty");

// player.on('play', function() {
//     console.log('played the video!');
// });


player.on('timeupdate', (data) => {
    const currentTime = data.seconds;

    console.log('Поточний час відтворення: ' + currentTime);
});

// player.getVideoTitle().then(function(title) {
//     console.log('title:', title);
// });


console.log("123")
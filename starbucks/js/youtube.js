// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');

tag.src = 'https://www.youtube.com/iframe_api';
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.

//함수이름 똑같이 해야함
function onYouTubeIframeAPIReady() {
  //<div id ='play></div>
  new YT.Player('player', {
    videoId: '_DrYKjOajqI', //초ㅣ초 재생할 유튜브 영상 앙디
    playerVars: {
      autoplay: true,
      loop: true,
      playlist: '_DrYKjOajqI', // 반복 재생할 영상아이디
    },
    events: {
      onReady: function (event) {
        event.target.mute(); //음소거
      },
    },
  });
}

// 4. The API will call this function when the video player is ready.
function onPlayerReady(event) {
  event.target.playVideo();
}

// 5. The API calls this function when the player's state changes.
//    The function indicates that when playing a video (state=1),
//    the player should play for six seconds and then stop.
var done = false;
function onPlayerStateChange(event) {
  if (event.data == YT.PlayerState.PLAYING && !done) {
    setTimeout(stopVideo, 6000);
    done = true;
  }
}
function stopVideo() {
  player.stopVideo();
}

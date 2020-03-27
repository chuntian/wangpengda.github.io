const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    autoplay: true,
    audio: [
      {
        name: '心雨',
        artist: '杨钰莹',
        url: 'http://music.163.com/song/media/outer/url?id=317151.mp3',
        cover: 'http://p2.music.126.net/cLeT6ZtpFKYnBHiCONTJgQ==/18648816720717022.jpg',
      }
    ]
});
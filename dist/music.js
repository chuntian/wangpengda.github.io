const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    autoplay: true,
    audio: [
      {
        name: '心雨',
        artist: '杨钰莹',
        url: 'http://music.163.com/song/media/outer/url?id=317151.mp3',
        cover: 'http://img.ytmp3.cn/image/55.jpg',
      }
    ]
});
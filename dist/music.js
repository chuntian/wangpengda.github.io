const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    autoplay: true,
    audio: [
      {
        name: '风筝误',
        artist: '刘珂矣',
        url: 'http://up.mcyt.net/?down/46644.mp3',
        cover: 'http://img.ytmp3.cn/image/55.jpg',
      },
      {
        name: '万水千山总是情',
        artist: '汪明荃',
        url: 'http://www.ytmp3.cn/down/56213.mp3',
        cover: 'http://img.ytmp3.cn/image/36.jpg',
      },
      {
        name: '秋樱',
        artist: '山口百惠',
        url: 'http://www.ytmp3.cn/down/56259.mp3',
        cover: 'http://img.ytmp3.cn/image/81.jpg',
      },
      {
        name: '一曲相思',
        artist: '半阳',
        url: 'http://www.ytmp3.cn/down/57306.mp3',
        cover: 'http://img.ytmp3.cn/image/89.jpg',
      },
      {
        name: '无味',
        artist: '郑胖',
        url: 'http://www.ytmp3.cn/down/52573.mp3',
        cover: 'http://img.ytmp3.cn/image/89.jpg',
      }
      
    ]
});
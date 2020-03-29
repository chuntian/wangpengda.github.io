const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    autoplay: true,
    lrcType: 3,
    audio: [
      {
        name: '讲不出再见',
        artist: '谭咏麟',
        url: '../music/bye.mp3',
        cover: 'http://p2.music.126.net/ow3GKMyAg8hdWDRmhKl4iw==/109951163066633801.jpg',
      },
      {
        name: '年少有为',
        artist: '李荣浩',
        url: '../music/年少有为.mp3',
        cover: 'http://p2.music.126.net/tt8xwK-ASC2iqXNUXYKoDQ==/109951163606377163.jpg',
      },
      {
        name: 'Speak Softly Love',
        artist: 'Various Artists',
        url: '../music/Speak Softly Love.mp3',
        cover: 'http://p1.music.126.net/CsuwG2UBpX2-lgyDw_BMig==/4405743092508767.jpg',
      }
      ,
      {
        name: '麻雀',
        artist: '李荣浩',
        url: '../music/麻雀.mp3',
        lrc: '../music/bird.lrc',
        cover: 'http://p2.music.126.net/tt8xwK-ASC2iqXNUXYKoDQ==/109951163606377163.jpg',
      }
      ,
      {
        name: '青春',
        artist: 'Kim Feel&金昌完',
        url: '../music/青春韩语.mp3',
        lrc: '../music/青春韩语.lrc',
        cover: 'http://p2.music.126.net/A_oeydCQ7J10JF0wLQqsaA==/109951163004306956.jpg',
      }
    ]
});
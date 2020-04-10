// B04
var SVG = Snap('#my-svg');

// 최상위 그룹
var Paper = SVG.g();

//이미지
var home = Paper.image('img/home.png', 0, 0, 26, 24).toDefs();
var migi = Paper.image('img/migi.png', 0, 0, 21, 23).toDefs();
var set0101 = Paper.image('img/set0101.png', 0, 0, 320, 210).toDefs();
var set0102 = Paper.image('img/set0102.png', 0, 0, 40, 40).toDefs();

// SVG 외곽선
Paper.rect(0, 0, 360, 640, 6).attr({
  'stroke': 'gray',
  'fill': 'none'
});

// 상단 바 부분
var topBox = Paper.g();

topBox.path('M1 40 L359 40 L359 0 Q358 1 358 1 L1 1').attr({
  'fill': '#D4EFF5'
});

home.use().transform('t14, 8').appendTo(topBox).click(handlerHome).attr({
  'cursor': 'pointer'
});

function handlerHome() {
  location.replace('NB0004.html');
}

topBox.text(180, 30, 'B04').attr({
  'font-size': 22,
  'text-anchor': 'middle'
});

migi.use().transform('t325, 9').appendTo(topBox).click(handlerNext).attr({
  'cursor': 'pointer'
});

function handlerNext() {
  location.replace('NB0004_02.html');
}

// 상단
var topArea = Paper.g();

topArea.text(30, 95, '[B01] 자기 소개하기').attr({
  'font-size': 22,
});

// 하단
var bottomArea = Paper.g();

set0101.use().transform('t20, 120').click(playAud01).appendTo(bottomArea).attr({
  'cursor': 'pointer'
});

function playAud01() {
  var audio1 = new Audio('aud/aud01.wav');
  audio1.play();
}

set0102.use().transform('t20, 360').click(playAud01).appendTo(bottomArea).attr({
  'cursor': 'pointer'
});

var t1 = topArea.text(70, 390, ['わたしは オ・ギスです。', 'よろしく おねがいします。', '저는 오기수입니다. 잘 부탁드립니다.']).click(playAud01).attr({
  'font-size': 25,
  'cursor': 'pointer'
});
t1.selectAll('tspan')[1].attr({
  x: 67,
  y: 430,
  'font-size': 25
});
t1.selectAll('tspan')[2].attr({
  x: 67,
  y: 470,
  'font-size': 17,
  'fill': 'gray'
});

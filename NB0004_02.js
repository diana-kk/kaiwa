// B04
var SVG = Snap('#my-svg');

// 최상위 그룹
var Paper = SVG.g();

//이미지
var home = Paper.image('img/home.png', 0, 0, 26, 24).toDefs();
var migi = Paper.image('img/migi.png', 0, 0, 21, 23).toDefs();
var set0201 = Paper.image('img/set0201.png', 0, 0, 320, 210).toDefs();
var set0202 = Paper.image('img/set0202.png', 0, 0, 40, 40).toDefs();
var set0203 = Paper.image('img/set0203.png', 0, 0, 40, 40).toDefs();

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
  location.replace('NB0004_03.html');
}

// 상단
var topArea = Paper.g();

topArea.text(30, 95, '[B02] 직업 묻고 답하기').attr({
  'font-size': 22,
});

// 하단
var bottomArea = Paper.g();

set0201.use().transform('t20, 120').click(playAud01).appendTo(bottomArea).attr({
  'cursor': 'pointer'
});

function playAud01() {
  var audio1 = new Audio('aud/aud02.wav');
  audio1.play();
}

set0202.use().transform('t20, 360').click(playAud01).appendTo(bottomArea).attr({
  'cursor': 'pointer'
});

var t1 = topArea.text(70, 390, ['かれは かしゅですか。', '그는 가수인가요?']).click(playAud01).attr({
  'font-size': 25,
  'cursor': 'pointer'
});
t1.selectAll('tspan')[1].attr({
  x: 70,
  y: 425,
  'font-size': 17,
  'fill': 'gray'
});

set0203.use().transform('t20, 450').click(playAud01).appendTo(bottomArea).attr({
  'cursor': 'pointer'
});

var t2 = topArea.text(70, 480, ['はい、かしゅです。', '네, 가수예요.']).click(playAud01).attr({
  'font-size': 25,
  'cursor': 'pointer'
});
t2.selectAll('tspan')[1].attr({
  x: 70,
  y: 515,
  'font-size': 17,
  'fill': 'gray'
});

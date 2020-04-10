// B04
var SVG = Snap('#my-svg');

// 최상위 그룹
var Paper = SVG.g();

//이미지
var home = Paper.image('img/home.png', 0, 0, 26, 24).toDefs();
var migi = Paper.image('img/migi.png', 0, 0, 21, 23).toDefs();
var set0301 = Paper.image('img/set0301.png', 0, 0, 320, 210).toDefs();
var set0302 = Paper.image('img/set0302.png', 0, 0, 40, 40).toDefs();
var set0303 = Paper.image('img/set0303.png', 0, 0, 40, 40).toDefs();

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

migi.use().transform('t325, 9').appendTo(topBox).click(handlerHome).attr({
  'cursor': 'pointer'
});

// 상단
var topArea = Paper.g();

topArea.text(30, 95, '[B03] 가족관계 묻고 답하기').attr({
  'font-size': 22,
});

// 하단
var bottomArea = Paper.g();

set0301.use().transform('t20, 120').click(playAud01).appendTo(bottomArea).attr({
  'cursor': 'pointer'
});

function playAud01() {
  var audio1 = new Audio('aud/aud03.wav');
  audio1.play();
}

set0302.use().transform('t20, 360').click(playAud01).appendTo(bottomArea).attr({
  'cursor': 'pointer'
});

var t1 = topArea.text(70, 390, ['あべさんの おとうさん', 'ですか。', '아베 씨의 아버지인가요?']).click(playAud01).attr({
  'font-size': 25,
  'cursor': 'pointer'
});
t1.selectAll('tspan')[1].attr({
  x: 70,
  y: 425,
});
t1.selectAll('tspan')[2].attr({
  x: 160,
  y: 425,
  'font-size': 17,
  'fill': 'gray'
});

set0303.use().transform('t20, 450').click(playAud01).appendTo(bottomArea).attr({
  'cursor': 'pointer'
});

var t2 = topArea.text(70, 480, ['はい、わたしの ちちです。', '네, 저의 아버지예요.']).click(playAud01).attr({
  'font-size': 25,
  'cursor': 'pointer'
});
t2.selectAll('tspan')[1].attr({
  x: 70,
  y: 515,
  'font-size': 17,
  'fill': 'gray'
});

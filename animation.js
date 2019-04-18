var m = ['🌑', '🌒', '🌓', '🌔', '🌝', '🌖', '🌗', '🌘'];
var b = ['🏻', '🏼', '🏽', '🏾', '🏿'];
var c = ['🕐','🕑','🕒','🕓','🕔','🕕','🕖','🕗','🕘','🕙','🕚','🕛'];
var bo = ['╭', '╮', '╯', '╰'];
var f = ['👉', '👆'];
var k = ['😍', '😘', '😗', '😙'];
var timeout;


function moons() {
  clearTimeout(timeout);
  location.hash = m[Math.floor((Date.now()/100)%m.length)];
  timeout = setTimeout(moons, 50);
}

function babies() {
  clearTimeout(timeout);
  let s = '', i, m;

  for (i = 0; i < 10; i ++) {
    m = Math.floor(b.length * ((Math.sin((Date.now()/100) + i)+1)/2));
    s += '👶' + b[m];
  }

  location.hash = s;
  timeout = setTimeout(babies, 50);
}

function boomerang() {
  clearTimeout(timeout);
  location.hash = bo[Math.floor((Date.now()/100)%bo.length)];
  timeout = setTimeout(boomerang, 50);
}

function progressbar() {
  clearTimeout(timeout);
  let s = '', p;
  p = Math.floor(((Math.sin(Date.now()/300)+1)/2) * 100);
  while (p >= 8) {
      s += '█';
      p -= 8;
  }
  s += ['⠀','▏','▎','▍','▌','▋','▊','▉'][p];
  location.hash = s;
  timeout = setTimeout(progressbar, 50);
}

function fingergun() {
  clearTimeout(timeout);
  location.hash = f[Math.floor((Date.now()/100)%f.length)];
  timeout = setTimeout(fingergun, 500);
}

function kiss() {
  clearTimeout(timeout);
  location.hash = k[Math.floor((Date.now()/100)%k.length)];
  timeout = setTimeout(kiss, 500);
}

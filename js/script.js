$('header').mousemove(function (e) {
  let moveX = (e.pageX * -0.5 / 15 - 25);
  let moveY = (e.pageY * -0.5 / 15 - 255);
  $(this).css('background-position', moveX + 'px ' + moveY + 'px')
})
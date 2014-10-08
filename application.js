$(document).ready(function() {
  bindEvents();
});

var boxColors = {
  box1: [255, 0, 0],
  box2: [255, 128, 0],
  box3: [255, 255, 0],
  box4: [0, 255, 0],
  box5: [0, 128, 128],
  box6: [0, 0, 255],
  box7: [0, 128, 0],
  box8: [0, 0 ,0],
  box9: [255, 255, 255]
}



function bindEvents() {
  $('#box-1').on('click', moreRed)
  // $('#box-2').on('click', moreOrange)
  // $('#box-3').on('click', moreYellow)
  // $('#box-4').on('click', moreGreen)
  // $('#box-5').on('click', moreTeal)
  // $('#box-6').on('click', moreBlue)
  // $('#box-7').on('click', morePurple)
  // $('#box-8').on('click', moreBlack)
  // $('#box-9').on('click', moreWhite)
}

function moreRed(e) {
  // Box 2
  if (boxColors['box2'][0] < 245) {
    boxColors['box2'][0] += 10
  } else {
    boxColors['box2'][0] = 255
  }
  if (boxColors['box2'][1] > 10) {
    boxColors['box2'][1] -= 10
  } else {
    boxColors['box2'][1] = 0
  }
  if (boxColors['box2'][2] > 10) {
    boxColors['box2'][2] -= 10
  } else {
    boxColors['box2'][2] = 0
  }
  // Now on box 4
  if (boxColors['box4'][0] > 245) {
    boxColors['box4'][0] += 10
  } else {
    boxColors['box4'][0] = 255
  }
  if (boxColors['box4'][1] > 10) {
    boxColors['box4'][1] -= 10
  } else {
    boxColors['box4'][1] = 0
  }
  if (boxColors['box4'][2] > 10) {
    boxColors['box4'][2] -= 10
  } else {
    boxColors['box4'][2] = 0
  }
  var box2Color = 'rgb(' + boxColors['box2'][0] + ',' + boxColors['box2'][1] + ',' + boxColors['box2'][2] + ')'
  var box4Color = 'rgb(' + boxColors['box4'][0] + ',' + boxColors['box4'][1] + ',' + boxColors['box4'][2] + ')'

  // Changing the Dom
  $('#box-2').css('background-color', box2Color)
  $('#box-4').css('background-color', box4Color)
}


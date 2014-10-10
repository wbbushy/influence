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
  box7: [128, 0, 128],
  box8: [0, 0 ,0],
  box9: [255, 255, 255]
}


function bindEvents() {
  $('#box-1').on('click', moreRed)
  $('#box-2').on('click', moreOrange)
  $('#box-3').on('click', moreYellow)
  $('#box-4').on('click', moreGreen)
  $('#box-5').on('click', moreTeal)
  $('#box-6').on('click', moreBlue)
  $('#box-7').on('click', morePurple)
  $('#box-8').on('click', moreBlack)
  $('#box-9').on('click', moreWhite)
  $('#reset-button').on('click', resetColors)

}

function moreRed() {
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
  // box 4
  if (boxColors['box4'][0] < 245) {
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


function moreOrange() {
  // Box 1
  if (boxColors['box1'][0] < 245) {
    boxColors['box1'][0] += 10
  } else {
    boxColors['box1'][0] = 255
  }
  if (boxColors['box1'][1] < 118) {
    boxColors['box1'][1] += 10
  }
  if (boxColors['box1'][1] > 138) {
    boxColors['box1'][1] -= 10
  }
  if (boxColors['box1'][1] > 138 && boxColors['box1'][1] < 118) {
    boxColors['box1'][1] = 128
  }
  if (boxColors['box1'][2] > 10) {
    boxColors['box1'][2] -= 10
  } else {
    boxColors['box1'][2] = 0
  }
  // Box 3
  if (boxColors['box3'][0] < 245) {
    boxColors['box3'][0] += 10
  } else {
    boxColors['box3'][0] = 255
  }
  if (boxColors['box3'][1] < 118) {
    boxColors['box3'][1] += 10
  }
  if (boxColors['box3'][1] > 138) {
    boxColors['box3'][1] -= 10
  }
  if (boxColors['box3'][1] > 138 && boxColors['box3'][1] < 118) {
    boxColors['box3'][1] = 128
  }
  if (boxColors['box3'][2] > 10) {
    boxColors['box3'][2] -= 10
  } else {
    boxColors['box3'][2] = 0
  }
    // Box 5
  if (boxColors['box5'][0] < 245) {
    boxColors['box5'][0] += 10
  } else {
    boxColors['box5'][0] = 255
  }
  if (boxColors['box5'][1] < 118) {
    boxColors['box5'][1] += 10
  }
  if (boxColors['box5'][1] > 138) {
    boxColors['box5'][1] -= 10
  }
  if (boxColors['box5'][1] > 138 && boxColors['box5'][1] < 118) {
    boxColors['box5'][1] = 128
  }
  if (boxColors['box5'][2] > 10) {
    boxColors['box5'][2] -= 10
  } else {
    boxColors['box5'][2] = 0
  }

  var box1Color = 'rgb(' + boxColors['box1'][0] + ',' + boxColors['box1'][1] + ',' + boxColors['box1'][2] + ')'
  var box3Color = 'rgb(' + boxColors['box3'][0] + ',' + boxColors['box3'][1] + ',' + boxColors['box3'][2] + ')'
  var box5Color = 'rgb(' + boxColors['box5'][0] + ',' + boxColors['box5'][1] + ',' + boxColors['box5'][2] + ')'

  // Changing the Dom
  $('#box-1').css('background-color', box1Color)
  $('#box-3').css('background-color', box3Color)
  $('#box-5').css('background-color', box5Color)

}


function moreYellow() {
  // Box 2
  if (boxColors['box2'][0] < 245) {
    boxColors['box2'][0] += 10
  } else {
    boxColors['box2'][0] = 255
  }
  if (boxColors['box2'][1] < 245) {
    boxColors['box2'][1] += 10
  } else {
    boxColors['box2'][1] = 255
  }
  if (boxColors['box2'][2] > 10) {
    boxColors['box2'][2] -= 10
  } else {
    boxColors['box2'][2] = 0
  }
  // Box 6
  if (boxColors['box6'][0] < 245) {
    boxColors['box6'][0] += 10
  } else {
    boxColors['box6'][0] = 255
  }
  if (boxColors['box6'][1] < 245) {
    boxColors['box6'][1] += 10
  } else {
    boxColors['box6'][1] = 255
  }
  if (boxColors['box6'][2] > 10) {
    boxColors['box6'][2] -= 10
  } else {
    boxColors['box6'][2] = 0
  }

  var box2Color = 'rgb(' + boxColors['box2'][0] + ',' + boxColors['box2'][1] + ',' + boxColors['box2'][2] + ')'
  var box6Color = 'rgb(' + boxColors['box6'][0] + ',' + boxColors['box6'][1] + ',' + boxColors['box6'][2] + ')'

  $('#box-2').css('background-color', box2Color)
  $('#box-6').css('background-color', box6Color)

}

function moreGreen() {
  // Box 1
  if (boxColors['box1'][0] > 10) {
    boxColors['box1'][0] -= 10
  } else {
    boxColors['box1'][0] = 0
  }
  if (boxColors['box1'][1] < 245) {
    boxColors['box1'][1] += 10
  } else {
    boxColors['box1'][1] =255
  }
  if (boxColors['box1'][2] > 10) {
    boxColors['box1'][2] -= 10
  } else {
    boxColors['box1'][2] = 0
  }

  // Box 5
  if (boxColors['box5'][0] > 10) {
    boxColors['box5'][0] -= 10
  } else {
    boxColors['box5'][0] = 0
  }
  if (boxColors['box5'][1] < 245) {
    boxColors['box5'][1] += 10
  } else {
    boxColors['box5'][1] =255
  }
  if (boxColors['box5'][2] > 10) {
    boxColors['box5'][2] -= 10
  } else {
    boxColors['box5'][2] = 0
  }
  // Box 7
    if (boxColors['box7'][0] > 10) {
    boxColors['box7'][0] -= 10
  } else {
    boxColors['box7'][0] = 0
  }
  if (boxColors['box7'][1] < 245) {
    boxColors['box7'][1] += 10
  } else {
    boxColors['box7'][1] =255
  }
  if (boxColors['box7'][2] > 10) {
    boxColors['box7'][2] -= 10
  } else {
    boxColors['box7'][2] = 0
  }

  var box1Color = 'rgb(' + boxColors['box1'][0] + ',' + boxColors['box1'][1] + ',' + boxColors['box1'][2] + ')'
  var box5Color = 'rgb(' + boxColors['box5'][0] + ',' + boxColors['box5'][1] + ',' + boxColors['box5'][2] + ')'
  var box7Color = 'rgb(' + boxColors['box7'][0] + ',' + boxColors['box7'][1] + ',' + boxColors['box7'][2] + ')'

  $('#box-1').css('background-color', box1Color)
  $('#box-5').css('background-color', box5Color)
  $('#box-7').css('background-color', box7Color)

}

function moreTeal() {
  // Box 2
  if (boxColors['box2'][0] > 10) {
    boxColors['box2'][0] -= 10
  } else {
    boxColors['box2'][0] = 0
  }
  if (boxColors['box2'][1] < 138 && boxColors['box2'][1] > 118) {
    boxColors['box2'][1] = 128
  }
  if (boxColors['box2'][1] < 118) {
    boxColors['box2'][1] += 10
  }
  if (boxColors['box2'][1] > 138) {
    boxColors['box2'][1] -= 10
  }
  if (boxColors['box2'][2] < 138 && boxColors['box2'][1] > 118) {
    boxColors['box2'][2] = 128
  }
  if (boxColors['box2'][2] < 118) {
    boxColors['box2'][2] += 10
  }
  if (boxColors['box2'][2] > 138) {
    boxColors['box2'][2] -= 10
  }
  // Box 4
  if (boxColors['box4'][0] > 10) {
    boxColors['box4'][0] -= 10
  } else {
    boxColors['box4'][0] = 0
  }
  if (boxColors['box4'][1] < 138 && boxColors['box4'][1] > 118) {
    boxColors['box4'][1] = 128
  }
  if (boxColors['box4'][1] < 118) {
    boxColors['box4'][1] += 10
  }
  if (boxColors['box4'][1] > 138) {
    boxColors['box4'][1] -= 10
  }
  if (boxColors['box4'][2] < 138 && boxColors['box4'][1] > 118) {
    boxColors['box4'][2] = 128
  }
  if (boxColors['box4'][2] < 118) {
    boxColors['box4'][2] += 10
  }
  if (boxColors['box4'][2] > 138) {
    boxColors['box4'][2] -= 10
  }
  // Box 6
    if (boxColors['box6'][0] > 10) {
    boxColors['box6'][0] -= 10
  } else {
    boxColors['box6'][0] = 0
  }
  if (boxColors['box6'][1] < 138 && boxColors['box6'][1] > 118) {
    boxColors['box6'][1] = 128
  }
  if (boxColors['box6'][1] < 118) {
    boxColors['box6'][1] += 10
  }
  if (boxColors['box6'][1] > 138) {
    boxColors['box6'][1] -= 10
  }
  if (boxColors['box6'][2] < 138 && boxColors['box6'][1] > 118) {
    boxColors['box6'][2] = 128
  }
  if (boxColors['box6'][2] < 118) {
    boxColors['box6'][2] += 10
  }
  if (boxColors['box6'][2] > 138) {
    boxColors['box6'][2] -= 10
  }
  // Box 8
    if (boxColors['box8'][0] > 10) {
    boxColors['box8'][0] -= 10
  } else {
    boxColors['box8'][0] = 0
  }
  if (boxColors['box8'][1] < 138 && boxColors['box8'][1] > 118) {
    boxColors['box8'][1] = 128
  }
  if (boxColors['box8'][1] < 118) {
    boxColors['box8'][1] += 10
  }
  if (boxColors['box8'][1] > 138) {
    boxColors['box8'][1] -= 10
  }
  if (boxColors['box8'][2] < 138 && boxColors['box8'][1] > 118) {
    boxColors['box8'][2] = 128
  }
  if (boxColors['box8'][2] < 118) {
    boxColors['box8'][2] += 10
  }
  if (boxColors['box8'][2] > 138) {
    boxColors['box8'][2] -= 10
  }

  var box2Color = 'rgb(' + boxColors['box2'][0] + ',' + boxColors['box2'][1] + ',' + boxColors['box2'][2] + ')'
  var box4Color = 'rgb(' + boxColors['box4'][0] + ',' + boxColors['box4'][1] + ',' + boxColors['box4'][2] + ')'
  var box6Color = 'rgb(' + boxColors['box6'][0] + ',' + boxColors['box6'][1] + ',' + boxColors['box6'][2] + ')'
  var box8Color = 'rgb(' + boxColors['box8'][0] + ',' + boxColors['box8'][1] + ',' + boxColors['box8'][2] + ')'


  $('#box-2').css('background-color', box2Color)
  $('#box-4').css('background-color', box4Color)
  $('#box-6').css('background-color', box6Color)
  $('#box-8').css('background-color', box8Color)
}

function moreBlue() {
  // Box 3
  if (boxColors['box3'][0] > 10) {
    boxColors['box3'][0] -= 10
  } else {
    boxColors['box3'][0] = 0
  }
  if (boxColors['box3'][1] > 10) {
    boxColors['box3'][1] -= 10
  } else {
    boxColors['box3'][1] = 0
  }
  if (boxColors['box3'][2] < 245) {
    boxColors['box3'][2] += 10
  } else {
    boxColors['box3'][2] = 255
  }
  // Box 5
  if (boxColors['box5'][0] > 10) {
    boxColors['box5'][0] -= 10
  } else {
    boxColors['box5'][0] = 0
  }
  if (boxColors['box5'][1] > 10) {
    boxColors['box5'][1] -= 10
  } else {
    boxColors['box5'][1] = 0
  }
  if (boxColors['box5'][2] < 245) {
    boxColors['box5'][2] += 10
  } else {
    boxColors['box5'][2] = 255
  }
  // Box 9
  if (boxColors['box9'][0] > 10) {
    boxColors['box9'][0] -= 10
  } else {
    boxColors['box9'][0] = 0
  }
  if (boxColors['box9'][1] > 10) {
    boxColors['box9'][1] -= 10
  } else {
    boxColors['box9'][1] = 0
  }
  if (boxColors['box9'][2] < 245) {
    boxColors['box9'][2] += 10
  } else {
    boxColors['box9'][2] = 255
  }

  var box3Color = 'rgb(' + boxColors['box3'][0] + ',' + boxColors['box3'][1] + ',' + boxColors['box3'][2] + ')'
  var box5Color = 'rgb(' + boxColors['box5'][0] + ',' + boxColors['box5'][1] + ',' + boxColors['box5'][2] + ')'
  var box9Color = 'rgb(' + boxColors['box9'][0] + ',' + boxColors['box9'][1] + ',' + boxColors['box9'][2] + ')'

  $('#box-3').css('background-color', box3Color)
  $('#box-5').css('background-color', box5Color)
  $('#box-9').css('background-color', box9Color)
}

function morePurple() {
  // Box 4
  if (boxColors['box4'][0] > 118 && boxColors['box4'][0] < 138) {
    boxColors['box4'][0] = 128
  }
  if (boxColors['box4'][0] < 118) {
    boxColors['box4'][0] += 10
  }
  if (boxColors['box4'][0] > 138) {
    boxColors['box4'][0] -= 10
  }
  if (boxColors['box4'][1] > 10) {
    boxColors['box4'][1] -= 10
  } else {
    boxColors['box4'][1] = 0
  }
  if (boxColors['box4'][2] > 118 && boxColors['box4'][2] < 138) {
    boxColors['box4'][2] = 128
  }
  if (boxColors['box4'][2] < 118) {
    boxColors['box4'][2] += 10
  }
  if (boxColors['box4'][2] > 138) {
    boxColors['box4'][2] -= 10
  }
  // Box 8
  if (boxColors['box8'][0] > 118 && boxColors['box8'][0] < 138) {
    boxColors['box8'][0] = 128
  }
  if (boxColors['box8'][0] < 118) {
    boxColors['box8'][0] += 10
  }
  if (boxColors['box8'][0] > 138) {
    boxColors['box8'][0] -= 10
  }
  if (boxColors['box8'][1] > 10) {
    boxColors['box8'][1] -= 10
  } else {
    boxColors['box8'][1] = 0
  }
  if (boxColors['box8'][2] > 118 && boxColors['box8'][2] < 138) {
    boxColors['box8'][2] = 128
  }
  if (boxColors['box8'][2] < 118) {
    boxColors['box8'][2] += 10
  }
  if (boxColors['box8'][2] > 138) {
    boxColors['box8'][2] -= 10
  }

  var box4Color = 'rgb(' + boxColors['box4'][0] + ',' + boxColors['box4'][1] + ',' + boxColors['box4'][2] + ')'
  var box8Color = 'rgb(' + boxColors['box8'][0] + ',' + boxColors['box8'][1] + ',' + boxColors['box8'][2] + ')'

  $('#box-4').css('background-color', box4Color)
  $('#box-8').css('background-color', box8Color)

}

function moreBlack() {
  // Box 5
  if (boxColors['box5'][0] > 10) {
    boxColors['box5'][0] -= 10
  } else {
    boxColors['box5'][0] = 0
  }
  if (boxColors['box5'][1] > 10) {
    boxColors['box5'][1] -= 10
  } else {
    boxColors['box5'][1] = 0
  }
  if (boxColors['box5'][2] > 10) {
    boxColors['box5'][2] -= 10
  } else {
    boxColors['box5'][2] = 0
  }
  // Box 7
  if (boxColors['box7'][0] > 10) {
    boxColors['box7'][0] -= 10
  } else {
    boxColors['box7'][0] = 0
  }
  if (boxColors['box7'][1] > 10) {
    boxColors['box7'][1] -= 10
  } else {
    boxColors['box7'][1] = 0
  }
  if (boxColors['box7'][2] > 10) {
    boxColors['box7'][2] -= 10
  } else {
    boxColors['box7'][2] = 0
  }
  // Box 9
  if (boxColors['box9'][0] > 10) {
    boxColors['box9'][0] -= 10
  } else {
    boxColors['box9'][0] = 0
  }
  if (boxColors['box9'][1] > 10) {
    boxColors['box9'][1] -= 10
  } else {
    boxColors['box9'][1] = 0
  }
  if (boxColors['box9'][2] > 10) {
    boxColors['box9'][2] -= 10
  } else {
    boxColors['box9'][2] = 0
  }

  var box5Color = 'rgb(' + boxColors['box5'][0] + ',' + boxColors['box5'][1] + ',' + boxColors['box5'][2] + ')'
  var box7Color = 'rgb(' + boxColors['box7'][0] + ',' + boxColors['box7'][1] + ',' + boxColors['box7'][2] + ')'
  var box9Color = 'rgb(' + boxColors['box9'][0] + ',' + boxColors['box9'][1] + ',' + boxColors['box9'][2] + ')'

  $('#box-5').css('background-color', box5Color)
  $('#box-7').css('background-color', box7Color)
  $('#box-9').css('background-color', box9Color)

}

function moreWhite() {
  // Box 6
  if (boxColors['box6'][0] < 245) {
    boxColors['box6'][0] += 10
  } else {
    boxColors['box6'][0] = 255
  }
  if (boxColors['box6'][1] < 245) {
    boxColors['box6'][1] += 10
  } else {
    boxColors['box6'][1] = 255
  }
  if (boxColors['box6'][2] < 245) {
    boxColors['box6'][2] += 10
  } else {
    boxColors['box6'][2] = 255
  }
  // Box 8
  if (boxColors['box8'][0] < 245) {
    boxColors['box8'][0] += 10
  } else {
    boxColors['box8'][0] = 255
  }
  if (boxColors['box8'][1] < 245) {
    boxColors['box8'][1] += 10
  } else {
    boxColors['box8'][1] = 255
  }
  if (boxColors['box8'][2] < 245) {
    boxColors['box8'][2] += 10
  } else {
    boxColors['box8'][2] = 255
  }

  var box6Color = 'rgb(' + boxColors['box6'][0] + ',' + boxColors['box6'][1] + ',' + boxColors['box6'][2] + ')'
  var box8Color = 'rgb(' + boxColors['box8'][0] + ',' + boxColors['box8'][1] + ',' + boxColors['box8'][2] + ')'

  $('#box-6').css('background-color', box6Color)
  $('#box-8').css('background-color', box8Color)

}

var boxColorsDefault = {
  box1: [255, 0, 0],
  box2: [255, 128, 0],
  box3: [255, 255, 0],
  box4: [0, 255, 0],
  box5: [0, 128, 128],
  box6: [0, 0, 255],
  box7: [128, 0, 128],
  box8: [0, 0 ,0],
  box9: [255, 255, 255]
}

function resetColors() {
  var boxColorsDefault1 = 'rgb(' + boxColorsDefault['box1'][0] + ',' + boxColorsDefault['box1'][1] + ',' + boxColorsDefault['box1'][2] + ')'
  var boxColorsDefault2 = 'rgb(' + boxColorsDefault['box2'][0] + ',' + boxColorsDefault['box2'][1] + ',' + boxColorsDefault['box2'][2] + ')'
  var boxColorsDefault3 = 'rgb(' + boxColorsDefault['box3'][0] + ',' + boxColorsDefault['box3'][1] + ',' + boxColorsDefault['box3'][2] + ')'
  var boxColorsDefault4 = 'rgb(' + boxColorsDefault['box4'][0] + ',' + boxColorsDefault['box4'][1] + ',' + boxColorsDefault['box4'][2] + ')'
  var boxColorsDefault5 = 'rgb(' + boxColorsDefault['box5'][0] + ',' + boxColorsDefault['box5'][1] + ',' + boxColorsDefault['box5'][2] + ')'
  var boxColorsDefault6 = 'rgb(' + boxColorsDefault['box6'][0] + ',' + boxColorsDefault['box6'][1] + ',' + boxColorsDefault['box6'][2] + ')'
  var boxColorsDefault7 = 'rgb(' + boxColorsDefault['box7'][0] + ',' + boxColorsDefault['box7'][1] + ',' + boxColorsDefault['box7'][2] + ')'
  var boxColorsDefault8 = 'rgb(' + boxColorsDefault['box8'][0] + ',' + boxColorsDefault['box8'][1] + ',' + boxColorsDefault['box8'][2] + ')'
  var boxColorsDefault9 = 'rgb(' + boxColorsDefault['box9'][0] + ',' + boxColorsDefault['box9'][1] + ',' + boxColorsDefault['box9'][2] + ')'

  $('#box-1').css('background-color', boxColorsDefault1)
  $('#box-2').css('background-color', boxColorsDefault2)
  $('#box-3').css('background-color', boxColorsDefault3)
  $('#box-4').css('background-color', boxColorsDefault4)
  $('#box-5').css('background-color', boxColorsDefault5)
  $('#box-6').css('background-color', boxColorsDefault6)
  $('#box-7').css('background-color', boxColorsDefault7)
  $('#box-8').css('background-color', boxColorsDefault8)
  $('#box-9').css('background-color', boxColorsDefault9)

}


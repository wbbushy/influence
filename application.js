$(document).ready(function() {
  bindEvents();
});


function bindEvents() {
  $('#box-1').on('click', '.complete', moreRed)
  $('#box-2').on('click', '.complete', moreOrange)
  $('#box-3').on('click', '.complete', moreYellow)
  $('#box-4').on('click', '.complete', moreGreen)
  $('#box-5').on('click', '.complete', moreTeal)
  $('#box-6').on('click', '.complete', moreBlue)
  $('#box-7').on('click', '.complete', morePurple)
  $('#box-8').on('click', '.complete', moreBlack)
  $('#box-9').on('click', '.complete', moreWhite)
}

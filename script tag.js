/* Open the first section on l  oad */
$(".section-title:first").addClass('open');
var openOnLoad = $(".section-title:first").next('.collapsing-section');
$(openOnLoad).slideDown();

$(".section-title").on('focus', function () {
  if (!$(this).data("mouseDown"))
    $(this).click();
});

$(".section-title").on('mousedown', function () {
  $(this).data("mouseDown", true);
});

$(".section-title").on('mouseup', function () {
  $(this).removeData("mouseDown");
});

$(".section-title").on('click', function (e) {
  if ($(this).hasClass('open')) {
    //Close the current section
    $('.section-title').removeClass('open');
    $('.collapsing-section').slideUp();
  } else {
    //close the prev section & open the newly click
    $('.section-title').removeClass('open');
    $('.collapsing-section').slideUp(); //Side up all sections that are open & remove their open class
    $(this).addClass('open');
    var sectionToOpen = $(this).next('.collapsing-section');
    $(sectionToOpen).slideDown();
  }
});
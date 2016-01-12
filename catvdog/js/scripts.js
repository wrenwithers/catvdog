$(document).ready(function() {
  $("button#cat").click(function() {
    $("ul#firstguy").prepend("<li>Meow...</li>");
    $("ul#secondguy").prepend("<li>Woof!</li>");
  });

  $("button#dog").click(function() {
    $("ul#firstguy").prepend("<li>Woof!</li>");
    $("ul#secondguy").prepend("<li>Meow...</li>");
  });

});

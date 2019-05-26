// jQuery
$(window).on("scroll", function() {
  const $header = $("header");
  const $main = $("main");
  const $footer = $("footer");
  const filterHeader = $(window).scrollTop() / $main.offset().top;
  const filterFooter =
    1 -
    ($(window).scrollTop() - $main.height()) /
      ($footer.offset().top - $main.height());
  $header.css({
    filter: "grayscale(" + filterHeader + ")"
  });
  $footer.css({
    filter: "grayscale(" + filterFooter + ")"
  });
});

//Vanilla JS
// document.addEventListener("scroll", function() {
//   const header = document.body.querySelector("header");
//   const main = document.body.querySelector("main");
//   const footer = document.body.querySelector("footer");
//   const filterHeader = window.scrollY / main.offsetTop;
//   const filterFooter =
//     1 -
//     (window.scrollY - main.offsetHeight) /
//       (footer.offsetTop - main.offsetHeight);
//   header.style = "filter:grayscale(" + filterHeader + ")";
//   footer.style = "filter:grayscale(" + filterFooter + ")";
// });

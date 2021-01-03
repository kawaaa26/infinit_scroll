$(document).on('turbolinks:load', function() {
  $('.jscroll').jscroll({
    // adding infinit elements
    contentSelector: '.jscroll',
    // putting a link for next page
    nextSelector: 'a.next',
    // loading msg
    loadingHtml: '読み込み中'
  });
});

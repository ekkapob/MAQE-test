$(function() {
  showPersons('../data/persons.json', renderPersons)
});

function showPersons(url, successHandler) {
  if (url && successHandler) {
    $.ajax({
        url: url,
        async: false
      })
      .done(function(data) {
        successHandler(data);
      });
  }
}

function renderPersons(data) {
  var html;
  var source = $('#persons-template').html();
  var template;
  if (!source) {
    return;
  }
  template = Handlebars.compile(source);
  html = template({
    persons: data
  });
  $('#persons').html(html);
}
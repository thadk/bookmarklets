javascript:(function() {
  var split = location.pathname.slice(1).split('/');
  window.location = 'http://' + split[0] + '.github.io/' + split[1];
})();

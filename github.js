javascript:(function() {
  var host = location.host.split('.');
  var path = location.pathname.slice(1).split('/');

  window.location = host[2] === 'io'
    ? 'https://github.com/' + host[0] + '/' + path[0]
    : 'http://' + path[0] + '.github.io/' + path[1];
})();

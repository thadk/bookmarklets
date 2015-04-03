javascript:(function() {
  var host = location.host.split('.');
  var path = location.pathname.slice(1).split('/');
  
  var winlocation = '' + window.location;
  
  var isGISPath = /(gisModule\/)(dev\/app|dist)(\/)/;
  var isDashboardPath = /(dashboard\/)(dev\/app|build)(\/)/;
  
  if (isGISPath.exec(location.pathname)) {
  window.location = isGISPath.exec(location.pathname)[2] == 'dist'
    ? winlocation.replace(isGISPath,"$1dev/app$3")
    : winlocation.replace(isGISPath,"$1dist$3");
  }
    
  else if (isDashboardPath.exec(location.pathname)) {
    window.location = isDashboardPath.exec(location.pathname)[2] == 'build'
    ? winlocation.replace(isDashboardPath,"$1dev/app$3")
    : winlocation.replace(isDashboardPath,"$1build$3")
  }
  else {
    window.location = host[2] === 'io'
    ? 'https://github.com/' + host[0] + '/' + path[0]
    : 'http://' + path[0] + '.github.io/' + path[1];
  }
})();

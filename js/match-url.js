(function(w) {
  var patHttpW3 = /^https?:\/\/(w{3}\.)/;
  var patHttp = /^https?:\/\//;

  function isEndsWithSlash(url) {
    var pat = /\/$/;
    return pat.test(url);
  }

  function hasW3(url) {
    return patHttpW3.test(url);
  }

  function formatedUrl(url) {
    var result = url;
    if (isEndsWithSlash(url)) {
      result = url.slice(0, url.length - 1);
    }

    if(hasW3(result)) {
      result = result.replace(patHttpW3, '');
    } else {
      result = result.replace(patHttp, '');
    }

    return result;
  }

  // Export to window scope
  w.app = {
    isEndsWithSlash: isEndsWithSlash,
    hasW3: hasW3,
    formatedUrl: formatedUrl
  };

})(window);


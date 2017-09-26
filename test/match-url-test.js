var expect = chai.expect;

// expeact().to.equal();

describe('Match Url Test', function() {
  var urlSlash = 'https://github.com/',
    url = 'https://github.com',
    urlWww = 'https://www.github.com',
    http = 'http://www.github.com',
    https = 'https://www.github.com',
    urlOnly = 'github.com',

    urlWithParam = 'https://github.com/?callback=https://www.github.com',
    urlWithParam2 = 'https://github.com/?callback=https://www.test.com',

    param1 = 'https://github.com/?callback=https://www.github.com',
    param2 = 'http://github.com/?callback=https://www.github.com',
    param3 = 'https://www.github.com/?callback=https://www.github.com',
    param4 = 'http://www.github.com/?callback=https://www.github.com',
    param5 = 'http://www.github.com/?callback=https://www.github.com',

    blogspot = 'surenderlohia.blogspot.in/',
    blogspot2 = 'surenderlohia.blogspot.in/';

  describe('#isEndsWithSlash()', function() {
    it('Should return true if the url contains slash at the last', function() {
      expect(true).to.equal(app.isEndsWithSlash(urlSlash));
    });

    it('Should return false if the url do not contain slash at the last', function() {
      expect(false).to.equal(app.isEndsWithSlash(url));
    });

  });

  describe('#hasW3()', function() {
    it('Should return true if the url contains WWW', function() {
      expect(true).to.equal(app.hasW3(urlWww));
    });

    it('Should return false if the url do not contains WWW', function() {
      expect(false).to.equal(app.hasW3(url));
    });
  });

  describe('#formatUrl', function() {

    it('Url Contains slash at end need to trim', function() {
      expect(urlOnly).to.equal(app.formatedUrl(urlSlash));
    });

    it('Url do not Contains slash at end leave it as it is', function() {
      expect(urlOnly).to.equal(app.formatedUrl(urlOnly));
    });

  });

  describe('Check Match Url', function() {
    it('Url with and without slash is not equal', function() {
      expect(url).to.not.equal(urlSlash);
    });

    it('Url ends without slash is equal to url with slash after #fromatedUrl', function() {
      expect(app.formatedUrl(url)).to.equal(app.formatedUrl(urlSlash));
    });

    it('Url ends with slash is equal to url without slash after #fromatedUrl', function() {
      expect(app.formatedUrl(urlSlash)).to.equal(app.formatedUrl(url));
    });

    it('Url with and without www should be equal', function() {
      expect(app.formatedUrl(url)).to.equal(app.formatedUrl(urlWww));
    });

    it('Url miss match with http and https should be equal', function() {
      expect(app.formatedUrl(http)).to.equal(app.formatedUrl(https));
    });

    it('Url with and without param should not be equal', function() {
      expect(app.formatedUrl(url)).not.to.equal(app.formatedUrl(urlWithParam));
    });

    it('Url with different param should not be equal', function() {
      expect(app.formatedUrl(urlWithParam)).not.to.equal(app.formatedUrl(urlWithParam2));
    });

    it('Same Url with same param should be equal', function() {
      expect(app.formatedUrl(urlWithParam)).to.equal(app.formatedUrl(urlWithParam));
    });

    it('Url with different protocol and same url and param should be equal', function() {
      expect(app.formatedUrl(param1)).to.equal(app.formatedUrl(param2));
    });

    it('Url with and without www, but same url and param should be equal', function() {
      expect(app.formatedUrl(param4)).to.equal(app.formatedUrl(param2));
    });

    it('Same blogspot url should be equal', function() {
      expect(app.formatedUrl(blogspot)).to.equal(app.formatedUrl(blogspot2));
    });
  });  
});

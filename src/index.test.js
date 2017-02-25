import {expect} from 'chai';
import jsdom from 'jsdom';
import fs from 'fs';

describe('our first test', () => {
  it ('should pass', () => {
    expect(true).to.equal(true);
  });
});

//  test is asyn, so need to pass in "done", and tell mocha at the end it is done, then will do the "expect"
describe('index.html', () => {
  it('should have h1 that says users', (done) => {
    const index = fs.readFileSync('./src/index.html', "utf-8");
    jsdom.env(index, function(err, window) {
      const h1 = window.document.getElementsByTagName('h1')[0];
      expect (h1.innerHTML).to.equal("Users");
      done();
      window.close();
    });
  })
})

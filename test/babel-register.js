const { JSDOM } = require('jsdom');

const register = require('@babel/register').default;

register({ extensions: ['.ts', '.tsx', '.js', '.jsx'] });

const dom = new JSDOM('<main id="app"></main>', { url: 'http://localhost' });

global.window = dom.window;
global.document = dom.window.document;

require.extensions[".scss"] = function () {
  module.exports = () => ({});
}

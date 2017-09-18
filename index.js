const antlr4 = require('antlr4/index');
const policyLexer = require('./gen/policyLexer');
const policyParser = require('./gen/policyParser');
const _ = require('underscore');

const ErrorListener = require('antlr4/error/ErrorListener').ConsoleErrorListener;
ErrorListener.prototype.syntaxError = function(recognizer, offendingSymbol, line, column, msg, e) {
  this.errorMsg = msg;
};



var compile = function (text, target='json'){
  // ex(ErrorListener.prototype)
  let extentionClass = require('./JSONGeneratorExtention.js');
  if (target === 'beautify') {
    extentionClass = require('./BeautifyExtention.js');
  }

  let chars = new antlr4.InputStream(text);
  let lexer = new policyLexer.policyLexer(chars);

  let tokens  = new antlr4.CommonTokenStream(lexer);
  let parser = new policyParser.policyParser(tokens);
  parser.buildParseTrees = true;
  let tree = parser.p();
  let listener = new extentionClass();
  antlr4.tree.ParseTreeWalker.DEFAULT.walk(listener, tree);
  if( parser._listeners[0].errorMsg ) {
    //把错误信息放进listener里面
    listener.errorMsg =  parser._listeners[0].errorMsg;
  }
  return listener;
};

exports.compile = compile;

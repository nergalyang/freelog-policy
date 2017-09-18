const policyListener = require('./gen/policyListener').policyListener;
let _ = require('underscore');
let indentLevel = 2

class Beautify extends policyListener {
  constructor() {
    super();
    this.errorMsg = null;
    this.stringArray = [];
    this._nextIndent = ' ';
  }
  addIndent() {
    _.each(_.range(indentLevel), () => {
      this._nextIndent += " ";
    });
  };
  deleteIndent() {
    this._nextIndent = this._nextIndent.slice(0, Number('-' + indentLevel));
  };
  enterDuration(ctx) {
    _.map(ctx.children, (child) => {
      this.stringArray.push(child.getText());
    });
  };
  exitDuration(ctx) {};
  enterSegment(ctx) {
    this.stringArray.push('\n')
    this.stringArray.push('For');
  };
  exitSegment(ctx) {
    this.deleteIndent();
  };
  enterAudience_clause(ctx) {
    ctx.segment_block = ctx.parentCtx.segment_block;
  };
  exitAudience_clause(ctx) {
    this.stringArray.push(':');
    this.addIndent();
    this.stringArray.push(this._nextIndent);
  };
  enterState_clause(ctx) {
    this.stringArray.push('\n');
    this.stringArray.push(this._nextIndent);
  };
  enterCurrent_state_clause(ctx) {
    _.map(ctx.children, (child) => {
      this.stringArray.push(child.getText());
    });
  };
  enterTarget_clause(ctx) {
    this.stringArray.push('\n');
    this.addIndent();
    this.stringArray.push(this._nextIndent);
    this.stringArray = this.stringArray.concat(['proceed to', ctx.ID().getText(), 'on']);
  };
  exitTarget_clause() {
    this.deleteIndent();
  }
  enterAccepting(ctx) {
    this.stringArray.push('accepting');
  };
  enterAnd_event(ctx) {
    this.stringArray.push('and');
  };
  enterTime_event(ctx) {
    this.stringArray.push(ctx.getText());
  };
  enterPrice_event(ctx) {
    this.stringArray.push('price_event');
  };
  enterTransaction_event(ctx) {
    _.map(ctx.children, (child) => {
      this.stringArray.push(child.getText());
    });
  };
  enterContract_guaranty(ctx) {
    _.map(ctx.children, (child) => {
      this.stringArray.push(child.getText());
    });
  };
  enterPlatform_guaranty(ctx) {
    _.map(ctx.children, (child) => {
      this.stringArray.push(child.getText());
    });
  };
  enterSigning_event(ctx) {
    _.map(ctx.children, (child) => {
      this.stringArray.push(child.getText());
    });
  };
  enterSettlement_event(ctx) {
    this.stringArray.push('account_settled');
  };
  enterVisit_increment_event(ctx) {
    _.map(ctx.children, (child) => {
      this.stringArray.push(child.getText());
    });
  };
  enterVisit_event(ctx) {
    _.map(ctx.children, (child) => {
      this.stringArray.push(child.getText());
    });
  };
  enterBalance_greater(ctx) {
    _.map(ctx.children, (child) => {
      this.stringArray.push(child.getText());
    });
  };
  enterBalance_smaller(ctx) {
    _.map(ctx.children, (child) => {
      this.stringArray.push(child.getText());
    });
  };
  enterUsers(ctx) {
    for (var i = 0; i < ctx.getChildCount(); i++) {
      this.stringArray.push(ctx.getChild(i).getText());
    }
  };
  enterUser_groups(ctx) {
    this.stringArray.push('users in');
    for (var i = 0; i < ctx.getChildCount(); i++) {
      this.stringArray.push(ctx.getChild(i).getText());
    }
  };
};

module.exports = Beautify

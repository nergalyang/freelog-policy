// Generated from policy.g4 by ANTLR 4.7
// jshint ignore: start
var antlr4 = require('antlr4/index');


var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0002(\u01de\b\u0001\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004",
    "\u0004\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t",
    "\u0007\u0004\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004",
    "\f\t\f\u0004\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010",
    "\t\u0010\u0004\u0011\t\u0011\u0004\u0012\t\u0012\u0004\u0013\t\u0013",
    "\u0004\u0014\t\u0014\u0004\u0015\t\u0015\u0004\u0016\t\u0016\u0004\u0017",
    "\t\u0017\u0004\u0018\t\u0018\u0004\u0019\t\u0019\u0004\u001a\t\u001a",
    "\u0004\u001b\t\u001b\u0004\u001c\t\u001c\u0004\u001d\t\u001d\u0004\u001e",
    "\t\u001e\u0004\u001f\t\u001f\u0004 \t \u0004!\t!\u0004\"\t\"\u0004#",
    "\t#\u0004$\t$\u0004%\t%\u0004&\t&\u0004\'\t\'\u0003\u0002\u0003\u0002",
    "\u0003\u0002\u0003\u0002\u0003\u0003\u0003\u0003\u0003\u0004\u0003\u0004",
    "\u0003\u0004\u0003\u0004\u0003\u0005\u0003\u0005\u0003\u0006\u0003\u0006",
    "\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006",
    "\u0003\u0006\u0003\u0007\u0003\u0007\u0003\u0007\u0003\b\u0003\b\u0003",
    "\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003",
    "\t\u0003\t\u0003\t\u0003\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003",
    "\n\u0003\n\u0003\n\u0003\n\u0003\u000b\u0003\u000b\u0003\u000b\u0003",
    "\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0003\f\u0003\f\u0003\f\u0003",
    "\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\r\u0003",
    "\r\u0003\r\u0003\r\u0003\r\u0003\u000e\u0003\u000e\u0003\u000e\u0003",
    "\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0003",
    "\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0003",
    "\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0003",
    "\u000e\u0003\u000e\u0003\u000e\u0003\u000f\u0003\u000f\u0003\u000f\u0003",
    "\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0003",
    "\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0003",
    "\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0003",
    "\u000f\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0003",
    "\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0003",
    "\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0011\u0003\u0011\u0003",
    "\u0011\u0003\u0012\u0003\u0012\u0003\u0012\u0003\u0012\u0003\u0012\u0003",
    "\u0012\u0003\u0012\u0003\u0012\u0003\u0012\u0003\u0012\u0003\u0012\u0003",
    "\u0012\u0003\u0012\u0003\u0012\u0003\u0012\u0003\u0012\u0003\u0012\u0003",
    "\u0012\u0003\u0012\u0003\u0012\u0003\u0012\u0003\u0013\u0003\u0013\u0003",
    "\u0013\u0003\u0013\u0003\u0013\u0003\u0013\u0003\u0013\u0003\u0013\u0003",
    "\u0013\u0003\u0013\u0003\u0013\u0003\u0013\u0003\u0013\u0003\u0014\u0003",
    "\u0014\u0003\u0014\u0003\u0014\u0003\u0015\u0003\u0015\u0003\u0015\u0003",
    "\u0015\u0003\u0015\u0003\u0015\u0003\u0015\u0003\u0015\u0003\u0015\u0003",
    "\u0015\u0003\u0015\u0003\u0015\u0003\u0015\u0003\u0015\u0003\u0015\u0003",
    "\u0015\u0003\u0015\u0003\u0015\u0003\u0015\u0003\u0015\u0003\u0015\u0003",
    "\u0016\u0003\u0016\u0003\u0016\u0003\u0016\u0003\u0016\u0003\u0016\u0003",
    "\u0016\u0003\u0016\u0003\u0017\u0003\u0017\u0003\u0017\u0003\u0017\u0003",
    "\u0017\u0003\u0017\u0003\u0017\u0003\u0017\u0003\u0017\u0003\u0017\u0003",
    "\u0017\u0003\u0017\u0003\u0017\u0003\u0017\u0003\u0017\u0003\u0017\u0003",
    "\u0017\u0003\u0017\u0003\u0017\u0003\u0018\u0003\u0018\u0003\u0018\u0003",
    "\u0018\u0003\u0018\u0003\u0018\u0003\u0018\u0003\u0018\u0003\u0018\u0003",
    "\u0019\u0003\u0019\u0003\u0019\u0003\u0019\u0003\u0019\u0003\u0019\u0003",
    "\u0019\u0003\u0019\u0003\u0019\u0003\u0019\u0003\u0019\u0003\u0019\u0003",
    "\u0019\u0003\u0019\u0003\u0019\u0003\u0019\u0003\u0019\u0003\u0019\u0003",
    "\u0019\u0003\u0019\u0003\u0019\u0003\u0019\u0003\u0019\u0003\u0019\u0003",
    "\u0019\u0003\u0019\u0003\u0019\u0003\u0019\u0003\u0019\u0003\u001a\u0003",
    "\u001a\u0003\u001a\u0003\u001a\u0003\u001a\u0003\u001a\u0003\u001a\u0003",
    "\u001a\u0003\u001a\u0003\u001a\u0003\u001a\u0003\u001a\u0003\u001a\u0003",
    "\u001a\u0003\u001a\u0003\u001a\u0003\u001a\u0003\u001a\u0003\u001a\u0003",
    "\u001a\u0003\u001a\u0003\u001a\u0003\u001a\u0003\u001a\u0003\u001a\u0003",
    "\u001a\u0003\u001a\u0003\u001a\u0003\u001a\u0003\u001b\u0003\u001b\u0003",
    "\u001b\u0003\u001b\u0003\u001b\u0003\u001b\u0003\u001b\u0003\u001b\u0003",
    "\u001b\u0003\u001b\u0003\u001b\u0003\u001b\u0003\u001b\u0003\u001b\u0003",
    "\u001b\u0003\u001b\u0003\u001c\u0003\u001c\u0003\u001c\u0003\u001c\u0003",
    "\u001c\u0003\u001c\u0003\u001c\u0003\u001c\u0003\u001c\u0003\u001c\u0003",
    "\u001c\u0003\u001c\u0003\u001c\u0003\u001c\u0003\u001c\u0003\u001d\u0003",
    "\u001d\u0003\u001d\u0003\u001d\u0003\u001d\u0003\u001d\u0003\u001d\u0003",
    "\u001d\u0003\u001d\u0003\u001d\u0003\u001e\u0003\u001e\u0003\u001e\u0003",
    "\u001e\u0003\u001e\u0003\u001e\u0003\u001e\u0003\u001e\u0003\u001e\u0003",
    "\u001e\u0003\u001e\u0003\u001f\u0003\u001f\u0003\u001f\u0003\u001f\u0003",
    "\u001f\u0003\u001f\u0003\u001f\u0003\u001f\u0003\u001f\u0003\u001f\u0003",
    "\u001f\u0003\u001f\u0003\u001f\u0003\u001f\u0003\u001f\u0003 \u0003",
    " \u0003 \u0003 \u0003 \u0003!\u0003!\u0003!\u0003!\u0003!\u0003\"\u0003",
    "\"\u0003\"\u0003\"\u0003\"\u0003\"\u0003#\u0006#\u01c4\n#\r#\u000e#",
    "\u01c5\u0003$\u0006$\u01c9\n$\r$\u000e$\u01ca\u0003%\u0006%\u01ce\n",
    "%\r%\u000e%\u01cf\u0003&\u0006&\u01d3\n&\r&\u000e&\u01d4\u0003&\u0003",
    "&\u0003\'\u0003\'\u0003\'\u0003\'\u0003\'\u0003\'\u0002\u0002(\u0003",
    "\u0003\u0005\u0004\u0007\u0005\t\u0006\u000b\u0007\r\b\u000f\t\u0011",
    "\n\u0013\u000b\u0015\f\u0017\r\u0019\u000e\u001b\u000f\u001d\u0010\u001f",
    "\u0011!\u0012#\u0013%\u0014\'\u0015)\u0016+\u0017-\u0018/\u00191\u001a",
    "3\u001b5\u001c7\u001d9\u001e;\u001f= ?!A\"C#E$G%I&K\'M(\u0003\u0002",
    "\u0006\u0005\u0002C\\`ac|\u0003\u00022;\u0006\u0002002;B\\c|\u0005\u0002",
    "\u000b\f\u000f\u000f\"\"\u0002\u01e1\u0002\u0003\u0003\u0002\u0002\u0002",
    "\u0002\u0005\u0003\u0002\u0002\u0002\u0002\u0007\u0003\u0002\u0002\u0002",
    "\u0002\t\u0003\u0002\u0002\u0002\u0002\u000b\u0003\u0002\u0002\u0002",
    "\u0002\r\u0003\u0002\u0002\u0002\u0002\u000f\u0003\u0002\u0002\u0002",
    "\u0002\u0011\u0003\u0002\u0002\u0002\u0002\u0013\u0003\u0002\u0002\u0002",
    "\u0002\u0015\u0003\u0002\u0002\u0002\u0002\u0017\u0003\u0002\u0002\u0002",
    "\u0002\u0019\u0003\u0002\u0002\u0002\u0002\u001b\u0003\u0002\u0002\u0002",
    "\u0002\u001d\u0003\u0002\u0002\u0002\u0002\u001f\u0003\u0002\u0002\u0002",
    "\u0002!\u0003\u0002\u0002\u0002\u0002#\u0003\u0002\u0002\u0002\u0002",
    "%\u0003\u0002\u0002\u0002\u0002\'\u0003\u0002\u0002\u0002\u0002)\u0003",
    "\u0002\u0002\u0002\u0002+\u0003\u0002\u0002\u0002\u0002-\u0003\u0002",
    "\u0002\u0002\u0002/\u0003\u0002\u0002\u0002\u00021\u0003\u0002\u0002",
    "\u0002\u00023\u0003\u0002\u0002\u0002\u00025\u0003\u0002\u0002\u0002",
    "\u00027\u0003\u0002\u0002\u0002\u00029\u0003\u0002\u0002\u0002\u0002",
    ";\u0003\u0002\u0002\u0002\u0002=\u0003\u0002\u0002\u0002\u0002?\u0003",
    "\u0002\u0002\u0002\u0002A\u0003\u0002\u0002\u0002\u0002C\u0003\u0002",
    "\u0002\u0002\u0002E\u0003\u0002\u0002\u0002\u0002G\u0003\u0002\u0002",
    "\u0002\u0002I\u0003\u0002\u0002\u0002\u0002K\u0003\u0002\u0002\u0002",
    "\u0002M\u0003\u0002\u0002\u0002\u0003O\u0003\u0002\u0002\u0002\u0005",
    "S\u0003\u0002\u0002\u0002\u0007U\u0003\u0002\u0002\u0002\tY\u0003\u0002",
    "\u0002\u0002\u000b[\u0003\u0002\u0002\u0002\rd\u0003\u0002\u0002\u0002",
    "\u000fg\u0003\u0002\u0002\u0002\u0011r\u0003\u0002\u0002\u0002\u0013",
    "u\u0003\u0002\u0002\u0002\u0015\u007f\u0003\u0002\u0002\u0002\u0017",
    "\u0086\u0003\u0002\u0002\u0002\u0019\u0091\u0003\u0002\u0002\u0002\u001b",
    "\u0096\u0003\u0002\u0002\u0002\u001d\u00ae\u0003\u0002\u0002\u0002\u001f",
    "\u00c4\u0003\u0002\u0002\u0002!\u00d3\u0003\u0002\u0002\u0002#\u00d6",
    "\u0003\u0002\u0002\u0002%\u00eb\u0003\u0002\u0002\u0002\'\u00f8\u0003",
    "\u0002\u0002\u0002)\u00fc\u0003\u0002\u0002\u0002+\u0111\u0003\u0002",
    "\u0002\u0002-\u0119\u0003\u0002\u0002\u0002/\u012c\u0003\u0002\u0002",
    "\u00021\u0135\u0003\u0002\u0002\u00023\u0152\u0003\u0002\u0002\u0002",
    "5\u016f\u0003\u0002\u0002\u00027\u017f\u0003\u0002\u0002\u00029\u018e",
    "\u0003\u0002\u0002\u0002;\u0198\u0003\u0002\u0002\u0002=\u01a3\u0003",
    "\u0002\u0002\u0002?\u01b2\u0003\u0002\u0002\u0002A\u01b7\u0003\u0002",
    "\u0002\u0002C\u01bc\u0003\u0002\u0002\u0002E\u01c3\u0003\u0002\u0002",
    "\u0002G\u01c8\u0003\u0002\u0002\u0002I\u01cd\u0003\u0002\u0002\u0002",
    "K\u01d2\u0003\u0002\u0002\u0002M\u01d8\u0003\u0002\u0002\u0002OP\u0007",
    "H\u0002\u0002PQ\u0007q\u0002\u0002QR\u0007t\u0002\u0002R\u0004\u0003",
    "\u0002\u0002\u0002ST\u0007<\u0002\u0002T\u0006\u0003\u0002\u0002\u0002",
    "UV\u0007c\u0002\u0002VW\u0007p\u0002\u0002WX\u0007f\u0002\u0002X\b\u0003",
    "\u0002\u0002\u0002YZ\u0007.\u0002\u0002Z\n\u0003\u0002\u0002\u0002[",
    "\\\u0007w\u0002\u0002\\]\u0007u\u0002\u0002]^\u0007g\u0002\u0002^_\u0007",
    "t\u0002\u0002_`\u0007u\u0002\u0002`a\u0007\"\u0002\u0002ab\u0007k\u0002",
    "\u0002bc\u0007p\u0002\u0002c\f\u0003\u0002\u0002\u0002de\u0007k\u0002",
    "\u0002ef\u0007p\u0002\u0002f\u000e\u0003\u0002\u0002\u0002gh\u0007r",
    "\u0002\u0002hi\u0007t\u0002\u0002ij\u0007q\u0002\u0002jk\u0007e\u0002",
    "\u0002kl\u0007g\u0002\u0002lm\u0007g\u0002\u0002mn\u0007f\u0002\u0002",
    "no\u0007\"\u0002\u0002op\u0007v\u0002\u0002pq\u0007q\u0002\u0002q\u0010",
    "\u0003\u0002\u0002\u0002rs\u0007q\u0002\u0002st\u0007p\u0002\u0002t",
    "\u0012\u0003\u0002\u0002\u0002uv\u0007c\u0002\u0002vw\u0007e\u0002\u0002",
    "wx\u0007e\u0002\u0002xy\u0007g\u0002\u0002yz\u0007r\u0002\u0002z{\u0007",
    "v\u0002\u0002{|\u0007k\u0002\u0002|}\u0007p\u0002\u0002}~\u0007i\u0002",
    "\u0002~\u0014\u0003\u0002\u0002\u0002\u007f\u0080\u0007c\u0002\u0002",
    "\u0080\u0081\u0007p\u0002\u0002\u0081\u0082\u0007f\u0002\u0002\u0082",
    "\u0083\u0007\"\u0002\u0002\u0083\u0084\u0007q\u0002\u0002\u0084\u0085",
    "\u0007p\u0002\u0002\u0085\u0016\u0003\u0002\u0002\u0002\u0086\u0087",
    "\u0007v\u0002\u0002\u0087\u0088\u0007j\u0002\u0002\u0088\u0089\u0007",
    "g\u0002\u0002\u0089\u008a\u0007\"\u0002\u0002\u008a\u008b\u0007g\u0002",
    "\u0002\u008b\u008c\u0007p\u0002\u0002\u008c\u008d\u0007f\u0002\u0002",
    "\u008d\u008e\u0007\"\u0002\u0002\u008e\u008f\u0007q\u0002\u0002\u008f",
    "\u0090\u0007h\u0002\u0002\u0090\u0018\u0003\u0002\u0002\u0002\u0091",
    "\u0092\u0007f\u0002\u0002\u0092\u0093\u0007c\u0002\u0002\u0093\u0094",
    "\u0007v\u0002\u0002\u0094\u0095\u0007g\u0002\u0002\u0095\u001a\u0003",
    "\u0002\u0002\u0002\u0096\u0097\u0007c\u0002\u0002\u0097\u0098\u0007",
    "h\u0002\u0002\u0098\u0099\u0007v\u0002\u0002\u0099\u009a\u0007g\u0002",
    "\u0002\u009a\u009b\u0007t\u0002\u0002\u009b\u009c\u0007\"\u0002\u0002",
    "\u009c\u009d\u0007e\u0002\u0002\u009d\u009e\u0007q\u0002\u0002\u009e",
    "\u009f\u0007p\u0002\u0002\u009f\u00a0\u0007v\u0002\u0002\u00a0\u00a1",
    "\u0007t\u0002\u0002\u00a1\u00a2\u0007c\u0002\u0002\u00a2\u00a3\u0007",
    "e\u0002\u0002\u00a3\u00a4\u0007v\u0002\u0002\u00a4\u00a5\u0007\"\u0002",
    "\u0002\u00a5\u00a6\u0007e\u0002\u0002\u00a6\u00a7\u0007t\u0002\u0002",
    "\u00a7\u00a8\u0007g\u0002\u0002\u00a8\u00a9\u0007c\u0002\u0002\u00a9",
    "\u00aa\u0007v\u0002\u0002\u00aa\u00ab\u0007k\u0002\u0002\u00ab\u00ac",
    "\u0007q\u0002\u0002\u00ac\u00ad\u0007p\u0002\u0002\u00ad\u001c\u0003",
    "\u0002\u0002\u0002\u00ae\u00af\u0007r\u0002\u0002\u00af\u00b0\u0007",
    "t\u0002\u0002\u00b0\u00b1\u0007k\u0002\u0002\u00b1\u00b2\u0007e\u0002",
    "\u0002\u00b2\u00b3\u0007g\u0002\u0002\u00b3\u00b4\u0007\"\u0002\u0002",
    "\u00b4\u00b5\u0007r\u0002\u0002\u00b5\u00b6\u0007t\u0002\u0002\u00b6",
    "\u00b7\u0007k\u0002\u0002\u00b7\u00b8\u0007e\u0002\u0002\u00b8\u00b9",
    "\u0007g\u0002\u0002\u00b9\u00ba\u0007G\u0002\u0002\u00ba\u00bb\u0007",
    "z\u0002\u0002\u00bb\u00bc\u0007r\u0002\u0002\u00bc\u00bd\u0007t\u0002",
    "\u0002\u00bd\u00be\u0007g\u0002\u0002\u00be\u00bf\u0007u\u0002\u0002",
    "\u00bf\u00c0\u0007u\u0002\u0002\u00c0\u00c1\u0007k\u0002\u0002\u00c1",
    "\u00c2\u0007q\u0002\u0002\u00c2\u00c3\u0007p\u0002\u0002\u00c3\u001e",
    "\u0003\u0002\u0002\u0002\u00c4\u00c5\u0007v\u0002\u0002\u00c5\u00c6",
    "\u0007t\u0002\u0002\u00c6\u00c7\u0007c\u0002\u0002\u00c7\u00c8\u0007",
    "p\u0002\u0002\u00c8\u00c9\u0007u\u0002\u0002\u00c9\u00ca\u0007c\u0002",
    "\u0002\u00ca\u00cb\u0007e\u0002\u0002\u00cb\u00cc\u0007v\u0002\u0002",
    "\u00cc\u00cd\u0007k\u0002\u0002\u00cd\u00ce\u0007q\u0002\u0002\u00ce",
    "\u00cf\u0007p\u0002\u0002\u00cf\u00d0\u0007\"\u0002\u0002\u00d0\u00d1",
    "\u0007q\u0002\u0002\u00d1\u00d2\u0007h\u0002\u0002\u00d2 \u0003\u0002",
    "\u0002\u0002\u00d3\u00d4\u0007v\u0002\u0002\u00d4\u00d5\u0007q\u0002",
    "\u0002\u00d5\"\u0003\u0002\u0002\u0002\u00d6\u00d7\u0007e\u0002\u0002",
    "\u00d7\u00d8\u0007q\u0002\u0002\u00d8\u00d9\u0007p\u0002\u0002\u00d9",
    "\u00da\u0007v\u0002\u0002\u00da\u00db\u0007t\u0002\u0002\u00db\u00dc",
    "\u0007c\u0002\u0002\u00dc\u00dd\u0007e\u0002\u0002\u00dd\u00de\u0007",
    "v\u0002\u0002\u00de\u00df\u0007a\u0002\u0002\u00df\u00e0\u0007i\u0002",
    "\u0002\u00e0\u00e1\u0007w\u0002\u0002\u00e1\u00e2\u0007c\u0002\u0002",
    "\u00e2\u00e3\u0007t\u0002\u0002\u00e3\u00e4\u0007c\u0002\u0002\u00e4",
    "\u00e5\u0007p\u0002\u0002\u00e5\u00e6\u0007v\u0002\u0002\u00e6\u00e7",
    "\u0007{\u0002\u0002\u00e7\u00e8\u0007\"\u0002\u0002\u00e8\u00e9\u0007",
    "q\u0002\u0002\u00e9\u00ea\u0007h\u0002\u0002\u00ea$\u0003\u0002\u0002",
    "\u0002\u00eb\u00ec\u0007t\u0002\u0002\u00ec\u00ed\u0007g\u0002\u0002",
    "\u00ed\u00ee\u0007h\u0002\u0002\u00ee\u00ef\u0007w\u0002\u0002\u00ef",
    "\u00f0\u0007p\u0002\u0002\u00f0\u00f1\u0007f\u0002\u0002\u00f1\u00f2",
    "\u0007\"\u0002\u0002\u00f2\u00f3\u0007c\u0002\u0002\u00f3\u00f4\u0007",
    "h\u0002\u0002\u00f4\u00f5\u0007v\u0002\u0002\u00f5\u00f6\u0007g\u0002",
    "\u0002\u00f6\u00f7\u0007t\u0002\u0002\u00f7&\u0003\u0002\u0002\u0002",
    "\u00f8\u00f9\u0007f\u0002\u0002\u00f9\u00fa\u0007c\u0002\u0002\u00fa",
    "\u00fb\u0007{\u0002\u0002\u00fb(\u0003\u0002\u0002\u0002\u00fc\u00fd",
    "\u0007r\u0002\u0002\u00fd\u00fe\u0007n\u0002\u0002\u00fe\u00ff\u0007",
    "c\u0002\u0002\u00ff\u0100\u0007v\u0002\u0002\u0100\u0101\u0007h\u0002",
    "\u0002\u0101\u0102\u0007q\u0002\u0002\u0102\u0103\u0007t\u0002\u0002",
    "\u0103\u0104\u0007o\u0002\u0002\u0104\u0105\u0007a\u0002\u0002\u0105",
    "\u0106\u0007i\u0002\u0002\u0106\u0107\u0007w\u0002\u0002\u0107\u0108",
    "\u0007c\u0002\u0002\u0108\u0109\u0007t\u0002\u0002\u0109\u010a\u0007",
    "c\u0002\u0002\u010a\u010b\u0007p\u0002\u0002\u010b\u010c\u0007v\u0002",
    "\u0002\u010c\u010d\u0007{\u0002\u0002\u010d\u010e\u0007\"\u0002\u0002",
    "\u010e\u010f\u0007q\u0002\u0002\u010f\u0110\u0007h\u0002\u0002\u0110",
    "*\u0003\u0002\u0002\u0002\u0111\u0112\u0007n\u0002\u0002\u0112\u0113",
    "\u0007k\u0002\u0002\u0113\u0114\u0007e\u0002\u0002\u0114\u0115\u0007",
    "g\u0002\u0002\u0115\u0116\u0007p\u0002\u0002\u0116\u0117\u0007u\u0002",
    "\u0002\u0117\u0118\u0007g\u0002\u0002\u0118,\u0003\u0002\u0002\u0002",
    "\u0119\u011a\u0007x\u0002\u0002\u011a\u011b\u0007k\u0002\u0002\u011b",
    "\u011c\u0007u\u0002\u0002\u011c\u011d\u0007k\u0002\u0002\u011d\u011e",
    "\u0007v\u0002\u0002\u011e\u011f\u0007a\u0002\u0002\u011f\u0120\u0007",
    "k\u0002\u0002\u0120\u0121\u0007p\u0002\u0002\u0121\u0122\u0007e\u0002",
    "\u0002\u0122\u0123\u0007t\u0002\u0002\u0123\u0124\u0007g\u0002\u0002",
    "\u0124\u0125\u0007o\u0002\u0002\u0125\u0126\u0007g\u0002\u0002\u0126",
    "\u0127\u0007p\u0002\u0002\u0127\u0128\u0007v\u0002\u0002\u0128\u0129",
    "\u0007\"\u0002\u0002\u0129\u012a\u0007q\u0002\u0002\u012a\u012b\u0007",
    "h\u0002\u0002\u012b.\u0003\u0002\u0002\u0002\u012c\u012d\u0007x\u0002",
    "\u0002\u012d\u012e\u0007k\u0002\u0002\u012e\u012f\u0007u\u0002\u0002",
    "\u012f\u0130\u0007k\u0002\u0002\u0130\u0131\u0007v\u0002\u0002\u0131",
    "\u0132\u0007\"\u0002\u0002\u0132\u0133\u0007q\u0002\u0002\u0133\u0134",
    "\u0007h\u0002\u0002\u01340\u0003\u0002\u0002\u0002\u0135\u0136\u0007",
    "c\u0002\u0002\u0136\u0137\u0007e\u0002\u0002\u0137\u0138\u0007e\u0002",
    "\u0002\u0138\u0139\u0007q\u0002\u0002\u0139\u013a\u0007w\u0002\u0002",
    "\u013a\u013b\u0007p\u0002\u0002\u013b\u013c\u0007v\u0002\u0002\u013c",
    "\u013d\u0007a\u0002\u0002\u013d\u013e\u0007d\u0002\u0002\u013e\u013f",
    "\u0007c\u0002\u0002\u013f\u0140\u0007n\u0002\u0002\u0140\u0141\u0007",
    "c\u0002\u0002\u0141\u0142\u0007p\u0002\u0002\u0142\u0143\u0007e\u0002",
    "\u0002\u0143\u0144\u0007g\u0002\u0002\u0144\u0145\u0007\"\u0002\u0002",
    "\u0145\u0146\u0007i\u0002\u0002\u0146\u0147\u0007t\u0002\u0002\u0147",
    "\u0148\u0007g\u0002\u0002\u0148\u0149\u0007c\u0002\u0002\u0149\u014a",
    "\u0007v\u0002\u0002\u014a\u014b\u0007g\u0002\u0002\u014b\u014c\u0007",
    "t\u0002\u0002\u014c\u014d\u0007\"\u0002\u0002\u014d\u014e\u0007v\u0002",
    "\u0002\u014e\u014f\u0007j\u0002\u0002\u014f\u0150\u0007c\u0002\u0002",
    "\u0150\u0151\u0007p\u0002\u0002\u01512\u0003\u0002\u0002\u0002\u0152",
    "\u0153\u0007c\u0002\u0002\u0153\u0154\u0007e\u0002\u0002\u0154\u0155",
    "\u0007e\u0002\u0002\u0155\u0156\u0007q\u0002\u0002\u0156\u0157\u0007",
    "w\u0002\u0002\u0157\u0158\u0007p\u0002\u0002\u0158\u0159\u0007v\u0002",
    "\u0002\u0159\u015a\u0007a\u0002\u0002\u015a\u015b\u0007d\u0002\u0002",
    "\u015b\u015c\u0007c\u0002\u0002\u015c\u015d\u0007n\u0002\u0002\u015d",
    "\u015e\u0007c\u0002\u0002\u015e\u015f\u0007p\u0002\u0002\u015f\u0160",
    "\u0007e\u0002\u0002\u0160\u0161\u0007g\u0002\u0002\u0161\u0162\u0007",
    "\"\u0002\u0002\u0162\u0163\u0007u\u0002\u0002\u0163\u0164\u0007o\u0002",
    "\u0002\u0164\u0165\u0007c\u0002\u0002\u0165\u0166\u0007n\u0002\u0002",
    "\u0166\u0167\u0007n\u0002\u0002\u0167\u0168\u0007g\u0002\u0002\u0168",
    "\u0169\u0007t\u0002\u0002\u0169\u016a\u0007\"\u0002\u0002\u016a\u016b",
    "\u0007v\u0002\u0002\u016b\u016c\u0007j\u0002\u0002\u016c\u016d\u0007",
    "c\u0002\u0002\u016d\u016e\u0007p\u0002\u0002\u016e4\u0003\u0002\u0002",
    "\u0002\u016f\u0170\u0007c\u0002\u0002\u0170\u0171\u0007e\u0002\u0002",
    "\u0171\u0172\u0007e\u0002\u0002\u0172\u0173\u0007q\u0002\u0002\u0173",
    "\u0174\u0007w\u0002\u0002\u0174\u0175\u0007p\u0002\u0002\u0175\u0176",
    "\u0007v\u0002\u0002\u0176\u0177\u0007a\u0002\u0002\u0177\u0178\u0007",
    "u\u0002\u0002\u0178\u0179\u0007g\u0002\u0002\u0179\u017a\u0007v\u0002",
    "\u0002\u017a\u017b\u0007v\u0002\u0002\u017b\u017c\u0007n\u0002\u0002",
    "\u017c\u017d\u0007g\u0002\u0002\u017d\u017e\u0007f\u0002\u0002\u017e",
    "6\u0003\u0002\u0002\u0002\u017f\u0180\u0007T\u0002\u0002\u0180\u0181",
    "\u0007g\u0002\u0002\u0181\u0182\u0007i\u0002\u0002\u0182\u0183\u0007",
    "k\u0002\u0002\u0183\u0184\u0007u\u0002\u0002\u0184\u0185\u0007v\u0002",
    "\u0002\u0185\u0186\u0007g\u0002\u0002\u0186\u0187\u0007t\u0002\u0002",
    "\u0187\u0188\u0007g\u0002\u0002\u0188\u0189\u0007f\u0002\u0002\u0189",
    "\u018a\u0007W\u0002\u0002\u018a\u018b\u0007u\u0002\u0002\u018b\u018c",
    "\u0007g\u0002\u0002\u018c\u018d\u0007t\u0002\u0002\u018d8\u0003\u0002",
    "\u0002\u0002\u018e\u018f\u0007N\u0002\u0002\u018f\u0190\u0007q\u0002",
    "\u0002\u0190\u0191\u0007i\u0002\u0002\u0191\u0192\u0007k\u0002\u0002",
    "\u0192\u0193\u0007p\u0002\u0002\u0193\u0194\u0007W\u0002\u0002\u0194",
    "\u0195\u0007u\u0002\u0002\u0195\u0196\u0007g\u0002\u0002\u0196\u0197",
    "\u0007t\u0002\u0002\u0197:\u0003\u0002\u0002\u0002\u0198\u0199\u0007",
    "C\u0002\u0002\u0199\u019a\u0007n\u0002\u0002\u019a\u019b\u0007n\u0002",
    "\u0002\u019b\u019c\u0007X\u0002\u0002\u019c\u019d\u0007k\u0002\u0002",
    "\u019d\u019e\u0007u\u0002\u0002\u019e\u019f\u0007k\u0002\u0002\u019f",
    "\u01a0\u0007v\u0002\u0002\u01a0\u01a1\u0007g\u0002\u0002\u01a1\u01a2",
    "\u0007t\u0002\u0002\u01a2<\u0003\u0002\u0002\u0002\u01a3\u01a4\u0007",
    "T\u0002\u0002\u01a4\u01a5\u0007g\u0002\u0002\u01a5\u01a6\u0007i\u0002",
    "\u0002\u01a6\u01a7\u0007k\u0002\u0002\u01a7\u01a8\u0007u\u0002\u0002",
    "\u01a8\u01a9\u0007v\u0002\u0002\u01a9\u01aa\u0007g\u0002\u0002\u01aa",
    "\u01ab\u0007t\u0002\u0002\u01ab\u01ac\u0007g\u0002\u0002\u01ac\u01ad",
    "\u0007f\u0002\u0002\u01ad\u01ae\u0007P\u0002\u0002\u01ae\u01af\u0007",
    "q\u0002\u0002\u01af\u01b0\u0007f\u0002\u0002\u01b0\u01b1\u0007g\u0002",
    "\u0002\u01b1>\u0003\u0002\u0002\u0002\u01b2\u01b3\u0007{\u0002\u0002",
    "\u01b3\u01b4\u0007g\u0002\u0002\u01b4\u01b5\u0007c\u0002\u0002\u01b5",
    "\u01b6\u0007t\u0002\u0002\u01b6@\u0003\u0002\u0002\u0002\u01b7\u01b8",
    "\u0007y\u0002\u0002\u01b8\u01b9\u0007g\u0002\u0002\u01b9\u01ba\u0007",
    "g\u0002\u0002\u01ba\u01bb\u0007m\u0002\u0002\u01bbB\u0003\u0002\u0002",
    "\u0002\u01bc\u01bd\u0007e\u0002\u0002\u01bd\u01be\u0007{\u0002\u0002",
    "\u01be\u01bf\u0007e\u0002\u0002\u01bf\u01c0\u0007n\u0002\u0002\u01c0",
    "\u01c1\u0007g\u0002\u0002\u01c1D\u0003\u0002\u0002\u0002\u01c2\u01c4",
    "\t\u0002\u0002\u0002\u01c3\u01c2\u0003\u0002\u0002\u0002\u01c4\u01c5",
    "\u0003\u0002\u0002\u0002\u01c5\u01c3\u0003\u0002\u0002\u0002\u01c5\u01c6",
    "\u0003\u0002\u0002\u0002\u01c6F\u0003\u0002\u0002\u0002\u01c7\u01c9",
    "\t\u0003\u0002\u0002\u01c8\u01c7\u0003\u0002\u0002\u0002\u01c9\u01ca",
    "\u0003\u0002\u0002\u0002\u01ca\u01c8\u0003\u0002\u0002\u0002\u01ca\u01cb",
    "\u0003\u0002\u0002\u0002\u01cbH\u0003\u0002\u0002\u0002\u01cc\u01ce",
    "\t\u0004\u0002\u0002\u01cd\u01cc\u0003\u0002\u0002\u0002\u01ce\u01cf",
    "\u0003\u0002\u0002\u0002\u01cf\u01cd\u0003\u0002\u0002\u0002\u01cf\u01d0",
    "\u0003\u0002\u0002\u0002\u01d0J\u0003\u0002\u0002\u0002\u01d1\u01d3",
    "\t\u0005\u0002\u0002\u01d2\u01d1\u0003\u0002\u0002\u0002\u01d3\u01d4",
    "\u0003\u0002\u0002\u0002\u01d4\u01d2\u0003\u0002\u0002\u0002\u01d4\u01d5",
    "\u0003\u0002\u0002\u0002\u01d5\u01d6\u0003\u0002\u0002\u0002\u01d6\u01d7",
    "\b&\u0002\u0002\u01d7L\u0003\u0002\u0002\u0002\u01d8\u01d9\u0005G$\u0002",
    "\u01d9\u01da\u0007/\u0002\u0002\u01da\u01db\u0005G$\u0002\u01db\u01dc",
    "\u0007/\u0002\u0002\u01dc\u01dd\u0005G$\u0002\u01ddN\u0003\u0002\u0002",
    "\u0002\b\u0002\u01c3\u01c5\u01ca\u01cf\u01d4\u0003\b\u0002\u0002"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

function policyLexer(input) {
	antlr4.Lexer.call(this, input);
    this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.PredictionContextCache());
    return this;
}

policyLexer.prototype = Object.create(antlr4.Lexer.prototype);
policyLexer.prototype.constructor = policyLexer;

policyLexer.EOF = antlr4.Token.EOF;
policyLexer.T__0 = 1;
policyLexer.T__1 = 2;
policyLexer.T__2 = 3;
policyLexer.T__3 = 4;
policyLexer.T__4 = 5;
policyLexer.T__5 = 6;
policyLexer.T__6 = 7;
policyLexer.T__7 = 8;
policyLexer.T__8 = 9;
policyLexer.T__9 = 10;
policyLexer.T__10 = 11;
policyLexer.T__11 = 12;
policyLexer.T__12 = 13;
policyLexer.T__13 = 14;
policyLexer.T__14 = 15;
policyLexer.T__15 = 16;
policyLexer.T__16 = 17;
policyLexer.T__17 = 18;
policyLexer.T__18 = 19;
policyLexer.T__19 = 20;
policyLexer.T__20 = 21;
policyLexer.T__21 = 22;
policyLexer.T__22 = 23;
policyLexer.T__23 = 24;
policyLexer.T__24 = 25;
policyLexer.T__25 = 26;
policyLexer.T__26 = 27;
policyLexer.T__27 = 28;
policyLexer.T__28 = 29;
policyLexer.T__29 = 30;
policyLexer.T__30 = 31;
policyLexer.T__31 = 32;
policyLexer.T__32 = 33;
policyLexer.ID = 34;
policyLexer.INT = 35;
policyLexer.FEATHERACCOUNT = 36;
policyLexer.WS = 37;
policyLexer.DATE = 38;

policyLexer.prototype.channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];

policyLexer.prototype.modeNames = [ "DEFAULT_MODE" ];

policyLexer.prototype.literalNames = [ null, "'For'", "':'", "'and'", "','", 
                                       "'users in'", "'in'", "'proceed to'", 
                                       "'on'", "'accepting'", "'and on'", 
                                       "'the end of'", "'date'", "'after contract creation'", 
                                       "'price priceExpression'", "'transaction of'", 
                                       "'to'", "'contract_guaranty of'", 
                                       "'refund after'", "'day'", "'platform_guaranty of'", 
                                       "'license'", "'visit_increment of'", 
                                       "'visit of'", "'account_balance greater than'", 
                                       "'account_balance smaller than'", 
                                       "'account_settled'", "'RegisteredUser'", 
                                       "'LoginUser'", "'AllVisiter'", "'RegisteredNode'", 
                                       "'year'", "'week'", "'cycle'" ];

policyLexer.prototype.symbolicNames = [ null, null, null, null, null, null, 
                                        null, null, null, null, null, null, 
                                        null, null, null, null, null, null, 
                                        null, null, null, null, null, null, 
                                        null, null, null, null, null, null, 
                                        null, null, null, null, "ID", "INT", 
                                        "FEATHERACCOUNT", "WS", "DATE" ];

policyLexer.prototype.ruleNames = [ "T__0", "T__1", "T__2", "T__3", "T__4", 
                                    "T__5", "T__6", "T__7", "T__8", "T__9", 
                                    "T__10", "T__11", "T__12", "T__13", 
                                    "T__14", "T__15", "T__16", "T__17", 
                                    "T__18", "T__19", "T__20", "T__21", 
                                    "T__22", "T__23", "T__24", "T__25", 
                                    "T__26", "T__27", "T__28", "T__29", 
                                    "T__30", "T__31", "T__32", "ID", "INT", 
                                    "FEATHERACCOUNT", "WS", "DATE" ];

policyLexer.prototype.grammarFileName = "policy.g4";



exports.policyLexer = policyLexer;


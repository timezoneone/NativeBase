var _jsxFileName="__tests__\\basic\\Button.ios.js";var _reactNative=require("react-native");
var _react=require("react");var _react2=_interopRequireDefault(_react);
var _reactTestRenderer=require("react-test-renderer");var _reactTestRenderer2=_interopRequireDefault(_reactTestRenderer);
var _Content=require("./../../src/basic/Content");

var _Button=require("./../../src/basic/Button");
var _Text=require("./../../src/basic/Text");
var _Icon=require("./../../src/basic/Icon");function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}



jest.mock("Platform",function(){
var Platform=require.requireActual("Platform");
Platform.OS="ios";
return Platform;
});

it("renders regular button",function(){
var tree=_reactTestRenderer2.default.
create(
_react2.default.createElement(_Content.Content,{__source:{fileName:_jsxFileName,lineNumber:21}},
_react2.default.createElement(_Button.Button,{light:true,__source:{fileName:_jsxFileName,lineNumber:22}},
_react2.default.createElement(_Text.Text,{__source:{fileName:_jsxFileName,lineNumber:23}},"Light")),

_react2.default.createElement(_Button.Button,{info:true,__source:{fileName:_jsxFileName,lineNumber:25}},
_react2.default.createElement(_Text.Text,{__source:{fileName:_jsxFileName,lineNumber:26}},"Info")),

_react2.default.createElement(_Button.Button,{primary:true,__source:{fileName:_jsxFileName,lineNumber:28}},
_react2.default.createElement(_Text.Text,{__source:{fileName:_jsxFileName,lineNumber:29}},"Primary")),

_react2.default.createElement(_Button.Button,{success:true,__source:{fileName:_jsxFileName,lineNumber:31}},
_react2.default.createElement(_Text.Text,{__source:{fileName:_jsxFileName,lineNumber:32}},"Success")),

_react2.default.createElement(_Button.Button,{warning:true,__source:{fileName:_jsxFileName,lineNumber:34}},
_react2.default.createElement(_Text.Text,{__source:{fileName:_jsxFileName,lineNumber:35}},"Warning")),

_react2.default.createElement(_Button.Button,{danger:true,__source:{fileName:_jsxFileName,lineNumber:37}},
_react2.default.createElement(_Text.Text,{__source:{fileName:_jsxFileName,lineNumber:38}},"Danger")),

_react2.default.createElement(_Button.Button,{dark:true,__source:{fileName:_jsxFileName,lineNumber:40}},
_react2.default.createElement(_Text.Text,{__source:{fileName:_jsxFileName,lineNumber:41}},"Dark")))).



toJSON();
expect(tree).toMatchSnapshot();
});

it("renders outline button",function(){
var tree=_reactTestRenderer2.default.
create(
_react2.default.createElement(_Content.Content,{__source:{fileName:_jsxFileName,lineNumber:52}},
_react2.default.createElement(_Button.Button,{bordered:true,light:true,__source:{fileName:_jsxFileName,lineNumber:53}},
_react2.default.createElement(_Text.Text,{__source:{fileName:_jsxFileName,lineNumber:54}},"Light")),

_react2.default.createElement(_Button.Button,{bordered:true,info:true,__source:{fileName:_jsxFileName,lineNumber:56}},
_react2.default.createElement(_Text.Text,{__source:{fileName:_jsxFileName,lineNumber:57}},"Info")),

_react2.default.createElement(_Button.Button,{bordered:true,primary:true,__source:{fileName:_jsxFileName,lineNumber:59}},
_react2.default.createElement(_Text.Text,{__source:{fileName:_jsxFileName,lineNumber:60}},"Primary")),

_react2.default.createElement(_Button.Button,{bordered:true,success:true,__source:{fileName:_jsxFileName,lineNumber:62}},
_react2.default.createElement(_Text.Text,{__source:{fileName:_jsxFileName,lineNumber:63}},"Success")),

_react2.default.createElement(_Button.Button,{bordered:true,warning:true,__source:{fileName:_jsxFileName,lineNumber:65}},
_react2.default.createElement(_Text.Text,{__source:{fileName:_jsxFileName,lineNumber:66}},"Warning")),

_react2.default.createElement(_Button.Button,{bordered:true,danger:true,__source:{fileName:_jsxFileName,lineNumber:68}},
_react2.default.createElement(_Text.Text,{__source:{fileName:_jsxFileName,lineNumber:69}},"Danger")),

_react2.default.createElement(_Button.Button,{bordered:true,dark:true,__source:{fileName:_jsxFileName,lineNumber:71}},
_react2.default.createElement(_Text.Text,{__source:{fileName:_jsxFileName,lineNumber:72}},"Dark")))).



toJSON();
expect(tree).toMatchSnapshot();
});

it("renders rounded button",function(){
var tree=_reactTestRenderer2.default.
create(
_react2.default.createElement(_Content.Content,{__source:{fileName:_jsxFileName,lineNumber:83}},
_react2.default.createElement(_Button.Button,{rounded:true,light:true,__source:{fileName:_jsxFileName,lineNumber:84}},
_react2.default.createElement(_Text.Text,{__source:{fileName:_jsxFileName,lineNumber:85}},"Light")),

_react2.default.createElement(_Button.Button,{rounded:true,info:true,__source:{fileName:_jsxFileName,lineNumber:87}},
_react2.default.createElement(_Text.Text,{__source:{fileName:_jsxFileName,lineNumber:88}},"Info")),

_react2.default.createElement(_Button.Button,{rounded:true,primary:true,__source:{fileName:_jsxFileName,lineNumber:90}},
_react2.default.createElement(_Text.Text,{__source:{fileName:_jsxFileName,lineNumber:91}},"Primary")),

_react2.default.createElement(_Button.Button,{rounded:true,success:true,__source:{fileName:_jsxFileName,lineNumber:93}},
_react2.default.createElement(_Text.Text,{__source:{fileName:_jsxFileName,lineNumber:94}},"Success")),

_react2.default.createElement(_Button.Button,{rounded:true,warning:true,__source:{fileName:_jsxFileName,lineNumber:96}},
_react2.default.createElement(_Text.Text,{__source:{fileName:_jsxFileName,lineNumber:97}},"Warning")),

_react2.default.createElement(_Button.Button,{rounded:true,danger:true,__source:{fileName:_jsxFileName,lineNumber:99}},
_react2.default.createElement(_Text.Text,{__source:{fileName:_jsxFileName,lineNumber:100}},"Danger")),

_react2.default.createElement(_Button.Button,{rounded:true,dark:true,__source:{fileName:_jsxFileName,lineNumber:102}},
_react2.default.createElement(_Text.Text,{__source:{fileName:_jsxFileName,lineNumber:103}},"Dark")))).



toJSON();
expect(tree).toMatchSnapshot();
});

it("renders block button",function(){
var tree=_reactTestRenderer2.default.
create(
_react2.default.createElement(_Content.Content,{__source:{fileName:_jsxFileName,lineNumber:114}},
_react2.default.createElement(_Button.Button,{block:true,light:true,__source:{fileName:_jsxFileName,lineNumber:115}},
_react2.default.createElement(_Text.Text,{__source:{fileName:_jsxFileName,lineNumber:116}},"Light")),

_react2.default.createElement(_Button.Button,{block:true,info:true,__source:{fileName:_jsxFileName,lineNumber:118}},
_react2.default.createElement(_Text.Text,{__source:{fileName:_jsxFileName,lineNumber:119}},"Info")),

_react2.default.createElement(_Button.Button,{block:true,primary:true,__source:{fileName:_jsxFileName,lineNumber:121}},
_react2.default.createElement(_Text.Text,{__source:{fileName:_jsxFileName,lineNumber:122}},"Primary")),

_react2.default.createElement(_Button.Button,{block:true,success:true,__source:{fileName:_jsxFileName,lineNumber:124}},
_react2.default.createElement(_Text.Text,{__source:{fileName:_jsxFileName,lineNumber:125}},"Success")),

_react2.default.createElement(_Button.Button,{block:true,warning:true,__source:{fileName:_jsxFileName,lineNumber:127}},
_react2.default.createElement(_Text.Text,{__source:{fileName:_jsxFileName,lineNumber:128}},"Warning")),

_react2.default.createElement(_Button.Button,{block:true,danger:true,__source:{fileName:_jsxFileName,lineNumber:130}},
_react2.default.createElement(_Text.Text,{__source:{fileName:_jsxFileName,lineNumber:131}},"Danger")),

_react2.default.createElement(_Button.Button,{block:true,dark:true,__source:{fileName:_jsxFileName,lineNumber:133}},
_react2.default.createElement(_Text.Text,{__source:{fileName:_jsxFileName,lineNumber:134}},"Dark")))).



toJSON();
expect(tree).toMatchSnapshot();
});

it("renders full button",function(){
var tree=_reactTestRenderer2.default.
create(
_react2.default.createElement(_reactNative.View,{__source:{fileName:_jsxFileName,lineNumber:145}},
_react2.default.createElement(_Button.Button,{full:true,light:true,__source:{fileName:_jsxFileName,lineNumber:146}},
_react2.default.createElement(_Text.Text,{__source:{fileName:_jsxFileName,lineNumber:147}},"Light")),

_react2.default.createElement(_Button.Button,{full:true,info:true,__source:{fileName:_jsxFileName,lineNumber:149}},
_react2.default.createElement(_Text.Text,{__source:{fileName:_jsxFileName,lineNumber:150}},"Info")),

_react2.default.createElement(_Button.Button,{full:true,primary:true,__source:{fileName:_jsxFileName,lineNumber:152}},
_react2.default.createElement(_Text.Text,{__source:{fileName:_jsxFileName,lineNumber:153}},"Primary")),

_react2.default.createElement(_Button.Button,{full:true,success:true,__source:{fileName:_jsxFileName,lineNumber:155}},
_react2.default.createElement(_Text.Text,{__source:{fileName:_jsxFileName,lineNumber:156}},"Success")),

_react2.default.createElement(_Button.Button,{full:true,warning:true,__source:{fileName:_jsxFileName,lineNumber:158}},
_react2.default.createElement(_Text.Text,{__source:{fileName:_jsxFileName,lineNumber:159}},"Warning")),

_react2.default.createElement(_Button.Button,{full:true,danger:true,__source:{fileName:_jsxFileName,lineNumber:161}},
_react2.default.createElement(_Text.Text,{__source:{fileName:_jsxFileName,lineNumber:162}},"Danger")),

_react2.default.createElement(_Button.Button,{full:true,dark:true,__source:{fileName:_jsxFileName,lineNumber:164}},
_react2.default.createElement(_Text.Text,{__source:{fileName:_jsxFileName,lineNumber:165}},"Dark")))).



toJSON();
expect(tree).toMatchSnapshot();
});

it("renders custom size button",function(){
var tree=_reactTestRenderer2.default.
create(
_react2.default.createElement(_reactNative.View,{__source:{fileName:_jsxFileName,lineNumber:176}},
_react2.default.createElement(_Button.Button,{small:true,__source:{fileName:_jsxFileName,lineNumber:177}},
_react2.default.createElement(_Text.Text,{__source:{fileName:_jsxFileName,lineNumber:178}},"Default Small")),

_react2.default.createElement(_Button.Button,{success:true,__source:{fileName:_jsxFileName,lineNumber:180}},
_react2.default.createElement(_Text.Text,{__source:{fileName:_jsxFileName,lineNumber:181}},"Success Default")),


_react2.default.createElement(_Button.Button,{large:true,dark:true,__source:{fileName:_jsxFileName,lineNumber:184}},
_react2.default.createElement(_Text.Text,{__source:{fileName:_jsxFileName,lineNumber:185}},"Dark large")))).



toJSON();
expect(tree).toMatchSnapshot();
});

it("renders transparent button",function(){
var tree=_reactTestRenderer2.default.
create(
_react2.default.createElement(_Content.Content,{__source:{fileName:_jsxFileName,lineNumber:196}},
_react2.default.createElement(_Button.Button,{transparent:true,light:true,__source:{fileName:_jsxFileName,lineNumber:197}},
_react2.default.createElement(_Text.Text,{__source:{fileName:_jsxFileName,lineNumber:198}},"Light")),

_react2.default.createElement(_Button.Button,{transparent:true,info:true,__source:{fileName:_jsxFileName,lineNumber:200}},
_react2.default.createElement(_Text.Text,{__source:{fileName:_jsxFileName,lineNumber:201}},"Info")),

_react2.default.createElement(_Button.Button,{transparent:true,primary:true,__source:{fileName:_jsxFileName,lineNumber:203}},
_react2.default.createElement(_Text.Text,{__source:{fileName:_jsxFileName,lineNumber:204}},"Primary")),

_react2.default.createElement(_Button.Button,{transparent:true,success:true,__source:{fileName:_jsxFileName,lineNumber:206}},
_react2.default.createElement(_Text.Text,{__source:{fileName:_jsxFileName,lineNumber:207}},"Success")),

_react2.default.createElement(_Button.Button,{transparent:true,warning:true,__source:{fileName:_jsxFileName,lineNumber:209}},
_react2.default.createElement(_Text.Text,{__source:{fileName:_jsxFileName,lineNumber:210}},"Warning")),

_react2.default.createElement(_Button.Button,{transparent:true,danger:true,__source:{fileName:_jsxFileName,lineNumber:212}},
_react2.default.createElement(_Text.Text,{__source:{fileName:_jsxFileName,lineNumber:213}},"Danger")),

_react2.default.createElement(_Button.Button,{transparent:true,dark:true,__source:{fileName:_jsxFileName,lineNumber:215}},
_react2.default.createElement(_Text.Text,{__source:{fileName:_jsxFileName,lineNumber:216}},"Dark")))).



toJSON();
expect(tree).toMatchSnapshot();
});

it("renders icon button",function(){
var tree=_reactTestRenderer2.default.
create(
_react2.default.createElement(_Content.Content,{__source:{fileName:_jsxFileName,lineNumber:227}},
_react2.default.createElement(_Button.Button,{iconLeft:true,light:true,__source:{fileName:_jsxFileName,lineNumber:228}},
_react2.default.createElement(_Icon.Icon,{active:true,name:"arrow-back",__source:{fileName:_jsxFileName,lineNumber:229}}),
_react2.default.createElement(_Text.Text,{__source:{fileName:_jsxFileName,lineNumber:230}},"Back")),

_react2.default.createElement(_Button.Button,{light:true,iconRight:true,__source:{fileName:_jsxFileName,lineNumber:232}},
_react2.default.createElement(_Text.Text,{__source:{fileName:_jsxFileName,lineNumber:233}},"Next"),
_react2.default.createElement(_Icon.Icon,{active:true,name:"arrow-forward",__source:{fileName:_jsxFileName,lineNumber:234}})),

_react2.default.createElement(_Button.Button,{light:true,__source:{fileName:_jsxFileName,lineNumber:236}},
_react2.default.createElement(_Icon.Icon,{active:true,name:"arrow-down",__source:{fileName:_jsxFileName,lineNumber:237}})),

_react2.default.createElement(_Button.Button,{light:true,__source:{fileName:_jsxFileName,lineNumber:239}},
_react2.default.createElement(_Icon.Icon,{active:true,name:"arrow-up",__source:{fileName:_jsxFileName,lineNumber:240}})),

_react2.default.createElement(_Button.Button,{iconLeft:true,__source:{fileName:_jsxFileName,lineNumber:242}},
_react2.default.createElement(_Icon.Icon,{active:true,name:"home",__source:{fileName:_jsxFileName,lineNumber:243}}),
_react2.default.createElement(_Text.Text,{__source:{fileName:_jsxFileName,lineNumber:244}},"Home")),

_react2.default.createElement(_Button.Button,{iconLeft:true,bordered:true,__source:{fileName:_jsxFileName,lineNumber:246}},
_react2.default.createElement(_Icon.Icon,{active:true,name:"briefcase",__source:{fileName:_jsxFileName,lineNumber:247}}),
_react2.default.createElement(_Text.Text,{__source:{fileName:_jsxFileName,lineNumber:248}},"Work")),

_react2.default.createElement(_Button.Button,{iconLeft:true,success:true,__source:{fileName:_jsxFileName,lineNumber:250}},
_react2.default.createElement(_Icon.Icon,{active:true,name:"people",__source:{fileName:_jsxFileName,lineNumber:251}}),
_react2.default.createElement(_Text.Text,{__source:{fileName:_jsxFileName,lineNumber:252}},"People")),

_react2.default.createElement(_Button.Button,{iconLeft:true,success:true,bordered:true,__source:{fileName:_jsxFileName,lineNumber:254}},
_react2.default.createElement(_Icon.Icon,{active:true,name:"paw",__source:{fileName:_jsxFileName,lineNumber:255}}),
_react2.default.createElement(_Text.Text,{__source:{fileName:_jsxFileName,lineNumber:256}},"Animals")),

_react2.default.createElement(_Button.Button,{iconLeft:true,danger:true,__source:{fileName:_jsxFileName,lineNumber:258}},
_react2.default.createElement(_Icon.Icon,{active:true,name:"close",__source:{fileName:_jsxFileName,lineNumber:259}}),
_react2.default.createElement(_Text.Text,{__source:{fileName:_jsxFileName,lineNumber:260}},"Trash")),

_react2.default.createElement(_Button.Button,{danger:true,bordered:true,__source:{fileName:_jsxFileName,lineNumber:262}},
_react2.default.createElement(_Icon.Icon,{active:true,name:"trash",__source:{fileName:_jsxFileName,lineNumber:263}})),

_react2.default.createElement(_Button.Button,{danger:true,transparent:true,__source:{fileName:_jsxFileName,lineNumber:265}},
_react2.default.createElement(_Icon.Icon,{active:true,name:"trash",__source:{fileName:_jsxFileName,lineNumber:266}})),

_react2.default.createElement(_Button.Button,{iconLeft:true,warning:true,__source:{fileName:_jsxFileName,lineNumber:268}},
_react2.default.createElement(_Icon.Icon,{active:true,name:"warning",__source:{fileName:_jsxFileName,lineNumber:269}}),
_react2.default.createElement(_Text.Text,{__source:{fileName:_jsxFileName,lineNumber:270}},"Dont")),

_react2.default.createElement(_Button.Button,{warning:true,bordered:true,__source:{fileName:_jsxFileName,lineNumber:272}},
_react2.default.createElement(_Icon.Icon,{active:true,name:"warning",__source:{fileName:_jsxFileName,lineNumber:273}})),

_react2.default.createElement(_Button.Button,{iconLeft:true,info:true,__source:{fileName:_jsxFileName,lineNumber:275}},
_react2.default.createElement(_Icon.Icon,{name:"alert",__source:{fileName:_jsxFileName,lineNumber:276}}),
_react2.default.createElement(_Text.Text,{__source:{fileName:_jsxFileName,lineNumber:277}},"Help")),

_react2.default.createElement(_Button.Button,{info:true,__source:{fileName:_jsxFileName,lineNumber:279}},
_react2.default.createElement(_Icon.Icon,{name:"alert",__source:{fileName:_jsxFileName,lineNumber:280}})),

_react2.default.createElement(_Button.Button,{iconLeft:true,dark:true,__source:{fileName:_jsxFileName,lineNumber:282}},
_react2.default.createElement(_Icon.Icon,{active:true,name:"cog",__source:{fileName:_jsxFileName,lineNumber:283}}),
_react2.default.createElement(_Text.Text,{__source:{fileName:_jsxFileName,lineNumber:284}},"Settings")),

_react2.default.createElement(_Button.Button,{dark:true,transparent:true,__source:{fileName:_jsxFileName,lineNumber:286}},
_react2.default.createElement(_Icon.Icon,{active:true,name:"cog",__source:{fileName:_jsxFileName,lineNumber:287}})),

_react2.default.createElement(_Button.Button,{iconLeft:true,transparent:true,__source:{fileName:_jsxFileName,lineNumber:289}},
_react2.default.createElement(_Icon.Icon,{active:true,name:"beer",__source:{fileName:_jsxFileName,lineNumber:290}}),
_react2.default.createElement(_Text.Text,{__source:{fileName:_jsxFileName,lineNumber:291}},"Pub")))).



toJSON();
expect(tree).toMatchSnapshot();
});

it("renders disabled button",function(){
var tree=_reactTestRenderer2.default.
create(
_react2.default.createElement(_Content.Content,{__source:{fileName:_jsxFileName,lineNumber:302}},
_react2.default.createElement(_Button.Button,{disabled:true,__source:{fileName:_jsxFileName,lineNumber:303}},
_react2.default.createElement(_Text.Text,{__source:{fileName:_jsxFileName,lineNumber:304}},"Default")),

_react2.default.createElement(_Button.Button,{disabled:true,bordered:true,__source:{fileName:_jsxFileName,lineNumber:306}},
_react2.default.createElement(_Text.Text,{__source:{fileName:_jsxFileName,lineNumber:307}},"Outline")),

_react2.default.createElement(_Button.Button,{disabled:true,rounded:true,__source:{fileName:_jsxFileName,lineNumber:309}},
_react2.default.createElement(_Text.Text,{__source:{fileName:_jsxFileName,lineNumber:310}},"Rounded")),

_react2.default.createElement(_Button.Button,{disabled:true,large:true,__source:{fileName:_jsxFileName,lineNumber:312}},
_react2.default.createElement(_Text.Text,{__source:{fileName:_jsxFileName,lineNumber:313}},"Custom")),

_react2.default.createElement(_Button.Button,{disabled:true,iconRight:true,__source:{fileName:_jsxFileName,lineNumber:315}},
_react2.default.createElement(_Text.Text,{__source:{fileName:_jsxFileName,lineNumber:316}},"Icon Button"),
_react2.default.createElement(_Icon.Icon,{name:"home",__source:{fileName:_jsxFileName,lineNumber:317}})),

_react2.default.createElement(_Button.Button,{disabled:true,block:true,__source:{fileName:_jsxFileName,lineNumber:319}},
_react2.default.createElement(_Text.Text,{__source:{fileName:_jsxFileName,lineNumber:320}},"Block")),


_react2.default.createElement(_Button.Button,{disabled:true,full:true,__source:{fileName:_jsxFileName,lineNumber:323}},
_react2.default.createElement(_Text.Text,{__source:{fileName:_jsxFileName,lineNumber:324}},"Full")))).



toJSON();
expect(tree).toMatchSnapshot();
});
//# sourceMappingURL=Button.ios.js.map
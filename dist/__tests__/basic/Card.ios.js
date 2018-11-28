var _jsxFileName="__tests__\\basic\\Card.ios.js";var _reactNative=require("react-native");
var _react=require("react");var _react2=_interopRequireDefault(_react);
var _reactTestRenderer=require("react-test-renderer");var _reactTestRenderer2=_interopRequireDefault(_reactTestRenderer);
var _Container=require("./../../src/basic/Container");
var _Header=require("./../../src/basic/Header");
var _Content=require("./../../src/basic/Content");
var _Card=require("./../../src/basic/Card");
var _CardItem=require("./../../src/basic/CardItem");
var _Left=require("./../../src/basic/Left");
var _Body=require("./../../src/basic/Body");
var _Right=require("./../../src/basic/Right");
var _Button=require("./../../src/basic/Button");
var _Text=require("./../../src/basic/Text");
var _Icon=require("./../../src/basic/Icon");
var _Thumbnail=require("./../../src/basic/Thumbnail");function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}

var deviceWidth=_reactNative.Dimensions.get("window").width;
var logo=require("../assets/logo.png");
var cardImage=require("../assets/drawer-cover.png");



jest.mock("Platform",function(){
var Platform=require.requireActual("Platform");
Platform.OS="ios";
return Platform;
});

it("renders basic Card",function(){
var tree=_reactTestRenderer2.default.
create(
_react2.default.createElement(_Container.Container,{__source:{fileName:_jsxFileName,lineNumber:32}},
_react2.default.createElement(_Header.Header,{__source:{fileName:_jsxFileName,lineNumber:33}}),
_react2.default.createElement(_Content.Content,{padder:true,__source:{fileName:_jsxFileName,lineNumber:34}},
_react2.default.createElement(_Card.Card,{__source:{fileName:_jsxFileName,lineNumber:35}},
_react2.default.createElement(_CardItem.CardItem,{__source:{fileName:_jsxFileName,lineNumber:36}},
_react2.default.createElement(_Body.Body,{__source:{fileName:_jsxFileName,lineNumber:37}},
_react2.default.createElement(_Text.Text,{__source:{fileName:_jsxFileName,lineNumber:38}},"This is just a basic card with some text to boot."),
_react2.default.createElement(_Text.Text,{__source:{fileName:_jsxFileName,lineNumber:39}},"Like it? Keep Scrolling..."))))))).






toJSON();
expect(tree).toMatchSnapshot();
});

it("renders Card Header and Footer",function(){
var tree=_reactTestRenderer2.default.
create(
_react2.default.createElement(_Container.Container,{__source:{fileName:_jsxFileName,lineNumber:53}},
_react2.default.createElement(_Header.Header,{__source:{fileName:_jsxFileName,lineNumber:54}}),
_react2.default.createElement(_Content.Content,{padder:true,__source:{fileName:_jsxFileName,lineNumber:55}},
_react2.default.createElement(_Card.Card,{__source:{fileName:_jsxFileName,lineNumber:56}},
_react2.default.createElement(_CardItem.CardItem,{header:true,__source:{fileName:_jsxFileName,lineNumber:57}},
_react2.default.createElement(_Text.Text,{__source:{fileName:_jsxFileName,lineNumber:58}},"NativeBase")),

_react2.default.createElement(_CardItem.CardItem,{__source:{fileName:_jsxFileName,lineNumber:60}},
_react2.default.createElement(_Body.Body,{__source:{fileName:_jsxFileName,lineNumber:61}},
_react2.default.createElement(_Text.Text,{__source:{fileName:_jsxFileName,lineNumber:62}},"NativeBase is a free and open source framework that enable developers to build high-quality mobile apps using React Native iOS and Android apps with a fusion of ES6."))),






_react2.default.createElement(_CardItem.CardItem,{__source:{fileName:_jsxFileName,lineNumber:69}},
_react2.default.createElement(_Body.Body,{__source:{fileName:_jsxFileName,lineNumber:70}},
_react2.default.createElement(_Text.Text,{__source:{fileName:_jsxFileName,lineNumber:71}},"NativeBase builds a layer on top of React Native that provides you with basic set of components for mobile application development."))),






_react2.default.createElement(_CardItem.CardItem,{__source:{fileName:_jsxFileName,lineNumber:78}},
_react2.default.createElement(_Body.Body,{__source:{fileName:_jsxFileName,lineNumber:79}},
_react2.default.createElement(_Text.Text,{__source:{fileName:_jsxFileName,lineNumber:80}},"Get on the mobile fast track with NativeBase, the fastest-growing platform and tool set for iOS and Android development."))),






_react2.default.createElement(_CardItem.CardItem,{footer:true,__source:{fileName:_jsxFileName,lineNumber:87}},
_react2.default.createElement(_Text.Text,{__source:{fileName:_jsxFileName,lineNumber:88}},"GeekyAnts")))))).





toJSON();
expect(tree).toMatchSnapshot();
});

it("renders bordered CardItem",function(){
var tree=_reactTestRenderer2.default.
create(
_react2.default.createElement(_Container.Container,{__source:{fileName:_jsxFileName,lineNumber:101}},
_react2.default.createElement(_Header.Header,{__source:{fileName:_jsxFileName,lineNumber:102}}),
_react2.default.createElement(_Content.Content,{padder:true,__source:{fileName:_jsxFileName,lineNumber:103}},
_react2.default.createElement(_Card.Card,{__source:{fileName:_jsxFileName,lineNumber:104}},
_react2.default.createElement(_CardItem.CardItem,{header:true,bordered:true,__source:{fileName:_jsxFileName,lineNumber:105}},
_react2.default.createElement(_Text.Text,{__source:{fileName:_jsxFileName,lineNumber:106}},"NativeBase")),

_react2.default.createElement(_CardItem.CardItem,{bordered:true,__source:{fileName:_jsxFileName,lineNumber:108}},
_react2.default.createElement(_Body.Body,{__source:{fileName:_jsxFileName,lineNumber:109}},
_react2.default.createElement(_Text.Text,{__source:{fileName:_jsxFileName,lineNumber:110}},"NativeBase is a free and open source framework that enable developers to build high-quality mobile apps using React Native iOS and Android apps with a fusion of ES6."))),






_react2.default.createElement(_CardItem.CardItem,{bordered:true,__source:{fileName:_jsxFileName,lineNumber:117}},
_react2.default.createElement(_Body.Body,{__source:{fileName:_jsxFileName,lineNumber:118}},
_react2.default.createElement(_Text.Text,{__source:{fileName:_jsxFileName,lineNumber:119}},"NativeBase builds a layer on top of React Native that provides you with basic set of components for mobile application development."))),






_react2.default.createElement(_CardItem.CardItem,{bordered:true,__source:{fileName:_jsxFileName,lineNumber:126}},
_react2.default.createElement(_Body.Body,{__source:{fileName:_jsxFileName,lineNumber:127}},
_react2.default.createElement(_Text.Text,{__source:{fileName:_jsxFileName,lineNumber:128}},"Get on the mobile fast track with NativeBase, the fastest-growing platform and tool set for iOS and Android development."))),






_react2.default.createElement(_CardItem.CardItem,{footer:true,bordered:true,__source:{fileName:_jsxFileName,lineNumber:135}},
_react2.default.createElement(_Text.Text,{__source:{fileName:_jsxFileName,lineNumber:136}},"GeekyAnts")))))).





toJSON();
expect(tree).toMatchSnapshot();
});

it("renders transparent Card",function(){
var tree=_reactTestRenderer2.default.
create(
_react2.default.createElement(_Container.Container,{__source:{fileName:_jsxFileName,lineNumber:149}},
_react2.default.createElement(_Header.Header,{__source:{fileName:_jsxFileName,lineNumber:150}}),
_react2.default.createElement(_Content.Content,{padder:true,__source:{fileName:_jsxFileName,lineNumber:151}},
_react2.default.createElement(_Card.Card,{transparent:true,__source:{fileName:_jsxFileName,lineNumber:152}},
_react2.default.createElement(_CardItem.CardItem,{__source:{fileName:_jsxFileName,lineNumber:153}},
_react2.default.createElement(_Body.Body,{__source:{fileName:_jsxFileName,lineNumber:154}},
_react2.default.createElement(_Text.Text,{__source:{fileName:_jsxFileName,lineNumber:155}},"This is just a transparent card with some text to boot."))))))).








toJSON();
expect(tree).toMatchSnapshot();
});

it("renders button CardItem",function(){
var tree=_reactTestRenderer2.default.
create(
_react2.default.createElement(_Container.Container,{__source:{fileName:_jsxFileName,lineNumber:171}},
_react2.default.createElement(_Header.Header,{__source:{fileName:_jsxFileName,lineNumber:172}}),
_react2.default.createElement(_Content.Content,{padder:true,__source:{fileName:_jsxFileName,lineNumber:173}},
_react2.default.createElement(_Card.Card,{__source:{fileName:_jsxFileName,lineNumber:174}},
_react2.default.createElement(_CardItem.CardItem,{
header:true,
button:true,
onPress:function onPress(){return alert("This is Card Header");},__source:{fileName:_jsxFileName,lineNumber:175}},

_react2.default.createElement(_Text.Text,{__source:{fileName:_jsxFileName,lineNumber:180}},"NativeBase")),

_react2.default.createElement(_CardItem.CardItem,{button:true,onPress:function onPress(){return alert("This is Card Body");},__source:{fileName:_jsxFileName,lineNumber:182}},
_react2.default.createElement(_Body.Body,{__source:{fileName:_jsxFileName,lineNumber:183}},
_react2.default.createElement(_Text.Text,{__source:{fileName:_jsxFileName,lineNumber:184}},"Click on any carditem"))),


_react2.default.createElement(_CardItem.CardItem,{
footer:true,
button:true,
onPress:function onPress(){return alert("This is Card Footer");},__source:{fileName:_jsxFileName,lineNumber:187}},

_react2.default.createElement(_Text.Text,{__source:{fileName:_jsxFileName,lineNumber:192}},"GeekyAnts")))))).





toJSON();
expect(tree).toMatchSnapshot();
});

it("renders Card List",function(){
var tree=_reactTestRenderer2.default.
create(
_react2.default.createElement(_Container.Container,{__source:{fileName:_jsxFileName,lineNumber:205}},
_react2.default.createElement(_Header.Header,{__source:{fileName:_jsxFileName,lineNumber:206}}),
_react2.default.createElement(_Content.Content,{padder:true,__source:{fileName:_jsxFileName,lineNumber:207}},
_react2.default.createElement(_Card.Card,{__source:{fileName:_jsxFileName,lineNumber:208}},
_react2.default.createElement(_CardItem.CardItem,{header:true,bordered:true,__source:{fileName:_jsxFileName,lineNumber:209}},
_react2.default.createElement(_Text.Text,{__source:{fileName:_jsxFileName,lineNumber:210}},"Social Applications")),

_react2.default.createElement(_CardItem.CardItem,{__source:{fileName:_jsxFileName,lineNumber:212}},
_react2.default.createElement(_Left.Left,{__source:{fileName:_jsxFileName,lineNumber:213}},
_react2.default.createElement(_Icon.Icon,{
active:true,
name:"logo-googleplus",
style:{color:"#DD5044"},__source:{fileName:_jsxFileName,lineNumber:214}}),

_react2.default.createElement(_Text.Text,{__source:{fileName:_jsxFileName,lineNumber:219}},"Google Plus")),

_react2.default.createElement(_Right.Right,{__source:{fileName:_jsxFileName,lineNumber:221}},
_react2.default.createElement(_Icon.Icon,{name:"arrow-forward",__source:{fileName:_jsxFileName,lineNumber:222}}))),


_react2.default.createElement(_CardItem.CardItem,{__source:{fileName:_jsxFileName,lineNumber:225}},
_react2.default.createElement(_Left.Left,{__source:{fileName:_jsxFileName,lineNumber:226}},
_react2.default.createElement(_Icon.Icon,{
active:true,
name:"logo-facebook",
style:{color:"#3B579D"},__source:{fileName:_jsxFileName,lineNumber:227}}),

_react2.default.createElement(_Text.Text,{__source:{fileName:_jsxFileName,lineNumber:232}},"facebook")),

_react2.default.createElement(_Right.Right,{__source:{fileName:_jsxFileName,lineNumber:234}},
_react2.default.createElement(_Icon.Icon,{name:"arrow-forward",__source:{fileName:_jsxFileName,lineNumber:235}}))),


_react2.default.createElement(_CardItem.CardItem,{__source:{fileName:_jsxFileName,lineNumber:238}},
_react2.default.createElement(_Left.Left,{__source:{fileName:_jsxFileName,lineNumber:239}},
_react2.default.createElement(_Icon.Icon,{active:true,name:"logo-twitter",style:{color:"#55ACEE"},__source:{fileName:_jsxFileName,lineNumber:240}}),
_react2.default.createElement(_Text.Text,{__source:{fileName:_jsxFileName,lineNumber:241}},"Twitter")),

_react2.default.createElement(_Right.Right,{__source:{fileName:_jsxFileName,lineNumber:243}},
_react2.default.createElement(_Icon.Icon,{name:"arrow-forward",__source:{fileName:_jsxFileName,lineNumber:244}}))),


_react2.default.createElement(_CardItem.CardItem,{__source:{fileName:_jsxFileName,lineNumber:247}},
_react2.default.createElement(_Left.Left,{__source:{fileName:_jsxFileName,lineNumber:248}},
_react2.default.createElement(_Icon.Icon,{active:true,name:"logo-reddit",style:{color:"#FF4500"},__source:{fileName:_jsxFileName,lineNumber:249}}),
_react2.default.createElement(_Text.Text,{__source:{fileName:_jsxFileName,lineNumber:250}},"Reddit")),

_react2.default.createElement(_Right.Right,{__source:{fileName:_jsxFileName,lineNumber:252}},
_react2.default.createElement(_Icon.Icon,{name:"arrow-forward",__source:{fileName:_jsxFileName,lineNumber:253}}))),


_react2.default.createElement(_CardItem.CardItem,{__source:{fileName:_jsxFileName,lineNumber:256}},
_react2.default.createElement(_Left.Left,{__source:{fileName:_jsxFileName,lineNumber:257}},
_react2.default.createElement(_Icon.Icon,{
active:true,
name:"logo-linkedin",
style:{color:"#007BB6"},__source:{fileName:_jsxFileName,lineNumber:258}}),

_react2.default.createElement(_Text.Text,{__source:{fileName:_jsxFileName,lineNumber:263}},"LinkedIn")),

_react2.default.createElement(_Right.Right,{__source:{fileName:_jsxFileName,lineNumber:265}},
_react2.default.createElement(_Icon.Icon,{name:"arrow-forward",__source:{fileName:_jsxFileName,lineNumber:266}}))),


_react2.default.createElement(_CardItem.CardItem,{__source:{fileName:_jsxFileName,lineNumber:269}},
_react2.default.createElement(_Left.Left,{__source:{fileName:_jsxFileName,lineNumber:270}},
_react2.default.createElement(_Icon.Icon,{active:true,name:"logo-youtube",style:{color:"#D62727"},__source:{fileName:_jsxFileName,lineNumber:271}}),
_react2.default.createElement(_Text.Text,{__source:{fileName:_jsxFileName,lineNumber:272}},"YouTube")),

_react2.default.createElement(_Right.Right,{__source:{fileName:_jsxFileName,lineNumber:274}},
_react2.default.createElement(_Icon.Icon,{name:"arrow-forward",__source:{fileName:_jsxFileName,lineNumber:275}}))))))).






toJSON();
expect(tree).toMatchSnapshot();
});

it("renders Card Image",function(){
var tree=_reactTestRenderer2.default.
create(
_react2.default.createElement(_Container.Container,{__source:{fileName:_jsxFileName,lineNumber:289}},
_react2.default.createElement(_Header.Header,{__source:{fileName:_jsxFileName,lineNumber:290}}),
_react2.default.createElement(_Content.Content,{padder:true,__source:{fileName:_jsxFileName,lineNumber:291}},
_react2.default.createElement(_Card.Card,{__source:{fileName:_jsxFileName,lineNumber:292}},
_react2.default.createElement(_CardItem.CardItem,{__source:{fileName:_jsxFileName,lineNumber:293}},
_react2.default.createElement(_Left.Left,{__source:{fileName:_jsxFileName,lineNumber:294}},
_react2.default.createElement(_Thumbnail.Thumbnail,{source:logo,__source:{fileName:_jsxFileName,lineNumber:295}}),
_react2.default.createElement(_Body.Body,{__source:{fileName:_jsxFileName,lineNumber:296}},
_react2.default.createElement(_Text.Text,{__source:{fileName:_jsxFileName,lineNumber:297}},"NativeBase"),
_react2.default.createElement(_Text.Text,{note:true,__source:{fileName:_jsxFileName,lineNumber:298}},"GeekyAnts")))),




_react2.default.createElement(_CardItem.CardItem,{cardBody:true,__source:{fileName:_jsxFileName,lineNumber:303}},
_react2.default.createElement(_reactNative.Image,{
style:{
resizeMode:"cover",
width:null,
height:200,
flex:1},

source:cardImage,__source:{fileName:_jsxFileName,lineNumber:304}})),



_react2.default.createElement(_CardItem.CardItem,{style:{paddingVertical:0},__source:{fileName:_jsxFileName,lineNumber:315}},
_react2.default.createElement(_Left.Left,{__source:{fileName:_jsxFileName,lineNumber:316}},
_react2.default.createElement(_Button.Button,{transparent:true,__source:{fileName:_jsxFileName,lineNumber:317}},
_react2.default.createElement(_Icon.Icon,{active:true,name:"thumbs-up",__source:{fileName:_jsxFileName,lineNumber:318}}),
_react2.default.createElement(_Text.Text,{__source:{fileName:_jsxFileName,lineNumber:319}},"4923 Likes"))),


_react2.default.createElement(_Body.Body,{__source:{fileName:_jsxFileName,lineNumber:322}},
_react2.default.createElement(_Button.Button,{transparent:true,__source:{fileName:_jsxFileName,lineNumber:323}},
_react2.default.createElement(_Icon.Icon,{active:true,name:"chatbubbles",__source:{fileName:_jsxFileName,lineNumber:324}}),
_react2.default.createElement(_Text.Text,{__source:{fileName:_jsxFileName,lineNumber:325}},"89 Comments"))),


_react2.default.createElement(_Right.Right,{__source:{fileName:_jsxFileName,lineNumber:328}},
_react2.default.createElement(_Text.Text,{__source:{fileName:_jsxFileName,lineNumber:329}},"11h ago"))))))).






toJSON();
expect(tree).toMatchSnapshot();
});

it("renders Card Showcase",function(){
var tree=_reactTestRenderer2.default.
create(
_react2.default.createElement(_Container.Container,{__source:{fileName:_jsxFileName,lineNumber:343}},
_react2.default.createElement(_Header.Header,{__source:{fileName:_jsxFileName,lineNumber:344}}),
_react2.default.createElement(_Content.Content,{padder:true,__source:{fileName:_jsxFileName,lineNumber:345}},
_react2.default.createElement(_Card.Card,{__source:{fileName:_jsxFileName,lineNumber:346}},
_react2.default.createElement(_CardItem.CardItem,{bordered:true,__source:{fileName:_jsxFileName,lineNumber:347}},
_react2.default.createElement(_Left.Left,{__source:{fileName:_jsxFileName,lineNumber:348}},
_react2.default.createElement(_Thumbnail.Thumbnail,{source:logo,__source:{fileName:_jsxFileName,lineNumber:349}}),
_react2.default.createElement(_Body.Body,{__source:{fileName:_jsxFileName,lineNumber:350}},
_react2.default.createElement(_Text.Text,{__source:{fileName:_jsxFileName,lineNumber:351}},"NativeBase"),
_react2.default.createElement(_Text.Text,{note:true,__source:{fileName:_jsxFileName,lineNumber:352}},"April 15, 2016")))),




_react2.default.createElement(_CardItem.CardItem,{__source:{fileName:_jsxFileName,lineNumber:357}},
_react2.default.createElement(_Body.Body,{__source:{fileName:_jsxFileName,lineNumber:358}},
_react2.default.createElement(_reactNative.Image,{
style:{
alignSelf:"center",
height:150,
resizeMode:"cover",
width:deviceWidth/1.18,
marginVertical:5},

source:cardImage,__source:{fileName:_jsxFileName,lineNumber:359}}),

_react2.default.createElement(_Text.Text,{__source:{fileName:_jsxFileName,lineNumber:369}},"NativeBase is a free and source framework that enable developers to build high-quality mobile apps using React Native iOS and Android apps with a fusion of ES6. NativeBase builds a layer on top of React Native that provides you with basic set of components for mobile application development."))),








_react2.default.createElement(_CardItem.CardItem,{style:{paddingVertical:0},__source:{fileName:_jsxFileName,lineNumber:378}},
_react2.default.createElement(_Left.Left,{__source:{fileName:_jsxFileName,lineNumber:379}},
_react2.default.createElement(_Button.Button,{transparent:true,__source:{fileName:_jsxFileName,lineNumber:380}},
_react2.default.createElement(_Icon.Icon,{name:"logo-github",__source:{fileName:_jsxFileName,lineNumber:381}}),
_react2.default.createElement(_Text.Text,{__source:{fileName:_jsxFileName,lineNumber:382}},"4,923 stars")))))))).







toJSON();
expect(tree).toMatchSnapshot();
});
//# sourceMappingURL=Card.ios.js.map
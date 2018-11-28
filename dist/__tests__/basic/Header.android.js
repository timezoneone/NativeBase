var _jsxFileName="__tests__\\basic\\Header.android.js";require("react-native");
var _react=require("react");var _react2=_interopRequireDefault(_react);
var _reactTestRenderer=require("react-test-renderer");var _reactTestRenderer2=_interopRequireDefault(_reactTestRenderer);
var _Container=require("./../../src/basic/Container");
var _Header=require("./../../src/basic/Header");
var _Left=require("./../../src/basic/Left");
var _Button=require("./../../src/basic/Button");
var _Icon=require("./../../src/basic/Icon");
var _Body=require("./../../src/basic/Body");
var _Title=require("./../../src/basic/Title");
var _Subtitle=require("./../../src/basic/Subtitle");
var _Right=require("./../../src/basic/Right");
var _Content=require("./../../src/basic/Content");
var _Text=require("./../../src/basic/Text");function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}



jest.mock("Platform",function(){
var Platform=require.requireActual("Platform");
Platform.OS="android";
return Platform;
});

it("renders Header with only Title",function(){
var tree=_reactTestRenderer2.default.
create(
_react2.default.createElement(_Container.Container,{__source:{fileName:_jsxFileName,lineNumber:27}},
_react2.default.createElement(_Header.Header,{__source:{fileName:_jsxFileName,lineNumber:28}},
_react2.default.createElement(_Left.Left,{__source:{fileName:_jsxFileName,lineNumber:29}}),
_react2.default.createElement(_Body.Body,{__source:{fileName:_jsxFileName,lineNumber:30}},
_react2.default.createElement(_Title.Title,{__source:{fileName:_jsxFileName,lineNumber:31}},"Header")),

_react2.default.createElement(_Right.Right,{__source:{fileName:_jsxFileName,lineNumber:33}})))).



toJSON();
expect(tree).toMatchSnapshot();
});

it("renders Header with Icon Buttons",function(){
var tree=_reactTestRenderer2.default.
create(
_react2.default.createElement(_Container.Container,{__source:{fileName:_jsxFileName,lineNumber:44}},
_react2.default.createElement(_Header.Header,{__source:{fileName:_jsxFileName,lineNumber:45}},
_react2.default.createElement(_Left.Left,{__source:{fileName:_jsxFileName,lineNumber:46}},
_react2.default.createElement(_Button.Button,{transparent:true,__source:{fileName:_jsxFileName,lineNumber:47}},
_react2.default.createElement(_Icon.Icon,{name:"arrow-back",__source:{fileName:_jsxFileName,lineNumber:48}}))),


_react2.default.createElement(_Body.Body,{__source:{fileName:_jsxFileName,lineNumber:51}},
_react2.default.createElement(_Title.Title,{__source:{fileName:_jsxFileName,lineNumber:52}},"Header")),

_react2.default.createElement(_Right.Right,{__source:{fileName:_jsxFileName,lineNumber:54}},
_react2.default.createElement(_Button.Button,{transparent:true,__source:{fileName:_jsxFileName,lineNumber:55}},
_react2.default.createElement(_Icon.Icon,{name:"menu",__source:{fileName:_jsxFileName,lineNumber:56}})))))).





toJSON();
expect(tree).toMatchSnapshot();
});

it("renders Header with Text Buttons",function(){
var tree=_reactTestRenderer2.default.
create(
_react2.default.createElement(_Container.Container,{__source:{fileName:_jsxFileName,lineNumber:69}},
_react2.default.createElement(_Header.Header,{__source:{fileName:_jsxFileName,lineNumber:70}},
_react2.default.createElement(_Left.Left,{__source:{fileName:_jsxFileName,lineNumber:71}},
_react2.default.createElement(_Button.Button,{hasText:true,transparent:true,__source:{fileName:_jsxFileName,lineNumber:72}},
_react2.default.createElement(_Text.Text,{__source:{fileName:_jsxFileName,lineNumber:73}},"Back"))),


_react2.default.createElement(_Body.Body,{__source:{fileName:_jsxFileName,lineNumber:76}},
_react2.default.createElement(_Title.Title,{__source:{fileName:_jsxFileName,lineNumber:77}},"Header")),

_react2.default.createElement(_Right.Right,{__source:{fileName:_jsxFileName,lineNumber:79}},
_react2.default.createElement(_Button.Button,{hasText:true,transparent:true,__source:{fileName:_jsxFileName,lineNumber:80}},
_react2.default.createElement(_Text.Text,{__source:{fileName:_jsxFileName,lineNumber:81}},"Cancel")))))).





toJSON();
expect(tree).toMatchSnapshot();
});

it("renders Header with Icon Button & Text Button",function(){
var tree=_reactTestRenderer2.default.
create(
_react2.default.createElement(_Container.Container,{__source:{fileName:_jsxFileName,lineNumber:94}},
_react2.default.createElement(_Header.Header,{__source:{fileName:_jsxFileName,lineNumber:95}},
_react2.default.createElement(_Left.Left,{__source:{fileName:_jsxFileName,lineNumber:96}},
_react2.default.createElement(_Button.Button,{transparent:true,__source:{fileName:_jsxFileName,lineNumber:97}},
_react2.default.createElement(_Icon.Icon,{name:"arrow-back",__source:{fileName:_jsxFileName,lineNumber:98}}))),


_react2.default.createElement(_Body.Body,{__source:{fileName:_jsxFileName,lineNumber:101}},
_react2.default.createElement(_Title.Title,{__source:{fileName:_jsxFileName,lineNumber:102}},"Header")),

_react2.default.createElement(_Right.Right,{__source:{fileName:_jsxFileName,lineNumber:104}},
_react2.default.createElement(_Button.Button,{hasText:true,transparent:true,__source:{fileName:_jsxFileName,lineNumber:105}},
_react2.default.createElement(_Text.Text,{__source:{fileName:_jsxFileName,lineNumber:106}},"Cancel")))))).





toJSON();
expect(tree).toMatchSnapshot();
});

it("renders Header with Icon & Text Button",function(){
var tree=_reactTestRenderer2.default.
create(
_react2.default.createElement(_Container.Container,{__source:{fileName:_jsxFileName,lineNumber:119}},
_react2.default.createElement(_Header.Header,{__source:{fileName:_jsxFileName,lineNumber:120}},
_react2.default.createElement(_Left.Left,{__source:{fileName:_jsxFileName,lineNumber:121}},
_react2.default.createElement(_Button.Button,{transparent:true,__source:{fileName:_jsxFileName,lineNumber:122}},
_react2.default.createElement(_Icon.Icon,{name:"arrow-back",__source:{fileName:_jsxFileName,lineNumber:123}}),
_react2.default.createElement(_Text.Text,{__source:{fileName:_jsxFileName,lineNumber:124}},"Back"))),


_react2.default.createElement(_Body.Body,{__source:{fileName:_jsxFileName,lineNumber:127}},
_react2.default.createElement(_Title.Title,{__source:{fileName:_jsxFileName,lineNumber:128}},"Header")),

_react2.default.createElement(_Right.Right,{__source:{fileName:_jsxFileName,lineNumber:130}},
_react2.default.createElement(_Button.Button,{hasText:true,transparent:true,__source:{fileName:_jsxFileName,lineNumber:131}},
_react2.default.createElement(_Text.Text,{__source:{fileName:_jsxFileName,lineNumber:132}},"Cancel")))))).





toJSON();
expect(tree).toMatchSnapshot();
});

it("renders Header with multiple Icon Button",function(){
var tree=_reactTestRenderer2.default.
create(
_react2.default.createElement(_Container.Container,{__source:{fileName:_jsxFileName,lineNumber:145}},
_react2.default.createElement(_Header.Header,{__source:{fileName:_jsxFileName,lineNumber:146}},
_react2.default.createElement(_Left.Left,{__source:{fileName:_jsxFileName,lineNumber:147}},
_react2.default.createElement(_Button.Button,{transparent:true,__source:{fileName:_jsxFileName,lineNumber:148}},
_react2.default.createElement(_Icon.Icon,{name:"arrow-back",__source:{fileName:_jsxFileName,lineNumber:149}}))),


_react2.default.createElement(_Body.Body,{__source:{fileName:_jsxFileName,lineNumber:152}},
_react2.default.createElement(_Title.Title,{__source:{fileName:_jsxFileName,lineNumber:153}},"Header")),

_react2.default.createElement(_Right.Right,{__source:{fileName:_jsxFileName,lineNumber:155}},
_react2.default.createElement(_Button.Button,{transparent:true,__source:{fileName:_jsxFileName,lineNumber:156}},
_react2.default.createElement(_Icon.Icon,{name:"search",__source:{fileName:_jsxFileName,lineNumber:157}})),

_react2.default.createElement(_Button.Button,{transparent:true,__source:{fileName:_jsxFileName,lineNumber:159}},
_react2.default.createElement(_Icon.Icon,{name:"heart",__source:{fileName:_jsxFileName,lineNumber:160}})),

_react2.default.createElement(_Button.Button,{transparent:true,__source:{fileName:_jsxFileName,lineNumber:162}},
_react2.default.createElement(_Icon.Icon,{name:"more",__source:{fileName:_jsxFileName,lineNumber:163}})))))).





toJSON();
expect(tree).toMatchSnapshot();
});

it("renders Header with Title and Subtitle",function(){
var tree=_reactTestRenderer2.default.
create(
_react2.default.createElement(_Container.Container,{__source:{fileName:_jsxFileName,lineNumber:176}},
_react2.default.createElement(_Header.Header,{hasSubtitle:true,__source:{fileName:_jsxFileName,lineNumber:177}},
_react2.default.createElement(_Left.Left,{__source:{fileName:_jsxFileName,lineNumber:178}},
_react2.default.createElement(_Button.Button,{transparent:true,__source:{fileName:_jsxFileName,lineNumber:179}},
_react2.default.createElement(_Icon.Icon,{name:"arrow-back",__source:{fileName:_jsxFileName,lineNumber:180}}))),


_react2.default.createElement(_Body.Body,{__source:{fileName:_jsxFileName,lineNumber:183}},
_react2.default.createElement(_Title.Title,{__source:{fileName:_jsxFileName,lineNumber:184}},"Title"),
_react2.default.createElement(_Subtitle.Subtitle,{__source:{fileName:_jsxFileName,lineNumber:185}},"Subtitle")),

_react2.default.createElement(_Right.Right,{__source:{fileName:_jsxFileName,lineNumber:187}})))).



toJSON();
expect(tree).toMatchSnapshot();
});

it("renders Header with Custom background color",function(){
var tree=_reactTestRenderer2.default.
create(
_react2.default.createElement(_Container.Container,{__source:{fileName:_jsxFileName,lineNumber:198}},
_react2.default.createElement(_Header.Header,{
style:{backgroundColor:"#dc4239"},
androidStatusBarColor:"#dc2015",
iosBarStyle:"light-content",__source:{fileName:_jsxFileName,lineNumber:199}},

_react2.default.createElement(_Left.Left,{__source:{fileName:_jsxFileName,lineNumber:204}},
_react2.default.createElement(_Button.Button,{transparent:true,__source:{fileName:_jsxFileName,lineNumber:205}},
_react2.default.createElement(_Icon.Icon,{name:"arrow-back",style:{color:"#FFF"},__source:{fileName:_jsxFileName,lineNumber:206}}))),


_react2.default.createElement(_Body.Body,{__source:{fileName:_jsxFileName,lineNumber:209}},
_react2.default.createElement(_Title.Title,{style:{color:"#FFF"},__source:{fileName:_jsxFileName,lineNumber:210}},"Custom Header")),

_react2.default.createElement(_Right.Right,{__source:{fileName:_jsxFileName,lineNumber:212}})))).



toJSON();
expect(tree).toMatchSnapshot();
});

it("renders Header span",function(){
var tree=_reactTestRenderer2.default.
create(
_react2.default.createElement(_Container.Container,{__source:{fileName:_jsxFileName,lineNumber:223}},
_react2.default.createElement(_Header.Header,{span:true,__source:{fileName:_jsxFileName,lineNumber:224}},
_react2.default.createElement(_Left.Left,{__source:{fileName:_jsxFileName,lineNumber:225}},
_react2.default.createElement(_Button.Button,{transparent:true,__source:{fileName:_jsxFileName,lineNumber:226}},
_react2.default.createElement(_Icon.Icon,{name:"arrow-back",__source:{fileName:_jsxFileName,lineNumber:227}}))),


_react2.default.createElement(_Body.Body,{__source:{fileName:_jsxFileName,lineNumber:230}},
_react2.default.createElement(_Title.Title,{__source:{fileName:_jsxFileName,lineNumber:231}},"Header Span")),

_react2.default.createElement(_Right.Right,{__source:{fileName:_jsxFileName,lineNumber:233}})))).



toJSON();
expect(tree).toMatchSnapshot();
});

it("renders Header noShadow",function(){
var tree=_reactTestRenderer2.default.
create(
_react2.default.createElement(_Container.Container,{__source:{fileName:_jsxFileName,lineNumber:244}},
_react2.default.createElement(_Header.Header,{noShadow:true,__source:{fileName:_jsxFileName,lineNumber:245}},
_react2.default.createElement(_Left.Left,{__source:{fileName:_jsxFileName,lineNumber:246}},
_react2.default.createElement(_Button.Button,{transparent:true,__source:{fileName:_jsxFileName,lineNumber:247}},
_react2.default.createElement(_Icon.Icon,{name:"arrow-back",__source:{fileName:_jsxFileName,lineNumber:248}}))),


_react2.default.createElement(_Body.Body,{__source:{fileName:_jsxFileName,lineNumber:251}},
_react2.default.createElement(_Title.Title,{__source:{fileName:_jsxFileName,lineNumber:252}},"Header No Shadow")),

_react2.default.createElement(_Right.Right,{__source:{fileName:_jsxFileName,lineNumber:254}},
_react2.default.createElement(_Button.Button,{transparent:true,__source:{fileName:_jsxFileName,lineNumber:255}},
_react2.default.createElement(_Icon.Icon,{name:"menu",__source:{fileName:_jsxFileName,lineNumber:256}})))))).





toJSON();
expect(tree).toMatchSnapshot();
});

it("renders Header noLeft",function(){
var tree=_reactTestRenderer2.default.
create(
_react2.default.createElement(_Container.Container,{__source:{fileName:_jsxFileName,lineNumber:269}},
_react2.default.createElement(_Header.Header,{noLeft:true,__source:{fileName:_jsxFileName,lineNumber:270}},
_react2.default.createElement(_Left.Left,{__source:{fileName:_jsxFileName,lineNumber:271}},
_react2.default.createElement(_Button.Button,{hasText:true,transparent:true,__source:{fileName:_jsxFileName,lineNumber:272}},
_react2.default.createElement(_Text.Text,{__source:{fileName:_jsxFileName,lineNumber:273}},"Back"))),


_react2.default.createElement(_Body.Body,{__source:{fileName:_jsxFileName,lineNumber:276}},
_react2.default.createElement(_Title.Title,{__source:{fileName:_jsxFileName,lineNumber:277}},"Header")),

_react2.default.createElement(_Right.Right,{__source:{fileName:_jsxFileName,lineNumber:279}},
_react2.default.createElement(_Button.Button,{hasText:true,transparent:true,__source:{fileName:_jsxFileName,lineNumber:280}},
_react2.default.createElement(_Text.Text,{__source:{fileName:_jsxFileName,lineNumber:281}},"Cancel")))))).





toJSON();
expect(tree).toMatchSnapshot();
});
//# sourceMappingURL=Header.android.js.map
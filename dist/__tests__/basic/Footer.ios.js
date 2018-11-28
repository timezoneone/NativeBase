var _jsxFileName="__tests__\\basic\\Footer.ios.js";require("react-native");
var _react=require("react");var _react2=_interopRequireDefault(_react);
var _reactTestRenderer=require("react-test-renderer");var _reactTestRenderer2=_interopRequireDefault(_reactTestRenderer);
var _Container=require("./../../src/basic/Container");
var _Header=require("./../../src/basic/Header");
var _Button=require("./../../src/basic/Button");
var _Icon=require("./../../src/basic/Icon");
var _Content=require("./../../src/basic/Content");
var _Text=require("./../../src/basic/Text");
var _Footer=require("./../../src/basic/Footer");
var _FooterTab=require("./../../src/basic/FooterTab");
var _Badge=require("./../../src/basic/Badge");function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}



jest.mock("Platform",function(){
var Platform=require.requireActual("Platform");
Platform.OS="ios";
return Platform;
});

it("renders basic Footer",function(){
var tree=_reactTestRenderer2.default.
create(
_react2.default.createElement(_Container.Container,{__source:{fileName:_jsxFileName,lineNumber:25}},
_react2.default.createElement(_Header.Header,{__source:{fileName:_jsxFileName,lineNumber:26}}),
_react2.default.createElement(_Content.Content,{__source:{fileName:_jsxFileName,lineNumber:27}}),
_react2.default.createElement(_Footer.Footer,{__source:{fileName:_jsxFileName,lineNumber:28}},
_react2.default.createElement(_FooterTab.FooterTab,{__source:{fileName:_jsxFileName,lineNumber:29}},
_react2.default.createElement(_Button.Button,{active:true,__source:{fileName:_jsxFileName,lineNumber:30}},
_react2.default.createElement(_Text.Text,{__source:{fileName:_jsxFileName,lineNumber:31}},"Apps")),

_react2.default.createElement(_Button.Button,{active:false,__source:{fileName:_jsxFileName,lineNumber:33}},
_react2.default.createElement(_Text.Text,{__source:{fileName:_jsxFileName,lineNumber:34}},"Camera")),

_react2.default.createElement(_Button.Button,{active:false,__source:{fileName:_jsxFileName,lineNumber:36}},
_react2.default.createElement(_Text.Text,{__source:{fileName:_jsxFileName,lineNumber:37}},"Navigate")),

_react2.default.createElement(_Button.Button,{active:false,__source:{fileName:_jsxFileName,lineNumber:39}},
_react2.default.createElement(_Text.Text,{__source:{fileName:_jsxFileName,lineNumber:40}},"Contact")))))).





toJSON();
expect(tree).toMatchSnapshot();
});

it("renders Footer with Icons",function(){
var tree=_reactTestRenderer2.default.
create(
_react2.default.createElement(_Container.Container,{__source:{fileName:_jsxFileName,lineNumber:53}},
_react2.default.createElement(_Header.Header,{__source:{fileName:_jsxFileName,lineNumber:54}}),
_react2.default.createElement(_Content.Content,{__source:{fileName:_jsxFileName,lineNumber:55}}),
_react2.default.createElement(_Footer.Footer,{__source:{fileName:_jsxFileName,lineNumber:56}},
_react2.default.createElement(_FooterTab.FooterTab,{__source:{fileName:_jsxFileName,lineNumber:57}},
_react2.default.createElement(_Button.Button,{active:true,__source:{fileName:_jsxFileName,lineNumber:58}},
_react2.default.createElement(_Icon.Icon,{active:true,name:"apps",__source:{fileName:_jsxFileName,lineNumber:59}})),

_react2.default.createElement(_Button.Button,{active:false,__source:{fileName:_jsxFileName,lineNumber:61}},
_react2.default.createElement(_Icon.Icon,{active:false,name:"camera",__source:{fileName:_jsxFileName,lineNumber:62}})),

_react2.default.createElement(_Button.Button,{active:false,__source:{fileName:_jsxFileName,lineNumber:64}},
_react2.default.createElement(_Icon.Icon,{active:false,name:"compass",__source:{fileName:_jsxFileName,lineNumber:65}})),

_react2.default.createElement(_Button.Button,{active:false,__source:{fileName:_jsxFileName,lineNumber:67}},
_react2.default.createElement(_Icon.Icon,{active:false,name:"contact",__source:{fileName:_jsxFileName,lineNumber:68}})))))).





toJSON();
expect(tree).toMatchSnapshot();
});

it("renders Footer with Icon and Text",function(){
var tree=_reactTestRenderer2.default.
create(
_react2.default.createElement(_Container.Container,{__source:{fileName:_jsxFileName,lineNumber:81}},
_react2.default.createElement(_Header.Header,{__source:{fileName:_jsxFileName,lineNumber:82}}),
_react2.default.createElement(_Content.Content,{__source:{fileName:_jsxFileName,lineNumber:83}}),
_react2.default.createElement(_Footer.Footer,{__source:{fileName:_jsxFileName,lineNumber:84}},
_react2.default.createElement(_FooterTab.FooterTab,{__source:{fileName:_jsxFileName,lineNumber:85}},
_react2.default.createElement(_Button.Button,{active:true,__source:{fileName:_jsxFileName,lineNumber:86}},
_react2.default.createElement(_Icon.Icon,{active:true,name:"apps",__source:{fileName:_jsxFileName,lineNumber:87}}),
_react2.default.createElement(_Text.Text,{__source:{fileName:_jsxFileName,lineNumber:88}},"Apps")),

_react2.default.createElement(_Button.Button,{active:false,__source:{fileName:_jsxFileName,lineNumber:90}},
_react2.default.createElement(_Icon.Icon,{active:false,name:"camera",__source:{fileName:_jsxFileName,lineNumber:91}}),
_react2.default.createElement(_Text.Text,{__source:{fileName:_jsxFileName,lineNumber:92}},"Camera")),

_react2.default.createElement(_Button.Button,{active:false,__source:{fileName:_jsxFileName,lineNumber:94}},
_react2.default.createElement(_Icon.Icon,{active:false,name:"compass",__source:{fileName:_jsxFileName,lineNumber:95}}),
_react2.default.createElement(_Text.Text,{__source:{fileName:_jsxFileName,lineNumber:96}},"Compass")),

_react2.default.createElement(_Button.Button,{active:false,__source:{fileName:_jsxFileName,lineNumber:98}},
_react2.default.createElement(_Icon.Icon,{active:false,name:"contact",__source:{fileName:_jsxFileName,lineNumber:99}}),
_react2.default.createElement(_Text.Text,{__source:{fileName:_jsxFileName,lineNumber:100}},"Contact")))))).





toJSON();
expect(tree).toMatchSnapshot();
});

it("renders Footer with Badge",function(){
var tree=_reactTestRenderer2.default.
create(
_react2.default.createElement(_Container.Container,{__source:{fileName:_jsxFileName,lineNumber:113}},
_react2.default.createElement(_Header.Header,{__source:{fileName:_jsxFileName,lineNumber:114}}),
_react2.default.createElement(_Content.Content,{__source:{fileName:_jsxFileName,lineNumber:115}}),
_react2.default.createElement(_Footer.Footer,{__source:{fileName:_jsxFileName,lineNumber:116}},
_react2.default.createElement(_FooterTab.FooterTab,{__source:{fileName:_jsxFileName,lineNumber:117}},
_react2.default.createElement(_Button.Button,{active:true,vertical:true,badge:true,__source:{fileName:_jsxFileName,lineNumber:118}},
_react2.default.createElement(_Badge.Badge,{__source:{fileName:_jsxFileName,lineNumber:119}},
_react2.default.createElement(_Text.Text,{__source:{fileName:_jsxFileName,lineNumber:120}},"2")),

_react2.default.createElement(_Icon.Icon,{active:true,name:"apps",__source:{fileName:_jsxFileName,lineNumber:122}}),
_react2.default.createElement(_Text.Text,{__source:{fileName:_jsxFileName,lineNumber:123}},"Apps")),

_react2.default.createElement(_Button.Button,{active:false,__source:{fileName:_jsxFileName,lineNumber:125}},
_react2.default.createElement(_Icon.Icon,{active:false,name:"camera",__source:{fileName:_jsxFileName,lineNumber:126}}),
_react2.default.createElement(_Text.Text,{__source:{fileName:_jsxFileName,lineNumber:127}},"Camera")),

_react2.default.createElement(_Button.Button,{active:false,vertical:true,badge:true,__source:{fileName:_jsxFileName,lineNumber:129}},
_react2.default.createElement(_Badge.Badge,{style:{backgroundColor:"green"},__source:{fileName:_jsxFileName,lineNumber:130}},
_react2.default.createElement(_Text.Text,{__source:{fileName:_jsxFileName,lineNumber:131}},"51")),

_react2.default.createElement(_Icon.Icon,{active:false,name:"compass",__source:{fileName:_jsxFileName,lineNumber:133}}),
_react2.default.createElement(_Text.Text,{__source:{fileName:_jsxFileName,lineNumber:134}},"Compass")),

_react2.default.createElement(_Button.Button,{active:false,__source:{fileName:_jsxFileName,lineNumber:136}},
_react2.default.createElement(_Icon.Icon,{active:false,name:"contact",__source:{fileName:_jsxFileName,lineNumber:137}}),
_react2.default.createElement(_Text.Text,{__source:{fileName:_jsxFileName,lineNumber:138}},"Contact")))))).





toJSON();
expect(tree).toMatchSnapshot();
});
//# sourceMappingURL=Footer.ios.js.map
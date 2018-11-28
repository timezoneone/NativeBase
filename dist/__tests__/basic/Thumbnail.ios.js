var _jsxFileName="__tests__\\basic\\Thumbnail.ios.js";require("react-native");
var _react=require("react");var _react2=_interopRequireDefault(_react);
var _reactTestRenderer=require("react-test-renderer");var _reactTestRenderer2=_interopRequireDefault(_reactTestRenderer);
var _Content=require("./../../src/basic/Content");
var _Thumbnail=require("./../../src/basic/Thumbnail");function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}


var cover=require("../assets/drawer-cover.png");

jest.mock("Platform",function(){
var Platform=require.requireActual("Platform");
Platform.OS="ios";
return Platform;
});

it("renders default shape thumbnail",function(){
var tree=_reactTestRenderer2.default.
create(
_react2.default.createElement(_Content.Content,{__source:{fileName:_jsxFileName,lineNumber:19}},
_react2.default.createElement(_Thumbnail.Thumbnail,{small:true,source:cover,__source:{fileName:_jsxFileName,lineNumber:20}}),
_react2.default.createElement(_Thumbnail.Thumbnail,{source:cover,__source:{fileName:_jsxFileName,lineNumber:21}}),
_react2.default.createElement(_Thumbnail.Thumbnail,{large:true,source:cover,__source:{fileName:_jsxFileName,lineNumber:22}}))).


toJSON();
expect(tree).toMatchSnapshot();
});

it("renders square shape thumbnail",function(){
var tree=_reactTestRenderer2.default.
create(
_react2.default.createElement(_Content.Content,{__source:{fileName:_jsxFileName,lineNumber:32}},
_react2.default.createElement(_Thumbnail.Thumbnail,{square:true,small:true,source:cover,__source:{fileName:_jsxFileName,lineNumber:33}}),
_react2.default.createElement(_Thumbnail.Thumbnail,{square:true,source:cover,__source:{fileName:_jsxFileName,lineNumber:34}}),
_react2.default.createElement(_Thumbnail.Thumbnail,{square:true,large:true,source:cover,__source:{fileName:_jsxFileName,lineNumber:35}}))).


toJSON();
expect(tree).toMatchSnapshot();
});
//# sourceMappingURL=Thumbnail.ios.js.map
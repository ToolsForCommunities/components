(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{529:function(module,exports,__webpack_require__){__webpack_require__(530),__webpack_require__(943),__webpack_require__(939),__webpack_require__(500),module.exports=__webpack_require__(938)},597:function(module,exports){},686:function(module,exports,__webpack_require__){var api=__webpack_require__(687),content=__webpack_require__(688);"string"==typeof(content=content.__esModule?content.default:content)&&(content=[[module.i,content,""]]);var options={insert:"head",singleton:!1};api(content,options);module.exports=content.locals||{}},688:function(module,exports,__webpack_require__){(exports=__webpack_require__(689)(!1)).push([module.i,"pre.prism-code {\n  font-size: 18px;\n}\n",""]),module.exports=exports},938:function(module,exports,__webpack_require__){"use strict";__webpack_require__(36).addons.setConfig({refs:{}})},943:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var classCallCheck=__webpack_require__(67),createClass=__webpack_require__(68),inherits=__webpack_require__(69),createSuper=__webpack_require__(508),react=(__webpack_require__(7),__webpack_require__(8),__webpack_require__(12),__webpack_require__(0)),react_default=__webpack_require__.n(react),es=__webpack_require__(344),public_api=(__webpack_require__(686),__webpack_require__(36)),types=__webpack_require__(235),PANEL_ID="".concat("show-vue-markup","/panel"),EVENT_ID="".concat("show-vue-markup","/markup"),register_MarkupPanel=function(_React$Component){Object(inherits.a)(MarkupPanel,_React$Component);var _super=Object(createSuper.a)(MarkupPanel);function MarkupPanel(){var _this;Object(classCallCheck.a)(this,MarkupPanel);for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++)args[_key]=arguments[_key];return(_this=_super.call.apply(_super,[this].concat(args))).state={markup:""},_this.onStoryChange=function(_ref){var markup=_ref.markup;_this.setState({markup:markup})},_this}return Object(createClass.a)(MarkupPanel,[{key:"componentDidMount",value:function componentDidMount(){this.props.channel.on(EVENT_ID,this.onStoryChange)}},{key:"componentWillUnmount",value:function componentWillUnmount(){this.props.channel.off(EVENT_ID,this.onStoryChange)}},{key:"render",value:function render(){var markup=this.state.markup;return this.props.active?Object(react.createElement)(es.a,Object.assign({},es.b,{code:markup,language:"html",children:function children(_ref2){var className=_ref2.className,style=_ref2.style,tokens=_ref2.tokens,getLineProps=_ref2.getLineProps,getTokenProps=_ref2.getTokenProps;return Object(react.createElement)("pre",{className:className,style:style},tokens.map((function(line,i){return Object(react.createElement)("div",Object.assign({},getLineProps({line:line,key:i})),line.map((function(token,key){return Object(react.createElement)("span",Object.assign({},getTokenProps({token:token,key:key})))})))})))}})):null}}]),MarkupPanel}(react_default.a.Component);public_api.default.register("show-vue-markup",(function(){var channel=public_api.default.getChannel();public_api.default.add(PANEL_ID,{type:types.b.PANEL,title:"Markup",render:function render(_ref3){var active=_ref3.active,key=_ref3.key;return Object(react.createElement)(register_MarkupPanel,{active:active,key:key,channel:channel})}})}));__webpack_require__(703),__webpack_require__(752),__webpack_require__(758),__webpack_require__(904),__webpack_require__(917)}},[[529,2,3]]]);
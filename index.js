"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.safeGetProp = void 0;
function safeGetProp(obj, props, ensure) {
  if (typeof obj !== 'object' || typeof props !== 'string') return ensure;
  var propsArr = props.split('.');
  var i = 0;
  var o = Object.assign({}, obj);
  for (i; i < propsArr.length; i++) {
    if (typeof o[propsArr[i]] === 'undefined') return ensure;
    o = o[propsArr[i]];
  }
  return o;
}
exports.safeGetProp = safeGetProp;
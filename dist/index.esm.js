import React from 'react';

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z = "            .swe-card-primary,\n            .swe-card-secondary,\n            .swe-card-success,\n            .swe-card-info,\n            .swe-card-warning,\n            .swe-card-danger,\n            .swe-card-light,\n            .swe-card-dark {\n                display: inline-block;\n                position: relative;\n                width: 100%;\n                margin: 25px 0;\n                margin-top: 40px;\n                box-shadow: 0 1px 4px 0 rgb(0 0 0 / 14%);\n                border-radius: 6px;\n                color: rgba(0, 0, 0, 0.87);\n                background: #fff;\n            }\n            \n            .swe-card-header-primary,\n            .swe-card-header-secondary,\n            .swe-card-header-success,\n            .swe-card-header-info,\n            .swe-card-header-warning,\n            .swe-card-header-danger,\n            .swe-card-header-light,\n            .swe-card-header-dark {\n                display: inline-block;\n                position: relative;\n                max-width: calc(100% - 30px);\n                margin-left: 15px;\n                margin-top: -20px;\n                padding: 5px 15px;\n                border-radius: 6px;\n                background: var(--bs-primary, #000046);\n                box-shadow: 0 4px 20px 0px rgb(0 0 0 / 14%), 0 7px 30px -15px var(--bs-primary, #000046);\n                color: var(--bs-light, #fff);\n            }\n            \n            .swe-card-header-primary *,\n            .swe-card-header-secondary *,\n            .swe-card-header-success *,\n            .swe-card-header-info *,\n            .swe-card-header-warning *,\n            .swe-card-header-danger *,\n            .swe-card-header-light *,\n            .swe-card-header-dark * {\n                margin: 0px;\n                padding: 0px;\n            }\n            \n            .swe-card-body-primary,\n            .swe-card-body-secondary,\n            .swe-card-body-success,\n            .swe-card-body-info,\n            .swe-card-body-warning,\n            .swe-card-body-danger,\n            .swe-card-body-light,\n            .swe-card-body-dark {\n                margin: 0px;\n                padding: 15px;\n            }\n            \n            .swe-card-footer-primary,\n            .swe-card-footer-secondary,\n            .swe-card-footer-success,\n            .swe-card-footer-info,\n            .swe-card-footer-warning,\n            .swe-card-footer-danger,\n            .swe-card-footer-light,\n            .swe-card-footer-dark {\n                background-color: rgba(0, 0, 0, 0.03);\n                border-top: 1px solid rgba(0, 0, 0, 0.125);\n                padding: 15px;\n            }\n            \n            .swe-card-footer-primary *,\n            .swe-card-footer-secondary *,\n            .swe-card-footer-success *,\n            .swe-card-footer-info *,\n            .swe-card-footer-warning *,\n            .swe-card-footer-danger *,\n            .swe-card-footer-light *,\n            .swe-card-footer-dark * {\n                margin-bottom: 0px;\n                font-size: x-small;\n            }\n            \n            .swe-card-header-secondary {\n                background: var(--bs-secondary, #000046);\n                box-shadow: 0 4px 20px 0px rgb(0 0 0 / 14%), 0 7px 30px -15px var(--bs-primary, #8499a8);\n                color: var(--bs-light, #fff);\n            }\n            \n            .swe-card-header-success {\n                background: var(--bs-success, #000046);\n                box-shadow: 0 4px 20px 0px rgb(0 0 0 / 14%), 0 7px 30px -15px var(--bs-success, #00c894);\n                color: var(--bs-light, #fff);\n            }\n            \n            .swe-card-header-info {\n                background: var(--bs-info, #000046);\n                box-shadow: 0 4px 20px 0px rgb(0 0 0 / 14%), 0 7px 30px -15px var(--bs-info, #7854e4);\n                color: var(--bs-light, #fff);\n            }\n            \n            .swe-card-header-warning {\n                background: var(--bs-warning, #000046);\n                box-shadow: 0 4px 20px 0px rgb(0 0 0 / 14%), 0 7px 30px -15px var(--bs-warning, #ffc107);\n                color: var(--bs-light, #fff);\n            }\n            \n            .swe-card-header-danger {\n                background: var(--bs-danger, #000046);\n                box-shadow: 0 4px 20px 0px rgb(0 0 0 / 14%), 0 7px 30px -15px var(--bs-danger, #e13871);\n                color: var(--bs-light, #fff);\n            }\n            \n            .swe-card-header-light {\n                background: var(--bs-light, #000046);\n                box-shadow: 0 4px 20px 0px rgb(0 0 0 / 14%), 0 7px 30px -15px var(--bs-light, #ffffff);\n                color: var(--bs-light, #fff);\n            }\n            \n            .swe-card-header-dark {\n                background: var(--bs-dark, #000046);\n                box-shadow: 0 4px 20px 0px rgb(0 0 0 / 14%), 0 7px 30px -15px var(--bs-dark, #343a40);\n                color: var(--bs-light, #fff);\n            }";
styleInject(css_248z);

function Card(_ref) {
  var header = _ref.header,
      body = _ref.body,
      footer = _ref.footer,
      theme = _ref.theme;

  var _theme = theme || 'primary';

  return /*#__PURE__*/React.createElement("div", {
    className: "swe-card-".concat(_theme)
  }, /*#__PURE__*/React.createElement("div", {
    className: "swe-card-header-".concat(_theme)
  }, header), /*#__PURE__*/React.createElement("div", {
    className: "swe-card-body-".concat(_theme)
  }, body), /*#__PURE__*/React.createElement("div", {
    className: "swe-card-footer-".concat(_theme)
  }, footer));
}

export { Card as default };

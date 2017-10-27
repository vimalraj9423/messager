/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 513);
/******/ })
/************************************************************************/
/******/ ({

/***/ 513:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
// // import { liveFiles } from '../../public/file_manifest'

// const generateTemplate = (script, StyleTag) => ({
//   markup,
//   title,
//   css,
//   // styledCss,
//   initialState
// }) => {
//   const stylesList = StyleTag
//   const scripts = script
//     .map(scriptPath => `<script src="${scriptPath}"></script>`)
//     .join('')

//   const styles =
//     stylesList !== ''
//       ? stylesList
//           .map(style => `<link href="${style}" rel="stylesheet">`)
//           .join('')
//       : ''

//   return `
// <!DOCTYPE html>
// <html>
//     <head>
//         <title>${title}</title>
//         <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//         <link href="https://fonts.googleapis.com/css?family=Montserrat|Raleway|Roboto" rel="stylesheet">
//         <style id="jss-server-side">${css}</style>
//         ${styles}
//         <script>window.__APP_INITIAL_STATE__ = ${initialState}</script>
//     </head>
//     <body style="margin: 0;font-family:'Roboto', 'Helvetica', 'Arial', sans-serif">
//         <div id="root">${markup}</div>
//         ${scripts}
//     </body>
// </html>
// `
// }

// function homeDesktopBundle() {
//   return process.env.NODE_ENV === 'production'
//     ? [`/public/${liveFiles['commons']}`, `/public/${liveFiles['home']}`]
//     : ['/assets/home.bundle.js']
// }

// function SearchDesktopBundle() {
//   return process.env.NODE_ENV === 'production'
//     ? ['/public/commons.bundle.js', '/public/search.bundle.js']
//     : ['/assets/search.bundle.js']
// }

// function ProfileBundle() {
//   return process.env.NODE_ENV === 'production'
//     ? ['/public/commons.bundle.js', '/public/profile.bundle.js']
//     : ['/assets/profile.bundle.js']
// }

// function OffersBundle() {
//   return process.env.NODE_ENV === 'production'
//     ? ['/public/commons.bundle.js', '/public/offers.bundle.js']
//     : ['/assets/offers.bundle.js']
// }

// function OfferPageBundle() {
//   return process.env.NODE_ENV === 'production'
//     ? ['/public/commons.bundle.js', '/public/offerPage.bundle.js']
//     : ['/assets/offerPage.bundle.js']
// }

// function realTimeTrackingBundle() {
//   return process.env.NODE_ENV === 'production'
//     ? ['/public/commons.bundle.js', '/public/rtt.bundle.js']
//     : ['/assets/rtt.bundle.js']
// }

// export const HomeTemplate = generateTemplate(homeDesktopBundle(), '')

// export const HomeTemplateMobile = generateTemplate(
//   ['/assets/homemobile.bundle.js'],
//   ''
// )

// export const SearchTemplate = generateTemplate(SearchDesktopBundle(), '')

// export const ProfileTemplate = generateTemplate(
//   ProfileBundle(),
//   ['/assets/styles.css'],
//   ''
// )

// export const OffersTemplate = generateTemplate(OffersBundle(), '')

// export const OfferPageTemplate = generateTemplate(OfferPageBundle(), [
//   '/assets/styles.css'
// ])

// export const realTimeTrackingTemplate = generateTemplate(
//   realTimeTrackingBundle(),
//   ''
// )

var templateHome = exports.templateHome = function templateHome(_ref) {
    var markup = _ref.markup,
        title = _ref.title,
        css = _ref.css,
        initialState = _ref.initialState;

    return "<!DOCTYPE html>\n    <html>\n        <head>\n            <title>" + title + "</title>\n            <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n            <link href=\"https://fonts.googleapis.com/css?family=Montserrat|Raleway|Roboto\" rel=\"stylesheet\">\n            <style id=\"jss-server-side\">" + css + "</style>\n            <script>window.__APP_INITIAL_STATE__ = " + initialState + "</script>\n            <style src=\"./assets/raja.bundle.js\"></style>\n        </head>\n        <body style=\"margin: 0;font-family:'Roboto', 'Helvetica', 'Arial', sans-serif\">\n            <div id=\"root\">" + markup + "</div>\n        </body>\n    </html>";
};

/***/ })

/******/ });
//# sourceMappingURL=raja.bundle.js.map
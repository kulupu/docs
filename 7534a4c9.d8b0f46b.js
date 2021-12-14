(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{79:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return u}));var r=n(3),o=n(7),i=(n(0),n(85)),a={title:"Economics"},c={unversionedId:"economics",id:"economics",isDocsHomePage:!1,title:"Economics",description:"This artcile describes the cryptoeconomies of Kulupu.",source:"@site/docs/economics.md",slug:"/economics",permalink:"/docs/economics",editUrl:"https://github.com/kulupu/docs/edit/master/website/docs/economics.md",version:"current",sidebar:"someSidebar",previous:{title:"Overview",permalink:"/docs/overview"},next:{title:"Governance",permalink:"/docs/governance"}},s=[],l={toc:s};function u(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"This artcile describes the cryptoeconomies of Kulupu."),Object(i.b)("p",null,"The ",Object(i.b)("em",{parentName:"p"},"effective total supply")," of Kulupu is expected to be no more than\n210 million KLP."),Object(i.b)("p",null,"Kulupu implements fee market, which is a method to have more\npredictable transaction fees. With this method, the ",Object(i.b)("em",{parentName:"p"},"base")," transaction\nfees are burned instead of paid to miners. Miners only retain the\n",Object(i.b)("em",{parentName:"p"},"tips"),". Burning the base fee is important as it avoids giving miners\nincentives to create artifical transactions to manipulate the fee."),Object(i.b)("p",null,"Kulupu may also implement a treasury and voluntary taxation\nsystem. With this implementation, the treasury funding gets burned\nevery spending cycle."),Object(i.b)("p",null,"In a proof of work blockchain, a popular theme is total supply, in\nwhich block rewards initially dominate, and then gradually switch to a\nfee only system. However, with burning methods like fee market and\ntreasury spending, a direct translation of total supply will result in\ndeflation."),Object(i.b)("p",null,"The effective total supply of Kulupu is the total coins in circulation\nwith both emissions and and burns considered. Assuming blocks in the\nfuture consumes on average half of the total block weight, the burn\neach block will be 8 KLP. As a result, an emission scheme with\neventual tail emission of equal or less than 8 KLP will have fixed\neffective total supply."))}u.isMDXComponent=!0},85:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return b}));var r=n(0),o=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),u=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=u(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},f=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(n),f=r,b=p["".concat(a,".").concat(f)]||p[f]||m[f]||i;return n?o.a.createElement(b,c(c({ref:t},l),{},{components:n})):o.a.createElement(b,c({ref:t},l))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=f;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var l=2;l<i;l++)a[l]=n[l];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"}}]);
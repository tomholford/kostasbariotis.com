webpackJsonp([6],{"./src/components/Pagination.js":function(e,t,a){"use strict";function s(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var l=a("./node_modules/react/react.js"),o=s(l),n=a("./node_modules/gatsby-link/index.js"),r=s(n),d=function(e){var t=e.prevPath,a=e.nextPath,s=e.page,l=e.pagesSum;return o.default.createElement("header",{className:"header extra-pagination inner text-center"},o.default.createElement("nav",{className:"pagination",role:"navigation"},t&&o.default.createElement(r.default,{className:"newer-posts",to:t},o.default.createElement("span",{"aria-hidden":"true"},"←")," Newer Posts"),o.default.createElement("span",{className:"page-number"},"Page "+s+" of "+l),a&&o.default.createElement(r.default,{className:"older-posts",to:a},"Older Posts ",o.default.createElement("span",{"aria-hidden":"true"},"→"))))};t.default=d,e.exports=t.default},'./node_modules/babel-loader/lib/index.js?{"plugins":["/Users/Bariotis/Dev/develop/kostasbariotis.com/node_modules/gatsby/dist/utils/babel-plugin-extract-graphql.js","/Users/Bariotis/Dev/develop/kostasbariotis.com/node_modules/babel-plugin-add-module-exports/lib/index.js","/Users/Bariotis/Dev/develop/kostasbariotis.com/node_modules/babel-plugin-add-module-exports/lib/index.js","/Users/Bariotis/Dev/develop/kostasbariotis.com/node_modules/babel-plugin-transform-object-assign/lib/index.js"],"presets":["/Users/Bariotis/Dev/develop/kostasbariotis.com/node_modules/babel-preset-env/lib/index.js","/Users/Bariotis/Dev/develop/kostasbariotis.com/node_modules/babel-preset-stage-0/lib/index.js","/Users/Bariotis/Dev/develop/kostasbariotis.com/node_modules/babel-preset-react/lib/index.js"],"cacheDirectory":true}!./src/templates/page.js':function(e,t,a){"use strict";function s(e){return e&&e.__esModule?e:{default:e}}function l(e){var t=e.pathContext,a=e.data,s=a.site.siteMetadata,l=s.title,o=s.description,r=t.posts,d=t.page,i=t.pagesSum,c=t.prevPath,p=t.nextPath;return n.default.createElement("section",{className:"main-content"},n.default.createElement(j.default,{title:"Page "+d+" - "+l,path:"/page/"+d,tags:"webdev, programming, javascript",description:o}),n.default.createElement(g.default,null),n.default.createElement("section",{className:"blog container"},n.default.createElement("div",{className:"medium-8 medium-offset-2"},n.default.createElement("div",{className:"posts"},n.default.createElement(u.default,{page:d,pagesSum:i,prevPath:c,nextPath:p}),n.default.createElement(f.default,null),n.default.createElement(m.default,{posts:r}),n.default.createElement(f.default,null),n.default.createElement(u.default,{page:d,pagesSum:i,prevPath:c,nextPath:p})))))}Object.defineProperty(t,"__esModule",{value:!0}),t.pagesQuery=void 0,t.default=l;var o=a("./node_modules/react/react.js"),n=s(o),r=a("./node_modules/gatsby-link/index.js"),d=(s(r),a("./src/components/Link.js")),i=(s(d),a("./src/components/Pagination.js")),u=s(i),c=a("./src/components/Posts.js"),m=s(c),p=a("./src/components/Separator.js"),f=s(p),b=a("./src/components/Menu.js"),g=s(b),v=a("./src/components/MetaTags.js"),j=s(v);t.pagesQuery="** extracted graphql fragment **"}});
//# sourceMappingURL=page-component---src-templates-page-js-ee29a38c0258dd676545.js.map
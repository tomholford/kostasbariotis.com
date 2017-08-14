webpackJsonp([160],{"./node_modules/json-loader/index.js!./.cache/json/drafts-page-3.json":function(e,t){e.exports={pathContext:{posts:[{excerpt:"Last week, me and Goodvidio's CTO sit down to come up with a solution. We were in a need of an auditing service that will track down every movement inside our system. Searching in Google we didn't find any real world example either any useful...",html:"<p>Last week, me and Goodvidio's CTO sit down to come up with a solution. We were in a need of an auditing service that will track down every movement inside our system.</p>\n<p>Searching in Google we didn't find any real world example either any useful information as we expected. We had only our experience from the various systems we've used and how they are implementing such things. But again, we had never meet an isolated auditing service. That was our goal.</p>\n<p>Here are my notes from the meeting.</p>\n<ul>\n<li>Our goal was to track down actions happens anywhere in the system</li>\n<li>We should track the action, the actor of that action(whether it's an actual user or another service) and a lot of metadata about the action.</li>\n<li>Actions are application level logic. This means that each of our applications (otherwise services) define their actions that want our service to track. There are no limitations, validations or anything like that. There are rules that must be followed but other than that, you are free to track what ever you want.</li>\n<li>We found a solution to allow the presenter of the audits to not have to render the message it self, instead we are generating a message directly from the data we receive so the presenter can take ready messages to display. Of course, it has the choice to rerender them itself.</li>\n</ul>",id:"/Users/Bariotis/Dev/develop/kostasbariotis.com/src/pages/our-auditing-service/index.md absPath of file >>> MarkdownRemark",timeToRead:1,frontmatter:{date:"2015-11-15T00:00:00.000Z",path:"/our-auditing-service",tags:null,title:"Our auditing service",draft:!0}},{excerpt:'With the rise of the upcoming  WebWorkers API  in the horizon, interesting things are emerging. And the one that got me go "whhaaaaat??" is the one that advices you to put all of your business logic inside a WebWorker. Whaaaaat? A WebWorker is a...',html:'<p>With the rise of the upcoming <a href="http://www.w3.org/TR/workers/">WebWorkers API</a> in the horizon, interesting things are emerging. And the one that got me go "whhaaaaat??" is the one that advices you to put all of your business logic inside a WebWorker. Whaaaaat?</p>\n<p>A WebWorker is a separate thread that runs Javascript but has no access to the DOM or the <code>window</code> object. But it can do complex queries and loops, accessing core <a href="https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Functions_and_classes_available_to_workers">functions and APIs</a>, while you are letting the main thread, the UI thread, to handle the UI stuff only.</p>\n<p>Rendering the DOM is so expensive, specially when it comes to complex interfaces we have nowadays. Not so long ago, the <a href="https://facebook.github.io/react/docs/reconciliation.html">VirtualDOM</a> introduced which tried to speed up the rendering process by rendering only what actually changed, instead of re-rendering the whole page. But, that\'s not enough apparently, since even such few changes can\'t be handle well by low powered devices such as mobiles phones and watches.</p>\n<p>In order to keep the 60fpm barrier, we are completely freeing the main thread to be able to handle the rendering only and we start WebWorkers to handle our business logic.</p>\n<p>I found <a href="http://www.pocketjavascript.com/blog/2015/11/23/introducing-pokedex-org">two</a> <a href="https://medium.com/@nsisodiya/flux-inside-web-workers-cc51fb463882#.iv69h6ih2">great</a> examples of this concept. Both, they are suggesting keeping the whole app outside the main thread and send there only the patch of the changed DOM to be rendered. The UI thread can then handle only rendering and complex fancy animations.</p>\n<p>Oh, by the way, Nodejs fans, <a href="https://github.com/nodejs/node/pull/2133">Workers are coming</a>.</p>',id:"/Users/Bariotis/Dev/develop/kostasbariotis.com/src/pages/ui-thread-free/index.md absPath of file >>> MarkdownRemark",timeToRead:1,frontmatter:{date:"2015-10-15T00:00:00.000Z",path:"/ui-thread-free",tags:null,title:"UI thread free",draft:!0}},{excerpt:"dont do word wrap and leave your lines huge\nfind how your language handles multilne strings\nexamples on JS/PHP/etc dont keep global state. avoid it in any situation\nuse pure functions and flow the state through them.",html:"<p>dont do word wrap and leave your lines huge\nfind how your language handles multilne strings\nexamples on JS/PHP/etc</p>\n<p>dont keep global state. avoid it in any situation\nuse pure functions and flow the state through them.</p>",id:"/Users/Bariotis/Dev/develop/kostasbariotis.com/src/pages/what-not-to-do-for-beginners/index.md absPath of file >>> MarkdownRemark",timeToRead:1,frontmatter:{date:"2015-10-10T00:00:00.000Z",path:"/what-not-to-do-for-beginners",tags:null,title:"What not to do for beginners",draft:!0}},{excerpt:"MySQL = relational schema and a lot of relations\nMongoDB = no relations but flexibility",html:"<p>MySQL = relational schema and a lot of relations\nMongoDB = no relations but flexibility</p>",id:"/Users/Bariotis/Dev/develop/kostasbariotis.com/src/pages/relational-vs-no-relational/index.md absPath of file >>> MarkdownRemark",timeToRead:1,frontmatter:{date:"2015-10-01T00:00:00.000Z",path:"/relational-vs-no-relational",tags:null,title:"Relational vs No Relational",draft:!0}},{excerpt:"https://github.com/troygoode/node-cors \n https://github.com/analog-nico/hpp \n https://github.com/ericmdantas/express-content-length-validator \n https://github.com/aredo/express-enforces-ssl",html:'<p><a href="https://github.com/troygoode/node-cors">https://github.com/troygoode/node-cors</a>\n<a href="https://github.com/analog-nico/hpp">https://github.com/analog-nico/hpp</a>\n<a href="https://github.com/ericmdantas/express-content-length-validator">https://github.com/ericmdantas/express-content-length-validator</a>\n<a href="https://github.com/aredo/express-enforces-ssl">https://github.com/aredo/express-enforces-ssl</a></p>',id:"/Users/Bariotis/Dev/develop/kostasbariotis.com/src/pages/securing-your-expressjs-app/index.md absPath of file >>> MarkdownRemark",timeToRead:1,frontmatter:{date:"2015-09-10T00:00:00.000Z",path:"/securing-your-expressjs-app",tags:null,title:"securing your Expressjs app",draft:!0}}],page:3,pagesSum:4}}}});
//# sourceMappingURL=path---drafts-page-3-eeaccff7f3987ba73393.js.map
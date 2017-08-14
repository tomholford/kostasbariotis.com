webpackJsonp([162],{"./node_modules/json-loader/index.js!./.cache/json/drafts-page-1.json":function(e,t){e.exports={pathContext:{posts:[{excerpt:"Static site generation is just another form of caching your content. Think of when you are caching the home page of a Wordpress site and you are serving the cached content on every visitor. The thing though is that in many cases, there is no need for...",html:"<p>Static site generation is just another form of caching your content. Think of when you are caching the home page of a Wordpress site and you are serving the cached content on every visitor. The thing though is that in many cases, there is no need for a system like Wordpress at all. My personal site contains a list of blog posts and static information  about me that I am updating it once in a while. Commends are being hosted on Disquss. There is absolutely no need for a system like Wordpress or even a system like Ghost which I have  been using for the last 3 years. While it served me well all this time, I really got tired of updating it, ssh-ing to the server, doing migrations and doing other ops required by such a stack. While there are also options of hosting in the cloud, pretty much the will be paid and fairly enough, they deserve it for doing such a job.</p>\n<p>But really, do I need a system like that? Not at all. I would also argue that not even an architecture with Wordpress involved needs a caching mechanism and would be pretty much benefit from static site generation and we will discuss that later below.</p>\n<h2>Static site generation as we know them</h2>\n<p>Jekyll, Hexo, Hugo. They do one thing and they do it extremely well. I've build tone of sites using Jekyll hosted either on GitHub either somewhere else. They all work pretty much the same way</p>\n<ul>\n<li>You describe your content in some common templating language (JADE, Handlebars, etc)</li>\n<li>While in development, start a local web server and add \"watchers\" that will listen\nfor content changes and re-render the site</li>\n<li>Finally, you render the whole site in static HTML and deploy. The generator will combine your\nfiles and produce a well formed HTML content.</li>\n</ul>\n<p>For client side functionality, you have to keep the client side logic separated from the backend. Much like in an architecture where Wordpress is involved. So, pretty much nothing is changed. Literally, the difference from having a cached version of wordpress and content generated with Jekyll is none.</p>\n<h2>Enter the new world order</h2>\n<p>React.js! Aw yeah! We've heard about it! It's dominating the Web, but for a reason really. There are really so many reasons React.js have gained such a hype. Many of the techniques we will discuss here can be easily applied with other frameworks and libraries but Reacts can play so nicely with them.</p>\n<p>There is this function called Server Side Rendering where you can produce static HTML content directly from a tree of React.js components. That content will still contains the required React.js specific anotations needed so when the same tree will be loaded on the client, on top of the previously produced content, will know exactly what it has to render and what not to render. From there, the client side logic can take the lead. So, once the user visits a site, the server will directly respond with the static HTML. Once it's loaded in the user's browser and the user navigates in another route,\nthe client side logic will respond and will render the new page, instead of contacting the server again. That's really a game changer.</p>\n<p>So let's see the new list:</p>\n<ul>\n<li>Describe your content in React.js Components</li>\n<li>Write code on development like a boss (hot reloading, modularized code, webpack plugins, etc...)</li>\n<li>Use React.js SSR API to render your content</li>\n</ul>\n<h2>Wait, what? Just like that?</h2>\n<p>Yeah, I know. I made it look so easy. It's really not. There is the need for a strong abstraction that will track your links across your components, parse content written in another format, like blog posts written in Markdown, generate code that will not bloat the client and will efficiently server the content to the user.</p>\n<p>Thankfully, there are a few projects that took the initiative and they are doing a great job so far. At the time of reading this, this site will already be served by GitHub pages and the content you will see once you view the source it's been generated by Gatsby.js.</p>\n<p>I have been following those projects for quite a few time now. Here's my list:</p>\n<ul>\n<li>Gatsby.js</li>\n<li>Phenomic</li>\n<li>nextein</li>\n</ul>\n<p>At the time that I started following them, all of them were in a very early stage and none of them could generate my site's content the way I wanted and in the same way as my previous one, so I wouldn't lose paths and certain functionalities. I wanted to make the generated site, exactly like the old one in terms of the user experience. Once Gatsby.js hitted major version 1, I started using it and the result..., you are looking at it!</p>\n<h2>What exactly am I looking at?</h2>\n<p>Take a look <a href=\"https://github.com/kbariotis/kostasbariotis.com\">here</a>.</p>",id:"/Users/Bariotis/Dev/develop/kostasbariotis.com/src/pages/modern-static-site-generation/index.md absPath of file >>> MarkdownRemark",timeToRead:3,frontmatter:{date:"2017-08-14T00:00:00.000Z",path:"/moderl-static-site-generation",tags:null,title:"Modern static site generation",draft:!0}},{excerpt:"lets talk about over engineering trying to forecast the future e.g. We need an API to support our current 100 customers We need an API to support our current 100 customers plus another 100 that may come in the future",html:"<p>lets talk about over engineering</p>\n<p>trying to forecast the future</p>\n<p>e.g. We need an API to support our current 100 customers</p>\n<p>We need an API to support our current 100 customers plus another 100 that may come in the future</p>",id:"/Users/Bariotis/Dev/develop/kostasbariotis.com/src/pages/untitled-4/index.md absPath of file >>> MarkdownRemark",timeToRead:1,frontmatter:{date:"2017-06-01T00:00:00.000Z",path:"/untitled-4",tags:null,title:"(Untitled)",draft:!0}},{excerpt:"",html:"",id:"/Users/Bariotis/Dev/develop/kostasbariotis.com/src/pages/microservices-lets-talk-about-boundaries/index.md absPath of file >>> MarkdownRemark",timeToRead:1,frontmatter:{date:"2017-03-10T00:00:00.000Z",path:"/microservices-lets-talk-about-boundaries",tags:null,title:"Microservices: lets talk about boundaries",draft:!0}},{excerpt:"Aw man! What a year! So many great experiences, so many mixed feelings! 2016 was full of retrospective meetings. Why not make one for my-self and for the year past. I did set a few goals  last year . What I did Travel more I visited Bucharest...",html:"<p>Aw man! What a year! So many great experiences, so many mixed feelings!</p>\n<p>2016 was full of retrospective meetings. Why not make one for my-self and for the year past. I did set a few goals <a href=\"https://kostasbariotis.com/beyond-sunset/\">last year</a>.</p>\n<h1>What I did</h1>\n<ul>\n<li>Travel more</li>\n</ul>\n<p>I visited Bucharest, Romania in June for <a href=\"https://jscamp.ro\">jscamp.ro</a>. Didn't have the time to walk around a lot so I will get there again in any chance given to me. Also, visited Paris for the dotJS/dotCSS conferences. What a magnificent event!</p>\n<ul>\n<li>Read/Write more</li>\n</ul>\n<p>Nah, I can't say I'm satisfied with this one. I was watching a lot of blogs and I was reading Medium a lot. Didn't read all the books I wanted to read. I enjoyed Big Brother and The man and the see. I started Aurelia but never finished it. Zero to One was a great read as expected. Started Lean Analytics a few weeks ago.</p>\n<p>But, I did start a podcast! [http://devastation.tv] started back in February and it's single purpose is learn a lot more and share those learning with my fellow greeks. Much like writing tech blogs posts!</p>\n<p><a href=\"https://kostasbariotis.com/data-migration-with-nodejs/\">\"Data Migrations with Node.js\"</a> was my most ridden piece this year.</p>\n<ul>\n<li>Stay fit</li>\n</ul>\n<p>I did a lot of running and I did notice a lot of improvement over the previous years. I didn't manage to make it my priority and a formal habit though. I still have to convince myself in order to get out of the building and go running. Still room for improvements here.</p>\n<ul>\n<li>Speak to a big conference</li>\n</ul>\n<p>Does being listed in a <a href=\"http://2016.bulgariawebsummit.com/\">big conference's speaker</a> list as a speaker counts for this one? I did manage to get on that list but never made it to the conference. Everything was setup (thank you Bogo for you support, sorry for the mess) perfectly, there were two days left for the conference and I was about to travel by car the next day, until borders closed by Greek truck drivers riots. All three roads that could lead me to Sofia from Thessaloniki were closed. Airlines also do not favor Thessaloniki and I had to fly to Athens in order to land to Sofia. I was very disappointed with this one.</p>\n<p>Nevertheless, I did fly to Athens mid-December to give a talk at GreeceJS, the biggest Javascript meetup in Athens. It was a great experience, met a lof of new people there. <em>Photos soon to come</em></p>\n<p>2016 was also hiding a few other surprises. I left Goodvidio a month ago and now I am in the process of getting a new job. It has been 18 amazing months, full startup mode! Met some brilliant and wonderful guys over there. I am going to miss them for sure.</p>\n<h1>Where to go next</h1>\n<p>So, what's on for 2017? Well, I won't include the travel/read/speak/write thing! I want those to be parts of my life but I don't want to keep track of them. I will try this year too and even harder.</p>\n<p>I will try to put a single goal for this year. I have been amazed by Universal Javascript trend that hit the since last year. I think 2017 will be a great year for Isomorphic applications along with progressive apps guidelines. I want this year to get my hands into and build myself an app that will follow all those principles.</p>\n<p>That's my goal for 2017!</p>",id:"/Users/Bariotis/Dev/develop/kostasbariotis.com/src/pages/and-another-end/index.md absPath of file >>> MarkdownRemark",timeToRead:2,frontmatter:{date:"2016-12-25T00:00:00.000Z",path:"/and-another-end",tags:null,title:"And another end",draft:!0}},{excerpt:"Knowing how to communicate effectively\nvalid arguments\npoints\nknow what your talkign about\ndo your homework/research\nwant to go deeper? fallacies  http://www.nobeliefs.com/fallacies.htm Not everything is about you. Everything is about the team...",html:'<ol>\n<li>\n<p>Knowing how to communicate effectively\nvalid arguments\npoints\nknow what your talkign about\ndo your homework/research\nwant to go deeper? fallacies <a href="http://www.nobeliefs.com/fallacies.htm">http://www.nobeliefs.com/fallacies.htm</a></p>\n</li>\n<li>\n<p>Not everything is about you. Everything is about the team. Disagreeing will only slow the whole team down.\nKnow when to hold back. When to say, you know what, I do disagree with all of you, but let\'s try that and see what happens.</p>\n</li>\n</ol>',id:"/Users/Bariotis/Dev/develop/kostasbariotis.com/src/pages/tell-me-about-a-situation-where-you-were-disagreeing-with-other-people-on-the-team/index.md absPath of file >>> MarkdownRemark",timeToRead:1,frontmatter:{date:"2016-11-24T13:47:24.000Z",path:"/tell-me-about-a-situation-where-you-were-disagreeing-with-other-people-on-the-team",tags:null,title:"Tell me about a situation where you were disagreeing with other people on the team",draft:!0}}],page:1,pagesSum:4}}}});
//# sourceMappingURL=path---drafts-page-1-85599ab10eae4f772ce9.js.map
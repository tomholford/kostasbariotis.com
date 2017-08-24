webpackJsonp([0x3326908676ed5e00],{"./node_modules/json-loader/index.js!./.cache/json/drafts-page-1.json":function(n,a){n.exports={data:{site:{siteMetadata:{title:"Kostas Bariotis' Blog",description:"I'm Kostas Bariotis, a web developer, a proud wanderer and a passionate doer. My mission is to write clean and efficient code, to solve problems on the web and to learn something more.",siteUrl:"https://kostasbariotis.com"}}},pathContext:{posts:[{excerpt:"lets talk about over engineering trying to forecast the future e.g. We need an API to support our current 100 customers We need an API to support our current 100 customers plus another 100 that may come in the future",html:"<p>lets talk about over engineering</p>\n<p>trying to forecast the future</p>\n<p>e.g. We need an API to support our current 100 customers</p>\n<p>We need an API to support our current 100 customers plus another 100 that may come in the future</p>",id:"/Users/Bariotis/Dev/develop/kostasbariotis.com/src/pages/a-word-on-over-engineering/index.md absPath of file >>> MarkdownRemark",timeToRead:1,frontmatter:{date:"2017-06-01T00:00:00.000Z",path:"/drafts/a-word-on-over-engineering/",tags:null,title:"A word on over engineering",draft:!0}},{excerpt:"",html:"",id:"/Users/Bariotis/Dev/develop/kostasbariotis.com/src/pages/microservices-lets-talk-about-boundaries/index.md absPath of file >>> MarkdownRemark",timeToRead:1,frontmatter:{date:"2017-03-10T00:00:00.000Z",path:"/drafts/microservices-lets-talk-about-boundaries/",tags:"MicroServices",title:"Microservices: lets talk about boundaries",draft:!0}},{excerpt:"Static site generators are amazing tools, hands down! I love working with  Jekyll  and here are some of the features you are missing if you aren't using one: Deduplication of common code blocks Write you code once, include it everywhere Template...",html:'<p>Static site generators are amazing tools, hands down! I love working with <a href="https://jekyllrb.com/">Jekyll</a> and here are some of the features you are missing if you aren\'t using one:</p>\n<ul>\n<li>Deduplication of common code blocks</li>\n</ul>\n<p>Write you code once, include it everywhere</p>\n<ul>\n<li>Template engine</li>\n</ul>\n<p>You know, for loops, if conditionals, etc</p>\n<ul>\n<li>Separated data stores</li>\n</ul>\n<p>Separation of concerns</p>\n<ul>\n<li>Configuration management</li>\n</ul>\n<p>Generate multiple versions of your site based on the environment or whatever</p>\n<p>I have been using Jekyll for a while now and I have to love it. I wouldn\'t say that it\'s the best since I\'ve never used some other but I would love to hear from someone that has features that are missing from Jekyll.</p>\n<p>So on this blog, I would like to present you with my minimal Jekyll configuration that I use on every site I work with. It has the form of a tutorial, so either follows steps below or grab directly the code from GitHub and start coding.</p>\n<h2>Generate a new site</h2>\n<p>Start by generating a new Jekyll project. Download and install <code>ruby</code>.</p>\n<p><code>jekyll new .</code></p>\n<h2>File and folders structure</h2>\n<p>At first, you will notice that there is no markup at all. By default, Jekyll uses a theme that hides all that from you. But we need to inject our custom markup. Let\'s first remove the line <code>theme: minima</code> from _config.yml.</p>\n<p>You will also notice a <code>_posts</code> folder with an example blog post inside. Let\'s not spend time on that. Maybe in another post. Delete the whole folder.</p>\n<p>Now, open <code>about.md</code> and <code>index.md</code>. Those are the main pages of our site the index page and the about page. Every file you put there, Jekyll will generate a new page with that page in that path.</p>\n<p>About\'s page content:</p>\n<div class="gatsby-highlight">\n      <pre class="language-yaml"><code><span class="token punctuation">---</span>\n<span class="token key atrule">layout</span><span class="token punctuation">:</span> page\n<span class="token key atrule">title</span><span class="token punctuation">:</span> <span class="token string">"About"</span>\n<span class="token key atrule">permalink</span><span class="token punctuation">:</span> /about/\n<span class="token punctuation">---</span>\n</code></pre>\n      </div>\n<p>Now, this is Jekyll\'s frontmatter. We are requesting here this page to be generated with the default layout, have that specific title and be the <code>index.html</code> in the root directory. Jekyll will either copy paste every HTML file as is inside the final folder or will generate HTML files as told. This is what we do here, we are instructing Jekyll to generate an <code>index.html</code> file in the root directory.</p>\n<p>Index page uses the home layout. But what are these layouts? Glad you finally asked. Those layouts were being hidden again by the default time. Let\'s write our own. Let\'s have one for start. Create the <code>_layouts/default.html</code> file and put inside:</p>\n<div class="gatsby-highlight">\n      <pre class="language-xml"><code><span class="token doctype">&lt;!DOCTYPE html></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>en<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>UTF-8<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>viewport<span class="token punctuation">"</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>width<span class="token punctuation">=</span>device-width, initial-scale<span class="token punctuation">=</span>1.0<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">http-equiv</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>X-UA-Compatible<span class="token punctuation">"</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>ie<span class="token punctuation">=</span>edge<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">></span></span>Document<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span>\n{{ content }}\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">></span></span>\n</code></pre>\n      </div>\n<p>This is a basic HTML structure with the <code>{{content}}</code> directive. This directive will render everything from a page that has extend that layout.</p>\n<p>Great! Now we have a layout as well. I don\'t like HTML files laying around at the root directory. Let\'s have a separate folder for our pages. Create a <code>pages</code> folder in the root directory. The underscore demotes that this folder will be processed by Jekyll. Now we need an index page. Create an <code>index</code> folder inside <code>_pages</code> with an index.html file inside. Put inside the below snippet:</p>\n<div class="gatsby-highlight">\n      <pre class="language-yaml"><code><span class="token punctuation">---</span>\n<span class="token key atrule">layout</span><span class="token punctuation">:</span> default\n<span class="token key atrule">title</span><span class="token punctuation">:</span> <span class="token string">"WOW Jekyll"</span>\n<span class="token key atrule">permalink</span><span class="token punctuation">:</span> index.html\n<span class="token punctuation">---</span>\n&lt;h1<span class="token punctuation">></span>Hello world&lt;/h1<span class="token punctuation">></span>\n</code></pre>\n      </div>\n<p>Do the same for the about page. This way, we will keep only configuration files in the root directory and have our content in respective folders.</p>\n<p>Let\'s proceed with the 404 page. Same thing, create a <code>pages/404/index.html</code> with contents:</p>\n<div class="gatsby-highlight">\n      <pre class="language-yaml"><code><span class="token punctuation">---</span>\n<span class="token key atrule">layout</span><span class="token punctuation">:</span> default\n<span class="token key atrule">title</span><span class="token punctuation">:</span> <span class="token string">"404 Not Found"</span>\n<span class="token key atrule">permalink</span><span class="token punctuation">:</span> 404.html\n<span class="token punctuation">---</span>\n&lt;h1<span class="token punctuation">></span>Not found&lt;/h1<span class="token punctuation">></span>\n</code></pre>\n      </div>\n<p>And here\'s our 404 page that our HTTP server will server whenever doesn\'t find a corresponding route.</p>\n<p>Fire <code>jekyll serve</code> and open the displayed link in your browser. You will see our index page.</p>\n<p>Go to an undefined route and you will see our 404 page.</p>\n<h2>Webpack integration</h2>\n<p>Now that we have our basic file structure, we need a way to handle our frontend assets. I am using NPM for my JS dependencies. Same with CSS dependencies plus the SASS preprocessor. Let\'s first, create a folder to put all these there. Create a <code>_sources</code> folder and <code>js</code> and <code>sass</code> folders inside.</p>\n<p>Let\'s first initialize NPM.</p>\n<p><code>npm init</code></p>\n<p>follow the instructions until you are finished.</p>\n<p>Proceed with installing webpack and it\'s dependencies.</p>\n<p><code>npm i --save webpack style-loader file-loader extract-text-webpack-plugin css-loader postcss-loader webpack-dev-server sass-loader node-sass webpack</code></p>\n<p>Now let\'s install Bootstrap.</p>\n<p><code>npm i --save bootstrap-sass</code></p>\n<p>We are going to use a few Bootstrap\'s core modules like the typography and the grid. I am not going to use Bootstrap\'s JS modules since they require jQuery.</p>\n<p>We will use <code>webpack</code> to process the files from that folder and put them inside <code>assets</code> folder. Jekyll will copy that folder inside the final build.</p>\n<p>Create an <code>webpack.config.js</code> to the root directory. Put there the contents:</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code><span class="token keyword">const</span> webpack <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'webpack\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> ExtractTextPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'extract-text-webpack-plugin\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'path\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\nmodule<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  entry<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    main<span class="token punctuation">:</span> <span class="token template-string"><span class="token string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>__dirname<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">/source/sass/main.scss`</span></span><span class="token punctuation">,</span>\n    <span class="token string">\'index-page\'</span><span class="token punctuation">:</span> <span class="token template-string"><span class="token string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>__dirname<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">/source/js/index-page.js`</span></span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  output<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    path<span class="token punctuation">:</span> <span class="token string">"/path.join(__dirname, ../static/\'),"</span>\n    publicpath<span class="token punctuation">:</span> <span class="token string">"/\'/\',"</span>\n    filename<span class="token punctuation">:</span> <span class="token string">\'js/[name].js\'</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  module<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    loaders<span class="token punctuation">:</span> <span class="token punctuation">[</span>\n      <span class="token punctuation">{</span>\n        test<span class="token punctuation">:</span> <span class="token regex">/\\.scss$/</span><span class="token punctuation">,</span>\n        loader<span class="token punctuation">:</span> ExtractTextPlugin<span class="token punctuation">.</span><span class="token function">extract</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n          fallback<span class="token punctuation">:</span> <span class="token string">\'style-loader\'</span><span class="token punctuation">,</span>\n          use<span class="token punctuation">:</span> <span class="token punctuation">[</span>\n            <span class="token punctuation">{</span>\n              loader<span class="token punctuation">:</span> <span class="token string">\'css-loader\'</span><span class="token punctuation">,</span>\n              options<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n                sourceMap<span class="token punctuation">:</span> <span class="token boolean">true</span>\n              <span class="token punctuation">}</span>\n            <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>\n              loader<span class="token punctuation">:</span> <span class="token string">\'postcss-loader\'</span><span class="token punctuation">,</span>\n              options<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n                sourceMap<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n                plugins<span class="token punctuation">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n                  <span class="token keyword">return</span> <span class="token punctuation">[</span>\n                    <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'precss\'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n                    <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'autoprefixer\'</span><span class="token punctuation">)</span>\n                  <span class="token punctuation">]</span><span class="token punctuation">;</span>\n                <span class="token punctuation">}</span>\n              <span class="token punctuation">}</span>\n            <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>\n              loader<span class="token punctuation">:</span> <span class="token string">\'sass-loader\'</span><span class="token punctuation">,</span>\n              options<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n                sourceMap<span class="token punctuation">:</span> <span class="token boolean">true</span>\n              <span class="token punctuation">}</span>\n            <span class="token punctuation">}</span>\n          <span class="token punctuation">]</span>\n        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n        include<span class="token punctuation">:</span> <span class="token template-string"><span class="token string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>__dirname<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">/source/sass`</span></span><span class="token punctuation">,</span>\n      <span class="token punctuation">}</span>\n    <span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  plugins<span class="token punctuation">:</span> <span class="token punctuation">[</span>\n    <span class="token keyword">new</span> <span class="token class-name">ExtractTextPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n      filename<span class="token punctuation">:</span> <span class="token string">\'css/style.css\'</span><span class="token punctuation">,</span>\n      allChunks<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span>\n  <span class="token punctuation">]</span><span class="token punctuation">,</span>\n  devtool<span class="token punctuation">:</span> <span class="token string">\'eval-cheap-module-source-map\'</span><span class="token punctuation">,</span>\n  devServer<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    inline<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n    proxy<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n      <span class="token string">"**"</span><span class="token punctuation">:</span> <span class="token string">"http://localhost:4000"</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    host<span class="token punctuation">:</span> <span class="token string">\'0.0.0.0\'</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>So webpack will process our main <code>scss</code> file and put it into <code>assets/css/style.css</code>. Jekyll will be able to grab it from there. Also, JS files will be processed, be bundled and put into <code>assets/js</code> as a separate file for each of our pages.</p>\n<p>Last, we have enabled <code>webpack-dev-server</code> and make it a proxy to Jekyll\'s host and port. So, in order to use it and have all the good stuff like Hot module replacement we will use that server on development.</p>\n<p>All we need now is to include them into our layout file.</p>\n<div class="gatsby-highlight">\n      <pre class="language-html"><code><span class="token doctype">&lt;!DOCTYPE html></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>en<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>UTF-8<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>viewport<span class="token punctuation">"</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>width<span class="token punctuation">=</span>device-width, initial-scale<span class="token punctuation">=</span>1.0<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">http-equiv</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>X-UA-Compatible<span class="token punctuation">"</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>ie<span class="token punctuation">=</span>edge<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">></span></span>{{page.title || site.title}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">></span></span>\n  &lt;link rel="stylesheet" href../static/css/main.css">\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span>\n{{ content }}\n&lt;script src../static/js/entry.js"><span class="token script language-javascript"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">></span></span>\n</code></pre>\n      </div>\n<p>Fire up webpack\'s dev server:</p>\n<p><code>./node_modules/.bin/webpack-dev-server --inline --hot</code></p>\n<h2>NPM Scripts</h2>\n<p>Now that everything is in place, we want to take advantage of webpack\'s cool dev features like hot module replacement, etc. To do this we need</p>\n<h2>Deployment</h2>',id:"/Users/Bariotis/Dev/develop/kostasbariotis.com/src/pages/Jekyll + webpack = ❤️/index.md absPath of file >>> MarkdownRemark",timeToRead:5,frontmatter:{date:"2017-02-25T00:00:00.000Z",path:"/drafts/jekyll-webpack/",tags:null,title:"Jekyll + webpack = ❤️",draft:!0}},{excerpt:"Aw man! What a year! So many great experiences, so many mixed feelings! 2016 was full of retrospective meetings. Why not make one for my-self and for the year past. I did set a few goals  last year . What I did Travel more I visited Bucharest...",html:"<p>Aw man! What a year! So many great experiences, so many mixed feelings!</p>\n<p>2016 was full of retrospective meetings. Why not make one for my-self and for the year past. I did set a few goals <a href=\"https://kostasbariotis.com/beyond-sunset/\">last year</a>.</p>\n<h1>What I did</h1>\n<ul>\n<li>Travel more</li>\n</ul>\n<p>I visited Bucharest, Romania in June for <a href=\"https://jscamp.ro\">jscamp.ro</a>. Didn't have the time to walk around a lot so I will get there again in any chance given to me. Also, visited Paris for the dotJS/dotCSS conferences. What a magnificent event!</p>\n<ul>\n<li>Read/Write more</li>\n</ul>\n<p>Nah, I can't say I'm satisfied with this one. I was watching a lot of blogs and I was reading Medium a lot. Didn't read all the books I wanted to read. I enjoyed Big Brother and The man and the see. I started Aurelia but never finished it. Zero to One was a great read as expected. Started Lean Analytics a few weeks ago.</p>\n<p>But, I did start a podcast! [http://devastation.tv] started back in February and it's single purpose is learn a lot more and share those learning with my fellow greeks. Much like writing tech blogs posts!</p>\n<p><a href=\"https://kostasbariotis.com/data-migration-with-nodejs/\">\"Data Migrations with Node.js\"</a> was my most ridden piece this year.</p>\n<ul>\n<li>Stay fit</li>\n</ul>\n<p>I did a lot of running and I did notice a lot of improvement over the previous years. I didn't manage to make it my priority and a formal habit though. I still have to convince myself in order to get out of the building and go running. Still room for improvements here.</p>\n<ul>\n<li>Speak to a big conference</li>\n</ul>\n<p>Does being listed in a <a href=\"http://2016.bulgariawebsummit.com/\">big conference's speaker</a> list as a speaker counts for this one? I did manage to get on that list but never made it to the conference. Everything was setup (thank you Bogo for you support, sorry for the mess) perfectly, there were two days left for the conference and I was about to travel by car the next day, until borders closed by Greek truck drivers riots. All three roads that could lead me to Sofia from Thessaloniki were closed. Airlines also do not favor Thessaloniki and I had to fly to Athens in order to land to Sofia. I was very disappointed with this one.</p>\n<p>Nevertheless, I did fly to Athens mid-December to give a talk at GreeceJS, the biggest Javascript meetup in Athens. It was a great experience, met a lof of new people there. <em>Photos soon to come</em></p>\n<p>2016 was also hiding a few other surprises. I left Goodvidio a month ago and now I am in the process of getting a new job. It has been 18 amazing months, full startup mode! Met some brilliant and wonderful guys over there. I am going to miss them for sure.</p>\n<h1>Where to go next</h1>\n<p>So, what's on for 2017? Well, I won't include the travel/read/speak/write thing! I want those to be parts of my life but I don't want to keep track of them. I will try this year too and even harder.</p>\n<p>I will try to put a single goal for this year. I have been amazed by Universal Javascript trend that hit the since last year. I think 2017 will be a great year for Isomorphic applications along with progressive apps guidelines. I want this year to get my hands into and build myself an app that will follow all those principles.</p>\n<p>That's my goal for 2017!</p>",id:"/Users/Bariotis/Dev/develop/kostasbariotis.com/src/pages/and-another-end/index.md absPath of file >>> MarkdownRemark",timeToRead:2,frontmatter:{date:"2016-12-25T00:00:00.000Z",path:"/drafts/and-another-end/",tags:null,title:"And another end",draft:!0}},{excerpt:"Knowing how to communicate effectively\nvalid arguments\npoints\nknow what your talkign about\ndo your homework/research\nwant to go deeper? fallacies  http://www.nobeliefs.com/fallacies.htm Not everything is about you. Everything is about the team...",html:'<ol>\n<li>\n<p>Knowing how to communicate effectively\nvalid arguments\npoints\nknow what your talkign about\ndo your homework/research\nwant to go deeper? fallacies <a href="http://www.nobeliefs.com/fallacies.htm">http://www.nobeliefs.com/fallacies.htm</a></p>\n</li>\n<li>\n<p>Not everything is about you. Everything is about the team. Disagreeing will only slow the whole team down.\nKnow when to hold back. When to say, you know what, I do disagree with all of you, but let\'s try that and see what happens.</p>\n</li>\n</ol>',id:"/Users/Bariotis/Dev/develop/kostasbariotis.com/src/pages/tell-me-about-a-situation-where-you-were-disagreeing-with-other-people-on-the-team/index.md absPath of file >>> MarkdownRemark",timeToRead:1,frontmatter:{date:"2016-11-24T13:47:24.000Z",path:"/drafts/tell-me-about-a-situation-where-you-were-disagreeing-with-other-people-on-the-team/",tags:null,title:"Tell me about a situation where you were disagreeing with other people on the team",draft:!0}}],page:1,pagesSum:4,prevPath:null,nextPath:"/drafts/page/2"}}}});
//# sourceMappingURL=path---drafts-page-1-d86d3027012f359877d4.js.map
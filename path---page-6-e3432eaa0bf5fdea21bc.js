webpackJsonp([106],{"./node_modules/json-loader/index.js!./.cache/json/page-6.json":function(e,n){e.exports={data:{site:{siteMetadata:{title:"Kostas Bariotis' Blog",description:"I'm Kostas Bariotis, a web developer, a proud wanderer and a passionate doer. My mission is to write clean and efficient code, to solve problems on the web and to learn something more.",siteUrl:"https://kostasbariotis.com"}}},pathContext:{posts:[{excerpt:"Today I lost a few hours trying to understand why a document that I was fetching through Mongoose, kept returning true against checking for a field with the   operator, even though the document didn't contain that field. But still it would return...",html:'<p>Today I lost a few hours trying to understand why a document that I was fetching through Mongoose, kept returning true against checking for a field with the <code>in</code> operator, even though the document didn\'t contain that field.</p>\n<p>But still it would return true:</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code><span class="token keyword">var</span> mongoose <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'mongoose\'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n  Schema <span class="token operator">=</span> mongoose<span class="token punctuation">.</span>Schema<span class="token punctuation">;</span>\n\n<span class="token keyword">var</span> exampleSchema <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Schema</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  someField<span class="token punctuation">:</span> String<span class="token punctuation">,</span>\n  notExistingField<span class="token punctuation">:</span> String\n<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> versionKey<span class="token punctuation">:</span> <span class="token boolean">false</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment" spellcheck="true">/* We know that this document doesn\'t have the notExistingField in the DB */</span>\nexampleSchema<span class="token punctuation">.</span><span class="token function">findOne</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n    <span class="token string">\'_id\'</span><span class="token punctuation">:</span> id\n  <span class="token punctuation">}</span><span class="token punctuation">)</span>\n    <span class="token punctuation">.</span><span class="token function">exec</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span>err<span class="token punctuation">,</span> document<span class="token punctuation">)</span><span class="token punctuation">{</span>\n\n      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>document<span class="token punctuation">)</span> <span class="token comment" spellcheck="true">/* { someField: \'value\' } */</span>\n      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>document<span class="token punctuation">[</span><span class="token string">\'notExistingField\'</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token comment" spellcheck="true">/* undefined */</span>\n      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'notExistingField\'</span> <span class="token keyword">in</span> document<span class="token punctuation">)</span> <span class="token comment" spellcheck="true">/* true */</span>\n\n    <span class="token punctuation">}</span><span class="token punctuation">)</span>\n</code></pre>\n      </div>\n<p>The fact is that Mongoose will first comply the fetched document against the defined Schema in order for it\'s getters/setters functions to work. So even though, we can\'t see the <code>notExistingField</code>, the <code>in</code> operator will always return true.</p>\n<p>A solution is to change the checking and check for an undefined value, like this:</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code><span class="token comment" spellcheck="true">/* We know that this document doesn\'t have the notExistingField in the DB */</span>\nexampleSchema<span class="token punctuation">.</span><span class="token function">findOne</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n    <span class="token string">\'_id\'</span><span class="token punctuation">:</span> id\n  <span class="token punctuation">}</span><span class="token punctuation">)</span>\n    <span class="token punctuation">.</span><span class="token function">exec</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span>err<span class="token punctuation">,</span> document<span class="token punctuation">)</span><span class="token punctuation">{</span>\n\n      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>document<span class="token punctuation">)</span> <span class="token comment" spellcheck="true">/* { someField: \'value\' } */</span>\n      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>document<span class="token punctuation">[</span><span class="token string">\'notExistingField\'</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token comment" spellcheck="true">/* undefined */</span>\n      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token operator">!</span><span class="token operator">!</span>document<span class="token punctuation">[</span><span class="token string">\'notExistingField\'</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token comment" spellcheck="true">/* false */</span>\n\n    <span class="token punctuation">}</span><span class="token punctuation">)</span>\n</code></pre>\n      </div>\n<p>Fixed.</p>',id:"/Users/Bariotis/Dev/develop/kostasbariotis.com/src/pages/mongoose-objects-and-the-in-operator/index.md absPath of file >>> MarkdownRemark",timeToRead:1,frontmatter:{date:"2015-08-31T17:51:38.000Z",path:"/mongoose-objects-and-the-in-operator",tags:"mongodb, mongoose",title:"Mongoose objects and the IN operator",draft:null}},{excerpt:"Making a discoverable API means thats some software would be able to traverse it, by only providing it's root endpoint. For example, my IDE could provide me all the endpoints, input schemas and responses of Github's API by putting in it's root, that...",html:"<p>Making a discoverable API means thats some software would be able to traverse it, by only providing it's root endpoint. For example, my IDE could provide me all the endpoints, input schemas and responses of Github's API by putting in it's root, that is <code>https://api.github.com</code>.</p>\n<p>This can have some major advantages. Speed would be the absolute greatest, since I don't have to search through documentation and going back and forth their site. Also, in case of an endpoint changes it's name, the software will automatically adopt the new name.</p>\n<p>Now, all these are definitely good, but we don't see that much of API's making themselves discoverable. Why is that? Well, mostly because speed is not that much of an issue, since REST is pretty explanatory it self, you only have a few verbs to respond to, so each API's documentation wouldn't be that much. As for the breaking changes, well putting a Version number in front of each endpoint seems to work pretty good.</p>\n<p>The first thing that comes in mind when talking about discovering web services is Web Services Description Language(WSDL). Before the major adoption of REST principles, people would create APIs in different forms. And so a way to describe them was necessary. That's where WSDL would take action. REST on the other hand is not the same. When we hear an API is REST compliant, we know that uses the common HTTP verbs, can return/accept XML or JSON and respond with the known HTTP statuses codes. That is what REST APIs is all about.</p>\n<p>Nevertheless, I would say that machines that talk to each other, that are indeed able to discover each other's resources, is a tasty subject and I'm pretty sure that we will see it really soon. At the mean time, let's focus on making our APIs usable and understandable with bare eye.</p>\n<p>Here are some references you can use if you want to make your API's discoverable. You can check out these great specs about describing your API through it's responses. I am not sure how these can be widely adopted, but once they do, we should expect it to go big. Never used them, so I am expecting from you. Google's also has looked into this and came out with some really fascinated results, be sure to check them also.</p>\n<p><a href=\"http://micro-api.org/\">http://micro-api.org/</a>\n<a href=\"http://jsonapi.org/\">http://jsonapi.org/</a>\n<a href=\"http://www.odata.org/\">http://www.odata.org/</a>\n<a href=\"https://developers.google.com/discovery/\">https://developers.google.com/discovery/</a></p>",id:"/Users/Bariotis/Dev/develop/kostasbariotis.com/src/pages/making-a-rest-api-discoverable/index.md absPath of file >>> MarkdownRemark",timeToRead:2,frontmatter:{date:"2015-08-24T14:39:27.000Z",path:"/making-a-rest-api-discoverable",tags:"rest, api",title:"Making a REST API discoverable",draft:null}},{excerpt:"You won’t rush an architect. You don’t want to see your house becoming dust at the next earthquake.  You won’t rush your hairdresser. You don’t want to leave that place with one ear. You won’t rush your dentist. You can’t handle the pain. You won’t...",html:"<p>You won’t rush an architect. You don’t want to see your house becoming dust at the next earthquake. </p>\n<p>You won’t rush your hairdresser. You don’t want to leave that place with one ear.</p>\n<p>You won’t rush your dentist. You can’t handle the pain.</p>\n<p>You won’t rush your local restaurant chef. You know good beef takes time to cook.</p>\n<p>You won’t rush your wife to deliver your baby in less than 9 months. Why would you?</p>\n<p>But you will rush your developer to build the next Facebook in 48 hours.</p>\n<p>It makes sense.</p>",id:"/Users/Bariotis/Dev/develop/kostasbariotis.com/src/pages/it-makes-sense/index.md absPath of file >>> MarkdownRemark",timeToRead:1,frontmatter:{date:"2015-07-15T18:38:24.000Z",path:"/it-makes-sense",tags:null,title:"It makes sense",draft:null}},{excerpt:"First, become the best in the room. Then find a room where everyone is better than you. Repeat. I know this piece is like 20 words long but could it be a spark for a great conversation? Leave your comment...",html:"<ul>\n<li>First, become the best in the room.</li>\n<li>Then find a room where everyone is better than you.</li>\n<li>Repeat.</li>\n</ul>\n<p>I know this piece is like 20 words long but could it be a spark for a great conversation?</p>\n<p>Leave your comment...</p>",id:"/Users/Bariotis/Dev/develop/kostasbariotis.com/src/pages/are-you-the-best-in-the-room/index.md absPath of file >>> MarkdownRemark",timeToRead:1,frontmatter:{date:"2015-07-11T15:07:57.000Z",path:"/are-you-the-best-in-the-room",tags:null,title:"Are you the best in the room?",draft:null}},{excerpt:"A common pitfall when comes to development teams is the inconsistent software and library versions across developers. The first time you install a Node.js dependency by  , the latest version of that package, will be installed along with the npm's...",html:"<p>A common pitfall when comes to development teams is the inconsistent software and library versions across developers.</p>\n<p>The first time you install a Node.js dependency by <code>npm install --save</code>, the latest version of that package, will be installed along with the npm's default <a href=\"https://docs.npmjs.com/misc/config#save-prefix\">save prefix (^)</a>. The '^' allows npm to auto install minor upgrades for this package, according to the <a href=\"http://semver.org/\">semver schema</a>.</p>\n<p>Because of that, it's hard to guarantee that every developer in the team will have the same version and this creates problems. It can really save your day, when two different people on the same codebase gets different results on an predefined procedure and the cause is a breaking change on a package that got updated.</p>\n<p>So what we do? There are a few ways you can pass this:</p>\n<h3>Reset the default <code>--save-prefix</code>.</h3>\n<p>By running <code>npm config set save-prefix=''</code> you're overriding npm's default <a href=\"https://docs.npmjs.com/misc/config#save-prefix\">save-prefix</a> value which is <code>^</code>. Now every package you install will be locked on it's current version and every person that runs <code>npm install</code> will get that version.</p>\n<p>This can also introduce outdated packages, so make sure that you keep an eye on your dependencies for critical updates that you don't want to miss. You can also take advantage of the npm's <a href=\"https://docs.npmjs.com/cli/outdated\">outdated command</a> that will check every package and report back for outdated packages.</p>\n<p>Consider also keeping this setting in your <a href=\"https://docs.npmjs.com/files/npmrc\"><code>.npmrc</code></a> file, to not force every developer to set it explicitly on his/her machine.</p>\n<h3>shrinkwrap</h3>\n<p>npm's <a href=\"https://docs.npmjs.com/cli/shrinkwrap\">shrinkwrap</a> is also a handy way to lock your versions across your team. By running <code>npm shrinkwrap</code>, a <code>shrinkwrap.json</code> file will be created at the root of your repo with the current versions  of your dependencies that are install at the moment and their dependencies.</p>\n<p>With <code>shrinkwrap</code> you get the exact same dependencies tree across and not worry about breaking updates. <code>npm install</code> will respect a <code>shrinkwrap.json</code> file if it finds but it must also agrees with the current <code>package.json</code> file, so expect errors if those two files are not align.</p>\n<p><code>shinkwrap</code> is the most safe way of locking your dependencies versions and still keeping them out of your repo, which brings me to the third and final option.</p>\n<h3>Keep Your Dependencies Under Version Control</h3>\n<p>This method is widely used, especially when maximum security is required. It's a proven method that keeps not only locked versions but code content too, so you don't worry if a malicious piece of code find it's way inside your favorite open source dependencies.</p>\n<p>Be careful though, cause your repo will increase in size really quick. In case of a dependency that needs to be compiled (e.g. by <a href=\"https://github.com/TooTallNate/node-gyp\">node-gyp</a>) the source code is usually really big, so be careful on that.</p>\n<p>The npm guys have also a <a href=\"https://docs.npmjs.com/cli/shrinkwrap#caveats\">few words</a> on this.</p>\n<h2>Not a Node.js Fan</h2>\n<p>In case that you aren't really into Node.js but you still reading this piece (big ups man!!), I shall inform you that these techniques aren't new either have been introduced by the Node.js community for the first time.</p>\n<p>PHP's Composer keeps a <a href=\"https://getcomposer.org/doc/01-basic-usage.md#composer-lock-the-lock-file\">composer.lock</a> file that locks the current installed versions and Ruby's Bundler has a Gemfile.lock file. Same goes for other systems.</p>\n<p>So, do your homework and find your PM's way of handling this kind of life saver functionality.</p>\n<h2>A Final Word</h2>\n<p>Dependencies of a codebase is an every day process and can easily lead to few hours of bug hunting. Make sure to save those hours.</p>\n<p>But, sooner or later, your team's inner policies will fail and this is ok, as soon as you understand the causes, you fix them and move. Move faster every time. Like a <a href=\"http://www.c25k.com/\">c25k</a> training. ;)</p>\n<p>What's your preferred way of handling dependencies versions?</p>",id:"/Users/Bariotis/Dev/develop/kostasbariotis.com/src/pages/consistent-dependencies-across-teams/index.md absPath of file >>> MarkdownRemark",timeToRead:3,frontmatter:{date:"2015-06-26T18:29:20.000Z",path:"/consistent-dependencies-across-teams",tags:"npm, shrinkwrap, team, node.js",title:"Consistent dependencies across teams",draft:null}}],page:6,pagesSum:14,prevPath:"/page/5",nextPath:"/page/7"}}}});
//# sourceMappingURL=path---page-6-e3432eaa0bf5fdea21bc.js.map
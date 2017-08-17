webpackJsonp([95],{"./node_modules/json-loader/index.js!./.cache/json/scaling-your-team.json":function(n,e){n.exports={data:{site:{siteMetadata:{title:"Kostas Bariotis' Blog",description:"I'm Kostas Bariotis, a web developer, a proud wanderer and a passionate doer. My mission is to write clean and efficient code, to solve problems on the web and to learn something more.",siteUrl:"https://kostasbariotis.com"}},markdownRemark:{html:"<p>Fortunately, I have been lucky enough to work with a lot of dev teams. <a href=\"http://www.lifehack.org/articles/work/10-signs-you-are-working-happy-workplace.html\">Good</a> and bad.</p>\n<p>I've seen teams with a sickness so deeply in their DNA that they were doomed to fail. I've also seen teams that gets <a href=\"http://www.leadertoleaderjournal.com/sample-articles/the-importance-of-happiness-in-the-workplace.aspx\">you up in the morning</a> while looking forward to meet your colleagues.</p>\n<p>But that team that keeps you in being that place and continue working with them, didn't happen accidentally. Someone created it. This is my list for a happy and efficient development team. Cause these two are tied together and evolving along side.</p>\n<h3>Coding Style Guide</h3>\n<p>is the new RFC. Force everyone to <a href=\"https://github.com/airbnb/javascript\">be in the same page</a>. As in every other social team, so and your team must <a href=\"https://github.com/google/styleguide\">meet rules</a> and follow them for the common good.</p>\n<p>Everyone should write the same code. Otherwise, you'll end up with a huge code base that no one can understand, leave aside to scale it.</p>\n<h3>Git &#x26;  Git flow</h3>\n<p>or <a href=\"http://nvie.com/posts/a-successful-git-branching-model/\">in other words</a>. Now, this is the first and the last time I'm talking about this. If you don't keep your code under some kind of version control, there is nothing much left for you.</p>\n<p>Version controlling your code means that you keep history of every file change, every line addition and deletion. Jumping from the present to a certain point of past, that you know your code was working will save you tone of hours of frustration and money.</p>\n<h3>Dev Environments</h3>\n<p>that simulates the live project. You make changes to the live site? No, it's not normal. No, no one does this any more. What it takes to be able to deliver the best to our clients? Is to test it for them, before them.</p>\n<p>Make sure you can make a change to your project, or a replica of it, and be able to reproduce any sort of abnormality you can before it goes live.</p>\n<h3>Automation</h3>\n<p>is key. He/She who has ever worked at a fast grown company, knows that speed is priority. But keep doing the same process over and over again  can't be efficient. Find those processes. Automate them. Out source them. Hire people to do them and get back to your work.</p>\n<h3>Tasks Assignment &#x26; Prioritisation</h3>\n<p>that are visible by everyone, Making sure everyone knows what it has to be done. Most of the times, team will stay in idle state when they don't know what to do. Talks should be clear to everyone and allow them to do work for a given time before new tasks arrive and reassigned. Those tasks should be sorted by criticality - prioritisation should be respected.</p>\n<h3>Responsibilities</h3>\n<p>must be clear to everyone. Have you ever been in a situation where the manager asks why something happened and everyone in the team is looking each other? I know, it sucks. But clearly, there weren't no responsibilities. Keeping responsibilities clear means that everyone knows when it's time to stand up and take the response. So, the team can learn and continue.</p>\n<h3>Document Everything</h3>\n<p>because no one can guarantee you a job for ever like no manager can guarantee a team that would stay the same for ever. Documenting means that while the faces in team changes, the work can continue. Each new person coming can immediately  get in track and continue the task the someone left unfinished.</p>\n<h2>Finally</h2>\n<p>I would say that, when you're joining a team, you can't simply wait everyone to be as you would like to be. You may have to put a little something in the mix. Teams are not born perfect. It's the everyday inside process that will eventually mature and fill with wisdom the people behind. A perfect recipe to scale your team.</p>",excerpt:"Fortunately, I have been lucky enough to work with a lot of dev teams.  Good  and bad. I've seen teams with a sickness so deeply in their...",frontmatter:{date:"September 10, 2015",path:"/scaling-your-team/",tags:"team, dev, scale, workplace",title:"Be prepared to scale your team",draft:null}}},pathContext:{prev:{excerpt:"There is no way, by default, to ensure that your Javascript Object you passed into a function will stay as is nevertheless. And that creates a problem and a lot of side effects. To avoid this common pitfall we create immutable objects, those that no...",html:'<p>There is no way, by default, to ensure that your Javascript Object you passed into a function will stay as is nevertheless. And that creates a problem and a lot of side effects.</p>\n<p>To avoid this common pitfall we create immutable objects, those that no one can change during the app\'s lifecycle. By default, all Javascript types, except objects, define immutable values.</p>\n<p>Have you ever tried to alter an object, say to delete a property, but you couldn\'t? Say to delete a Mongoose document\'s property? Mongoose documents are immutable and their properties can\'t be alter in any way, except of altering their actual values that they\'re holding.</p>\n<h3>Cloning objects in Javascript</h3>\n<p>So what do we do when we need to alter them? We clone them.</p>\n<p>The most easy way to clone an object is the simple hack:</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code><span class="token keyword">var</span> object <span class="token operator">=</span> <span class="token punctuation">{</span> firstname<span class="token punctuation">:</span> <span class="token string">\'Kostas\'</span><span class="token punctuation">,</span> lastname<span class="token punctuation">:</span> <span class="token string">\'Bariotis\'</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n<span class="token keyword">var</span> clone <span class="token operator">=</span> JSON<span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span>JSON<span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>object<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>That hack have been always working for me and I\'m using in every chance I\'ve got.</p>\n<p>For Node.js/jQuery users there are also the appropriate <code>extend</code> methods:</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code><span class="token keyword">var</span> extend <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'util\'</span><span class="token punctuation">)</span><span class="token punctuation">.</span>_extend<span class="token punctuation">;</span>\n<span class="token keyword">var</span> clone <span class="token operator">=</span> <span class="token function">extend</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> object<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code><span class="token keyword">var</span> clone <span class="token operator">=</span> jQuery<span class="token punctuation">.</span><span class="token function">extend</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> object<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>There is also <a href="http://stackoverflow.com/a/728694/1955940">this</a> answer that covers a generic <code>clone</code> functionality.</p>\n<h3>Create immutable Javascript objects</h3>\n<p>There are two ways:</p>\n<ol>\n<li>\n<p><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty">Object.definePropety()</a>\nUsing Javascript\'s <code>defineProperty</code> we can create non configurable and/or hidden properties inside objects. This way we can be sure that a developer can\'t mess with our code or hide from them info about our structures that they don\'t have to know about. <strong><code>defineProperty</code> won\'t throw an error while you\'re trying to alter the object\'s properties and this can really be a PITA.</strong></p>\n</li>\n<li>\n<p><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty">Object.freeze()</a> / <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/seal">Object.seal()</a>\n<code>freeze</code> and <code>seal</code> are basically shorthands for the <code>defineProperty</code> and can both come in handy. Make sure that their compatibility tables meet your needs before you use them. <strong>Will throw an error and will save you hours of frustration.</strong></p>\n</li>\n</ol>\n<h2>The End</h2>\n<p>Next time you are writing a Javascript module and you are exposing objects that other developers may use, make sure that they have the exact needed permissions to alter your objects, otherwise they may broke your code without even realising it. Make sure also to document it.</p>',id:"/Users/Bariotis/Dev/develop/kostasbariotis.com/src/pages/immutable-objects-javascript/index.md absPath of file >>> MarkdownRemark",timeToRead:2,frontmatter:{date:"2015-09-14T13:51:58.000Z",path:"/immutable-objects-javascript/",tags:"javascript, node.js",title:"Immutable Objects with Javascript",draft:null}},next:{excerpt:"Today I lost a few hours trying to understand why a document that I was fetching through Mongoose, kept returning true against checking for a field with the   operator, even though the document didn't contain that field. But still it would return...",html:'<p>Today I lost a few hours trying to understand why a document that I was fetching through Mongoose, kept returning true against checking for a field with the <code>in</code> operator, even though the document didn\'t contain that field.</p>\n<p>But still it would return true:</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code><span class="token keyword">var</span> mongoose <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'mongoose\'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n  Schema <span class="token operator">=</span> mongoose<span class="token punctuation">.</span>Schema<span class="token punctuation">;</span>\n\n<span class="token keyword">var</span> exampleSchema <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Schema</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  someField<span class="token punctuation">:</span> String<span class="token punctuation">,</span>\n  notExistingField<span class="token punctuation">:</span> String\n<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> versionKey<span class="token punctuation">:</span> <span class="token boolean">false</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment" spellcheck="true">/* We know that this document doesn\'t have the notExistingField in the DB */</span>\nexampleSchema<span class="token punctuation">.</span><span class="token function">findOne</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n    <span class="token string">\'_id\'</span><span class="token punctuation">:</span> id\n  <span class="token punctuation">}</span><span class="token punctuation">)</span>\n    <span class="token punctuation">.</span><span class="token function">exec</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span>err<span class="token punctuation">,</span> document<span class="token punctuation">)</span><span class="token punctuation">{</span>\n\n      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>document<span class="token punctuation">)</span> <span class="token comment" spellcheck="true">/* { someField: \'value\' } */</span>\n      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>document<span class="token punctuation">[</span><span class="token string">\'notExistingField\'</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token comment" spellcheck="true">/* undefined */</span>\n      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'notExistingField\'</span> <span class="token keyword">in</span> document<span class="token punctuation">)</span> <span class="token comment" spellcheck="true">/* true */</span>\n\n    <span class="token punctuation">}</span><span class="token punctuation">)</span>\n</code></pre>\n      </div>\n<p>The fact is that Mongoose will first comply the fetched document against the defined Schema in order for it\'s getters/setters functions to work. So even though, we can\'t see the <code>notExistingField</code>, the <code>in</code> operator will always return true.</p>\n<p>A solution is to change the checking and check for an undefined value, like this:</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code><span class="token comment" spellcheck="true">/* We know that this document doesn\'t have the notExistingField in the DB */</span>\nexampleSchema<span class="token punctuation">.</span><span class="token function">findOne</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n    <span class="token string">\'_id\'</span><span class="token punctuation">:</span> id\n  <span class="token punctuation">}</span><span class="token punctuation">)</span>\n    <span class="token punctuation">.</span><span class="token function">exec</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span>err<span class="token punctuation">,</span> document<span class="token punctuation">)</span><span class="token punctuation">{</span>\n\n      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>document<span class="token punctuation">)</span> <span class="token comment" spellcheck="true">/* { someField: \'value\' } */</span>\n      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>document<span class="token punctuation">[</span><span class="token string">\'notExistingField\'</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token comment" spellcheck="true">/* undefined */</span>\n      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token operator">!</span><span class="token operator">!</span>document<span class="token punctuation">[</span><span class="token string">\'notExistingField\'</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token comment" spellcheck="true">/* false */</span>\n\n    <span class="token punctuation">}</span><span class="token punctuation">)</span>\n</code></pre>\n      </div>\n<p>Fixed.</p>',id:"/Users/Bariotis/Dev/develop/kostasbariotis.com/src/pages/mongoose-objects-and-the-in-operator/index.md absPath of file >>> MarkdownRemark",timeToRead:1,frontmatter:{date:"2015-08-31T17:51:38.000Z",path:"/mongoose-objects-and-the-in-operator/",tags:"mongodb, mongoose",title:"Mongoose objects and the IN operator",draft:null}}}}}});
//# sourceMappingURL=path---scaling-your-team-54d4a11dc3a6d7b39030.js.map
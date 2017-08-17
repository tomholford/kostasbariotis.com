webpackJsonp([98],{"./node_modules/json-loader/index.js!./.cache/json/removeeventlistener-and-this.json":function(n,a){n.exports={data:{site:{siteMetadata:{title:"Kostas Bariotis' Blog",description:"I'm Kostas Bariotis, a web developer, a proud wanderer and a passionate doer. My mission is to write clean and efficient code, to solve problems on the web and to learn something more.",siteUrl:"https://kostasbariotis.com"}},markdownRemark:{html:'<p>Have you ever tried to call <code>removeEventListener</code> on a previously attached element and couldn\'t remove it? Did you maybe try to pass a function to <code>addEventListener</code> that is bound to another context?</p>\n<p>The context of the callback that we are passing to <code>addEventListener</code> is the same as the event.currentTarget when is being called. The problem is that when we bind the callback to another object, we can\'t remove it afterward.</p>\n<p>Lets see an example:</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code><span class="token keyword">let</span> element <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">\'button\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">let</span> callback <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  console<span class="token punctuation">.</span><span class="token function">assert</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span>currentTarget <span class="token operator">===</span> <span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\nelement<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">\'click\'</span><span class="token punctuation">,</span> callback<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\nelement<span class="token punctuation">.</span><span class="token function">dispatchEvent</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Event</span><span class="token punctuation">(</span><span class="token string">\'click\'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>In the example above, the assertion inside the callback is always going to be true. Great? Great. But that\'s not the case. Consider something like this:</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code><span class="token keyword">let</span> Button <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">this</span><span class="token punctuation">.</span>el <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">\'button\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">addEvents</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\nButton<span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>addEvents <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">this</span><span class="token punctuation">.</span>el<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">\'click\'</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>clickHandler<span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\nButton<span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>clickHandler <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token comment" spellcheck="true">/* do something with this */</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>Great! I am trying to model my Button element and I need the event handlers to bind to the model itself.</p>\n<p>Now let\'s try to remove the attached handler.</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code><span class="token keyword">let</span> Button <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\n  <span class="token keyword">this</span><span class="token punctuation">.</span>el <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">\'button\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">addEvents</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\nButton<span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>addEvents <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">this</span><span class="token punctuation">.</span>el<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">\'click\'</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>clickHandler<span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\nButton<span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>removeEvents <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">this</span><span class="token punctuation">.</span>el<span class="token punctuation">.</span><span class="token function">removeEventListener</span><span class="token punctuation">(</span><span class="token string">\'click\'</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>clickHandler<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\nButton<span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>clickHandler <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token comment" spellcheck="true">/* do something with this */</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>The above won\'t work. Meaning that the <code>removeEventListener</code> won\'t actually remove the attached event handler. It will simply skip it. (And certainly if we bind again at the <code>removeEventListener</code> won\'t work). See, bind returns always a new function while <code>removeEventListener</code> and <code>addEventListener</code> second parameter must refer to the same function object.</p>\n<p>So what do we do when we need to remove our attached event handlers at some point at runtime? Meet <code>handleEvent</code>, the default function that JavaScript looks for when tries to find a handler that has been attached to an event.</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code><span class="token keyword">let</span> Button <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\n  <span class="token keyword">this</span><span class="token punctuation">.</span>el <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">\'button\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">addEvents</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\nButton<span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>addEvents <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">this</span><span class="token punctuation">.</span>el<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">\'click\'</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\nButton<span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>removeEvents <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">this</span><span class="token punctuation">.</span>el<span class="token punctuation">.</span><span class="token function">removeEventListener</span><span class="token punctuation">(</span><span class="token string">\'click\'</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\nButton<span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>handleEvent <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">switch</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span>type<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">case</span> <span class="token string">\'click\'</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>\n     <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">clickHandler</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\nButton<span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>clickHandler <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token comment" spellcheck="true">/* do something with this */</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>Note how I pass only <code>this</code> to the <code>addEventListener</code>/<code>removeEventListener</code> functions.  <code>addEventListener</code> accepts objects as well. This way, JavaScript will look for the <code>handleEvent</code> function and call it with the event passed.</p>\n<p>This way we are able to remove the event listeners while <code>this</code> inside <code>clickHandler</code> is correctly set to the <code>Button</code> class.</p>\n<p>Another possible solution would be to keep a reference to the binded function and then remove that.</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code><span class="token keyword">let</span> Button <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\n  <span class="token keyword">this</span><span class="token punctuation">.</span>el <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">\'button\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token keyword">this</span><span class="token punctuation">.</span>clickHandler <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>clickHandler<span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">addEvents</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\nButton<span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>addEvents <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">this</span><span class="token punctuation">.</span>el<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">\'click\'</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>clickHandler<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\nButton<span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>removeEvents <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">this</span><span class="token punctuation">.</span>el<span class="token punctuation">.</span><span class="token function">removeEventListener</span><span class="token punctuation">(</span><span class="token string">\'click\'</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>clickHandler<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\nButton<span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>clickHandler <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token comment" spellcheck="true">/* do something with this */</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>I still like the <code>handleEvent</code> function because I keep my event handlers in a single place and I don\'t pollute the constructor with meaningless bindings.</p>\n<p>All of the above behaves exactly the same way using the class keyword of ES6.</p>\n<p>Have you ever run into a similar situation? What did you do? Leave me a comment! :)</p>',excerpt:"Have you ever tried to call   on a previously attached element and couldn't remove it? Did you maybe try to pass a function to   that is...",frontmatter:{date:"January 17, 2017",path:"/removeeventlistener-and-this",tags:"javascript, DOM",title:"removeEventListener and this",draft:null}}},pathContext:{prev:{excerpt:"It all started when  Adonis  told me that he was looking to contribute to some open source projects. He had a list of projects that he actively uses but he didn't want to always be checking their issues list for new issues that he could get his hands...",html:'<p>It all started when <a href="https://twitter.com/_adonisk">Adonis</a> told me that he was looking to contribute to some open source projects. He had a list of projects that he actively uses but he didn\'t want to always be checking their issues list for new issues that he could get his hands on. So we thought it would be cool if we had a way to watch a GitHub repository for issues of specific tags, e.g. "Need help", "Good first contribution", etc.</p>\n<p>I thought that\'s something I could easily hack in a weekend. So here\'s <a href="https://gityeller.com">GitYeller</a>.</p>\n<h2>Stack</h2>\n<p>GitYeller is built using JavaScript. Node.js and React more specifically. It\'s hosted on a <a href="https://m.do.co/c/2b3d657e5315">DigitalOcean droplet</a>, uses a <a href="https://letsencrypt.org/">Let\'s Encrypt</a> certificate, <a href="https://www.mailgun.com">Mailgun</a> for transactional emails and a MongoDB for persistent storage.</p>\n<p>It looks like this:</p>\n<p>\n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; z-index: -1; display: block; "\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 12.254160363086234%;position: relative; width: 100%; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAACCAYAAABYBvyLAAAACXBIWXMAAAsSAAALEgHS3X78AAAAjElEQVQI12P49OHrv29ff/wHYSC7ggEK3r766AgU+/Hh3eccmFhb8XLmyvRp7Oun3mSCib1782kRTP/XL98vMXz7/O333/cf/v959/7/9/efVjXlL2QH4RdP38T+/fzl//evP1tA/JqsWRylKRNFQIZUZc7gh4jNZP/08eu8f7///P/z5t3/f//+/QcAWrhiUN6XL64AAAAASUVORK5CYII=\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="GitYellerDiagram"\n        title=""\n        src="/static/56cb14d1d599ba64fc46546d2ec6c754-83a8b.png"\n        srcset="/static/56cb14d1d599ba64fc46546d2ec6c754-8992e.png 163w,\n/static/56cb14d1d599ba64fc46546d2ec6c754-ae0a7.png 325w,\n/static/56cb14d1d599ba64fc46546d2ec6c754-83a8b.png 650w,\n/static/56cb14d1d599ba64fc46546d2ec6c754-fad32.png 661w"\n        sizes="(max-width: 650px) 100vw, 650px"\n      />\n    </span>\n  </span>\n  </p>\n<p>So the Front End app is responsible for gathering emails from the user and inserting them into MongoDB. The worker is continuously traversing the collection and checking them against GitHub to see if there is anything new. It\'s that simple!</p>\n<h2>Worker</h2>\n<p>At first, I thought a queue would be a good fit for this since I needed to keep the order that the documents were being created. I knew that the purpose of a queue was to keep the messages processing in order but only to be processed once. I wanted to keep processing the same messages over and over again. So I decided to go with the simplest way possible. Let\'s have a worker continuously fetching a collection over and over again.</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code><span class="token comment" spellcheck="true">/**\n * Main run function that handles the infinite\n * loop over the database\n */</span>\n<span class="token keyword">const</span> run <span class="token operator">=</span> <span class="token punctuation">(</span>cursor<span class="token punctuation">,</span> worker<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n  <span class="token keyword">if</span> <span class="token punctuation">(</span>cursor<span class="token punctuation">.</span><span class="token function">isClosed</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    cursor<span class="token punctuation">.</span><span class="token function">rewind</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token keyword">return</span> cursor\n    <span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n    <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span>subscription <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>subscription<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">\'Cursor got to the end\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>\n        <span class="token keyword">return</span> subscription<span class="token punctuation">;</span>\n      <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span>\n    <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span>subscription <span class="token operator">=</span><span class="token operator">></span> worker<span class="token punctuation">.</span><span class="token function">run</span><span class="token punctuation">(</span>subscription<span class="token punctuation">)</span><span class="token punctuation">)</span>\n    <span class="token punctuation">.</span><span class="token keyword">catch</span><span class="token punctuation">(</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> logger<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span><span class="token punctuation">)</span>\n    <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token function">run</span><span class="token punctuation">(</span>cursor<span class="token punctuation">,</span> worker<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>By passing a <a href="https://mongodb.github.io/node-mongodb-native/2.0/api/Cursor.html">MongoDB cursor object</a> and a function that you want to be called with every item, it keeps traversing the collection and gets updated even when a new item is being created. There is no need to restart the connection to MongoDB.</p>\n<p>The <code>setTimeout</code> ensures that the next call will get it\'s own call stack so we don\'t overflow the current one.</p>\n<p><a href="https://github.com/kbariotis/gityeller/blob/master/worker/index.js">Here\'s the complete</a> worker\'s source code.</p>\n<h2>Check against GitHub</h2>\n<p>Let\'s see how we are asking GitHub if it has something new to show us. The actual API call is this:</p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>URL: api.github.com/owner/repo?labels=label</code></pre>\n      </div>\n<p>This will return us a list of issues labeled with that specific label of that repository.</p>\n<p>Once we make this request for the first time, we have a timestamp of the latest check. Next time, we will just query with that timestamp, in order to get only the issues that have been created between the last check and now (Actually GitHub returns those issues that have even been updated during that period, so <a href="https://github.com/kbariotis/gityeller/blob/master/worker/worker.js#L89">I have to make some extra checks</a>). Now the query looks like this:</p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>URL: api.github.com/owner/repo?labels=label&since=LATEST_RESPONSE_DATE</code></pre>\n      </div>\n<p>GitHub\'s API has a limit. They allow you to do certain API calls in a certain amount of time. I wanted to minimize the calls as much possible because once I hit that limit I won\'t be able to take the results I wanted so the users will never get notified.</p>\n<p>Each time we are making this request, GitHub will count minus one requests of our available quota. In order to save some juice I am using <a href="https://developer.github.com/v3/#conditional-requests">GitHub\'s conditional requests</a>. The above request will return us an ETag header with a value. We can use that value to validate whether our latest response is outdated or not. If it\'s not, GitHub will respond with a 304 Not Modified status code and an empty body.</p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>URL: api.github.com/owner/repo?labels=label&since=LATEST_RESPONSE_DATE\nHEADERS: If-None-Match: LATEST_RESPONSE_ETAG</code></pre>\n      </div>\n<p>This way the request won\'t be counted. We saved a request and we will only be charged if there is actually something new.</p>\n<p>Read more about <a href="https://bitworking.org/news/150/REST-Tip-Deep-etags-give-you-more-benefits">ETags and "conditional requests"</a>.</p>\n<h2>Conclusion</h2>\n<p>Certainly, the solution is not optimal. Once the collection grows bigger, the time between the checks for each individual item in the collection will also be long. But it was a fun weekend project. I am already watching the <a href="https://github.com/nodejs/node">node.js</a> repo for new issues labeled <code>v7.x</code>.</p>\n<p>Which repo are you going to watch? Leave me a comment if you liked my weekend project. If you think you can help me make it better, please see the <a href="https://github.com/kbariotis/gityeller">source code</a>.</p>',id:"/Users/Bariotis/Dev/develop/kostasbariotis.com/src/pages/gityeller-com-weekend-project/index.md absPath of file >>> MarkdownRemark",timeToRead:4,frontmatter:{date:"2017-03-01T08:49:08.000Z",path:"/gityeller-com-weekend-project",tags:"node.js, mongodb",title:"GitYeller.com is my latest weekend project",draft:null}},next:{excerpt:"I was in the need to be able to automatically create a machine on  DigitalOcean  for my personal projects, provision it and then upload an app and run it. Then I wanted to be able to deploy it again later on or make changes to the infrastructure in a...",html:'<p>I was in the need to be able to automatically create a machine on <a href="https://digitalocean.com">DigitalOcean</a> for my personal projects, provision it and then upload an app and run it. Then I wanted to be able to deploy it again later on or make changes to the infrastructure in a more controlled way.</p>\n<p>I wanted to automate the whole process so I can save some time and spend it on actually writing code.</p>\n<h2>The problem</h2>\n<p>Up until recently, bootstrapping of my personal projects looked like this:</p>\n<ul>\n<li>I would create a DigitalOcean droplet</li>\n<li>I would ssh into it after I have added my SSH key</li>\n<li>I would put a simple configuration, install dependencies, node.js runtime, etc</li>\n<li>Clone my project from Git</li>\n<li>Install nginx and set it as a reverse proxy for the node.js application</li>\n<li>Run it</li>\n<li>Leave it there</li>\n</ul>\n<p>Whenever I wanted to release a new version, I would log into the droplet pull the repo and restart the node app. The same procedure would be for every other stack I have been playing around.</p>\n<h2>My options</h2>\n<p>So I did my homework upfront and came up with these:</p>\n<h3>Docker</h3>\n<p>Using <a href="https://www.docker.com/">Docker</a>, I was able to describe my stack inside a <a href="https://docs.docker.com/compose/">single file</a>, put it on the server and run it. The server would still have to be there somehow. I would still have to provision the server or have one server that would host many Docker containers. Also, Docker needs to rebuild on every change of the application.</p>\n<p>I thought it was far away from what I was looking for.</p>\n<h3>Terraform</h3>\n<p><a href="https://www.terraform.io/">Terraform</a> allows you to describe your stack and use it across all major platforms. It supports AWS, DigitalOcean, etc. The thing I didn\'t like was that it doesn\'t support provisioning of the server. You have to put a <a href="https://puppet.com/">puppet</a> or <a href="https://www.chef.io/chef/">chef</a> to actually provision the servers, if some, in your infrastructure.</p>\n<p>I believe that Terraform would be much more suitable in an AWS infrastructure where you don\'t always need to provision something. Not all your infrastructure is going to be ElasticBeanstalk machines. But it is a great choice just to create and configure the dependent services like Lambda, SNS, SQS, API Gateway.</p>\n<p>Not for my needs.</p>\n<h3>Ansible</h3>\n<p><a href="https://www.ansible.com/">Ansible</a> is an automation tool for running commands on a remote server. Ansible can do anything that you would do from the command line. It even comes with modules so you can create a DigitalOcean droplet in a <a href="http://docs.ansible.com/ansible/digital_ocean_module.html">single command</a>.</p>\n<p>You can actually describe the above procedure in a single file and run it as many times as you like. Ansible will make sure that every time only the needed changes would run. You can run it once and build the application without even an existing DigitalOcean droplet. Alternatively, you can run it with an existing droplet and it will just pull your application and rerun it.</p>\n<p>I’m not going to get into detail about how ansible works, my friend <a href="https://www.stavros.io/posts/example-provisioning-and-deployment-ansible/">Stavros</a> has written a nice post where he explains much more about it. Before that, start <a href="http://docs.ansible.com/ansible/intro_getting_started.html">from the documentation</a>. It\'s there after all, isn\'t it?</p>\n<p>So, write an Ansible file (playbook in Ansible glossary) with the commands that you would run on the remote server. Use this file every time! That\'s it.</p>\n<h2>Solution</h2>\n<p>I decided to go with Ansible. Ansible documentation isn\'t that extensive but with a little digging around you can actually find any missing information. It\'s <a href="https://github.com/ansible/ansible">open source</a> so you can read the code and see how a module works for yourself. <a href="https://github.com/ansible/ansible/blob/devel/lib/ansible/modules/cloud/digital_ocean/digital_ocean.py">Try it</a>, it\'s not that hard! Also, Github is full of Ansible repositories. A lot of which you can grab from <a href="https://galaxy.ansible.com/">Ansible Galaxy, Ansible\'s registry for playbooks</a>. It comes with a package manager as well.</p>\n<p>So I started hacking around and I ended up with an <a href="https://github.com/kbariotis/ansible-nodejs-digitalocean">Ansible playbook</a> that will do all the above. It\'s configurable so I can just copy paste it on my new project and run it to create the droplet and provision it.</p>\n<p>It also supports adding a domain that is pointing to the created droplet. Plus it will generate a <a href="https://letsencrypt.org">Let\'s Encrypt</a> certificate for the specified domain.</p>\n<p>So you will:</p>\n<ul>\n<li>Get a domain name and point it to DigitalOcean\'s nameservers. Remember to wait for the propagation to happen.</li>\n<li>Run this playbook once and... Boom! You\'re ready to go!</li>\n</ul>\n<p>The playbook requires a bit knowledge of Ansible to hack the <a href="https://github.com/kbariotis/ansible-nodejs-digitalocean/blob/master/tasks/project.yml">tasks/project.yml</a> and set it to your specific needs. Yeah, I had the exact same reaction! Don\'t be alarmed! It\'s easier that you think!</p>\n<h2>Getting started</h2>\n<p>I will include a quick getting started kind of block here. There\'s detailed documentation over on <a href="https://github.com/kbariotis/ansible-nodejs-digitalocean/blob/master/README.md">project\'s README</a> file.</p>\n<ol>\n<li>\n<p>Start by <a href="http://docs.ansible.com/ansible/intro_installation.html">installing Ansible</a> on your local machine.</p>\n</li>\n<li>\n<p>Clone the repo. Adjust your settings at <a href="https://github.com/kbariotis/ansible-nodejs-digitalocean/blob/master/defaults/vars.yml">defaults/vars.yml</a>. Required variables are the <code>system_user</code> which is the owner of the project on the remote server, <code>domain</code>, <code>do_token</code> (<a href="https://cloud.digitalocean.com/settings/api/tokens">get yours</a>) and <code>repository</code> which is your repository.</p>\n</li>\n<li>\n<p>Then run under the project\'s root directory:\n<code>ansible-playbook main.yml --tags=launch</code></p>\n</li>\n</ol>\n<p>The <code>launch</code> tag will create the droplet, configure it and set it to run the application specified on <code>repository</code> variable.</p>\n<ol start="4">\n<li>Now we have to instruct it on how to run your project. So start hacking the <a href="https://github.com/kbariotis/ansible-nodejs-digitalocean/blob/master/tasks/project.yml">tasks/project.yml</a> which also includes an example of a simple Node.js project.</li>\n</ol>\n<p>The example project will:</p>\n<ul>\n<li>gitpull your repo using the <a href="http://docs.ansible.com/ansible/git_module.html">gitpull module</a></li>\n<li>install project\'s dependencies using the <a href="http://docs.ansible.com/ansible/npm_module.html">npm module</a> as well as global dependencies like <code>wepback</code> and <code>pm2</code></li>\n<li>build your repo using <code>webpack</code></li>\n<li>start it using <code>pm2</code></li>\n</ul>\n<p>That\'s it.</p>\n<p>Thanks for reading this! Write your comments down below or <a href="https://github.com/kbariotis/ansible-nodejs-digitalocean/issues">open an issue</a> if you find a bug!</p>\n<p><em>I am deploying this blog using the above playbook. It\'s a <a href="https://ghost.org/">Ghost</a> blog and you can find the theme\'s source code <a href="https://github.com/kbariotis/kostasbariotis.com">here</a>.</em></p>',
id:"/Users/Bariotis/Dev/develop/kostasbariotis.com/src/pages/deploying-nodejs-applications-digitalocean-ansible/index.md absPath of file >>> MarkdownRemark",timeToRead:5,frontmatter:{date:"2016-12-15T09:35:03.000Z",path:"/deploying-nodejs-applications-digitalocean-ansible",tags:null,title:"Deploying Node.js Applications on DigitalOcean using Ansible",draft:null}}}}}});
//# sourceMappingURL=path---removeeventlistener-and-this-f9daf1b44930501d02ce.js.map
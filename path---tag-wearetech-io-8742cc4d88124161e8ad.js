webpackJsonp([29],{"./node_modules/json-loader/index.js!./.cache/json/tag-wearetech-io.json":function(n,a){n.exports={pathContext:{posts:[{excerpt:"Hasn't been a long time when i started working with  Wearetech.io  and my first challenge was on. Sweet! If you want to learn more about Wearetech.io, check the  site  and our  Github repo . Now on the fun part. We have a use case where an individual...",html:'<p>Hasn\'t been a long time when i started working with <a title="Wearetech.io" href="http://wearetech.io" target="_blank">Wearetech.io</a> and my first challenge was on. Sweet!</p>\n<p>If you want to learn more about Wearetech.io, check the <a title="Wearetech.io" href="http://wearetech.io" target="_blank">site</a> and our <a title="Wearetech.io on Github" href="https://github.com/WeAreTech/wearetech.io" target="_blank">Github repo</a>.</p>\n<p>Now on the fun part. We have a use case where an individual would be able to register on our site as a City Curator.</p>\n<p>He could search for his City and if he wouldn’t find it in our database he would register it. When the next candidate comes in, he searches for his place and if it would be inside a 10 kilometers range of an already registered city we would deny it, since we wouldn’t want to have city calendars overlapping with each other.</p>\n<p>When <a title="Thanasis Polychronakis on Twitter" href="http://twitter.com/thanpolas" target="_blank">Thanasis </a>started building Wearetech.io he decided to go with MongoDB. So in order to create the above scenario, <a title="MongoDB Geospatial Queries" href="http://docs.mongodb.org/manual/applications/geospatial-indexes/" target="_blank">MongoDB Geospatial Queries</a> to the rescue!</p>\n<p>MongoDB supports two types of <a title="Geospatial Queries on Wikipedia" href="http://en.wikipedia.org/wiki/Spatial_query" target="_blank">Geospatial Queries</a> indexing.</p>\n<ul>\n\t<li>The spherical (<a title="2dSphere Indexes on MongoDB" href="http://docs.mongodb.org/manual/core/2dsphere/" target="_blank">2dSphere</a>), that would allow you to store shapes made of points (coordinates) and then make comparisons with them like intersection, etc.</li>\n\t<li>The flat (<a title="2d indexes on MongoDB" href="http://docs.mongodb.org/manual/core/2d/" target="_blank">2d</a>), that would store single points and then come up with their distances.</li>\n</ul>\nYour choice will affect your development a lot down the road, so think wisely.\n<p>Now on the code side, we will use Mongoose to shape our models. Here\'s the most simple one.</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code><span class="token keyword">var</span> mongoose     <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'mongoose\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">var</span> Schema     <span class="token operator">=</span> mongoose<span class="token punctuation">.</span>Schema<span class="token punctuation">;</span>\n\n<span class="token keyword">var</span> CitySchema   <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Schema</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  name<span class="token punctuation">:</span> String<span class="token punctuation">,</span>\n  geo<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    type<span class="token punctuation">:</span> <span class="token punctuation">[</span>Number<span class="token punctuation">]</span><span class="token punctuation">,</span>\n    index<span class="token punctuation">:</span> <span class="token string">\'2d\'</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\nmodule<span class="token punctuation">.</span>exports <span class="token operator">=</span> mongoose<span class="token punctuation">.</span><span class="token function">model</span><span class="token punctuation">(</span><span class="token string">\'City\'</span><span class="token punctuation">,</span> CitySchema<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>Now we can start populating our DB like this</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code><span class="token keyword">var</span> City <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'./app/models/city\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">var</span> cityModel     <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">City</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> \ncityModel<span class="token punctuation">.</span>name <span class="token operator">=</span> req<span class="token punctuation">.</span>body<span class="token punctuation">.</span>name<span class="token punctuation">;</span> \ncityModel<span class="token punctuation">.</span>geo    <span class="token operator">=</span> <span class="token punctuation">[</span> req<span class="token punctuation">.</span>body<span class="token punctuation">.</span>lat<span class="token punctuation">,</span> req<span class="token punctuation">.</span>body<span class="token punctuation">.</span>lng <span class="token punctuation">]</span><span class="token punctuation">;</span> \n\ncityModel<span class="token punctuation">.</span><span class="token function">save</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">if</span> <span class="token punctuation">(</span>err<span class="token punctuation">)</span>\n    res<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n  res<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>And now on the fun part</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code><span class="token keyword">var</span> distance <span class="token operator">=</span> <span class="token number">1000</span> <span class="token operator">/</span> <span class="token number">6371</span><span class="token punctuation">;</span>\n\n<span class="token keyword">var</span> query <span class="token operator">=</span> City<span class="token punctuation">.</span><span class="token function">findOne</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token string">\'geo\'</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>\n  $near<span class="token punctuation">:</span> <span class="token punctuation">[</span>\n    req<span class="token punctuation">.</span>body<span class="token punctuation">.</span>lat<span class="token punctuation">,</span>\n    req<span class="token punctuation">.</span>body<span class="token punctuation">.</span>lng\n  <span class="token punctuation">]</span><span class="token punctuation">,</span>\n  $maxDistance<span class="token punctuation">:</span> distance\n\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\nquery<span class="token punctuation">.</span><span class="token function">exec</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span>err<span class="token punctuation">,</span> city<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">if</span> <span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">throw</span> err<span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>city<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    res<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'Cant save: Found city:\'</span> <span class="token operator">+</span> city<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    res<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span>city<span class="token punctuation">)</span><span class="token punctuation">;</span>\n <span class="token punctuation">}</span>\n\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>Our distance is in radians metric system and you can find more on how to calculate it <a title="Convert to radians" href="http://docs.mongodb.org/manual/tutorial/calculate-distances-using-spherical-geometry-with-2d-geospatial-indexes/" target="_blank">here</a>.</p>\n<p><em>Due to recent Heroku pricing changes, this demo has broke. Still haven\'t find the time to fix it. :(</em>\nHere is a <a title="MongoDB Geospatial Queries PoC" href="https://damp-everglades-7521.herokuapp.com/" target="_blank">demo </a>of it. Try searching your City. If it\'s available register it and then try to find a place inside a 10 kilometers range of your previeus registered City.</p>\n<p>Hope you will find it interesting. Comments?</p>',id:"/Users/Bariotis/Dev/develop/gatsby-blog-starter-kit/src/pages/geospatial-query-with-mongodb-and-node-js/index.md absPath of file >>> MarkdownRemark",timeToRead:2,frontmatter:{date:"2014-10-30T18:16:00.000Z",path:"/geospatial-query-with-mongodb-and-node-js",tags:"node.js, mongodb, wearetech.io",title:"Geospatial Query with MongoDB and Node.js"}}],tag:"wearetech.io",pagesSum:1,page:1}}}});
//# sourceMappingURL=path---tag-wearetech-io-8742cc4d88124161e8ad.js.map
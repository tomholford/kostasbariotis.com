webpackJsonp([0xc2ef1f5e865ff000],{"./node_modules/json-loader/index.js!./.cache/json/tag-webpack.json":function(n,s){n.exports={data:{site:{siteMetadata:{title:"Kostas Bariotis' Blog",description:"I'm Kostas Bariotis, a web developer, a proud wanderer and a passionate doer. My mission is to write clean and efficient code, to solve problems on the web and to learn something more.",siteUrl:"https://kostasbariotis.com"}}},pathContext:{posts:[{excerpt:"I am using webpack a lot. A common pattern I am constantly using is how to manage the application specific configuration between different environments. I want to be able to set different API URLs, access codes, feature flags for every environment of...",html:'<p>I am using webpack a lot. A common pattern I am constantly using is how to manage the application specific configuration between different environments. I want to be able to set different API URLs, access codes, feature flags for every environment of my team\'s workflow.</p>\n<p>In this post, I will try to explain why we need application specific configuration and I am using it. Then I will show you two common techniques and why I chose the second one. It\'s fairly small as the horizontal scrollbar on right says.</p>\n<h2>An example</h2>\n<p>Let\'s start with a simple app. Of course, it does absolutely nothing. It\'s just a theoretical fully working application:</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code><span class="token keyword">import</span> ApolloClient<span class="token punctuation">,</span> <span class="token punctuation">{</span> createNetworkInterface <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'apollo-client\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> gql <span class="token keyword">from</span> <span class="token string">\'graphql-tag\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> Raven <span class="token keyword">from</span> <span class="token string">\'raven-js\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> client <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ApolloClient</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  networkInterface<span class="token punctuation">:</span> <span class="token function">createNetworkInterface</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n    uri<span class="token punctuation">:</span> <span class="token string">\'https://graphql.example.com\'</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\nRaven<span class="token punctuation">.</span><span class="token function">config</span><span class="token punctuation">(</span><span class="token string">\'https://4a426bd18cd86e90b186dcbfa3ce1b0d@sentry.io/321321\'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">install</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\nclient<span class="token punctuation">.</span><span class="token function">query</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  query<span class="token punctuation">:</span> gql<span class="token template-string"><span class="token string">`\n    query TodoApp {\n      todos {\n        id\n        text\n        completed\n      }\n    }\n  `</span></span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n  <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span>data <span class="token operator">=</span><span class="token operator">></span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">)</span>\n  <span class="token punctuation">.</span><span class="token keyword">catch</span><span class="token punctuation">(</span>error <span class="token operator">=</span><span class="token operator">></span> Raven<span class="token punctuation">.</span><span class="token function">captureException</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>Notice the various constants across this simple snippet. We have our GraphQL\'s API Url and the Sentry\'s access code. We want to build the above snippet for two different environments, the production one, and the staging. But we want the production environment to talk to our production GraphQL API while the staging to talk to the staging one. The same goes for the Sentry access code, different for every environment (Sentry supports error tags though, that\'s just an example.)</p>\n<p>Great so let\'s rewrite:</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code><span class="token keyword">import</span> ApolloClient<span class="token punctuation">,</span> <span class="token punctuation">{</span> createNetworkInterface <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'apollo-client\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> gql <span class="token keyword">from</span> <span class="token string">\'graphql-tag\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> client <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ApolloClient</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  networkInterface<span class="token punctuation">:</span> <span class="token function">createNetworkInterface</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n    uri<span class="token punctuation">:</span> __CONFIG__<span class="token punctuation">.</span>graphql<span class="token punctuation">.</span>endpoint<span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\nRaven<span class="token punctuation">.</span><span class="token function">config</span><span class="token punctuation">(</span>__CONFIG__<span class="token punctuation">.</span>sentry<span class="token punctuation">.</span>code<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">install</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\nclient<span class="token punctuation">.</span><span class="token function">query</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  query<span class="token punctuation">:</span> gql<span class="token template-string"><span class="token string">`\n    query TodoApp {\n      todos {\n        id\n        text\n        completed\n      }\n    }\n  `</span></span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n  <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span>data <span class="token operator">=</span><span class="token operator">></span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">)</span>\n  <span class="token punctuation">.</span><span class="token keyword">catch</span><span class="token punctuation">(</span>error <span class="token operator">=</span><span class="token operator">></span> Raven<span class="token punctuation">.</span><span class="token function">captureException</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>Great! Notice the constants I have put in. Now we need to properly assign those constants depending on the environment.</p>\n<p>Before we do that, let\'s take it a step further. I want Sentry to be enabled only on the production environment. I need a toggle switch.</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code><span class="token keyword">import</span> ApolloClient<span class="token punctuation">,</span> <span class="token punctuation">{</span> createNetworkInterface <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'apollo-client\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> gql <span class="token keyword">from</span> <span class="token string">\'graphql-tag\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> client <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ApolloClient</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  networkInterface<span class="token punctuation">:</span> <span class="token function">createNetworkInterface</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n    uri<span class="token punctuation">:</span> __CONFIG__<span class="token punctuation">.</span>graphql<span class="token punctuation">.</span>endpoint<span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">if</span> <span class="token punctuation">(</span>__CONFIG__<span class="token punctuation">.</span>sentry<span class="token punctuation">.</span>is_enabled<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">import</span> Raven <span class="token keyword">from</span> <span class="token string">\'raven-js\'</span><span class="token punctuation">;</span>\n  Raven<span class="token punctuation">.</span><span class="token function">config</span><span class="token punctuation">(</span>__CONFIG__<span class="token punctuation">.</span>sentry<span class="token punctuation">.</span>code<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">install</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">const</span> logger <span class="token operator">=</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">if</span> <span class="token punctuation">(</span>Raven<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    Raven<span class="token punctuation">.</span><span class="token function">captureException</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>\n    console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\nclient<span class="token punctuation">.</span><span class="token function">query</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  query<span class="token punctuation">:</span> gql<span class="token template-string"><span class="token string">`\n    query TodoApp {\n      todos {\n        id\n        text\n        completed\n      }\n    }\n  `</span></span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n  <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span>data <span class="token operator">=</span><span class="token operator">></span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">)</span>\n  <span class="token punctuation">.</span><span class="token keyword">catch</span><span class="token punctuation">(</span>error <span class="token operator">=</span><span class="token operator">></span> <span class="token function">logger</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>Again, <code>__CONFIG__.sentry.is_enabled</code> will only be true on the production environment. When it\'s false, will never initialize it.</p>\n<h2>Searching for a solution</h2>\n<p>Let\'s see now how we can actually achieve this. First, we need the configuration management. <a href="https://github.com/lorenwest/node-config">node-config</a> would be great for this. Just install it, write some configuration files and load it in your webpack configuration like this:</p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>const config = require(\'node-config\');</code></pre>\n      </div>\n<p><code>config</code> here will be the environment specific configuration you have defined. Now we need to inject that into our application entry file.</p>\n<p>One way would be to create a module alias. Then you can just import from every file you are going to need it. Although you may need to adjust it a bit to use it with <code>node-config</code>, it\'s fairly simple and works in most cases.</p>\n<p>One caveat here is that the configuration is being imported into your application and just sits there, whether you are using it or not. Configuration values that are not being used are still there, which may even be considered as a security flaw. We don\'t want that.</p>\n<p>A better solution would be webpack\'s <a href="https://webpack.js.org/plugins/define-plugin/">DefinePlugin</a>. DefinePlugin will replace every occurrence of a key you are passing it with its respective value on compile time.</p>\n<p>So this:</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code><span class="token keyword">if</span> <span class="token punctuation">(</span>__CONFIG__<span class="token punctuation">.</span>sentry<span class="token punctuation">.</span>is_enabled<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">import</span> Raven <span class="token keyword">from</span> <span class="token string">\'raven-js\'</span><span class="token punctuation">;</span>\n  Raven<span class="token punctuation">.</span><span class="token function">config</span><span class="token punctuation">(</span>__CONFIG__<span class="token punctuation">.</span>sentry<span class="token punctuation">.</span>code<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">install</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>will become</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code><span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">import</span> Raven <span class="token keyword">from</span> <span class="token string">\'raven-js\'</span><span class="token punctuation">;</span>\n  Raven<span class="token punctuation">.</span><span class="token function">config</span><span class="token punctuation">(</span>__CONFIG__<span class="token punctuation">.</span>sentry<span class="token punctuation">.</span>code<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">install</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>on the staging environment. What\'s even greater about that, is that webpack will pass it (using UglifyJS) and completely remove it since it\'s never going to be used.</p>\n<p>Heads up though!</p>\n<blockquote>\n<p>Note that because the plugin does a direct text replacement, the value given to it must include actual quotes inside of the string itself. Typically, this is done either with either alternate quotes, such as \'"production"\', or by using JSON.stringify(\'production\').</p>\n</blockquote>\n<p>You need to write your configuration respectively because of that.</p>\n<p>The webpack configuration will look like this:</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code><span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'path\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> webpack <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'webpack\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> config <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'config\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\nmodule<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  entry<span class="token punctuation">:</span> <span class="token string">\'./index.js\'</span><span class="token punctuation">,</span>\n  plugins<span class="token punctuation">:</span> <span class="token punctuation">[</span>\n    <span class="token keyword">new</span> <span class="token class-name">webpack<span class="token punctuation">.</span>DefinePlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n      __CONFIG__<span class="token punctuation">:</span> <span class="token function">packinize</span><span class="token punctuation">(</span>config<span class="token punctuation">)</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span>\n  <span class="token punctuation">]</span><span class="token punctuation">,</span>\n  output<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    filename<span class="token punctuation">:</span> <span class="token string">\'app.bundle.js\'</span><span class="token punctuation">,</span>\n    path<span class="token punctuation">:</span> <span class="token string">"/path.join(__dirname, \'dist\')/"</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>We pass <code>node-config</code> into <code>packinize</code> which will pass every value and stringify it. Then we feed the result into DefinePlugin.</p>\n<h2>To conclude</h2>\n<p>I am using configuration files as much as possible. For constants that are being varied based on the environments, API URLs, access codes, feature flags, toggle switches. Being able to manipulate the end code based on those values is just awesome!</p>\n<p>I have added an example to my <a href="http://github.com/kbariotis/webpack-patterns">webpack-patterns collection</a>. Take a look and let me know what you think.</p>\n<p>How are you using your application specific configuration when you use webpack? Or any other bundler?</p>',id:"/Users/Bariotis/Dev/develop/kostasbariotis.com/src/pages/environment-based-application-configuration-using-webpack/index.md absPath of file >>> MarkdownRemark",timeToRead:4,frontmatter:{date:"2017-05-14T09:47:37.000Z",path:"/environment-based-application-configuration-using-webpack/",tags:"webpack",title:"Environment based application configuration using Webpack",draft:null}}],tag:"webpack",pagesSum:1,page:1}}}});
//# sourceMappingURL=path---tag-webpack-2d1ff6a199efd4a732d6.js.map
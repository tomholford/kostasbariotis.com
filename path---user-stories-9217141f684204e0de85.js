webpackJsonp([13],{"./node_modules/json-loader/index.js!./.cache/json/user-stories.json":function(e,t){e.exports={data:{markdownRemark:{html:'<p><a href="https://en.wikipedia.org/wiki/User_story">User stories</a> are a part of every agile driven process that teams usually follow.</p>\n<p>Often, even a developer can be called to write a story, based on a business requirement, that will eventually be called to develop it. Here\'s an example:</p>\n<p><em>As a Developer, I want to be able to filter Blog Posts by Category ID, so I can display a filtered table.</em></p>\n<p>But one can easily be distracted and write a story based on their understanding of how consumers are using their code. Much like product owners.</p>\n<p>Before you start, talk to your consumers. See how their are using your code or your REST API. Ask them for feedback and for possible hard times they have with it.</p>\n<p>Then, write your user stories, based on that.</p>',frontmatter:{date:"October 22, 2015",path:"/user-stories",tags:null,title:"User Stories as in User Stories"}}},pathContext:{prev:{excerpt:"While we were moving towards the  Microservices  path at  Goodvidio , we were in the need of keeping in a central place the configuration of our system. Thus, we created the  Configuration Service . The  Configuration Service  exposes a REST API...",html:'<p>While we were moving towards the <a href="http://martinfowler.com/microservices/">Microservices</a> path at <a href="https://goodvid.io">Goodvidio</a>, we were in the need of keeping in a central place the configuration of our system. Thus, we created the <em>Configuration Service</em>.</p>\n<p>The <em>Configuration Service</em> exposes a REST API (like all of our services) and provides a place to store configuration variables and values to all of our developers. Each Service of our infrastructure can have a record stored in the <em>Configuration Service</em>. Those records will then be consumed and manipulated by a front end screen, so that even non technical people can alter their values.</p>\n<p>As a developer that I am working in a feature and I want to make use of the <em>Configuration Service</em>, I must first make sure that there isn\'t already a record for the Service that I work on and if there isn\'t I have to create it.</p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>GET /v1/configurations/ONBOARDING</code></pre>\n      </div>\n<p>If the above call return an empty array, I can create it by <code>POST</code>ing a body:</p>\n<div class="gatsby-highlight">\n      <pre class="language-json"><code><span class="token punctuation">{</span>\n  <span class="token property">"_id"</span><span class="token operator">:</span> <span class="token string">"ONBOARDING"</span><span class="token punctuation">,</span>\n  <span class="token property">"configuration"</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token property">"free_trial_duration"</span> <span class="token operator">:</span> <span class="token string">"43800"</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>This way we keep all the configuration of our System in a central place and even the marketing team can decide some day to change the duration of the free trial period.</p>\n<p>That means fewer deployments, thus faster involvement.</p>',id:"/Users/Bariotis/Dev/develop/gatsby-blog-starter-kit/src/pages/the-configuration-service/index.md absPath of file >>> MarkdownRemark",timeToRead:1,frontmatter:{date:"2015-11-13T18:51:34.000Z",path:"/the-configuration-service",tags:"Microservices",title:"The Configuration Service"}},next:{excerpt:'"... and once you understand that, once you truly believe that, then you\'re free."',html:'<blockquote>\n<p>"... and once you understand that, once you truly believe that, then you\'re free."</p>\n</blockquote>\n<iframe width="100%" height="400px" src="https://www.youtube.com/embed/8pTEmbeENF4" frameborder="0" allowfullscreen></iframe>',id:"/Users/Bariotis/Dev/develop/gatsby-blog-starter-kit/src/pages/dont-know-what-im-doing/index.md absPath of file >>> MarkdownRemark",timeToRead:1,frontmatter:{date:"2015-10-11T10:01:17.000Z",path:"/dont-know-what-im-doing",tags:"programming",title:"I don't know what I'm doing"}}}}}});
//# sourceMappingURL=path---user-stories-9217141f684204e0de85.js.map
webpackJsonp([150],{"./node_modules/json-loader/index.js!./.cache/json/isolated-unit-tests-with-sinonjs.json":function(n,s){n.exports={data:{markdownRemark:{html:'<p>Units in Unit Testing is the smallest unit of code. But how small? Small enough to be tested. For that matter, Unit Tests need to be isolated and for that you need stubs.</p>\n<p>Here I will use a small function and the <a href="http://sinonjs.org">Sinonjs</a> to try to test it. My function does some checks and finally an HTTP call to an external service while similar functions would hit a DB. But our intention is to test the actual function and we don\'t want to hit the external service.</p>\n<p>In case that you think: "No we should let it hit the external so we can test that too". Well no, remember, we are writing unit tests. You\'re talking about integration tests, where we test how multiple components interact with each other. Also, this is an external service and our test suite shouldn\'t test external services. This is a clean separation of concerns. It\'s not our test suite\'s responsibility to test anything else that itself.</p>\n<p>Here\'s a simple function:</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code><span class="token keyword">const</span> request <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'request\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> createToDoItem <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span>description<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\n  <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span>resolve<span class="token punctuation">,</span> reject<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\n    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>description<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token keyword">return</span> <span class="token function">reject</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">\'description is required\'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n\n    request<span class="token punctuation">.</span><span class="token function">post</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n      url<span class="token punctuation">:</span> <span class="token string">\'https://todo/items/endpoint\'</span><span class="token punctuation">,</span>\n      body<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n        description<span class="token punctuation">:</span> description<span class="token punctuation">,</span>\n        completed<span class="token punctuation">:</span> <span class="token boolean">false</span>\n      <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span>err<span class="token punctuation">,</span> res<span class="token punctuation">,</span> body<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\n       <span class="token keyword">if</span> <span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n         <span class="token function">reject</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span><span class="token punctuation">;</span>\n       <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>\n         <span class="token function">resolve</span><span class="token punctuation">(</span>body<span class="token punctuation">)</span><span class="token punctuation">;</span>\n       <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>So the <code>createToDoItem</code> does two things. First it checks for the validity of the required parameter <code>description</code> and then contacts the external service that is responsible for storing Todo Items.</p>\n<p>Now we need to test that function as a unit, so we have to isolate it. We don\'t want to contact the external service.</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code><span class="token function">describe</span><span class="token punctuation">(</span><span class="token string">\'To Do Items\'</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\n  <span class="token function">describe</span><span class="token punctuation">(</span><span class="token string">\'Create Items\'</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\n    <span class="token function">it</span><span class="token punctuation">(</span><span class="token string">\'requires the description parameter\'</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span>done<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\n      <span class="token function">createToDoItem</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n        <span class="token punctuation">.</span><span class="token keyword">catch</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\n          <span class="token function">expect</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span><span class="token punctuation">.</span>to<span class="token punctuation">.</span>be<span class="token punctuation">.</span>an<span class="token punctuation">.</span><span class="token function">instanceOf</span><span class="token punctuation">(</span>Error<span class="token punctuation">)</span><span class="token punctuation">;</span>\n          <span class="token function">expect</span><span class="token punctuation">(</span>err<span class="token punctuation">.</span>message<span class="token punctuation">)</span><span class="token punctuation">.</span>to<span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span><span class="token string">\'description is required\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n          <span class="token function">done</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span><span class="token punctuation">)</span>\n        <span class="token punctuation">.</span><span class="token keyword">catch</span><span class="token punctuation">(</span>done<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n    <span class="token function">it</span><span class="token punctuation">(</span><span class="token string">\'rejects on error from the remote service\'</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span>done<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\n      <span class="token keyword">var</span> stub <span class="token operator">=</span> sinon<span class="token punctuation">.</span><span class="token function">stub</span><span class="token punctuation">(</span>request<span class="token punctuation">,</span> post<span class="token punctuation">)</span>\n        <span class="token punctuation">.</span><span class="token function">yields</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n      <span class="token function">createToDoItem</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n        <span class="token punctuation">.</span><span class="token keyword">catch</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\n          stub<span class="token punctuation">.</span><span class="token function">restore</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n          <span class="token function">done</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span><span class="token punctuation">)</span>\n        <span class="token punctuation">.</span><span class="token keyword">catch</span><span class="token punctuation">(</span>done<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n    <span class="token function">it</span><span class="token punctuation">(</span><span class="token string">\'resolves on succesfull creation\'</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span>done<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\n      <span class="token keyword">var</span> stub <span class="token operator">=</span> sinon<span class="token punctuation">.</span><span class="token function">stub</span><span class="token punctuation">(</span>request<span class="token punctuation">,</span> post<span class="token punctuation">)</span>\n        <span class="token punctuation">.</span><span class="token function">yields</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>\n          _id<span class="token punctuation">:</span> <span class="token string">\'ITEM_ID\'</span><span class="token punctuation">,</span>\n          description<span class="token punctuation">:</span> <span class="token string">\'Remember to write that blog post\'</span><span class="token punctuation">,</span>\n          completed<span class="token punctuation">:</span> <span class="token boolean">false</span>\n        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n      <span class="token function">createToDoItem</span><span class="token punctuation">(</span><span class="token string">\'Remember to write that blog post\'</span><span class="token punctuation">)</span>\n        <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span>todo<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\n          <span class="token function">expect</span><span class="token punctuation">(</span>todo<span class="token punctuation">.</span>_id<span class="token punctuation">)</span><span class="token punctuation">.</span>to<span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span><span class="token string">\'ITEM_ID\'</span><span class="token punctuation">)</span>\n          <span class="token function">expect</span><span class="token punctuation">(</span>todo<span class="token punctuation">.</span>description<span class="token punctuation">)</span><span class="token punctuation">.</span>to<span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span><span class="token string">\'Remember to write that blog post\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n          stub<span class="token punctuation">.</span><span class="token function">restore</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n          <span class="token function">expect</span><span class="token punctuation">(</span>todo<span class="token punctuation">.</span>completed<span class="token punctuation">)</span><span class="token punctuation">.</span>to<span class="token punctuation">.</span>be<span class="token punctuation">.</span><span class="token boolean">false</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span><span class="token punctuation">)</span>\n        <span class="token punctuation">.</span><span class="token keyword">catch</span><span class="token punctuation">(</span>done<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>I hope the code to be self-documented. At first, we call our function without a parameter so the first condition will be true and an error will be thrown. Then we stub the <code>request</code> object so it will run the callback function with an error. This will trigger the second condition and reject our promise. Inside the <code>catch</code> function, we know that the promise has been rejected. For the end, we stub the callback to return with a null error and a body that will resolve the promise and we test that inside the <code>then</code> function. 100% code coverage.</p>\n<p>This way we have completely isolated our Unit Under Test and made it blazingly fast to run since we don\'t make any actual HTTP requests. We pretty much covered the <a href="https://pragprog.com/magazines/2012-01/unit-tests-are-first">F.I.R.S.T. principles of Unit Testing</a>.</p>\n<p>Unit tests should be completely isolated.</p>\n<p>Always remember the <a href="http://blogs.agilefaqs.com/2011/02/01/inverting-the-testing-pyramid/">inverted testing pyramid</a>. Invest in Unit Testing so to avoid manual system testing. It is expensive.</p>',frontmatter:{date:"March 05, 2016",path:"/isolated-unit-tests-with-sinonjs",tags:"TDD, javascript, node.js",title:"Isolated Unit Tests with Sinonjs"}}},pathContext:{prev:{excerpt:"Admin Pisoni  shares lots of great insights he learned after all these years into managing and growing teams. This article says it all. Article",html:'<p><a href="https://www.linkedin.com/in/adam-pisoni-12340b1">Admin Pisoni</a> shares lots of great insights he learned after all these years into managing and growing teams. This article says it all.</p>\n<p><a href="http://firstround.com/review/the-keys-to-scaling-yourself-as-a-technology-leader/">Article</a></p>',id:"/Users/Bariotis/Dev/develop/gatsby-blog-starter-kit/src/pages/the-keys-to-scaling-yourself-as-a-technology-leader/index.md absPath of file >>> MarkdownRemark",timeToRead:1,frontmatter:{date:"2016-03-30T09:24:53.000Z",path:"/the-keys-to-scaling-yourself-as-a-technology-leader",tags:"Management, team",title:"The Keys to Scaling Yourself as a Technology Leader"}},next:{excerpt:"I started playing with  Golang(or just Go)  this week for the first time. Go is a compiled, statically typed language and I thought it would be a great fit for situations where Node.js, my primary go-to stack, won't be a great candidate for the job...",html:'<p>I started playing with <a href="http://golang.org">Golang(or just Go)</a> this week for the first time. Go is a compiled, statically typed language and I thought it would be a great fit for situations where Node.js, my primary go-to stack, won\'t be a great candidate for the job. For heavy processing and problems where concurrent-first solutions must be applied.</p>\n<p>The first thing I did was to check the <a href="https://tour.golang.org/welcome/1">online tour</a> on the official site. It\'s very well structured and has also some exercises to get you started. Wrapping my head around the language was very easy since it has a lot of well-known concepts like pointers and structs, similar to C.</p>\n<p>After playing a bit around I thought I would make something using my new learnings and Go. I found a <a href="https://github.com/willnorris/imageproxy">really cool project</a> and wanted to contribute to it. So I thought I will fork it and create a bootstrap application and try to import my fork. But that strange message appeared on my console:</p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>package github.com/kbariotis/imageproxy: code in directory /Users/Bariotis/golang/src/github.com/kbariotis/imageproxy expects import "willnorris.com/go/imageproxy"</code></pre>\n      </div>\n<p>what this basically means is that my repo had an explicit [canonical import path]<a href="https://golang.org/cmd/go/#hdr-Import_path_checking">https://golang.org/cmd/go/#hdr-Import<em>path</em>checking</a>) set that was forcing the consumer to download it from a <a href="https://github.com/willnorris/imageproxy/blob/master/imageproxy.go#L17">particular place</a> and that was the original author\'s site.</p>\n<p><a href="https://texlution.com/post/golang-canonical-import-paths/">This post</a> explains even more how this works. Since the Go command allows one to import packages from remote servers and a package may live in various places or it can be moved from one place to another, the maintainer must explicitly set the default URL that others must use to import the library, in order to avoid the <a href="https://en.wikipedia.org/wiki/Link_rot">link rot</a>.</p>\n<p>But that confused me a bit since I do this all the time with <code>npm</code>. I can fork a library and import it from my fork directly.</p>\n<p>I searched a bit around and found that the simplest thing to do (and didn\'t think of it) was to import the original repository and the Go command will clone it into my $GOPATH/src directory. From there I could change the git remotes URLs and send any changes onto my fork. Then make a PR to the original repo or change the canonical import path annotation if I wanted to use my fork directly.</p>\n<p>Keep this in mind if you\'re just starting with the Go language. Btw, <a href="https://tour.golang.org/concurrency/1">Goroutines are awesome!</a></p>',id:"/Users/Bariotis/Dev/develop/gatsby-blog-starter-kit/src/pages/go-canonical-import-paths-github-forks/index.md absPath of file >>> MarkdownRemark",timeToRead:2,frontmatter:{date:"2016-02-27T15:49:31.000Z",path:"/go-canonical-import-paths-github-forks",tags:"Golang, Github",title:"Go canonical import paths & Github forks"}}}}}});
//# sourceMappingURL=path---isolated-unit-tests-with-sinonjs-0e61ad8c9988942c5a20.js.map
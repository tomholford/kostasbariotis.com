webpackJsonp([14],{"./node_modules/json-loader/index.js!./.cache/json/the-keys-to-scaling-yourself-as-a-technology-leader.json":function(n,s){n.exports={data:{site:{siteMetadata:{title:"Kostas Bariotis' Blog",description:"I'm Kostas Bariotis, a web developer, a proud wanderer and a passionate doer. My mission is to write clean and efficient code, to solve problems on the web and to learn something more.",siteUrl:"https://kostasbariotis.com"}},markdownRemark:{html:'<p><a href="https://www.linkedin.com/in/adam-pisoni-12340b1">Admin Pisoni</a> shares lots of great insights he learned after all these years into managing and growing teams. This article says it all.</p>\n<p><a href="http://firstround.com/review/the-keys-to-scaling-yourself-as-a-technology-leader/">Article</a></p>',excerpt:"Admin Pisoni  shares lots of great insights he learned after all these years into managing and growing teams. This article says it all...",frontmatter:{date:"March 30, 2016",path:"/the-keys-to-scaling-yourself-as-a-technology-leader/",tags:"Management, team",title:"The Keys to Scaling Yourself as a Technology Leader",draft:null}}},pathContext:{prev:{excerpt:"A few weeks ago, I did my Microservices talk at Thessaloniki's Ruby meetup. It was an awesome experience. There was also a talk there, entitled Testing Demystified, after me. The excellent engineer gave a lot of food for thought about testing. I wasn...",html:"<p>A few weeks ago, I did my Microservices talk at Thessaloniki's Ruby meetup. It was an awesome experience. There was also a talk there, entitled Testing Demystified, after me. The excellent engineer gave a lot of food for thought about testing. I wasn't aware of most of them.</p>\n<p>So I decided to write a similar post to let me clear my head on the subject.</p>\n<h1>Test Driven Development</h1>\n<p>The most common term you will meet in software is TDD. It's concept is actually simple. We write tests before start coding. <a href=\"http://www.amazon.com/Test-Driven-Development-By-Example/dp/0321146530\">Kent Beck</a> describes it like this:</p>\n<ol>\n<li>Red</li>\n<li>Green</li>\n<li>Refactor</li>\n</ol>\n<p>We first write our tests based on our specifications. We run them and of course they won't succeed thus are going to be red. Then we write the smallest amount of code to make our tests pass and meet our requirements. Once we get the green flag we start refactoring and cleaning our code.</p>\n<h2>Unit Testing</h2>\n<p>Unit tests are the start of every test suite. Before starting to unit test, one must define what a unit is, which may vary from team to team. The well known rule is that a unit is the smallest piece of code that can be tested. Regardless of if it's a function, a class or even a whole system in some cases.</p>\n<p>Unit tests must run fast and run often. To achieve maximum speed,  they are being run in isolation. Thus mocking and stubbing of dependent units happens often. For example, a database can be mocked instead of actually hitting it.</p>\n<p>I like to have my unit tests independent from the whole test suite. I use a watch process to run them every time I change something in the code. This way I cannot forget to make sure that they are passing, before commit.</p>\n<h2>Components/Integration Testing</h2>\n<p>After writing our unit tests, next are Components Tests. Those are used to test units in combination. Units that are working together should be tested by Components Testing.</p>\n<p>We should mock external services that are not part of the requirement under testing.</p>\n<h2>End to End/System Testing</h2>\n<p>Finally, we are testing anythings, from the User Interface to the Database. Testing each intermediate component. To make sure that our system meets business requirements, System Testing happens by the user perspective.</p>\n<h1>Property Testing</h1>\n<p>An important concept in testing a system is Property Testing. Instead of taking certain test cases, we are instructing our system to take different values and test against them. This way we can even find cases that we didn't thought. Property testing can be applied at any level of our test suite.</p>\n<h1>How much to test</h1>\n<p>A question that usually shows up is \"How much should I be testing\". While a possible good answer could be \"As much as you can\" this is often not the case. Testing can't always be a priority. There is a point in the size of every test suite that once we pass it, there is no more the need to test. Unless new requirements are introduced, we are running the suite to be sure that nothing breaks.</p>\n<p>Before you try to answer the \"how much to test\", let's take a look into the \"what to test\". The concept says that to put minimum effort and investment into manual and GUI testing, we should invest into the lower levels. Manual is by default more expensive and more fault tolerant. Bugs are more possible to pass by manual tests than automated unit tests.</p>\n<p>We can't eliminate manual testing and surely we can't automate it. But we can be sure that having a stronger automated test foundation we leave fewer errors to be found in the upper levels of testing.</p>",id:"/Users/Bariotis/Dev/develop/kostasbariotis.com/src/pages/testing/index.md absPath of file >>> MarkdownRemark",timeToRead:3,frontmatter:{date:"2016-05-01T00:00:00.000Z",path:"/drafts/testing/",tags:null,title:"Testing Software Systems",draft:!0}},next:{excerpt:"Units in Unit Testing is the smallest unit of code. But how small? Small enough to be tested. For that matter, Unit Tests need to be isolated and for that you need stubs. Here I will use a small function and the  Sinonjs  to try to test it. My...",html:'<p>Units in Unit Testing is the smallest unit of code. But how small? Small enough to be tested. For that matter, Unit Tests need to be isolated and for that you need stubs.</p>\n<p>Here I will use a small function and the <a href="http://sinonjs.org">Sinonjs</a> to try to test it. My function does some checks and finally an HTTP call to an external service while similar functions would hit a DB. But our intention is to test the actual function and we don\'t want to hit the external service.</p>\n<p>In case that you think: "No we should let it hit the external so we can test that too". Well no, remember, we are writing unit tests. You\'re talking about integration tests, where we test how multiple components interact with each other. Also, this is an external service and our test suite shouldn\'t test external services. This is a clean separation of concerns. It\'s not our test suite\'s responsibility to test anything else that itself.</p>\n<p>Here\'s a simple function:</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code><span class="token keyword">const</span> request <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'request\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> createToDoItem <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span>description<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\n  <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span>resolve<span class="token punctuation">,</span> reject<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\n    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>description<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token keyword">return</span> <span class="token function">reject</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">\'description is required\'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n\n    request<span class="token punctuation">.</span><span class="token function">post</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n      url<span class="token punctuation">:</span> <span class="token string">\'https://todo/items/endpoint\'</span><span class="token punctuation">,</span>\n      body<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n        description<span class="token punctuation">:</span> description<span class="token punctuation">,</span>\n        completed<span class="token punctuation">:</span> <span class="token boolean">false</span>\n      <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span>err<span class="token punctuation">,</span> res<span class="token punctuation">,</span> body<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\n       <span class="token keyword">if</span> <span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n         <span class="token function">reject</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span><span class="token punctuation">;</span>\n       <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>\n         <span class="token function">resolve</span><span class="token punctuation">(</span>body<span class="token punctuation">)</span><span class="token punctuation">;</span>\n       <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>So the <code>createToDoItem</code> does two things. First it checks for the validity of the required parameter <code>description</code> and then contacts the external service that is responsible for storing Todo Items.</p>\n<p>Now we need to test that function as a unit, so we have to isolate it. We don\'t want to contact the external service.</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code><span class="token function">describe</span><span class="token punctuation">(</span><span class="token string">\'To Do Items\'</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\n  <span class="token function">describe</span><span class="token punctuation">(</span><span class="token string">\'Create Items\'</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\n    <span class="token function">it</span><span class="token punctuation">(</span><span class="token string">\'requires the description parameter\'</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span>done<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\n      <span class="token function">createToDoItem</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n        <span class="token punctuation">.</span><span class="token keyword">catch</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\n          <span class="token function">expect</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span><span class="token punctuation">.</span>to<span class="token punctuation">.</span>be<span class="token punctuation">.</span>an<span class="token punctuation">.</span><span class="token function">instanceOf</span><span class="token punctuation">(</span>Error<span class="token punctuation">)</span><span class="token punctuation">;</span>\n          <span class="token function">expect</span><span class="token punctuation">(</span>err<span class="token punctuation">.</span>message<span class="token punctuation">)</span><span class="token punctuation">.</span>to<span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span><span class="token string">\'description is required\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n          <span class="token function">done</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span><span class="token punctuation">)</span>\n        <span class="token punctuation">.</span><span class="token keyword">catch</span><span class="token punctuation">(</span>done<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n    <span class="token function">it</span><span class="token punctuation">(</span><span class="token string">\'rejects on error from the remote service\'</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span>done<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\n      <span class="token keyword">var</span> stub <span class="token operator">=</span> sinon<span class="token punctuation">.</span><span class="token function">stub</span><span class="token punctuation">(</span>request<span class="token punctuation">,</span> post<span class="token punctuation">)</span>\n        <span class="token punctuation">.</span><span class="token function">yields</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n      <span class="token function">createToDoItem</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n        <span class="token punctuation">.</span><span class="token keyword">catch</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\n          stub<span class="token punctuation">.</span><span class="token function">restore</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n          <span class="token function">done</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span><span class="token punctuation">)</span>\n        <span class="token punctuation">.</span><span class="token keyword">catch</span><span class="token punctuation">(</span>done<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n    <span class="token function">it</span><span class="token punctuation">(</span><span class="token string">\'resolves on succesfull creation\'</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span>done<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\n      <span class="token keyword">var</span> stub <span class="token operator">=</span> sinon<span class="token punctuation">.</span><span class="token function">stub</span><span class="token punctuation">(</span>request<span class="token punctuation">,</span> post<span class="token punctuation">)</span>\n        <span class="token punctuation">.</span><span class="token function">yields</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>\n          _id<span class="token punctuation">:</span> <span class="token string">\'ITEM_ID\'</span><span class="token punctuation">,</span>\n          description<span class="token punctuation">:</span> <span class="token string">\'Remember to write that blog post\'</span><span class="token punctuation">,</span>\n          completed<span class="token punctuation">:</span> <span class="token boolean">false</span>\n        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n      <span class="token function">createToDoItem</span><span class="token punctuation">(</span><span class="token string">\'Remember to write that blog post\'</span><span class="token punctuation">)</span>\n        <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span>todo<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\n          <span class="token function">expect</span><span class="token punctuation">(</span>todo<span class="token punctuation">.</span>_id<span class="token punctuation">)</span><span class="token punctuation">.</span>to<span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span><span class="token string">\'ITEM_ID\'</span><span class="token punctuation">)</span>\n          <span class="token function">expect</span><span class="token punctuation">(</span>todo<span class="token punctuation">.</span>description<span class="token punctuation">)</span><span class="token punctuation">.</span>to<span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span><span class="token string">\'Remember to write that blog post\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n          stub<span class="token punctuation">.</span><span class="token function">restore</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n          <span class="token function">expect</span><span class="token punctuation">(</span>todo<span class="token punctuation">.</span>completed<span class="token punctuation">)</span><span class="token punctuation">.</span>to<span class="token punctuation">.</span>be<span class="token punctuation">.</span><span class="token boolean">false</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span><span class="token punctuation">)</span>\n        <span class="token punctuation">.</span><span class="token keyword">catch</span><span class="token punctuation">(</span>done<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>I hope the code to be self-documented. At first, we call our function without a parameter so the first condition will be true and an error will be thrown. Then we stub the <code>request</code> object so it will run the callback function with an error. This will trigger the second condition and reject our promise. Inside the <code>catch</code> function, we know that the promise has been rejected. For the end, we stub the callback to return with a null error and a body that will resolve the promise and we test that inside the <code>then</code> function. 100% code coverage.</p>\n<p>This way we have completely isolated our Unit Under Test and made it blazingly fast to run since we don\'t make any actual HTTP requests. We pretty much covered the <a href="https://pragprog.com/magazines/2012-01/unit-tests-are-first">F.I.R.S.T. principles of Unit Testing</a>.</p>\n<p>Unit tests should be completely isolated.</p>\n<p>Always remember the <a href="http://blogs.agilefaqs.com/2011/02/01/inverting-the-testing-pyramid/">inverted testing pyramid</a>. Invest in Unit Testing so to avoid manual system testing. It is expensive.</p>',id:"/Users/Bariotis/Dev/develop/kostasbariotis.com/src/pages/isolated-unit-tests-with-sinonjs/index.md absPath of file >>> MarkdownRemark",timeToRead:2,frontmatter:{date:"2016-03-05T21:02:37.000Z",path:"/isolated-unit-tests-with-sinonjs/",tags:"TDD, javascript, node.js",title:"Isolated Unit Tests with Sinonjs",draft:null}}}}}});
//# sourceMappingURL=path---the-keys-to-scaling-yourself-as-a-technology-leader-f6f229842944b95f8d6d.js.map
webpackJsonp([123],{"./node_modules/json-loader/index.js!./.cache/json/page-4.json":function(e,t){e.exports={pathContext:{posts:[{excerpt:"Ah man, what a year! 2015 has to be my best. Last year I failed to write my resolution. But since that year went so good, I thought not to miss write one now. 2015 in review: I've joined  Goodvidio  and that was the best decision I made in 201...",html:'<p>Ah man, what a year! 2015 has to be my best. Last year I failed to write my resolution. But since that year went so good, I thought not to miss write one now.</p>\n<p>2015 in review:</p>\n<ul>\n<li>I\'ve joined <a href="https://goodvid.io">Goodvidio</a> and that was the best decision I made in 2015. Goodvidio is getting bigger and bigger and that pushes me to become a better programmer and a better professional.</li>\n<li>Lots of travelling. I went to Sofia, Brussels, Cyprus and Athens. Not to mention the usual snowboarding weekend road trips. Unfortunately, our trip to Paris has been canceled due to <a href="https://en.wikipedia.org/wiki/November_2015_Paris_attacks">November\'s Paris attack</a>. Won\'t miss next time.</li>\n<li>Made a lot of public speaking. I\'ve prepared <a href="https://slides.com/kostasbariotis/">3 presentations</a> and made over 5 talks on them. Speaking in conferences is not only about talking to other people. It\'s also about listening to what others have to say about you.</li>\n<li>Lots of reading. 2015 wasn\'t so much of tech reading like the years before. I\'ve read a lot of <a href="https://en.wikipedia.org/wiki/Nineteen_Eighty-Four">classics</a>, as much as <a href="https://en.wikipedia.org/wiki/The_Saviors_of_God">literature</a> and <a href="https://37signals.com/rework/">other</a> <a href="http://zerotoonebook.com/">interesting</a> <a href="https://en.wikipedia.org/wiki/The_Shock_Doctrine">stuff</a>.</li>\n<li>I\'ve actively engaged with the local <a href="http://www.meetup.com/Thessaloniki-Node-js-Meetup/">Nodejs meetup</a> and helped a lot on the processes. Also, shooting and directing the <a href="https://vimeo.com/146544394">promo</a> <a href="https://vimeo.com/138629583">videos</a> was so much fun.</li>\n</ul>\n<br/>\n2015 was a blast for me and I didn\'t even had any goals set. The only goal was to take as much as I could out of it. But now, I want 2016 to be more structured and goal oriented.\n<blockquote>\n<p>“If you fail to plan, you are planning to fail!”</p>\n</blockquote>\n<blockquote>\n<p>Benjamin Franklin</p>\n</blockquote>\n<p>And my goals for 2016:</p>\n<ul>\n<li>I want to travel more. I\'ve found that tech conferences are a great excuse for that.</li>\n<li>Even more reading and writing to my blog. Writing and maintaining a blog is hard. My problem is that I don\'t want to be publishing stuff that are not perfect and don\'t meet my reading standards. <a href="http://lifehacker.com/5864004/the-done-manifesto-lays-out-13-ground-rules-for-getting-to-done">But we should laugh at perfection</a>. There is no such thing. As an experiment, I will try to write as much as possible. This has to be the only way to become better. But, there can\'t be writing without reading and in 2016 I must keep a balance between reading tech oriented and other books. I need not to be left behind in the tech scene but also to start dusty corners of information that I had never seen before.</li>\n<li>I want to speak to an international conference. That it\'s going to be a challenge and way out my comfort zone. Still, I think, the benefits from doing such a move are going to be huge. I must not miss that opportunity.</li>\n<li>It\'s been a long time now since I wanted to be in a better physical shape. Unfortunately, 2015 wasn\'t the year for that. I am following a good diet and I am not eating much of junk no more. But I really need  to invest on the weight lifting more. 2016 will be the year for that.</li>\n</ul>\n<blockquote>\n<p>Laugh at perfection. It\'s boring and keeps you from being done.</p>\n</blockquote>\n<blockquote>\n<p>The Cult of Done Manifesto</p>\n</blockquote>\n<p>What are your goals?</p>',id:"/Users/Bariotis/Dev/develop/gatsby-blog-starter-kit/src/pages/beyond-sunset/index.md absPath of file >>> MarkdownRemark",timeToRead:3,frontmatter:{date:"2015-12-27T11:27:02.000Z",path:"/beyond-sunset",tags:null,title:"Beyond sunset"}},{excerpt:"We started adopting a Queue-Centric workflow recently at  Goodvidio , although it's still too early to talk whether it served us well and what the benefits were. In this article I would like to talk about the mindset of adopting such an...",html:"<p>We started adopting a Queue-Centric workflow recently at <a href=\"http://goodvid.io\">Goodvidio</a>, although it's still too early to talk whether it served us well and what the benefits were. In this article I would like to talk about the mindset of adopting such an infrastructure and some key concepts you must keep in mind, especially when using <a href=\"https://aws.amazon.com/sqs/\">AWS's SQS</a>, a cloud hosted Messaging System.</p>\n<p>Besides SQS, there is also, <a href=\"https://azure.microsoft.com/en-us/services/storage/\">Azure's Storage</a> and I am sure there are others as well. There are also <a href=\"http://queues.io/\">open source implementations</a> that you can host on your machines.</p>\n<h2>What's a QCW</h2>\n<p>A QCW is purely described by the separation of the Web Tier that generates requests and the Service Tier that processes them and it's a subset of the <a href=\"http://martinfowler.com/bliki/CQRS.html\">CQRS pattern</a>. Thus, loose coupling of the dependent services can be achieved.</p>\n<p>The essential part here is that we are going from a <em>direct response of the Server</em> model to a <em>I will process that later, continue with what you're doing</em> model, moving towards a Tasks Based workflow. It's a great candidate for time consuming processes or when the possibility of a system to be down is high and won't be able to service requests immediately. The <em>at-least-once delivery</em> of requests can be guaranteed.</p>\n<p>By Queue we are referring to a service that implements the standard data structure Queue and sits between a Producer and a Consumer. The Producers generates requests and puts them in the Queue via an <a href=\"http://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/MakingRequestsArticle.html\">API</a>. The Consumer then reads the Queue and processes them. The communication is asynchronous which mean that the Producers won't get an immediate response from the requests that sends.  Instead the Consumer may then choose to somehow inform the Producer about the results. Either by sending an email to the admin or by sending a message through a WebSocket that can then be displayed directly to the user.</p>\n<h2>Why to use it</h2>\n<p>While there are a lot of problems such a workflow can solve, the most common one is that the processing part of our application can't handle eager clients that are sending requests too fast or send requests that will take too long to process.</p>\n<p>The Producers can send requests to the Consumer, through the Queue, as aggressively as he wants, but the Consumer will process them based on the current workload.</p>\n<p>By keeping Requests to a separate place we can also not worry about losing requests since the Consumer can go off and back online again and start processing requests from the point where he left them.</p>\n<p>There are many more gains but we found those to be the most essential problems we need to solve.</p>\n<h2>Consuming the Queue</h2>\n<p>A complex thing about consuming a Queue is that of the Consumer and the policy he follows for reading and processing messages. In general, the flow goes like this:</p>\n<ol>\n<li>Get the next available message from the top of the Queue</li>\n<li>Process the message</li>\n<li>Delete the message</li>\n</ol>\n<p>It's essential to note that you need the message that is in the the top of the queue. Otherwise, you can't guarantee that all messages will be processed in the same time period. You need the <strong><a href=\"https://en.wikipedia.org/wiki/FIFO\">FIFO</a></strong> policy. Unfortunately, AWS SQS can't guarantee that for you, because of their distributed nature and you have to implement such functionality by your self.</p>\n<h3>Long Polling</h3>\n<p>In order to get new messages, you have to ask the Queue once in a while if it has any messages. That's <a href=\"http://stackoverflow.com/a/12855533/1955940\">Polling</a>. Several implementation provides some sort of Pushing mechanism that will directly notify a Consumer that there are pending messages to be processed. SQS doesn't support that, but they support <strong><a href=\"http://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-long-polling.html\">Long Polling</a></strong> which is actually when we ask the Queue for new messages and if there are none, the connection is being kept alive until there is one or till the connection times out. SQS supports up to 20 seconds of Long Polling. After that, we must re ask the Queue and wait another 20 seconds.</p>\n<h3>Visibility Timeout</h3>\n<p>While processing a message, a lot of things can go wrong that will make the process to fail. In such case, the message can't be deleted and must remain in the Queue in order to reprocess it. But if we leave it there, it's going to be returned over and over again and we can't be sure that is going to succeed the next time. Instead of deleting the message, the Queue can hide it for a specific period of time, so we can continue processing other messages and reprocess that message at some point in the future again. This is a <strong><a href=\"http://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/AboutVT.html\">Queue's Visibility Timeout</a></strong>.</p>\n<h3>Poisoned Messages</h3>\n<p>Still, this won't guarantee that the message will be processed successfully at any time. The message may be poisoned, that means that it failed passing our domain's model requirements and that it won't be processed unless we change our logic. Those are called <strong>Poison Messages</strong> and a policy must be specified that will take care of those. For example, a counter may be kept for each poisoned message and after the third time that it failed to be processed it must be deleted.</p>\n<h3>Dead Letter Queues</h3>\n<p>In case of such a failure, you don't want to bypass that without investigating the cause. You'll need to know what was the reason that marked the message as poisoned. Hopefully, instead of deleting it after the third attempt, you can store it in a <strong><a href=\"http://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/SQSDeadLetterQueue.html\">Dead Letter Queue</a></strong>. A Dead Letter Queue is simply another Queue that holds only the failed messages. Those can be messages that couldn't be processed or messages that couldn't be pushed in the Queue cause it's full or non responding. After you store them there, you can go back at any time and examine those messages and see what you have done wrong in the first place.</p>\n<h2>Finally</h2>\n<p>So we talked about what a QCW is, how it can be used and also for some key concepts of SQS such as Queue's Visibility Timeout, Polling, Poison Messages and Dead Letter Queues. AWS has a great <a href=\"https://aws.amazon.com/documentation/sqs/\">documentation on SQS</a>.</p>\n<p>Also, <a href=\"http://www.bennadel.com/index.cfm\">Ben Addel</a> has a nice implementation of a <a href=\"http://www.bennadel.com/blog/2792-shedding-the-monolithic-application-with-aws-simple-queue-service-sqs-and-node-js.htm\">Nodejs SQS Consumer</a> that uses Promises to do Long Polling. It is basic, without handling Poison Messages or using Dead Letter Queues and it's a great starting point.</p>\n<p>I've also found the Queue Centric Workflow chapter of the <a href=\"http://www.amazon.com/Cloud-Architecture-Patterns-Using-Microsoft/dp/1449319777\">Cloud Architecture Patterns</a> books to have some excellent resources.</p>\n<p>If you have any previous experience in any of the subjects talked above, please share it in the comments. Thank you!</p>",id:"/Users/Bariotis/Dev/develop/gatsby-blog-starter-kit/src/pages/queue-centric-workflow/index.md absPath of file >>> MarkdownRemark",timeToRead:5,frontmatter:{date:"2015-12-06T13:33:15.000Z",path:"/queue-centric-workflow",tags:"Microservices, node.js, AWS, QCW",title:"Queue-Centric Workflow"}},{excerpt:"While we were moving towards the  Microservices  path at  Goodvidio , we were in the need of keeping in a central place the configuration of our system. Thus, we created the  Configuration Service . The  Configuration Service  exposes a REST API...",html:'<p>While we were moving towards the <a href="http://martinfowler.com/microservices/">Microservices</a> path at <a href="https://goodvid.io">Goodvidio</a>, we were in the need of keeping in a central place the configuration of our system. Thus, we created the <em>Configuration Service</em>.</p>\n<p>The <em>Configuration Service</em> exposes a REST API (like all of our services) and provides a place to store configuration variables and values to all of our developers. Each Service of our infrastructure can have a record stored in the <em>Configuration Service</em>. Those records will then be consumed and manipulated by a front end screen, so that even non technical people can alter their values.</p>\n<p>As a developer that I am working in a feature and I want to make use of the <em>Configuration Service</em>, I must first make sure that there isn\'t already a record for the Service that I work on and if there isn\'t I have to create it.</p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>GET /v1/configurations/ONBOARDING</code></pre>\n      </div>\n<p>If the above call return an empty array, I can create it by <code>POST</code>ing a body:</p>\n<div class="gatsby-highlight">\n      <pre class="language-json"><code><span class="token punctuation">{</span>\n  <span class="token property">"_id"</span><span class="token operator">:</span> <span class="token string">"ONBOARDING"</span><span class="token punctuation">,</span>\n  <span class="token property">"configuration"</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token property">"free_trial_duration"</span> <span class="token operator">:</span> <span class="token string">"43800"</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>This way we keep all the configuration of our System in a central place and even the marketing team can decide some day to change the duration of the free trial period.</p>\n<p>That means fewer deployments, thus faster involvement.</p>',id:"/Users/Bariotis/Dev/develop/gatsby-blog-starter-kit/src/pages/the-configuration-service/index.md absPath of file >>> MarkdownRemark",timeToRead:1,frontmatter:{date:"2015-11-13T18:51:34.000Z",path:"/the-configuration-service",tags:"Microservices",title:"The Configuration Service"}},{excerpt:"User stories  are a part of every agile driven process that teams usually follow. Often, even a developer can be called to write a story, based on a business requirement, that will eventually be called to develop it. Here's an example: As a Developer...",html:'<p><a href="https://en.wikipedia.org/wiki/User_story">User stories</a> are a part of every agile driven process that teams usually follow.</p>\n<p>Often, even a developer can be called to write a story, based on a business requirement, that will eventually be called to develop it. Here\'s an example:</p>\n<p><em>As a Developer, I want to be able to filter Blog Posts by Category ID, so I can display a filtered table.</em></p>\n<p>But one can easily be distracted and write a story based on their understanding of how consumers are using their code. Much like product owners.</p>\n<p>Before you start, talk to your consumers. See how their are using your code or your REST API. Ask them for feedback and for possible hard times they have with it.</p>\n<p>Then, write your user stories, based on that.</p>',id:"/Users/Bariotis/Dev/develop/gatsby-blog-starter-kit/src/pages/user-stories/index.md absPath of file >>> MarkdownRemark",timeToRead:1,frontmatter:{date:"2015-10-22T17:03:09.000Z",path:"/user-stories",tags:null,title:"User Stories as in User Stories"}},{excerpt:'"... and once you understand that, once you truly believe that, then you\'re free."',html:'<blockquote>\n<p>"... and once you understand that, once you truly believe that, then you\'re free."</p>\n</blockquote>\n<iframe width="100%" height="400px" src="https://www.youtube.com/embed/8pTEmbeENF4" frameborder="0" allowfullscreen></iframe>',id:"/Users/Bariotis/Dev/develop/gatsby-blog-starter-kit/src/pages/dont-know-what-im-doing/index.md absPath of file >>> MarkdownRemark",timeToRead:1,frontmatter:{date:"2015-10-11T10:01:17.000Z",path:"/dont-know-what-im-doing",tags:"programming",title:"I don't know what I'm doing"}}],page:4,pagesSum:17}}}});
//# sourceMappingURL=path---page-4-7c7e61fc9924c883cf4b.js.map
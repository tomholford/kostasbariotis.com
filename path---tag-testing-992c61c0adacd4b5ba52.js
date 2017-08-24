webpackJsonp([975147215283069e4],{"./node_modules/json-loader/index.js!./.cache/json/tag-testing.json":function(e,t){e.exports={data:{site:{siteMetadata:{title:"Kostas Bariotis' Blog",description:"I'm Kostas Bariotis, a web developer, a proud wanderer and a passionate doer. My mission is to write clean and efficient code, to solve problems on the web and to learn something more.",siteUrl:"https://kostasbariotis.com"}}},pathContext:{posts:[{excerpt:"I gave a talk entitled  TDD with Node.js  in the  latest   SKGNode.js meetup . I explained the concept of TDD and described my tools of choice for integrating the TDD flow with Node.js. It was great. I didn't got into GUI testing and I saw a major...",html:'<p>I gave a talk entitled <a href="http://slides.com/kostasbariotis/tdd-nodejs">TDD with Node.js</a> in the <del>latest</del> <a href="https://www.meetup.com/Thessaloniki-Node-js-Meetup/">SKGNode.js meetup</a>. I explained the concept of TDD and described my tools of choice for integrating the TDD flow with Node.js. It was great.</p>\n<p>I didn\'t got into GUI testing and I saw a major interest on that. So I decided to take a look at the current state of GUI testing. Here are the main tools that I came up with:</p>\n<h2>Zombie.js</h2>\n<p><a href="http://zombie.js.org/">Zombie</a> uses <a href="https://github.com/tmpvar/jsdom">jsdom</a> to parse the required HTML and Javascript and then simulate the desired behaviour. I find it a great tool for testing basic functionality in small apps.</p>\n<p>JSDom will create an in memory representation of the DOM and execute any Javascript dependencies so you can do a real testing scenario. Since it doesn\'t uses a real browser engine you can\'t find abnormalities of real world situations. So you can\'t rely on it for cross browser compatibility.</p>\n<p>I got very frustrated while trying to test AJAX powered pages. For SPA apps, Zombie wouldn\'t be an ideal solution.</p>\n<h2>Casper.js</h2>\n<p><a href="http://casperjs.org/">Casper</a> on the other hand, is a wrapper around <a href="http://phantomjs.org/">Phantom.js</a> which utilises a <a href="https://webkit.org/">Webkit</a> headless browser and will do a full rendering of your web page in order to test it. Since you will have a full representation of your site you can even <a href="https://github.com/sindresorhus/pageres">take screenshots for easier QA</a>.</p>\n<p>Casper.js has neat documentation and it\'s API is really easy to follow and adopt.</p>\n<h2>Nightwatch.js</h2>\n<p>Now, on the heavy side, we have <a href="http://www.seleniumhq.org/">Selenium</a>. Selenium is a set of projects. It started off by auto running browsers and injecting code into them so we can test it. Since then, browsers vendors kept evolving and expose a full set of control over their browsers so Selenium has native support over those, with the <a href="http://www.seleniumhq.org/projects/webdriver/">Selenium WebDriver</a>.</p>\n<p>You will have to install all the browsers you need to test locally and then use Selenium to run tests on them. It\'s pretty basic.</p>\n<p>Selenium\'s internals and configuration is a bit overcomplicated and if you don\'t need it, you don\'t have to get into it. <a href="http://nightwatchjs.org/">Nightwatch</a> is a great layer of abstraction on top of Selenium that will do all the heavy work for you.</p>\n<h1>At the end</h1>\n<p>I am sure there are tone of other solutions out there. Although, you will have to do a research on your own before starting your GUI testing journey, at then end just pick one and start.</p>\n<p>Are you using something already? What\'s that?</p>',id:"/Users/Bariotis/Dev/develop/kostasbariotis.com/src/pages/automated-gui-testing-solutions/index.md absPath of file >>> MarkdownRemark",timeToRead:2,frontmatter:{date:"2016-01-08T06:03:02.000Z",path:"/automated-gui-testing-solutions/",tags:"GUI, javascript, Testing, node.js",title:"Automated GUI Testing Solutions",draft:null}}],tag:"Testing",pagesSum:1,page:1}}}});
//# sourceMappingURL=path---tag-testing-992c61c0adacd4b5ba52.js.map
webpackJsonp([10],{"./node_modules/json-loader/index.js!./.cache/json/valiation-the-most-awesome-validation-engine-ever-created-for-php.json":function(e,t){e.exports={data:{site:{siteMetadata:{title:"Kostas Bariotis' Blog",description:"I'm Kostas Bariotis, a web developer, a proud wanderer and a passionate doer. My mission is to write clean and efficient code, to solve problems on the web and to learn something more.",siteUrl:"https://kostasbariotis.com"}},markdownRemark:{html:'<p>The past few weeks, you would find Validation at <a title="Github PHP Trending Projects" href="https://github.com/trending?l=php" target="_blank">Github\'s PHP Trending projects.</a></p>\n<p><a title="Respect/Validation on Github" href="https://github.com/Respect/Validation" target="_blank">Validation</a> is a very flexible, fully customizable, loaded with tone of validators, engine that you can use on your PHP projects right away.</p>\n<p>Here is a great list why this library it\'s actually awesome.</p>\n<p>From <a title="Respect/Validation on Reddit" href="http://www.reddit.com/r/PHP/comments/1telis/respectvalidation_the_most_awesome_validation/ce7emzs" target="_blank">Reddit</a>:</p>\n<blockquote>\n<ul>\n\t<li>The chain is not a simple chain (it is not just linear), it is a fluent builder for a composite structure. You can write almost any validation rule for any data structure and group it in a single object:v::key("name", v::string()-&gt;length(1, 32)) -&gt;key("birth", v::date(\'Y-m-d\')-&gt;minimumAge(18)) -&gt;assert($someArrayWithData);</li>\n\t<li>You can nest as many validators as you want.</li>\n\t<li>Each validator is an instance that you can reuse (even for composing new, more complex instances).</li>\n\t<li>Three kinds of validation reports (validate() returns true/false, check() stops on first error, assert() collect all errors).</li>\n\t<li>Nested reports implement RecursiveIteratorIterator AND RecursiveTreeIterator (that\'s where the ASCII tree report came from!)</li>\n\t<li>A selector API for finding messages in complex nested reports (findMessages(["user.address.street.length"])).</li>\n\t<li>Reports are only generated when needed (true/false validation doesn\'t even touch the reporting system).</li>\n\t<li>Really easy to extend (most rules have a single method).</li>\n\t<li>Really easy to make inline rules:v::callback(function ($input) { return $input == 42; });</li>\n\t<li>Logic operations on any validator:v::allOf(v::numeric(), v::hexa(), v::min(1)); // numeric, hexadecimal and at least 1 v::oneOf(v::nullValue(), v::numeric()); // null or numeric</li>\n\t<li>Integrates with ZF1, ZF2 and Symfony2 validators if needed. Dependency is optional.</li>\n\t<li>A full concrete API (not relying on magic methods or chains) that can be built using dependency injection.</li>\n\t<li>Straightforward to use on unit tests instead of the PHPUnit assertion library.</li>\n</ul>\n</blockquote>\nHere i wrote a simple User Model class where we can make our validation:\n<p><a href="https://gist.github.com/stakisko/dfba7e1b576954232cd5">https://gist.github.com/stakisko/dfba7e1b576954232cd5</a></p>\n<p>Validation will throw an exception when it fail and you can inform your users.</p>',excerpt:"The past few weeks, you would find Validation at  Github's PHP Trending projects. Validation  is a very flexible, fully customizable, loaded...",frontmatter:{date:"October 08, 2014",path:"/valiation-the-most-awesome-validation-engine-ever-created-for-php",tags:"php, validation, oop",title:"Valiation : The most awesome validation engine ever created for PHP",draft:null}}},pathContext:{prev:{excerpt:"Recently, my colleague  Yannis Rizos , tweeted me about a  book . Its title was somehow offensive and didn't look quite interesting at first. But once i started browsing it, i catch some really good points and decided to start from the beginning...",html:'<p>Recently, my colleague <a title="Yannis Rizos on Twitter.com" href="http://twitter.com/yrizos" target="_blank">Yannis Rizos</a>, tweeted me about a <a href="http://samizdat.mines.edu/howto/HowToBeAProgrammer.html" target="_blank" title="How to Be a Programmer">book</a>. Its title was somehow offensive and didn\'t look quite interesting at first.</p>\n<p>But once i started browsing it, i catch some really good points and decided to start from the beginning.</p>\n<p>Written by <a title="Robert L Read" href="http://c2.com/cgi/wiki?RobertlRead" target="_blank"><span class="firstname">Robert</span> <span class="othername">L</span> <span class="surname">Read</span></a>, it\'s a free essay, ~100 pages long.</p>\n<p>It is listing all the borrows and challenges a programmer will face and must pass in order to become a programmer.</p>\n<p>Starts with the most essential skill of a programmer, debugging. How to debug and some of the most trivial bugs you will eventually find in your code.</p>\n<p>It goes on with more skills like motivation, evolution, how to stress test, be a team player and communicate effectively with every type of people involved in this industry.</p>\n<p>It is divided in 3 chapters, Beginner, Intermediate and Advanced and every chapter contains a few paragraphs for every concept.</p>\n<p>I was really amazed by this essay and i would surely recommended to every beginner, junior, mid-senior professional programmer. I guess senior would already know these stuffs.</p>\n<p>What are you favorite recent reads?</p>',id:"/Users/Bariotis/Dev/develop/kostasbariotis.com/src/pages/how-to-be-a-programmer-by-robert-l-read/index.md absPath of file >>> MarkdownRemark",timeToRead:1,frontmatter:{date:"2014-10-25T10:54:21.000Z",path:"/how-to-be-a-programmer-by-robert-l-read",tags:"clean code, code, programmers, debugging",title:"How To Be A Programmer by Robert L Read",draft:null}},next:{excerpt:"I am introducing  Stargento.com  to the  Magento  community. I am looking forward for your thoughts and feedback. Hit me on  Twitter . This is a meta-post for a post i wrote on  Medium . Thoughts?",html:'<p>I am introducing <a title="Stargento is an online PHP Sandbox and a Magento playground" href="http://stargento.com" target="_blank">Stargento.com</a> to the <a title="Magento" href="http://magentocommerce.com/" target="_blank">Magento</a> community. I am looking forward for your thoughts and feedback.</p>\n<p>Hit me on <a title="Kostas Bariotis on Twitter" href="http://twitter.com/kbariotis" target="_blank">Twitter</a>.</p>\n<p>This is a meta-post for a post i wrote on <a href="https://medium.com/@kbariotis/introducing-stargento-com-d7b202f2a55d">Medium</a>. Thoughts?</p>',id:"/Users/Bariotis/Dev/develop/kostasbariotis.com/src/pages/introducing-stargento-com/index.md absPath of file >>> MarkdownRemark",timeToRead:1,frontmatter:{date:"2014-09-24T16:16:00.000Z",path:"/introducing-stargento-com",tags:"stargento.com, magento",title:"Introducing Stargento.com",draft:null}}}}}});
//# sourceMappingURL=path---valiation-the-most-awesome-validation-engine-ever-created-for-php-9f24c1727a77beb393cd.js.map
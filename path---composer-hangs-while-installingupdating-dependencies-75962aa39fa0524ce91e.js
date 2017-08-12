webpackJsonp([151],{"./node_modules/json-loader/index.js!./.cache/json/composer-hangs-while-installingupdating-dependencies.json":function(e,o){e.exports={data:{markdownRemark:{html:'<p>A common dis-functionality of <a title="Composer PHP " href="https://getcomposer.org" target="_blank">Composer </a>is that when it just hangs while installing or updating dependencies. Especially when using heavy packages like these of Symfony, Composer is going to run hard.</p>\n<p>This issue is not new, and while there is been <a title="Composer freezing when installing symfony vendors" href="http://stackoverflow.com/questions/17138319/composer-freezing-when-installing-symfony-vendors" target="_blank">some </a><a title="Slow updating of composer dependencies, despite --prefer-dist flag" href="http://stackoverflow.com/questions/19316650/slow-updating-of-composer-dependencies-despite-prefer-dist-flag" target="_blank">discussion </a><a title="Running an update just hangs #1959" href="https://github.com/composer/composer/issues/1959" target="_blank">about </a><a title="Composer seems hanged on &quot;Updating dependencies&quot; #2378" href="https://github.com/composer/composer/issues/2378" target="_blank">it</a> i still encounter issues running on a generally old machine with 4GB ram and a Core2Duo CPU.</p>\n<p>Whilst i tried all of the suggested solution i ended up discovering that the problem is when you use the wildcard(*) for choosing the vendor package version.</p>\n<p>Prefer using the latest version of the package you want instead of the wildcard(*) the next time you encounter the same problem.</p>\n<p>Instead of writing</p>\n<pre><code>...\n\n&quot;require&quot;: {\n\n    &quot;monolog/monolog&quot;:&quot;1.*&quot;\n\n}\n\n...</code></pre>\n<p>write</p>\n<pre><code>...\n\n&quot;require&quot;: {\n\n    &quot;monolog/monolog&quot;:&quot;1.10.0&quot;\n\n}\n\n...</code></pre>\n<p> </p>\n<p>You can also try cleaning your Composer cache which is located at %APPDATA%/local/composer/ on Windows and using -<a title="Composer Install Dependencies CLI options" href="https://getcomposer.org/doc/03-cli.md#install" target="_blank">-prefer-dist</a> flag which tries to download a zip file of the package whenever one is available.</p>\n<p>Last but not least, use --vvv flag for a more <a title="Composer CLI Global Options" href="https://getcomposer.org/doc/03-cli.md#global-options" target="_blank">verbose </a>output of the Composer and --profile displaying some hardware information at the end.</p>',frontmatter:{date:"August 09, 2014",path:"/composer-hangs-while-installingupdating-dependencies",tags:null,title:"Composer hangs while installing/updating dependencies"}}},pathContext:{prev:{excerpt:"Are you always in the wild trying to find the most awesome PHP projects? Are your bookmarks a mess? Here is a  curated list  of amazingly awesome PHP libraries, resources and shiny things. Everything under a category, not every resource but the most...",html:'<p>Are you always in the wild trying to find the most awesome PHP projects? Are your bookmarks a mess?</p>\n<p>Here is a <a title="Awesome PHP" href="https://github.com/ziadoz/awesome-php" target="_blank">curated list</a> of amazingly awesome PHP libraries, resources and shiny things.</p>\n<p>Everything under a category, not every resource but the most promising that will definitely do your job.</p>\n<p>What are your thoughts?</p>',id:"/Users/Bariotis/Dev/develop/gatsby-blog-starter-kit/src/pages/a-collection-of-php-libraries-you-should-know/index.md absPath of file >>> MarkdownRemark",timeToRead:1,frontmatter:{date:"2014-08-22T14:33:27.000Z",path:"/a-collection-of-php-libraries-you-should-know",tags:null,title:"A collection of PHP libraries you should know",draft:null}},next:{excerpt:"Here's a female experience on a technical conference. Makes me sad.",html:"<p>Here's a female experience on a technical conference. Makes me sad.</p>",id:"/Users/Bariotis/Dev/develop/gatsby-blog-starter-kit/src/pages/my-first-oscon/index.md absPath of file >>> MarkdownRemark",timeToRead:1,frontmatter:{date:"2014-08-04T17:49:07.000Z",path:"/my-first-oscon",tags:null,title:"My first OSCON",draft:null}}}}}});
//# sourceMappingURL=path---composer-hangs-while-installingupdating-dependencies-75962aa39fa0524ce91e.js.map
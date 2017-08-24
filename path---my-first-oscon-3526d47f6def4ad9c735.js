webpackJsonp([0x2043cc8533e0c000],{"./node_modules/json-loader/index.js!./.cache/json/my-first-oscon.json":function(e,a){e.exports={data:{site:{siteMetadata:{title:"Kostas Bariotis' Blog",description:"I'm Kostas Bariotis, a web developer, a proud wanderer and a passionate doer. My mission is to write clean and efficient code, to solve problems on the web and to learn something more.",siteUrl:"https://kostasbariotis.com"}},markdownRemark:{html:"<p>Here's a female experience on a technical conference. Makes me sad.</p>",excerpt:"Here's a female experience on a technical conference. Makes me sad.",frontmatter:{date:"August 04, 2014",path:"/my-first-oscon/",tags:null,title:"My first OSCON",draft:null}}},pathContext:{prev:{excerpt:"A common dis-functionality of  Composer  is that when it just hangs while installing or updating dependencies. Especially when using heavy packages like these of Symfony, Composer is going to run hard. This issue is not new, and while there is been...",html:'<p>A common dis-functionality of <a title="Composer PHP " href="https://getcomposer.org" target="_blank">Composer </a>is that when it just hangs while installing or updating dependencies. Especially when using heavy packages like these of Symfony, Composer is going to run hard.</p>\n<p>This issue is not new, and while there is been <a title="Composer freezing when installing symfony vendors" href="http://stackoverflow.com/questions/17138319/composer-freezing-when-installing-symfony-vendors" target="_blank">some </a><a title="Slow updating of composer dependencies, despite --prefer-dist flag" href="http://stackoverflow.com/questions/19316650/slow-updating-of-composer-dependencies-despite-prefer-dist-flag" target="_blank">discussion </a><a title="Running an update just hangs #1959" href="https://github.com/composer/composer/issues/1959" target="_blank">about </a><a title="Composer seems hanged on &quot;Updating dependencies&quot; #2378" href="https://github.com/composer/composer/issues/2378" target="_blank">it</a> i still encounter issues running on a generally old machine with 4GB ram and a Core2Duo CPU.</p>\n<p>Whilst i tried all of the suggested solution i ended up discovering that the problem is when you use the wildcard(*) for choosing the vendor package version.</p>\n<p>Prefer using the latest version of the package you want instead of the wildcard(*) the next time you encounter the same problem.</p>\n<p>Instead of writing</p>\n<div class="gatsby-highlight">\n      <pre class="language-json"><code>&amp;quot<span class="token punctuation">;</span>require&amp;quot<span class="token punctuation">;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n\n    &amp;quot<span class="token punctuation">;</span>monolog/monolog&amp;quot<span class="token punctuation">;</span><span class="token operator">:</span>&amp;quot<span class="token punctuation">;</span><span class="token number">1</span>.*&amp;quot<span class="token punctuation">;</span>\n\n<span class="token punctuation">}</span>\n\n...\n</code></pre>\n      </div>\n<p>write</p>\n<div class="gatsby-highlight">\n      <pre class="language-json"><code>...\n\n&amp;quot<span class="token punctuation">;</span>require&amp;quot<span class="token punctuation">;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n\n    &amp;quot<span class="token punctuation">;</span>monolog/monolog&amp;quot<span class="token punctuation">;</span><span class="token operator">:</span>&amp;quot<span class="token punctuation">;</span><span class="token number">1.10</span>.<span class="token number">0</span>&amp;quot<span class="token punctuation">;</span>\n\n<span class="token punctuation">}</span>\n\n...\n</code></pre>\n      </div>\n<p> </p>\n<p>You can also try cleaning your Composer cache which is located at %APPDATA%/local/composer/ on Windows and using -<a title="Composer Install Dependencies CLI options" href="https://getcomposer.org/doc/03-cli.md#install" target="_blank">-prefer-dist</a> flag which tries to download a zip file of the package whenever one is available.</p>\n<p>Last but not least, use --vvv flag for a more <a title="Composer CLI Global Options" href="https://getcomposer.org/doc/03-cli.md#global-options" target="_blank">verbose </a>output of the Composer and --profile displaying some hardware information at the end.</p>',id:"/Users/Bariotis/Dev/develop/kostasbariotis.com/src/pages/composer-hangs-while-installingupdating-dependencies/index.md absPath of file >>> MarkdownRemark",timeToRead:1,frontmatter:{date:"2014-08-09T07:22:26.000Z",path:"/composer-hangs-while-installingupdating-dependencies/",tags:null,title:"Composer hangs while installing/updating dependencies",draft:null}},next:{excerpt:"Having an easy way to switch PHP version is indeed a neat feature. Wampserver makes it easy for developers (like me!!) who works on Windows. Here's how. First if you haven't update your WAMP installation for a while here's a chance to do it. Keep a...",html:'<p>Having an easy way to switch PHP version is indeed a neat feature. Wampserver makes it easy for developers (like me!!) who works on Windows. Here\'s how.</p>\n<p>First if you haven\'t update your WAMP installation for a while here\'s a chance to do it. Keep a backup of your configuration files and your database, then remove WAMP from <strong>Programs and Features. </strong>Download the latest <a title="Wampserver" href="http://www.wampserver.com">WAMP</a> and install it. Then restore you backups. Now you should have the latest build of Apache/PHP/Mysql.</p>\n<p>But you also need a previous version of PHP. What about it? Well it\'s easy. Download the version you need from <a title="PHP releases for Windows" href="http://windows.php.net/downloads/releases/">here</a>. Create a folder under [WAMP_FOLDER]/bin/php/ with the name \'php\' and the version you have just downloaded and extract the contents of the zip file there. There it should have another folder which is the current PHP version of WAMP.</p>\n<p>Now we need a last thing for the WAMP server to recognize this install. Copy from the default PHP version\'s folder three files:</p>\n<ul>\n\t<li>php.ini</li>\n\t<li>phpForApache.ini</li>\n\t<li>wampserver.conf</li>\n</ul>\nand paste them on the folder you have just created. Change the \'extension_dir\' setting from the first two files and open the third and make any appropriate changes.\n<p>Terminate WAMP and run it again, n<strong>ot just restart it\'s services.</strong> And there you have it. Multiple PHP versions in just a click. Sweet right?</p>\n<p>\n          <a\n            class="gatsby-resp-image-link"\n            href="undefined"\n            style="display: block"\n            target="_blank"\n            rel="noopener"\n          >\n            <span\n              class="gatsby-resp-image-wrapper"\n              style="position: relative; z-index: -1; display: block; "\n            >\n              <span\n                class="gatsby-resp-image-background-image"\n                style="padding-bottom: 105.32544378698225%;position: relative; width: 100%; bottom: 0; left: 0; background-image: url(\'data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAVABQDASIAAhEBAxEB/8QAGAABAQEBAQAAAAAAAAAAAAAAAAMCBAX/xAAWAQEBAQAAAAAAAAAAAAAAAAABAAL/2gAMAwEAAhADEAAAAfc4btGkjnECbAv/xAAbEAACAwADAAAAAAAAAAAAAAAAAgEREgMTIf/aAAgBAQABBQIR3ac2V7GSpJ5WiUfJ30f/xAAWEQEBAQAAAAAAAAAAAAAAAAAAERD/2gAIAQMBAT8BVc//xAAWEQEBAQAAAAAAAAAAAAAAAAAAERD/2gAIAQIBAT8BTI//xAAcEAACAgIDAAAAAAAAAAAAAAAAARFBMTICIaH/2gAIAQEABj8COUvDMmzHBZQ+rNfT/8QAHBAAAgMAAwEAAAAAAAAAAAAAAAERITFBUaGB/9oACAEBAAE/ITJyFQuBtZ+S9tOyLH52S8+ysIVrlMtHmH//2gAMAwEAAgADAAAAEKfQPf/EABgRAQEAAwAAAAAAAAAAAAAAAAABESFx/9oACAEDAQE/ENuEpmv/xAAYEQADAQEAAAAAAAAAAAAAAAAAAREhcf/aAAgBAgEBPxBRJnY8wg//xAAdEAEAAgIDAQEAAAAAAAAAAAABABEhMUFRoZHw/9oACAEBAAE/EDcrlFGf1K1GuksoG1gpzBvnaPVcwBfrFS7GSLkF74VfEuBaV+an/9k=\'); background-size: cover; display: block;"\n              >\n                <img\n                  class="gatsby-resp-image-image"\n                  style="width: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n                  alt="PHP Multiple Versions"\n                  title=""\n                  src="/static/a2ad69764ae9a649fabd9dce1333fd1c-2ac8d.jpg"\n                  srcset="/static/a2ad69764ae9a649fabd9dce1333fd1c-451ee.jpg 188w,\n/static/a2ad69764ae9a649fabd9dce1333fd1c-2ac8d.jpg 338w"\n                  sizes="(max-width: 750px) 100vw, 750px"\n                />\n              </span>\n            </span>\n          </a>\n          </p>\n<p><em>UPDATE (20/09/2014) : Remember to download the Thread Safe version of PHP. Here\'s a brief <a title="Thread Safe VS Non Thread Safe PHP" href="http://stackoverflow.com/a/3983918/1955940" target="_blank">explanation </a>on what\'s the difference.</em></p>',id:"/Users/Bariotis/Dev/develop/kostasbariotis.com/src/pages/multiple-php-versions-on-wampserver/index.md absPath of file >>> MarkdownRemark",timeToRead:1,frontmatter:{date:"2014-08-02T07:16:20.000Z",path:"/multiple-php-versions-on-wampserver/",tags:null,title:"Multiple PHP versions on Wampserver",draft:null}}}}}});
//# sourceMappingURL=path---my-first-oscon-3526d47f6def4ad9c735.js.map
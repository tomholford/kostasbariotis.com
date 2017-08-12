webpackJsonp([149],{"./node_modules/json-loader/index.js!./.cache/json/data-migration-with-nodejs.json":function(e,a){e.exports={data:{markdownRemark:{html:'<p>A database is a vital part of every complex application. Databases change very often and contain data that can even disintegrate our whole application if they get out of sync. Changing a live database, whether it\'s related to schema or data, can be hard. Modern apps, where Agile methodologies along with processes such as <a href="http://continuousdelivery.com/">Continuous Integration</a> apply, have raised the bar of complexity so maintaining a database separately from the application\'s business logic can be quite painful.</p>\n<p>Fortunately, we have <a href="https://en.wikipedia.org/wiki/Schema_migration">Database Migrations</a>, a technique to help us keep our database changes under control.</p>\n<h2>The problem</h2>\n<p>Problems I have seen over the years:</p>\n<ul>\n<li>Apps often need certain data to be in place in order to run. In a fresh environment, a team member may not have those or may need to import a subset of the production database.</li>\n<li>Different instances of databases, such as production, stage, local environments, may get out of sync.</li>\n<li>Multiple environments setups raise the complexity of different databases versions running at the same time</li>\n<li>Continuous delivery needs repeatable and testable tasks</li>\n<li>When a developer puts his/her hands in the DB, that change will be lost forever. Code evolves along with our Schema so keeping changes tracked is quite a necessity</li>\n<li>Data integrity after updates</li>\n<li>Rollbacks are our safety net of broken deployments. You can’t rollback your app when your data will be out of order.</li>\n</ul>\n<p>Shorter release cycles often require database changes. Having those changes under version control allows us to make changes safely and in a more consistent way. A crucial part of following such methodologies is the evolutionary design which can help us keep track of how the database evolved along with our application. That way our data can rollback at any point of the history hand in hand with our app.</p>\n<p>Evolving our database design along with our core functioning data during the application development, and doing that in a seamless way, requires the use of more sophisticated processes like Database migrations, which essentially are the management of incremental, reversible changes to our databases.</p>\n<p>Database migrations are all about treating our database as another piece of code while applying core principles of Continuous Integration. Publishing new features along with the database changes, without requiring manual Ops work and removing any hands-on session from the DB is the way to move forward and create robust apps.</p>\n<p>This article will walk you through the different types of migrations, how they are being used and how to write DB migrations in a Nodejs environment.</p>\n<p>Let\'s explore the types of database migrations.</p>\n<h2>Types of Migrations</h2>\n<p>Database migrations usually have two forms. Both of those forms are usually required in a long-running project.</p>\n<h3>Altering schema</h3>\n<p>One of them is when we are in need of changing the database\'s schema. For example, when we add an Index, removing/adding a field or restructuring the current fields, moving one from being a String into an Integer.\nThis could also mean that we may need to restructure the data that is already in the database, which brings us to the second form of migrations.</p>\n<h3>Migrating data</h3>\n<p>In a production environment, where data is already in the DB, we may have to migrate those as well. Same cases apply to testing and staging environments but production is a more fragile universe where mistakes are not forgiven.  Say we need to split the <code>Name</code> field of our Users table into a <code>First/Last Name</code> fields combination. One approach would be to create a field called <code>Last Name</code>. Traverse the table, split the <code>Name</code> into two chunks and move the latter to the newly created field. Finally, rename the <code>Name</code> field into <code>First Name</code>. This is a case of data migrations.</p>\n<p>But how do we handle this without putting our hands in the DB?</p>\n<h2>Automation is the key</h2>\n<p>We must be able to describe our database and the migrations with code. This will allow us to store them into our VCS and run them on demand and in an autonomous way.</p>\n<h2>SQL vs NoSQL</h2>\n<p>As we know, SQL and NoSQL have some core differences but that also doesn\'t mean that we can omit migrations in any of them. SQL structure is strictly defined and both data and schema changes can be safely done using migrations. NoSQL, on the other hand, may not need that much of a schema change, due to their elasticity in that subject, but will definitely need data migrations.</p>\n<h2>Database?</h2>\n<p>Modern apps don\'t necessarily handle data or talk to a database directly. E.g., in a Microservices environment, applications may rely on other applications to hold their data and communicate with them through a REST API. That\'s ok because migrations may still need to run. But instead of interacting directly with a database, you have to use the API to make your changes.</p>\n<h2>Migrations dive with Nodejs</h2>\n<p>Applications built with Nodejs have no differences from any other stack.</p>\n<p>After doing a little research, I ended up using <a href="https://github.com/sequelize/umzug">umzug</a> which provides a nice programmatic API to make your migrations. It\'s not opinionated at all and it doesn\'t provide any helper functions to make your actual migrations. It\'s just a library that will store what migrations have run. Which is actually what I need. If you need a more powerful thing you may want to take a look at <a href="https://github.com/db-migrate/node-db-migrate">db-migrate</a>, which provides adapters for major databases and it will help you make changes to those in a more intuitive way.</p>\n<p>Migration systems are providing a few standard things in order to make your migrations. Let\'s see those using Node.js:</p>\n<h3>Write a migration</h3>\n<p>Usually, we want to define two standard methods for a migration script. The function to run when we are migrating and the function when we are rolling back:</p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>\'use strict\';\n\nvar Promise = require(\'bluebird\');\n\nmodule.exports = {\n  up: function () {\n    return new Promise(function (resolve, reject) {\n      /* Here we write our migration function */\n    });\n  },\n\n  down: function () {\n    return new Promise(function (resolve, reject) {\n      /* This runs if we decide to rollback. In that case we must revert the `up` function and bring our database to it\'s initial state */\n    });\n  }\n};</code></pre>\n      </div>\n<p>Our migrations are residing inside a configurable storage and umzug is referring to them with their filenames. For that matter, we should choose our naming strategy wisely before implementation. I have chosen to give them a separate versioning, e.g. 1.0.js, 1.1.js or we could give them the issue ID of our PM that refers to the particular requirement. The choice is yours. Just be consistent.</p>\n<h3>Keep track of the migrations that have already been executed</h3>\n<p>At any given moment, we must be able to tell what migrations have been executed and which migration needs to run next if there is one to run.\nThis allows us to know the state of our database.</p>\n<p>Umzug can use Sequelize to store the history of the migration into MySQL. <a href="https://github.com/sequelize/umzug#custom">But with no hassle at all, we can write our own Adaptor to store them wherever we want</a>.</p>\n<h3>Run a migration or run all migrations</h3>\n<p>We have to be able to run a specific migration or run all migrations we have written. Those must run in order because usually some of them depend on others.\nE.g. on a fresh environment we must run all migrations in order to bring the newly created database to its current state, as it currently lies in production.</p>\n<p>To run all migrations:</p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>umzug.up().then(...);</code></pre>\n      </div>\n<p>or to run up to a particular migration:</p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>umzug.up({ to: \'migration-filename\' }).then(...);</code></pre>\n      </div>\n<h3>Rollback a migration</h3>\n<p>When defining one particular migration we are describing changes that will be applied to the database. Those changes must be reversible and that is why we must also describe the reverse action of that migration.\nIn case we need to rollback our application back in a previous state that also introduced database changes, those changes must be revert as well in order for the application to continue operating like it used to do.</p>\n<p>Just like <code>up</code>, but running <code>down</code> instead:\nTo revert all migrations:</p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>umzug.down().then(...);</code></pre>\n      </div>\n<p>or to revert down to a particular migration:</p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>umzug.down({ to: \'migration-filename\' }).then(...);</code></pre>\n      </div>\n<h3>Automating</h3>\n<p>umzug doesn\'t come with a CLI out of the box, but it doesn\'t take much to write one yourself.\nAfter I wrote mine, it\'s just a matter of:</p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>node scripts/migrate</code></pre>\n      </div>\n<p>to run all migrations in fresh environments.</p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>node scripts/migrate [up|down] {version}</code></pre>\n      </div>\n<p>to go to that particular migration. This will run on every instance of our application at boot time, so if there is a pending migration, it will run it.</p>\n<h2>In conclusion</h2>\n<p>Database manipulation should be part of our development process. There could be heavy changes where a developer couldn\'t handle and a DBA should come, but for rapid changes, migrations will serve us right, especially when we seeking for faster release cycles and keeping track of our Database changes.</p>\n<p>I am sure that your system handles migration somehow, search it up if you have never thought of it.</p>\n<p>In case you are already doing migrations, what is your preferred workflow? Leave me a comment.</p>\n<p>See also:</p>\n<ul>\n<li><a href="http://enterprisecraftsmanship.com/2015/08/10/database-versioning-best-practices/">http://enterprisecraftsmanship.com/2015/08/10/database-versioning-best-practices/</a></li>\n<li><a href="http://martinfowler.com/articles/evodb.html">http://martinfowler.com/articles/evodb.html</a></li>\n<li><a href="http://www.brunton-spall.co.uk/post/2014/05/06/database-migrations-done-right/">http://www.brunton-spall.co.uk/post/2014/05/06/database-migrations-done-right/</a></li>\n<li><a href="http://databaserefactoring.com/index.html">http://databaserefactoring.com/index.html</a></li>\n</ul>\n<br/>\n*[Kwstas](https://twitter.com/_margaritis/), thank you for helping me write this post. :D*',frontmatter:{date:"May 14, 2016",path:"/data-migration-with-nodejs",tags:"Database, CI, node.js",title:"Database Migrations with Nodejs"}}},pathContext:{prev:{excerpt:"If you, like me, like to host simple little sites of yours on GitHub Pages, I am sure you have already reached the moment when you wanted to send emails from that site but you didn't know how to. This is how I did it. devastation.tv , my podcast for...",html:'<p>If you, like me, like to host simple little sites of yours on GitHub Pages, I am sure you have already reached the moment when you wanted to send emails from that site but you didn\'t know how to. This is how I did it.</p>\n<p><a href="http://devastation.tv">devastation.tv</a>, my podcast for developers (for the time in Greek only) is hosted on <a href="https://github.com/kbariotis/devastation-podcast">GitHub Pages</a> with a custom domain that I have purchased from <a href="https://namecheap.com">Namecheap</a>. I wanted to be able to send email campaigns to my subscribers whenever a new episode is out.</p>\n<p><a href="https://mailchimp.com">Mailchimp</a> helped me a lot on my first campaigns but I would send those emails using my personal Gmail account, which is both ugly for the subscriber to see and is <a href="http://kb.mailchimp.com/accounts/email-authentication/about-dmarc?_ga=1.191860521.246269979.1477844435">also dangerous</a> cause it may end up in my subscriber\'s Spam folder.</p>\n<p>Last but not least, I knew my subscriber list would take a long time until it go big and I didn\'t want to pay for a paid subscription, e.g. to Gmail for Work (£3.30 per user per month). I had to find a cheaper way, and Mailchimp has a great starter package with up to 2,000 subscribers and 12,000 emails per month.</p>\n<p>So here\'s a simple solution that involves having your site hosted on GitHub Pages, using Mailchimp for sending email campaigns and Namecheap as your domain registrar.</p>\n<h2>Receiving emails</h2>\n<p>For receiving emails, Namecheap has this great <a href="https://www.namecheap.com/support/knowledgebase/article.aspx/308/76/how-can-i-set-up-free-email-forwarding-for-my-domain">email forwarding feature</a> that allows you to forward an incoming email to your domain in an external email. So I put my personal Gmail email there and I am able to receive emails.</p>\n<p>\n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; z-index: -1; display: block; "\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 22.45989304812834%;position: relative; width: 100%; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAECAYAAACOXx+WAAAACXBIWXMAAAsSAAALEgHS3X78AAAAaUlEQVQY032OWQqAMAwFvf8pFdT+CO7NUu0zCIJCbGBISGBeqrbrUdcNRAQ5Z4QQwMz37EFExXsFpyQl6HG4kAVvJo3W3/stRoiqL+R5QpxG0LqClwG8z78Bb5LhCtU+lAeV4scf4XniAsiPOq9tajTMAAAAAElFTkSuQmCC\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="Screen Shot 2016 10 30 at 18 09 54"\n        title=""\n        src="/static/ac29928edd2828fa9fbc8c52fda0d42c-83a8b.png"\n        srcset="/static/ac29928edd2828fa9fbc8c52fda0d42c-8992e.png 163w,\n/static/ac29928edd2828fa9fbc8c52fda0d42c-ae0a7.png 325w,\n/static/ac29928edd2828fa9fbc8c52fda0d42c-83a8b.png 650w,\n/static/ac29928edd2828fa9fbc8c52fda0d42c-50453.png 975w,\n/static/ac29928edd2828fa9fbc8c52fda0d42c-94e0e.png 1122w"\n        sizes="(max-width: 650px) 100vw, 650px"\n      />\n    </span>\n  </span>\n  </p>\n<h2>Sending emails</h2>\n<p>Now Mailchimp allows you to <a href="http://kb.mailchimp.com/accounts/email-authentication/set-up-custom-domain-authentication-dkim-and-spf">add a custom domain</a> to be able to send emails that originated from that domain. You need to verify this domain before you\'re able to send emails, so all you have to do is add a few records in your DNS settings and you are good to go. These are the instructions from Mailchimp.</p>\n<p>\n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; z-index: -1; display: block; "\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 71.4663143989432%;position: relative; width: 100%; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAOCAYAAAAvxDzwAAAACXBIWXMAAAsSAAALEgHS3X78AAABiUlEQVQ4y62TSW7CQBBFuSmXAHEKTsHMHWDBBlixYckgJCbbeMBjsA0//Ru6I5LY2cTSU3V1l79raFeq1Sr6/T46nQ4Gg4G0rVYL3W4XvV4P7XZbMhwOS+G7zWYTlVqtBt/3f8UwDGw2G2y3W6xWK6zXa+x2u8LY0WiESqPRwP1+R5Zlb+R5jjRNcbvd5Jp79LlWPs9U7OPxwHw+fwpGUYTT6YT9fi/t8XiEaZrSKrivzpRlVgqKasEkSWDbNhzHgeu6sCxL+qbtwBKYYm1cxLnrwfM8XK9XaYMgkPG0WrBer0uH6cdxrGFQmHzAixJ48ZNUxJU9WpAC5/NZps7sDoeDtPSZgSpXocpkDH3VZ10ym+2InjhC1BW9K5p6GWEYfgnyC9wgLJVDUkGy9JflJMt4E1QNZsNV0wn3PCLWHF4R1NCCvEu+6EcgpkzrXy5vBEIwfGVeBEW14H89WnC5XGI6nUpmsxkWiwXSLJf81bcfPeS/TKHxeCz/RdrJZAJLXGJTUFbmd/jeJ7wlBRZML1hqAAAAAElFTkSuQmCC\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="Screen Shot 2016 10 30 at 18 01 50"\n        title=""\n        src="/static/6248fdc0dee20a1690e4200ef89d2e12-83a8b.png"\n        srcset="/static/6248fdc0dee20a1690e4200ef89d2e12-8992e.png 163w,\n/static/6248fdc0dee20a1690e4200ef89d2e12-ae0a7.png 325w,\n/static/6248fdc0dee20a1690e4200ef89d2e12-83a8b.png 650w,\n/static/6248fdc0dee20a1690e4200ef89d2e12-f5377.png 757w"\n        sizes="(max-width: 650px) 100vw, 650px"\n      />\n    </span>\n  </span>\n  </p>\n<p>And this is a screenshot from my DNS configuration from Namecheap.</p>\n<p>\n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; z-index: -1; display: block; "\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 40.229885057471265%;position: relative; width: 100%; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAICAYAAAD5nd/tAAAACXBIWXMAAAsSAAALEgHS3X78AAAAtUlEQVQoz4VSyxLDIAjM//9pe0g7iYrGBwWVDtFJctgBXFgYcDlSQuMcshVYB82PceI0AvH+OP5xJCxVwPspUXxDHKiiU95Q+902XHLOGKggl4Klg9+qJdQJqEFRvM5jXuJ9N02QH4MieHTxmdNFd4LW2ibIE2iR2PchfuoTT4JDcwBogmMR+xIn4vKFoPAnwXqUEE6L10dhjhdfLeHuKJuhHUbqbt8vdJ8VPcDlF3nCSmLc8AdAJ3Z/kNn3bQAAAABJRU5ErkJggg==\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="Screen Shot 2016 10 30 at 18 06 05"\n        title=""\n        src="/static/5ca42794a3c0ac6dcb755f73c3c35a2b-83a8b.png"\n        srcset="/static/5ca42794a3c0ac6dcb755f73c3c35a2b-8992e.png 163w,\n/static/5ca42794a3c0ac6dcb755f73c3c35a2b-ae0a7.png 325w,\n/static/5ca42794a3c0ac6dcb755f73c3c35a2b-83a8b.png 650w,\n/static/5ca42794a3c0ac6dcb755f73c3c35a2b-50453.png 975w,\n/static/5ca42794a3c0ac6dcb755f73c3c35a2b-90433.png 1131w"\n        sizes="(max-width: 650px) 100vw, 650px"\n      />\n    </span>\n  </span>\n  </p>\n<p>The first three records are my GitHub Pages DNS records for the redirection to work. The last two are the Mailchimp records that are needed for the verification process. <strong>Be careful cause they are not the same as the picture above. Won\'t work on Namecheap as is.</strong></p>\n<p>\n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; z-index: -1; display: block; "\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 49.11575562700965%;position: relative; width: 100%; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAYAAAC0VX7mAAAACXBIWXMAAAsSAAALEgHS3X78AAABC0lEQVQoz52SYU+EMAyG+f8/y/hBv13iEZRcJDBY0EsQ2MYYG3ulM+DFi0quyZOWtrxbm0VCCHRdh77vg99oOLTWu6D+pmkgpUSUP7dBrG1bKKXgnMM8zwur38c0TYFISxuCcRxhjNkK02S32NovqIcOp6noZt+9VLdBOMJi9LEWSPTyZMDDzX6JfYipl6BJqHeFct77a0GCCqvVjcZLZXDiBm8festTz88b/itI/ulY4u6B4f6xwOGQ3yZ4aXnKcUrKwGvCbhNc90KLF52CkgOUGCB7BT0M2553C9Z1DcYYsixDVVUBznnIF6zE+/l89c+fgiQQxzHSNEWSJCiKIrxRerjCOAg7/zryJ2VECZvymxQqAAAAAElFTkSuQmCC\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="Screen Shot 2016 10 30 at 19 06 36"\n        title=""\n        src="/static/b90904f5803577b2ccb01a457b960c6f-83a8b.png"\n        srcset="/static/b90904f5803577b2ccb01a457b960c6f-8992e.png 163w,\n/static/b90904f5803577b2ccb01a457b960c6f-ae0a7.png 325w,\n/static/b90904f5803577b2ccb01a457b960c6f-83a8b.png 650w,\n/static/b90904f5803577b2ccb01a457b960c6f-50453.png 975w,\n/static/b90904f5803577b2ccb01a457b960c6f-f8e19.png 1244w"\n        sizes="(max-width: 650px) 100vw, 650px"\n      />\n    </span>\n  </span>\n  </p>\n<p>So how do you handle your emails when on GitHub Pages?</p>',id:"/Users/Bariotis/Dev/develop/gatsby-blog-starter-kit/src/pages/sending-and-receiving-emails-with-a-site-hosted-on-github-pages/index.md absPath of file >>> MarkdownRemark",timeToRead:2,frontmatter:{date:"2016-10-30T14:28:37.000Z",path:"/sending-and-receiving-emails-with-a-site-hosted-on-github-pages",tags:"Github, Github Pages",title:"Sending and receiving emails when on GitHub Pages",draft:null}},next:{excerpt:"Sometimes we feel like still chasing the dream. Like it is still far away.  Think again. What were you dreaming of last year? Five years ago? What about when you were 15 years old. What was your goal back then?  I feel like I'm living my last year's...",html:"<p>Sometimes we feel like still chasing the dream. Like it is still far away. </p>\n<p>Think again. What were you dreaming of last year? Five years ago? What about when you were 15 years old. What was your goal back then? </p>\n<p>I feel like I'm living my last year's dream. I do. And now I dream bigger. I want to  feel it again next year. And after five years. And after thirty years.</p>\n<p>I forgot that I am already living my dream.</p>",id:"/Users/Bariotis/Dev/develop/gatsby-blog-starter-kit/src/pages/live-the-dream/index.md absPath of file >>> MarkdownRemark",timeToRead:1,frontmatter:{date:"2016-05-02T15:24:54.000Z",path:"/live-the-dream",tags:"dev life, inspiration",title:"Live the dream",draft:null}}}}}});
//# sourceMappingURL=path---data-migration-with-nodejs-5b3e5d5fa063e00b1b60.js.map
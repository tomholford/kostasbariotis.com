webpackJsonp([43],{"./node_modules/json-loader/index.js!./.cache/json/tag-npm.json":function(e,o){e.exports={pathContext:{posts:[{excerpt:"A common pitfall when comes to development teams is the inconsistent software and library versions across developers. The first time you install a Node.js dependency by  , the latest version of that package, will be installed along with the npm's...",html:"<p>A common pitfall when comes to development teams is the inconsistent software and library versions across developers.</p>\n<p>The first time you install a Node.js dependency by <code>npm install --save</code>, the latest version of that package, will be installed along with the npm's default <a href=\"https://docs.npmjs.com/misc/config#save-prefix\">save prefix (^)</a>. The '^' allows npm to auto install minor upgrades for this package, according to the <a href=\"http://semver.org/\">semver schema</a>.</p>\n<p>Because of that, it's hard to guarantee that every developer in the team will have the same version and this creates problems. It can really save your day, when two different people on the same codebase gets different results on an predefined procedure and the cause is a breaking change on a package that got updated.</p>\n<p>So what we do? There are a few ways you can pass this:</p>\n<h3>Reset the default <code>--save-prefix</code>.</h3>\n<p>By running <code>npm config set save-prefix=''</code> you're overriding npm's default <a href=\"https://docs.npmjs.com/misc/config#save-prefix\">save-prefix</a> value which is <code>^</code>. Now every package you install will be locked on it's current version and every person that runs <code>npm install</code> will get that version.</p>\n<p>This can also introduce outdated packages, so make sure that you keep an eye on your dependencies for critical updates that you don't want to miss. You can also take advantage of the npm's <a href=\"https://docs.npmjs.com/cli/outdated\">outdated command</a> that will check every package and report back for outdated packages.</p>\n<p>Consider also keeping this setting in your <a href=\"https://docs.npmjs.com/files/npmrc\"><code>.npmrc</code></a> file, to not force every developer to set it explicitly on his/her machine.</p>\n<h3>shrinkwrap</h3>\n<p>npm's <a href=\"https://docs.npmjs.com/cli/shrinkwrap\">shrinkwrap</a> is also a handy way to lock your versions across your team. By running <code>npm shrinkwrap</code>, a <code>shrinkwrap.json</code> file will be created at the root of your repo with the current versions  of your dependencies that are install at the moment and their dependencies.</p>\n<p>With <code>shrinkwrap</code> you get the exact same dependencies tree across and not worry about breaking updates. <code>npm install</code> will respect a <code>shrinkwrap.json</code> file if it finds but it must also agrees with the current <code>package.json</code> file, so expect errors if those two files are not align.</p>\n<p><code>shinkwrap</code> is the most safe way of locking your dependencies versions and still keeping them out of your repo, which brings me to the third and final option.</p>\n<h3>Keep Your Dependencies Under Version Control</h3>\n<p>This method is widely used, especially when maximum security is required. It's a proven method that keeps not only locked versions but code content too, so you don't worry if a malicious piece of code find it's way inside your favorite open source dependencies.</p>\n<p>Be careful though, cause your repo will increase in size really quick. In case of a dependency that needs to be compiled (e.g. by <a href=\"https://github.com/TooTallNate/node-gyp\">node-gyp</a>) the source code is usually really big, so be careful on that.</p>\n<p>The npm guys have also a <a href=\"https://docs.npmjs.com/cli/shrinkwrap#caveats\">few words</a> on this.</p>\n<h2>Not a Node.js Fan</h2>\n<p>In case that you aren't really into Node.js but you still reading this piece (big ups man!!), I shall inform you that these techniques aren't new either have been introduced by the Node.js community for the first time.</p>\n<p>PHP's Composer keeps a <a href=\"https://getcomposer.org/doc/01-basic-usage.md#composer-lock-the-lock-file\">composer.lock</a> file that locks the current installed versions and Ruby's Bundler has a Gemfile.lock file. Same goes for other systems.</p>\n<p>So, do your homework and find your PM's way of handling this kind of life saver functionality.</p>\n<h2>A Final Word</h2>\n<p>Dependencies of a codebase is an every day process and can easily lead to few hours of bug hunting. Make sure to save those hours.</p>\n<p>But, sooner or later, your team's inner policies will fail and this is ok, as soon as you understand the causes, you fix them and move. Move faster every time. Like a <a href=\"http://www.c25k.com/\">c25k</a> training. ;)</p>\n<p>What's your preferred way of handling dependencies versions?</p>",id:"/Users/Bariotis/Dev/develop/gatsby-blog-starter-kit/src/pages/consistent-dependencies-across-teams/index.md absPath of file >>> MarkdownRemark",timeToRead:3,frontmatter:{date:"2015-06-26T18:29:20.000Z",path:"/consistent-dependencies-across-teams",tags:"npm, shrinkwrap, team, node.js",title:"Consistent dependencies across teams",draft:null}}],tag:"npm",pagesSum:1,page:1}}}});
//# sourceMappingURL=path---tag-npm-92e4afc59cd1bbcfeff0.js.map
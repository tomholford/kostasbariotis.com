webpackJsonp([82],{"./node_modules/json-loader/index.js!./.cache/json/tag-e-commerce.json":function(e,t){e.exports={pathContext:{posts:[{excerpt:"Magento is hard. No doubt about it. But this is not an excuse. Beside that (and a few other issues) it's still the number one e-commerce solution. It's proven. So, i wanted to talk a little about how i maintaining my Magento projects. 1) I am keeping...",html:'<p>Magento is hard. No doubt about it. But this is not an excuse. Beside that (and a few other issues) it\'s still the number one e-commerce solution. It\'s proven.</p>\n<p>So, i wanted to talk a little about how i maintaining my Magento projects.</p>\n<p><strong>1) I am keeping everything under version control</strong></p>\n<p>Magento\'s folder structure brings a lot of frustration. An extension can place it\'s files almost anywhere it\'s developer wants. It can be in base package theme either in package default theme. It can be in media folder for permanent files you want to keep under control either in /js folder for Javascript global libraries.</p>\n<p>Keeping a .gitignore with all the Project\'s specific files is almost impossible.</p>\n<p>Also, you can\'t carry with you your Project\'s modules, except using <a title="Composer with Magento" href="https://github.com/magento-hackathon/magento-composer-installer" target="_blank">Composer with Magento </a>which it\'s also complicate to work with. (Still struggling with it on Windows)</p>\n<p>So, what i do is keep everything under version control, except temporary files like cache, logs, etc. etc.</p>\n<p><strong>2) Never touch core files</strong></p>\n<p>By never touching core files like in folders:</p>\n<ul>\n\t<li>app/code/core</li>\n\t<li>app/locale/</li>\n\t<li>app/design/frontend/(base|default|rwd)</li>\n\t<li>app/design/adminhtml/</li>\n\t<li>js/ (initial folders only)</li>\n\t<li>lib/ (initial folders only)</li>\n\t<li>skin/frontend/(base|default|rwd)</li>\n\t<li>includes/</li>\n</ul>\nyou make sure that, when a feature release is out, you can just copy paste above you project and everything still works fine.\n<p>Keeping your Magento always up to date can save you from big disasters. I must make sure that feature releases wont be a pain to get.</p>\n<p><strong>3) Extend everything</strong></p>\n<p>In case you need to extend a Magento\'s core functionality or make it behave different, you are covered.</p>\n<p>Magento\'s team had a purpose and only one. To make the most extensible e-commerce framework out there. They even sacrifice performance on this purpose. Now, some may argue that that was stupid or they didn\'t success after all. I will have to disagree with both.</p>\n<p>Magento is a true PHP OOP project, powered by the most powerful framework, the <a title="Zend Framework" href="http://framework.zend.com/" target="_blank">Zend Framework</a>.</p>\n<p>As about performance, these days you have a lot of tools in order to create a fast website. You may be hosted at an AWS super server, use fast caching methods, etc, etc.</p>\n<p><strong>4) Keep a local Magento with stuff i use a lot</strong></p>\n<p>After a few projects, i realized that a lot of processes were repeated again and again. The same modules i will installed on every fresh Magento install, the same configuration i would do. So i keep a private(yet!) Magento repository were i have all of my Modules and a clean Database dump with my configuration set.</p>\n<p>How do you deal with your Magento projects? Share your tactics and technics with me on <a title="Kostas Bariotis on Twitter" href="http://twitter.com/kbariotis" target="_blank">Twitter </a>or bellow in the comments.</p>',id:"/Users/Bariotis/Dev/develop/gatsby-blog-starter-kit/src/pages/maintaining-a-magento-code-base/index.md absPath of file >>> MarkdownRemark",timeToRead:2,frontmatter:{date:"2014-09-08T17:23:58.000Z",path:"/maintaining-a-magento-code-base",tags:"magento, code base, e-commerce",title:"Maintaining a Magento code base"}}],tag:"e-commerce",pagesSum:1,page:1}}}});
//# sourceMappingURL=path---tag-e-commerce-489ae4bab2ad109368c0.js.map
webpackJsonp([160],{"./node_modules/json-loader/index.js!./.cache/json/add-configuration-file-to-your-php-projects.json":function(e,t){e.exports={data:{markdownRemark:{html:'<p><a href="https://github.com/vlucas/phpdotenv" target="_blank">https://github.com/vlucas/phpdotenv</a></p>\n<p>For a while now, i\'ve been using <a title="Symfony\'s YAML Component" href="http://symfony.com/doc/current/components/yaml/introduction.html" target="_blank">Symfony\'s YAML</a> to add a configuration file on my PHP projects.</p>\n<p>Today, i stumbled upon <a title="Vance Lucas" href="http://vancelucas.com/" target="_blank">Vance Lucas\'s</a> PHPDotEnv which is a great PHP package that will transfer the contents of a .env file right inside your PHP\'s $<em>ENV variable. Available through &#x3C;a title="PHP Composer" href="<a href="http://getcomposer.org">http://getcomposer.org</a>" target="</em>blank">Composer</a> too.</p>\n<p>Easiest method to add configuration files to your PHP projects ever!</p>',frontmatter:{date:"August 31, 2014",path:"/add-configuration-file-to-your-php-projects",tags:"php",title:"Add configuration file to your PHP Projects"}}},pathContext:{prev:{excerpt:"http://www.quora.com/Startups/Where-can-I-find-developers-willing-to-join-my-startup/answer/William-Pietri?srid=ujr & share=1 This answer is gold. I am posting it here just to remind my self about facts that i am forgetting very easily.",html:'<p><a title="William Petri\'s Answer on Quora: Where can i find developers willing to job my startup" href="http://www.quora.com/Startups/Where-can-I-find-developers-willing-to-join-my-startup/answer/William-Pietri?srid=ujr&amp;share=1" target="_blank">http://www.quora.com/Startups/Where-can-I-find-developers-willing-to-join-my-startup/answer/William-Pietri?srid=ujr&#x26;share=1</a></p>\n<p>This answer is gold. I am posting it here just to remind my self about facts that i am forgetting very easily.</p>',id:"/Users/Bariotis/Dev/develop/gatsby-blog-starter-kit/src/pages/william-petris-answer-on-quora-where-can-i-find-developers-willing-to-join-my-startup/index.md absPath of file >>> MarkdownRemark",timeToRead:1,frontmatter:{date:"2014-09-02T14:56:00.000Z",path:"//william-petris-answer-on-quora-where-can-i-find-developers-willing-to-join-my-startup",tags:null,title:"William Petri's Answer on Quora : Where can i find developers willing to join my startup",draft:null}},next:{excerpt:"Last week an unusual bug really got me some time until i figured out. Common symptoms are Magento not creating your product's images cache without a reason or when trying to upload product's image and an error says 'Memory limit reached'. A lot of...",html:"<p>Last week an unusual bug really got me some time until i figured out.</p>\n<p>Common symptoms are Magento not creating your product's images cache without a reason or when trying to upload product's image and an error says 'Memory limit reached'.</p>\n<p>A lot of resources on the Internet says that you have to increase your PHP's memory limit. But when i checked my PHP's configuration i noticed that memory limit was to -1, which means that a s<a title=\"PHP Docs : Memory Limit\" href=\"http://php.net/manual/en/ini.core.php#ini.memory-limit\" target=\"_blank\">cript is allowed to allocate all your available memory</a>. Hmm, that's interesting. Hmmm, that's interesting.</p>\n<p>I followed the stacktrace and i found this (lib/Varien/Image/Adapter/Gd2.php):</p>\n<pre><code>protected function _isMemoryLimitReached()\n{\n  $limit = $this-&gt;_convertToByte(ini_get('memory_limit'));\n  $size = getimagesize($this-&gt;_fileName);\n  $requiredMemory = $size[0] * $size[1] * 3;\n  return (memory_get_usage(true) + $requiredMemory) &gt; $limit;\n}\n\n[...]\n\nprotected function _convertToByte($memoryValue)\n{\n  if (stripos($memoryValue, 'M') !== false) {\n    return (int)$memoryValue * 1024 * 1024;\n  } elseif (stripos($memoryValue, 'KB') !== false) {\n    return (int)$memoryValue * 1024;\n  }\n  return (int)$memoryValue;\n}</code></pre>\n<p>There you have it. The author here doesn't check for when memory_limit is set to -1. Instead he assumes that it will be always set to form of XXM or XXKB.</p>\n<p>So in case you have bumped into the above symptoms check out that your PHP's memory limit is not set to infinite.</p>",id:"/Users/Bariotis/Dev/develop/gatsby-blog-starter-kit/src/pages/magentovarien-lib-php-memory_limit-1-bug/index.md absPath of file >>> MarkdownRemark",timeToRead:1,frontmatter:{date:"2014-08-30T13:21:24.000Z",path:"/magentovarien-lib-php-memory_limit-1-bug",tags:"magento",title:"Magento(Varien lib) & PHP memory_limit -1 bug",draft:null}}}}}});
//# sourceMappingURL=path---add-configuration-file-to-your-php-projects-82ffcff1a3548da3401e.js.map
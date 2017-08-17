webpackJsonp([136],{"./node_modules/json-loader/index.js!./.cache/json/how-to-keep-up-on-seo.json":function(e,t){e.exports={data:{site:{siteMetadata:{title:"Kostas Bariotis' Blog",description:"I'm Kostas Bariotis, a web developer, a proud wanderer and a passionate doer. My mission is to write clean and efficient code, to solve problems on the web and to learn something more.",siteUrl:"https://kostasbariotis.com"}},markdownRemark:{html:'<p>I am certainly not a SEO expert. Neverthless, I am developing web sites and I have to be able to deliver after all a SEO optimized web site.</p>\n<h2>Take a SEO Check Up</h2>\n<p>Check your site using <a href="http://seositecheckup.com/">SEO Site Checkup</a>, which will be able to report you how your site is doing in terms of SEO best practices. Try to keep your total score above 80%-90%.</p>\n<h2>Keep Google Satisfied</h2>\n<p>Follow <a href="https://support.google.com/webmasters/answer/35291?hl=en">Google\'s best practices</a> and do not forget to implement <a href="https://support.google.com/webmasters/answer/99170?hl=en">Rich Snippets</a> to let Google\'s search algorithms better understand you.</p>\n<h2>Monitor your SEO route</h2>\n<p>Use <a href="http://www.audiencebloom.com/2014/08/15-tools-love-monitor-seo-progress/">a tool</a> in order to monitor how you are doing on Page Rank and try to find patterns that works for you or even the patterns that is damaging your image and eliminate them.</p>\n<h2>Conclusion</h2>\n<p>Of course, the SEO success is a result that depends on a lot of factors and it\'s certainly not an one man show.\nAt the end, there is not really an excuse for a Web Developer to not be able to deliver a finest SEO optimized web site.</p>',excerpt:"I am certainly not a SEO expert. Neverthless, I am developing web sites and I have to be able to deliver after all a SEO optimized web site...",frontmatter:{date:"January 26, 2015",path:"/how-to-keep-up-on-seo/",tags:"seo, google, page rank",title:"How to keep up on SEO",draft:null}}},pathContext:{prev:{excerpt:"The process of a job interview certainly is not easy. Especially when you are young and inexperienced. But you should be hungry for interviews, cause every one of them is just an experience itself.\nUsually, you have to pass a highly experienced...",html:"<p>The process of a job interview certainly is not easy. Especially when you are young and inexperienced.</p>\n<p>But you should be hungry for interviews, cause every one of them is just an experience itself.\nUsually, you have to pass a highly experienced interviewer and sometimes maybe you will meet some of the big stems of the company.</p>\n<p>Something people are missing is that a job interview is not a one-way road. While the company's people want to know more about you, you must get to know more about them. Ask some questions, take a good look at the facilities/offices. Observe people's movements, talk styles, and dress codes.</p>\n<p>One thing that I have gained after so many interviews is that I can simply get into a room and just know if I really want to work there. Joy, collaboration, chill atmosphere are things that can't be concealed.</p>\n<p>After a lot of interviews, I have kept some notes of what I shall ask during one. Here there are:</p>\n<ul>\n<li>\n<p>What will my job be? At first and after few months?</p>\n</li>\n<li>\n<p>What is your work policy for employees?</p>\n</li>\n<li>\n<p>Software/hardware that I will get?</p>\n</li>\n<li>\n<p>Can I participate on/run side projects?</p>\n</li>\n<li>\n<p>Is there a budget for conferences, further education, bonus?</p>\n</li>\n<li>\n<p>What is the history of this company and how do you see the future?</p>\n</li>\n<li>\n<p>Will you measure my productivity and how?</p>\n</li>\n</ul>\n<p>Those are just simple questions you can ask. The point here is that you are in a position of knowing more about this company. It's not something you should afraid of or feeling awkward.</p>\n<p>A job interview should always be a two ways road. Don't be afraid.</p>",id:"/Users/Bariotis/Dev/develop/kostasbariotis.com/src/pages/interviewer-vs-interviewee/index.md absPath of file >>> MarkdownRemark",timeToRead:1,frontmatter:{date:"2015-02-18T09:10:30.000Z",path:"/interviewer-vs-interviewee/",tags:"interviews, job, dev life",title:"Interviewer vs Interviewee",draft:null}},next:{excerpt:"Recently,  Thanos  got me into  JWT . Json Web Token is the modern way of authenticating between your REST API and a web/mobile/native client without using Sessions and/or cookies. This is a nice explanation of how things were  done , until Json Web...",html:'<p>Recently, <a href="http://attheo.do">Thanos</a> got me into <a href="http://jwt.io">JWT</a>. Json Web Token is the modern way of authenticating between your REST API and a web/mobile/native client without using Sessions and/or cookies. This is a nice explanation of how things were <a href="http://stackoverflow.com/questions/15051712/how-to-do-authentication-with-a-rest-api-right-browser-native-clients">done</a>, until Json Web Tokens came into place.</p>\n<p>What we can achieve with JWT is really simple: we are getting rid of cookies and sessions while the user\'s info is completely hidden within the request\'s header to the server.</p>\n<p>Upon login, the server returns an encrypted token which, among other info, contains the user identifier. This identifier, which happens to be application specific, is then decrypted by the server at any moment required, which is what enables the server to know who\'s on the other end of the line.</p>\n<p>Let\'s crack it down.</p>\n<p>First we need a JWT Header like this</p>\n<div class="gatsby-highlight">\n      <pre class="language-json"><code><span class="token punctuation">{</span>\n\t<span class="token property">"typ"</span><span class="token operator">:</span><span class="token string">"JWT"</span><span class="token punctuation">,</span>\n    <span class="token property">"alg"</span><span class="token operator">:</span><span class="token string">"HS256"</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>which says that the JWT is going to be digitaly signed using the HS256 algorithm.\nBase64url this and you have the first piece of your JWT, namely the Header.\n<code>eyJ0eXAiOiJKV1QiLA0KICJhbGciOiJIUzI1NiJ9</code></p>\n<p>Now we need our actual message that we are going to transmit, namely the Payload.</p>\n<div class="gatsby-highlight">\n      <pre class="language-json"><code><span class="token punctuation">{</span>\n\t<span class="token property">"iss"</span><span class="token operator">:</span><span class="token string">"joe"</span><span class="token punctuation">,</span>\n    <span class="token property">"exp"</span><span class="token operator">:</span><span class="token number">1300819380</span><span class="token punctuation">,</span>\n    <span class="token property">"http://example.com/is_root"</span><span class="token operator">:</span><span class="token boolean">true</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>Yeap. Plain JSON where you can put anything you want. <code>iss</code> and <code>exp</code> are defined by the <a href="http://tools.ietf.org/html/draft-ietf-oauth-json-web-token-06#section-4.1">specs</a> so you can easily use open source libraries. <code>exp</code> for example stands for Expiration Time in UNIX Timestamp and common libraries know that.</p>\n<p>Base64url this and we have our second part.\n<code>eyJpc3MiOiJqb2UiLA0KICJleHAiOjEzMDA4MTkzODAsDQogImh0dHA6Ly9leGFtcGxlLmNvbS9pc19yb290Ijp0cnVlfQ</code></p>\n<p>Now since we choose the HS256 algorithm of our signature, we are going to concatenate our Header and Payload and sign them with the HS256 algorithm using a secret key. This is what gives us the Signature.</p>\n<p>Concatenate all of them together, using dots and we have our JSON Web Token(without the break lines).</p>\n<p><code>eyJ0eXAiOiJKV1QiLA0KICJhbGciOiJIUzI1NiJ9 . eyJpc3MiOiJqb2UiLA0KICJleHAiOjEzMDA4MTkzODAsDQogImh0dHA6Ly9leGFtcGxlLmNvbS9pc19yb290Ijp0cnVlfQ . dBjftJeZ4CVP-mB92K27uhbUJU1p1r_wW1gFWFOEjXk</code></p>\n<p>So, now you can store this piece of string on the client using <a href="https://developer.mozilla.org/en-US/docs/Web/Guide/API/DOM/Storage">modern Client Storage mechanisms</a>, and send it to your server on every request. And your server will understand who you are. No more sessions, no more cookies.</p>\n<p>Last but not least, make sure that you are using a secure connection with your server, since if that token is stolen, through Man In The Middle Attack, anyone can use it.</p>\n<p>The <a href="http://tools.ietf.org/html/draft-ietf-oauth-json-web-token-06">specs</a> are really simple and you can get into it right away.</p>\n<p>Further reading:</p>\n<ul>\n<li>\n<p><a href="https://auth0.com/blog/2014/01/07/angularjs-authentication-with-cookies-vs-token/">Cookies vs Tokens. Getting auth right with Angular.JS</a></p>\n</li>\n<li>\n<p><a href="http://angular-tips.com/blog/2014/05/json-web-tokens-examples/">Json Web Tokens: Examples</a></p>\n</li>\n<li>\n<p><a href="http://jwt.io/#libraries">OS Libraries</a></p>\n</li>\n</ul>',id:"/Users/Bariotis/Dev/develop/kostasbariotis.com/src/pages/jwt-the-modern-way-of-authenticating/index.md absPath of file >>> MarkdownRemark",timeToRead:3,frontmatter:{date:"2015-01-08T18:51:28.000Z",path:"/jwt-the-modern-way-of-authenticating/",tags:"jwt, rest, apis, authentication, spa",title:"JWT: The modern way of authenticating",draft:null}}}}}});
//# sourceMappingURL=path---how-to-keep-up-on-seo-05569bcef6c7c2be0f33.js.map
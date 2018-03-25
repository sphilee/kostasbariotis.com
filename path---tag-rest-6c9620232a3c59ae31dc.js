webpackJsonp([0xf6e302b3a330],{721:function(n,e){n.exports={data:{site:{siteMetadata:{title:"Kostas Bariotis' Blog",description:'Senior full stack engineer <a href="https://geekbot.io">@geekbot_io</a>, co-organizer of <a href="https://devitconf.org">@devitconf</a> & <a href="https://www.meetup.com/Thessaloniki-Node-js-Meetup/">@skgnodejs</a>, host of <a href="http://devastation.tv">Devastation Podcast</a>.',siteUrl:"https://kostasbariotis.com"}}},pathContext:{posts:[{excerpt:"Making a discoverable API means thats some software would be able to traverse it, by only providing it's root endpoint. For example, my IDE could provide me all the endpoints, input schemas and responses of Github's API by putting in it's root, that…",html:'<p>Making a discoverable API means thats some software would be able to traverse it, by only providing it\'s root endpoint. For example, my IDE could provide me all the endpoints, input schemas and responses of Github\'s API by putting in it\'s root, that is <code class="language-text">https://api.github.com</code>.</p>\n<p>This can have some major advantages. Speed would be the absolute greatest, since I don\'t have to search through documentation and going back and forth their site. Also, in case of an endpoint changes it\'s name, the software will automatically adopt the new name.</p>\n<p>Now, all these are definitely good, but we don\'t see that much of API\'s making themselves discoverable. Why is that? Well, mostly because speed is not that much of an issue, since REST is pretty explanatory it self, you only have a few verbs to respond to, so each API\'s documentation wouldn\'t be that much. As for the breaking changes, well putting a Version number in front of each endpoint seems to work pretty good.</p>\n<p>The first thing that comes in mind when talking about discovering web services is Web Services Description Language(WSDL). Before the major adoption of REST principles, people would create APIs in different forms. And so a way to describe them was necessary. That\'s where WSDL would take action. REST on the other hand is not the same. When we hear an API is REST compliant, we know that uses the common HTTP verbs, can return/accept XML or JSON and respond with the known HTTP statuses codes. That is what REST APIs is all about.</p>\n<p>Nevertheless, I would say that machines that talk to each other, that are indeed able to discover each other\'s resources, is a tasty subject and I\'m pretty sure that we will see it really soon. At the mean time, let\'s focus on making our APIs usable and understandable with bare eye.</p>\n<p>Here are some references you can use if you want to make your API\'s discoverable. You can check out these great specs about describing your API through it\'s responses. I am not sure how these can be widely adopted, but once they do, we should expect it to go big. Never used them, so I am expecting from you. Google\'s also has looked into this and came out with some really fascinated results, be sure to check them also.</p>\n<p><a href="http://micro-api.org/" target="_blank" rel="noreferrer noopener">http://micro-api.org/</a>\n<a href="http://jsonapi.org/" target="_blank" rel="noreferrer noopener">http://jsonapi.org/</a>\n<a href="http://www.odata.org/" target="_blank" rel="noreferrer noopener">http://www.odata.org/</a>\n<a href="https://developers.google.com/discovery/" target="_blank" rel="noreferrer noopener">https://developers.google.com/discovery/</a></p>',id:"/home/travis/build/kbariotis/kostasbariotis.com/blog/making-a-rest-api-discoverable/index.md absPath of file >>> MarkdownRemark",timeToRead:2,frontmatter:{date:"2015-08-24T14:39:27.000Z",path:"/making-a-rest-api-discoverable/",tags:"rest, api",title:"Making a REST API discoverable",draft:null}},{excerpt:"When you are writing an API, especially when is going to go public, you want the error responses to be as consistent as possible. You want your errors to be identical everywhere, to provide not too much information for your internal system but enough…",html:'<p>When you are writing an API, especially when is going to go public, you want the error responses to be as consistent as possible. You want your errors to be identical everywhere, to provide not too much information for your internal system but enough information to the debugger.</p>\n<p>I am a REST fan and I hope you are too. What basically REST tell us, is to use <a href="http://en.wikipedia.org/wiki/List_of_HTTP_status_codes" target="_blank" rel="noreferrer noopener">HTTP\'s error codes</a> for our API responses. E.g. when the user requests a particular row from our DB, using an identifier, and that row doesn\'t exists we should respond with a <code class="language-text">404 Not Found</code> status code.</p>\n<p>Express.js has a <a href="http://expressjs.com/guide/error-handling.html" target="_blank" rel="noreferrer noopener">default error handler</a>. Basicaly it\'s just a middleware, with an extra argument, the <code class="language-text">err</code> argument.</p>\n<p>On an Express.js request lifecycle, when an error occurs, we pass on to the next middleware with populated error variable, and the error handler triggers.</p>\n<p>Let\'s start with that.</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js">router<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span>err<span class="token punctuation">,</span> req<span class="token punctuation">,</span> res<span class="token punctuation">,</span> next<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\t<span class="token comment">/* We log the error internaly */</span>\n    logger<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n\t<span class="token comment">/*\n     * Remove Error\'s `stack` property. We don\'t want\n     * users to see this at the production env\n     */</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span>req<span class="token punctuation">.</span>app<span class="token punctuation">.</span><span class="token keyword">get</span><span class="token punctuation">(</span><span class="token string">\'env\'</span><span class="token punctuation">)</span> <span class="token operator">!==</span> <span class="token string">\'development\'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">delete</span> err<span class="token punctuation">.</span>stack<span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n\n\t<span class="token comment">/* Finaly respond to the request */</span>\n    res<span class="token punctuation">.</span><span class="token function">status</span><span class="token punctuation">(</span>err<span class="token punctuation">.</span>statusCode <span class="token operator">||</span> <span class="token number">500</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>Two are the most essential parts here. Logging the error and proper displaying it. So I am logging it using a <a href="https://github.com/winstonjs/winston" target="_blank" rel="noreferrer noopener">logger</a> module and passing it to the user, using the error\'s status code. I have predefined those status codes so I don\'t have to deal with them every time. How? Let\'s see.</p>\n<p>An error often consists of more than just an error code. We need a title, little more information and the stack trace on development environment. Instead of dealing with those information every time we create objects and only changing the bits we want each time. Here\'s a <code class="language-text">Not Found</code> error object.</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js">module<span class="token punctuation">.</span><span class="token function-variable function">exports</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token function">notFound</span><span class="token punctuation">(</span>message<span class="token punctuation">,</span> errorCode<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\n  Error<span class="token punctuation">.</span><span class="token function">captureStackTrace</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>constructor<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n  <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>constructor<span class="token punctuation">.</span>name<span class="token punctuation">;</span>\n  <span class="token keyword">this</span><span class="token punctuation">.</span>message <span class="token operator">=</span> message <span class="token operator">||</span> <span class="token string">\'The requested resource couldn\\\'t be found\'</span><span class="token punctuation">;</span>\n  <span class="token keyword">this</span><span class="token punctuation">.</span>statusCode <span class="token operator">=</span> <span class="token number">404</span><span class="token punctuation">;</span>\n  <span class="token keyword">this</span><span class="token punctuation">.</span>errorCode <span class="token operator">=</span> errorCode <span class="token operator">||</span> <span class="token number">404</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>We are inheriting the Node.js <code class="language-text">Error</code> class and create a generic <code class="language-text">Not Found</code> error object we can use every time we need one.</p>\n<p>So now we need to pass this to the Express.js error handler. So on an ordinary controller we do:</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js">app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token string">\'/customers/:id\'</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span>req<span class="token punctuation">,</span> res<span class="token punctuation">,</span> next<span class="token punctuation">)</span><span class="token punctuation">{</span>\n\n\t<span class="token keyword">var</span> id <span class="token operator">=</span> <span class="token function">properSanitization</span><span class="token punctuation">(</span>req<span class="token punctuation">.</span>params<span class="token punctuation">.</span>id<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n\tsomeDBDriver<span class="token punctuation">.</span><span class="token function">findOne</span><span class="token punctuation">(</span>id<span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span>model<span class="token punctuation">)</span><span class="token punctuation">{</span>\n    \t<span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span>model<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        \t<span class="token function">next</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">NotFound</span><span class="token punctuation">(</span><span class="token string">\'Entity with id: \'</span> <span class="token operator">+</span> id <span class="token operator">+</span> <span class="token string">\' couldn\\\'t be bound.\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>\n        \t<span class="token comment">/* ... */</span>\n        <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>So now the error handler will take place and do it\'s magic.</p>\n<p>Often, in a more complex API will need more expressive status codes to express it\'s disfunctionalities. In that case, you can still respond with the proper status code but keep an internal error eode that makes sense on your application. So, in case a user tries to login with wrong credentials, send a 401 to the API consumer but keep an internal code, e.g. 4001 that means <strong>"Wrong Username/Password"</strong>. And that\'s what the <code class="language-text">errorCode</code> is.</p>\n<p>Here\'s a simple <a href="http://github.com/kbariotis/throw.js" target="_blank" rel="noreferrer noopener">error collection</a> i\'ve wrote, to save you the hassle. Use it and send me your suggestions and/or notices.</p>',id:"/home/travis/build/kbariotis/kostasbariotis.com/blog/rest-api-error-handling-with-express-js/index.md absPath of file >>> MarkdownRemark",timeToRead:2,frontmatter:{date:"2015-05-22T16:35:17.000Z",path:"/rest-api-error-handling-with-express-js/",tags:"node.js, rest, express.js, api",title:"REST API Error Handling with Express.js",draft:null}},{excerpt:"Recently,  Thanos  got me into  JWT . Json Web Token is the modern way of authenticating between your REST API and a web/mobile/native client without using Sessions and/or cookies. This is a nice explanation of how things were  done , until Json Web…",html:'<p>Recently, <a href="http://attheo.do" target="_blank" rel="noreferrer noopener">Thanos</a> got me into <a href="http://jwt.io" target="_blank" rel="noreferrer noopener">JWT</a>. Json Web Token is the modern way of authenticating between your REST API and a web/mobile/native client without using Sessions and/or cookies. This is a nice explanation of how things were <a href="http://stackoverflow.com/questions/15051712/how-to-do-authentication-with-a-rest-api-right-browser-native-clients" target="_blank" rel="noreferrer noopener">done</a>, until Json Web Tokens came into place.</p>\n<p>What we can achieve with JWT is really simple: we are getting rid of cookies and sessions while the user\'s info is completely hidden within the request\'s header to the server.</p>\n<p>Upon login, the server returns an encrypted token which, among other info, contains the user identifier. This identifier, which happens to be application specific, is then decrypted by the server at any moment required, which is what enables the server to know who\'s on the other end of the line.</p>\n<p>Let\'s crack it down.</p>\n<p>First we need a JWT Header like this</p>\n<div class="gatsby-highlight">\n      <pre class="language-json"><code class="language-json"><span class="token punctuation">{</span>\n\t<span class="token property">"typ"</span><span class="token operator">:</span><span class="token string">"JWT"</span><span class="token punctuation">,</span>\n    <span class="token property">"alg"</span><span class="token operator">:</span><span class="token string">"HS256"</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>which says that the JWT is going to be digitaly signed using the HS256 algorithm.\nBase64url this and you have the first piece of your JWT, namely the Header.\n<code class="language-text">eyJ0eXAiOiJKV1QiLA0KICJhbGciOiJIUzI1NiJ9</code></p>\n<p>Now we need our actual message that we are going to transmit, namely the Payload.</p>\n<div class="gatsby-highlight">\n      <pre class="language-json"><code class="language-json"><span class="token punctuation">{</span>\n\t<span class="token property">"iss"</span><span class="token operator">:</span><span class="token string">"joe"</span><span class="token punctuation">,</span>\n    <span class="token property">"exp"</span><span class="token operator">:</span><span class="token number">1300819380</span><span class="token punctuation">,</span>\n    <span class="token property">"http://example.com/is_root"</span><span class="token operator">:</span><span class="token boolean">true</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>Yeap. Plain JSON where you can put anything you want. <code class="language-text">iss</code> and <code class="language-text">exp</code> are defined by the <a href="http://tools.ietf.org/html/draft-ietf-oauth-json-web-token-06#section-4.1" target="_blank" rel="noreferrer noopener">specs</a> so you can easily use open source libraries. <code class="language-text">exp</code> for example stands for Expiration Time in UNIX Timestamp and common libraries know that.</p>\n<p>Base64url this and we have our second part.\n<code class="language-text">eyJpc3MiOiJqb2UiLA0KICJleHAiOjEzMDA4MTkzODAsDQogImh0dHA6Ly9leGFtcGxlLmNvbS9pc19yb290Ijp0cnVlfQ</code></p>\n<p>Now since we choose the HS256 algorithm of our signature, we are going to concatenate our Header and Payload and sign them with the HS256 algorithm using a secret key. This is what gives us the Signature.</p>\n<p>Concatenate all of them together, using dots and we have our JSON Web Token(without the break lines).</p>\n<p><code class="language-text">eyJ0eXAiOiJKV1QiLA0KICJhbGciOiJIUzI1NiJ9\n.\neyJpc3MiOiJqb2UiLA0KICJleHAiOjEzMDA4MTkzODAsDQogImh0dHA6Ly9leGFtcGxlLmNvbS9pc19yb290Ijp0cnVlfQ\n.\ndBjftJeZ4CVP-mB92K27uhbUJU1p1r_wW1gFWFOEjXk</code></p>\n<p>So, now you can store this piece of string on the client using <a href="https://developer.mozilla.org/en-US/docs/Web/Guide/API/DOM/Storage" target="_blank" rel="noreferrer noopener">modern Client Storage mechanisms</a>, and send it to your server on every request. And your server will understand who you are. No more sessions, no more cookies.</p>\n<p>Last but not least, make sure that you are using a secure connection with your server, since if that token is stolen, through Man In The Middle Attack, anyone can use it.</p>\n<p>The <a href="http://tools.ietf.org/html/draft-ietf-oauth-json-web-token-06" target="_blank" rel="noreferrer noopener">specs</a> are really simple and you can get into it right away.</p>\n<p>Further reading:</p>\n<ul>\n<li>\n<p><a href="https://auth0.com/blog/2014/01/07/angularjs-authentication-with-cookies-vs-token/" target="_blank" rel="noreferrer noopener">Cookies vs Tokens. Getting auth right with Angular.JS</a></p>\n</li>\n<li>\n<p><a href="http://angular-tips.com/blog/2014/05/json-web-tokens-examples/" target="_blank" rel="noreferrer noopener">Json Web Tokens: Examples</a></p>\n</li>\n<li>\n<p><a href="http://jwt.io/#libraries" target="_blank" rel="noreferrer noopener">OS Libraries</a></p>\n</li>\n</ul>',id:"/home/travis/build/kbariotis/kostasbariotis.com/blog/jwt-the-modern-way-of-authenticating/index.md absPath of file >>> MarkdownRemark",timeToRead:3,frontmatter:{date:"2015-01-08T18:51:28.000Z",path:"/jwt-the-modern-way-of-authenticating/",tags:"jwt, rest, apis, authentication, spa",title:"JWT: The modern way of authenticating",draft:null}}],tag:"rest",pagesSum:1,page:1}}}});
//# sourceMappingURL=path---tag-rest-6c9620232a3c59ae31dc.js.map
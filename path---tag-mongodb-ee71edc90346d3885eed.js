webpackJsonp([0xbb86d23b63df],{704:function(n,a){n.exports={data:{site:{siteMetadata:{title:"Kostas Bariotis' Blog",description:'Senior full stack engineer <a href="https://geekbot.io">@geekbot_io</a>, co-organizer of <a href="https://devitconf.org">@devitconf</a> & <a href="https://www.meetup.com/Thessaloniki-Node-js-Meetup/">@skgnodejs</a>, host of <a href="http://devastation.tv">Devastation Podcast</a>.',siteUrl:"https://kostasbariotis.com"}}},pathContext:{posts:[{excerpt:"It all started when  Adonis  told me that he was looking to contribute to some open source projects. He had a list of projects that he actively uses but he didn't want to always be checking their issues list for new issues that he could get his hands…",html:'<p>It all started when <a href="https://twitter.com/_adonisk" target="_blank" rel="noreferrer noopener">Adonis</a> told me that he was looking to contribute to some open source projects. He had a list of projects that he actively uses but he didn\'t want to always be checking their issues list for new issues that he could get his hands on. So we thought it would be cool if we had a way to watch a GitHub repository for issues of specific tags, e.g. "Need help", "Good first contribution", etc.</p>\n<p>I thought that\'s something I could easily hack in a weekend. So here\'s <a href="https://gityeller.com" target="_blank" rel="noreferrer noopener">GitYeller</a>.</p>\n<h2 id="stack"><a href="#stack" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Stack</h2>\n<p>GitYeller is built using JavaScript. Node.js and React more specifically. It\'s hosted on a <a href="https://m.do.co/c/2b3d657e5315" target="_blank" rel="noreferrer noopener">DigitalOcean droplet</a>, uses a <a href="https://letsencrypt.org/" target="_blank" rel="noreferrer noopener">Let\'s Encrypt</a> certificate, <a href="https://www.mailgun.com" target="_blank" rel="noreferrer noopener">Mailgun</a> for transactional emails and a MongoDB for persistent storage.</p>\n<p>It looks like this:</p>\n<p>\n          <a\n            class="gatsby-resp-image-link"\n            href="undefined"\n            style="display: block"\n            target="_blank"\n            rel="noopener"\n          >\n            <span\n              class="gatsby-resp-image-wrapper"\n              style="position: relative; z-index: -1; display: block; "\n            >\n              <span\n                class="gatsby-resp-image-background-image"\n                style="padding-bottom: 12.254160363086234%;position: relative; width: 100%; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAACCAYAAABYBvyLAAAACXBIWXMAAAsSAAALEgHS3X78AAAAk0lEQVQI12P4/PHr/28fv/z5/+vf/w+vP1QxQMHzp2+c/gPB+zef8kD8bWuPsJamTGQBYvaqzKmsB3edYwWJf3j/eRFI3fePX/5//fz9JsO3L9+//vnw8e//v//+f3v3aT3MwBfP34WDFH5+/7kZxJ/Vu44baBhvafJE1vK0yTxz+jdwg8S/f/85E6Tu7/uPv0A0ACb7YgF+qZnEAAAAAElFTkSuQmCC\'); background-size: cover; display: block;"\n              >\n                <img\n                  class="gatsby-resp-image-image"\n                  style="width: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n                  alt=""\n                  title=""\n                  src="/static/GitYellerDiagram-56cb14d1d599ba64fc46546d2ec6c754-34135.png"\n                  srcset="/static/GitYellerDiagram-56cb14d1d599ba64fc46546d2ec6c754-ec056.png 188w,\n/static/GitYellerDiagram-56cb14d1d599ba64fc46546d2ec6c754-44ccd.png 375w,\n/static/GitYellerDiagram-56cb14d1d599ba64fc46546d2ec6c754-34135.png 661w"\n                  sizes="(max-width: 661px) 100vw, 661px"\n                />\n              </span>\n            </span>\n          </a>\n          </p>\n<p>So the Front End app is responsible for gathering emails from the user and inserting them into MongoDB. The worker is continuously traversing the collection and checking them against GitHub to see if there is anything new. It\'s that simple!</p>\n<h2 id="worker"><a href="#worker" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Worker</h2>\n<p>At first, I thought a queue would be a good fit for this since I needed to keep the order that the documents were being created. I knew that the purpose of a queue was to keep the messages processing in order but only to be processed once. I wanted to keep processing the same messages over and over again. So I decided to go with the simplest way possible. Let\'s have a worker continuously fetching a collection over and over again.</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token comment">/**\n * Main run function that handles the infinite\n * loop over the database\n */</span>\n<span class="token keyword">const</span> <span class="token function-variable function">run</span> <span class="token operator">=</span> <span class="token punctuation">(</span>cursor<span class="token punctuation">,</span> worker<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n  <span class="token keyword">if</span> <span class="token punctuation">(</span>cursor<span class="token punctuation">.</span><span class="token function">isClosed</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    cursor<span class="token punctuation">.</span><span class="token function">rewind</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token keyword">return</span> cursor\n    <span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n    <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span>subscription <span class="token operator">=></span> <span class="token punctuation">{</span>\n      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>subscription<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">\'Cursor got to the end\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>\n        <span class="token keyword">return</span> subscription<span class="token punctuation">;</span>\n      <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span>\n    <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span>subscription <span class="token operator">=></span> worker<span class="token punctuation">.</span><span class="token function">run</span><span class="token punctuation">(</span>subscription<span class="token punctuation">)</span><span class="token punctuation">)</span>\n    <span class="token punctuation">.</span><span class="token keyword">catch</span><span class="token punctuation">(</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span> <span class="token operator">=></span> logger<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span><span class="token punctuation">)</span>\n    <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">run</span><span class="token punctuation">(</span>cursor<span class="token punctuation">,</span> worker<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>By passing a <a href="https://mongodb.github.io/node-mongodb-native/2.0/api/Cursor.html" target="_blank" rel="noreferrer noopener">MongoDB cursor object</a> and a function that you want to be called with every item, it keeps traversing the collection and gets updated even when a new item is being created. There is no need to restart the connection to MongoDB.</p>\n<p>The <code class="language-text">setTimeout</code> ensures that the next call will get it\'s own call stack so we don\'t overflow the current one.</p>\n<p><a href="https://github.com/kbariotis/gityeller/blob/master/worker/index.js" target="_blank" rel="noreferrer noopener">Here\'s the complete</a> worker\'s source code.</p>\n<h2 id="check-against-github"><a href="#check-against-github" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Check against GitHub</h2>\n<p>Let\'s see how we are asking GitHub if it has something new to show us. The actual API call is this:</p>\n<div class="gatsby-highlight">\n      <pre class="language-text"><code class="language-text">URL: api.github.com/owner/repo?labels=label</code></pre>\n      </div>\n<p>This will return us a list of issues labeled with that specific label of that repository.</p>\n<p>Once we make this request for the first time, we have a timestamp of the latest check. Next time, we will just query with that timestamp, in order to get only the issues that have been created between the last check and now (Actually GitHub returns those issues that have even been updated during that period, so <a href="https://github.com/kbariotis/gityeller/blob/master/worker/worker.js#L89" target="_blank" rel="noreferrer noopener">I have to make some extra checks</a>). Now the query looks like this:</p>\n<div class="gatsby-highlight">\n      <pre class="language-text"><code class="language-text">URL: api.github.com/owner/repo?labels=label&amp;since=LATEST_RESPONSE_DATE</code></pre>\n      </div>\n<p>GitHub\'s API has a limit. They allow you to do certain API calls in a certain amount of time. I wanted to minimize the calls as much possible because once I hit that limit I won\'t be able to take the results I wanted so the users will never get notified.</p>\n<p>Each time we are making this request, GitHub will count minus one requests of our available quota. In order to save some juice I am using <a href="https://developer.github.com/v3/#conditional-requests" target="_blank" rel="noreferrer noopener">GitHub\'s conditional requests</a>. The above request will return us an ETag header with a value. We can use that value to validate whether our latest response is outdated or not. If it\'s not, GitHub will respond with a 304 Not Modified status code and an empty body.</p>\n<div class="gatsby-highlight">\n      <pre class="language-text"><code class="language-text">URL: api.github.com/owner/repo?labels=label&amp;since=LATEST_RESPONSE_DATE\nHEADERS: If-None-Match: LATEST_RESPONSE_ETAG</code></pre>\n      </div>\n<p>This way the request won\'t be counted. We saved a request and we will only be charged if there is actually something new.</p>\n<p>Read more about <a href="https://bitworking.org/news/150/REST-Tip-Deep-etags-give-you-more-benefits" target="_blank" rel="noreferrer noopener">ETags and "conditional requests"</a>.</p>\n<h2 id="conclusion"><a href="#conclusion" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Conclusion</h2>\n<p>Certainly, the solution is not optimal. Once the collection grows bigger, the time between the checks for each individual item in the collection will also be long. But it was a fun weekend project. I am already watching the <a href="https://github.com/nodejs/node" target="_blank" rel="noreferrer noopener">node.js</a> repo for new issues labeled <code class="language-text">v7.x</code>.</p>\n<p>Which repo are you going to watch? Leave me a comment if you liked my weekend project. If you think you can help me make it better, please see the <a href="https://github.com/kbariotis/gityeller" target="_blank" rel="noreferrer noopener">source code</a>.</p>',id:"/home/travis/build/kbariotis/kostasbariotis.com/blog/gityeller-com-weekend-project/index.md absPath of file >>> MarkdownRemark",timeToRead:4,frontmatter:{date:"2017-03-01T08:49:08.000Z",path:"/gityeller-com-weekend-project/",tags:"node.js, mongodb",title:"GitYeller.com is my latest weekend project",draft:null}},{excerpt:"As of MongoDB 3.2, a  new feature  has been added that introduces a left outer join for the first time.  is part of the MongoDB aggregation pipeline. It's a separate stage and the syntax is really simple: The above command will fetch every document…",html:'<p>As of MongoDB 3.2, a <a href="https://docs.mongodb.org/manual/reference/operator/aggregation/lookup/" target="_blank" rel="noreferrer noopener">new feature</a> has been added that introduces a left outer join for the first time.</p>\n<p><code class="language-text">$lookup</code> is part of the MongoDB aggregation pipeline. It\'s a separate stage and the syntax is really simple:</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js">db<span class="token punctuation">.</span>orders<span class="token punctuation">.</span><span class="token function">aggregate</span><span class="token punctuation">(</span><span class="token punctuation">[</span>\n    <span class="token punctuation">{</span>\n      $lookup<span class="token punctuation">:</span>\n        <span class="token punctuation">{</span>\n          <span class="token keyword">from</span><span class="token punctuation">:</span> <span class="token string">"inventory"</span><span class="token punctuation">,</span>\n          localField<span class="token punctuation">:</span> <span class="token string">"item"</span><span class="token punctuation">,</span>\n          foreignField<span class="token punctuation">:</span> <span class="token string">"sku"</span><span class="token punctuation">,</span>\n          <span class="token keyword">as</span><span class="token punctuation">:</span> <span class="token string">"inventory_docs"</span>\n        <span class="token punctuation">}</span>\n   <span class="token punctuation">}</span>\n<span class="token punctuation">]</span><span class="token punctuation">)</span>\n</code></pre>\n      </div>\n<p>The above command will fetch every document from the orders collection with the inventory_docs field in each one of them, populated with the matched documents from the inventory collection.</p>\n<p>One will first notice that there is no way to specify matching conditions for the records to be joining the document. My hypothesis is that you\'re using an SQL data store in case you have many and complex relations between your entities. But in case that you are using a MongoDB data store while having that much relations, you will be disappointed.</p>\n<p>Mongo\'s <code class="language-text">$lookup</code> stage isn\'t coming to a step closer to traditional SQL join. It seems like a nice tool to have in your aggregation toolbox, but it won\'t cover you full if you need to do relational queries.</p>',id:"/home/travis/build/kbariotis/kostasbariotis.com/blog/mongodb-aggregation-lookup-for-joins/index.md absPath of file >>> MarkdownRemark",timeToRead:1,frontmatter:{date:"2016-01-28T17:15:54.000Z",path:"/mongodb-aggregation-lookup-for-joins/",tags:"mongodb",title:"MongoDB Aggregation: $lookup for JOINs",draft:null}},{excerpt:"Today I lost a few hours trying to understand why a document that I was fetching through Mongoose, kept returning true against checking for a field with the   operator, even though the document didn't contain that field. But still it would return…",html:'<p>Today I lost a few hours trying to understand why a document that I was fetching through Mongoose, kept returning true against checking for a field with the <code class="language-text">in</code> operator, even though the document didn\'t contain that field.</p>\n<p>But still it would return true:</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">var</span> mongoose <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'mongoose\'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n  Schema <span class="token operator">=</span> mongoose<span class="token punctuation">.</span>Schema<span class="token punctuation">;</span>\n\n<span class="token keyword">var</span> exampleSchema <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Schema</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  someField<span class="token punctuation">:</span> String<span class="token punctuation">,</span>\n  notExistingField<span class="token punctuation">:</span> String\n<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> versionKey<span class="token punctuation">:</span> <span class="token boolean">false</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">/* We know that this document doesn\'t have the notExistingField in the DB */</span>\nexampleSchema<span class="token punctuation">.</span><span class="token function">findOne</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n    <span class="token string">\'_id\'</span><span class="token punctuation">:</span> id\n  <span class="token punctuation">}</span><span class="token punctuation">)</span>\n    <span class="token punctuation">.</span><span class="token function">exec</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span>err<span class="token punctuation">,</span> document<span class="token punctuation">)</span><span class="token punctuation">{</span>\n\n      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>document<span class="token punctuation">)</span> <span class="token comment">/* { someField: \'value\' } */</span>\n      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>document<span class="token punctuation">[</span><span class="token string">\'notExistingField\'</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token comment">/* undefined */</span>\n      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'notExistingField\'</span> <span class="token keyword">in</span> document<span class="token punctuation">)</span> <span class="token comment">/* true */</span>\n\n    <span class="token punctuation">}</span><span class="token punctuation">)</span>\n</code></pre>\n      </div>\n<p>The fact is that Mongoose will first comply the fetched document against the defined Schema in order for it\'s getters/setters functions to work. So even though, we can\'t see the <code class="language-text">notExistingField</code>, the <code class="language-text">in</code> operator will always return true.</p>\n<p>A solution is to change the checking and check for an undefined value, like this:</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token comment">/* We know that this document doesn\'t have the notExistingField in the DB */</span>\nexampleSchema<span class="token punctuation">.</span><span class="token function">findOne</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n    <span class="token string">\'_id\'</span><span class="token punctuation">:</span> id\n  <span class="token punctuation">}</span><span class="token punctuation">)</span>\n    <span class="token punctuation">.</span><span class="token function">exec</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span>err<span class="token punctuation">,</span> document<span class="token punctuation">)</span><span class="token punctuation">{</span>\n\n      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>document<span class="token punctuation">)</span> <span class="token comment">/* { someField: \'value\' } */</span>\n      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>document<span class="token punctuation">[</span><span class="token string">\'notExistingField\'</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token comment">/* undefined */</span>\n      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token operator">!</span><span class="token operator">!</span>document<span class="token punctuation">[</span><span class="token string">\'notExistingField\'</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token comment">/* false */</span>\n\n    <span class="token punctuation">}</span><span class="token punctuation">)</span>\n</code></pre>\n      </div>\n<p>Fixed.</p>',id:"/home/travis/build/kbariotis/kostasbariotis.com/blog/mongoose-objects-and-the-in-operator/index.md absPath of file >>> MarkdownRemark",timeToRead:1,frontmatter:{date:"2015-08-31T17:51:38.000Z",path:"/mongoose-objects-and-the-in-operator/",tags:"mongodb, mongoose",title:"Mongoose objects and the IN operator",draft:null}},{excerpt:"Hasn't been a long time when i started working with  Wearetech.io  and my first challenge was on. Sweet! If you want to learn more about Wearetech.io, check the  site  and our  Github repo . Now on the fun part. We have a use case where an individual…",html:'<p>Hasn\'t been a long time when i started working with <a title="Wearetech.io" href="http://wearetech.io" target="_blank">Wearetech.io</a> and my first challenge was on. Sweet!</p>\n<p>If you want to learn more about Wearetech.io, check the <a title="Wearetech.io" href="http://wearetech.io" target="_blank">site</a> and our <a title="Wearetech.io on Github" href="https://github.com/WeAreTech/wearetech.io" target="_blank">Github repo</a>.</p>\n<p>Now on the fun part. We have a use case where an individual would be able to register on our site as a City Curator.</p>\n<p>He could search for his City and if he wouldn’t find it in our database he would register it. When the next candidate comes in, he searches for his place and if it would be inside a 10 kilometers range of an already registered city we would deny it, since we wouldn’t want to have city calendars overlapping with each other.</p>\n<p>When <a title="Thanasis Polychronakis on Twitter" href="http://twitter.com/thanpolas" target="_blank">Thanasis </a>started building Wearetech.io he decided to go with MongoDB. So in order to create the above scenario, <a title="MongoDB Geospatial Queries" href="http://docs.mongodb.org/manual/applications/geospatial-indexes/" target="_blank">MongoDB Geospatial Queries</a> to the rescue!</p>\n<p>MongoDB supports two types of <a title="Geospatial Queries on Wikipedia" href="http://en.wikipedia.org/wiki/Spatial_query" target="_blank">Geospatial Queries</a> indexing.</p>\n<ul>\n\t<li>The spherical (<a title="2dSphere Indexes on MongoDB" href="http://docs.mongodb.org/manual/core/2dsphere/" target="_blank">2dSphere</a>), that would allow you to store shapes made of points (coordinates) and then make comparisons with them like intersection, etc.</li>\n\t<li>The flat (<a title="2d indexes on MongoDB" href="http://docs.mongodb.org/manual/core/2d/" target="_blank">2d</a>), that would store single points and then come up with their distances.</li>\n</ul>\nYour choice will affect your development a lot down the road, so think wisely.\n<p>Now on the code side, we will use Mongoose to shape our models. Here\'s the most simple one.</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">var</span> mongoose     <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'mongoose\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">var</span> Schema     <span class="token operator">=</span> mongoose<span class="token punctuation">.</span>Schema<span class="token punctuation">;</span>\n\n<span class="token keyword">var</span> CitySchema   <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Schema</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  name<span class="token punctuation">:</span> String<span class="token punctuation">,</span>\n  geo<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    type<span class="token punctuation">:</span> <span class="token punctuation">[</span>Number<span class="token punctuation">]</span><span class="token punctuation">,</span>\n    index<span class="token punctuation">:</span> <span class="token string">\'2d\'</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\nmodule<span class="token punctuation">.</span>exports <span class="token operator">=</span> mongoose<span class="token punctuation">.</span><span class="token function">model</span><span class="token punctuation">(</span><span class="token string">\'City\'</span><span class="token punctuation">,</span> CitySchema<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>Now we can start populating our DB like this</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">var</span> City <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'./app/models/city\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">var</span> cityModel     <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">City</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> \ncityModel<span class="token punctuation">.</span>name <span class="token operator">=</span> req<span class="token punctuation">.</span>body<span class="token punctuation">.</span>name<span class="token punctuation">;</span> \ncityModel<span class="token punctuation">.</span>geo    <span class="token operator">=</span> <span class="token punctuation">[</span> req<span class="token punctuation">.</span>body<span class="token punctuation">.</span>lat<span class="token punctuation">,</span> req<span class="token punctuation">.</span>body<span class="token punctuation">.</span>lng <span class="token punctuation">]</span><span class="token punctuation">;</span> \n\ncityModel<span class="token punctuation">.</span><span class="token function">save</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">if</span> <span class="token punctuation">(</span>err<span class="token punctuation">)</span>\n    res<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n  res<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>And now on the fun part</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">var</span> distance <span class="token operator">=</span> <span class="token number">1000</span> <span class="token operator">/</span> <span class="token number">6371</span><span class="token punctuation">;</span>\n\n<span class="token keyword">var</span> query <span class="token operator">=</span> City<span class="token punctuation">.</span><span class="token function">findOne</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token string">\'geo\'</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>\n  $near<span class="token punctuation">:</span> <span class="token punctuation">[</span>\n    req<span class="token punctuation">.</span>body<span class="token punctuation">.</span>lat<span class="token punctuation">,</span>\n    req<span class="token punctuation">.</span>body<span class="token punctuation">.</span>lng\n  <span class="token punctuation">]</span><span class="token punctuation">,</span>\n  $maxDistance<span class="token punctuation">:</span> distance\n\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\nquery<span class="token punctuation">.</span><span class="token function">exec</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span>err<span class="token punctuation">,</span> city<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">if</span> <span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">throw</span> err<span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>city<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    res<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'Cant save: Found city:\'</span> <span class="token operator">+</span> city<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    res<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span>city<span class="token punctuation">)</span><span class="token punctuation">;</span>\n <span class="token punctuation">}</span>\n\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>Our distance is in radians metric system and you can find more on how to calculate it <a title="Convert to radians" href="http://docs.mongodb.org/manual/tutorial/calculate-distances-using-spherical-geometry-with-2d-geospatial-indexes/" target="_blank">here</a>.</p>\n<p><em>Due to recent Heroku pricing changes, this demo has broke. Still haven\'t find the time to fix it. :(</em>\nHere is a <a title="MongoDB Geospatial Queries PoC" href="https://damp-everglades-7521.herokuapp.com/" target="_blank">demo </a>of it. Try searching your City. If it\'s available register it and then try to find a place inside a 10 kilometers range of your previeus registered City.</p>\n<p>Hope you will find it interesting. Comments?</p>',
id:"/home/travis/build/kbariotis/kostasbariotis.com/blog/geospatial-query-with-mongodb-and-node-js/index.md absPath of file >>> MarkdownRemark",timeToRead:2,frontmatter:{date:"2014-10-30T18:16:00.000Z",path:"/geospatial-query-with-mongodb-and-node-js/",tags:"node.js, mongodb, wearetech.io",title:"Geospatial Query with MongoDB and Node.js",draft:null}}],tag:"mongodb",pagesSum:1,page:1}}}});
//# sourceMappingURL=path---tag-mongodb-ee71edc90346d3885eed.js.map
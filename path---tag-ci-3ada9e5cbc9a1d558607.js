webpackJsonp([7973190232303],{666:function(a,e){a.exports={data:{site:{siteMetadata:{title:"Kostas Bariotis' Blog",description:'Senior full stack engineer <a href="https://geekbot.io">@geekbot_io</a>, co-organizer of <a href="https://devitconf.org">@devitconf</a> & <a href="https://www.meetup.com/Thessaloniki-Node-js-Meetup/">@skgnodejs</a>, host of <a href="http://devastation.tv">Devastation Podcast</a>.',siteUrl:"https://kostasbariotis.com"}}},pathContext:{posts:[{excerpt:"A database is a vital part of every complex application. Databases change very often and contain data that can even disintegrate our whole application if they get out of sync. Changing a live database, whether it's related to schema or data, can be…",html:'<p>A database is a vital part of every complex application. Databases change very often and contain data that can even disintegrate our whole application if they get out of sync. Changing a live database, whether it\'s related to schema or data, can be hard. Modern apps, where Agile methodologies along with processes such as <a href="http://continuousdelivery.com/" target="_blank" rel="noreferrer noopener">Continuous Integration</a> apply, have raised the bar of complexity so maintaining a database separately from the application\'s business logic can be quite painful.</p>\n<p>Fortunately, we have <a href="https://en.wikipedia.org/wiki/Schema_migration" target="_blank" rel="noreferrer noopener">Database Migrations</a>, a technique to help us keep our database changes under control.</p>\n<h2 id="the-problem"><a href="#the-problem" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>The problem</h2>\n<p>Problems I have seen over the years:</p>\n<ul>\n<li>Apps often need certain data to be in place in order to run. In a fresh environment, a team member may not have those or may need to import a subset of the production database.</li>\n<li>Different instances of databases, such as production, stage, local environments, may get out of sync.</li>\n<li>Multiple environments setups raise the complexity of different databases versions running at the same time</li>\n<li>Continuous delivery needs repeatable and testable tasks</li>\n<li>When a developer puts his/her hands in the DB, that change will be lost forever. Code evolves along with our Schema so keeping changes tracked is quite a necessity</li>\n<li>Data integrity after updates</li>\n<li>Rollbacks are our safety net of broken deployments. You can’t rollback your app when your data will be out of order.</li>\n</ul>\n<p>Shorter release cycles often require database changes. Having those changes under version control allows us to make changes safely and in a more consistent way. A crucial part of following such methodologies is the evolutionary design which can help us keep track of how the database evolved along with our application. That way our data can rollback at any point of the history hand in hand with our app.</p>\n<p>Evolving our database design along with our core functioning data during the application development, and doing that in a seamless way, requires the use of more sophisticated processes like Database migrations, which essentially are the management of incremental, reversible changes to our databases.</p>\n<p>Database migrations are all about treating our database as another piece of code while applying core principles of Continuous Integration. Publishing new features along with the database changes, without requiring manual Ops work and removing any hands-on session from the DB is the way to move forward and create robust apps.</p>\n<p>This article will walk you through the different types of migrations, how they are being used and how to write DB migrations in a Nodejs environment.</p>\n<p>Let\'s explore the types of database migrations.</p>\n<h2 id="types-of-migrations"><a href="#types-of-migrations" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Types of Migrations</h2>\n<p>Database migrations usually have two forms. Both of those forms are usually required in a long-running project.</p>\n<h3 id="altering-schema"><a href="#altering-schema" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Altering schema</h3>\n<p>One of them is when we are in need of changing the database\'s schema. For example, when we add an Index, removing/adding a field or restructuring the current fields, moving one from being a String into an Integer.\nThis could also mean that we may need to restructure the data that is already in the database, which brings us to the second form of migrations.</p>\n<h3 id="migrating-data"><a href="#migrating-data" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Migrating data</h3>\n<p>In a production environment, where data is already in the DB, we may have to migrate those as well. Same cases apply to testing and staging environments but production is a more fragile universe where mistakes are not forgiven.  Say we need to split the <code class="language-text">Name</code> field of our Users table into a <code class="language-text">First/Last Name</code> fields combination. One approach would be to create a field called <code class="language-text">Last Name</code>. Traverse the table, split the <code class="language-text">Name</code> into two chunks and move the latter to the newly created field. Finally, rename the <code class="language-text">Name</code> field into <code class="language-text">First Name</code>. This is a case of data migrations.</p>\n<p>But how do we handle this without putting our hands in the DB?</p>\n<h2 id="automation-is-the-key"><a href="#automation-is-the-key" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Automation is the key</h2>\n<p>We must be able to describe our database and the migrations with code. This will allow us to store them into our VCS and run them on demand and in an autonomous way.</p>\n<h2 id="sql-vs-nosql"><a href="#sql-vs-nosql" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>SQL vs NoSQL</h2>\n<p>As we know, SQL and NoSQL have some core differences but that also doesn\'t mean that we can omit migrations in any of them. SQL structure is strictly defined and both data and schema changes can be safely done using migrations. NoSQL, on the other hand, may not need that much of a schema change, due to their elasticity in that subject, but will definitely need data migrations.</p>\n<h2 id="database"><a href="#database" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Database?</h2>\n<p>Modern apps don\'t necessarily handle data or talk to a database directly. E.g., in a Microservices environment, applications may rely on other applications to hold their data and communicate with them through a REST API. That\'s ok because migrations may still need to run. But instead of interacting directly with a database, you have to use the API to make your changes.</p>\n<h2 id="migrations-dive-with-nodejs"><a href="#migrations-dive-with-nodejs" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Migrations dive with Nodejs</h2>\n<p>Applications built with Nodejs have no differences from any other stack.</p>\n<p>After doing a little research, I ended up using <a href="https://github.com/sequelize/umzug" target="_blank" rel="noreferrer noopener">umzug</a> which provides a nice programmatic API to make your migrations. It\'s not opinionated at all and it doesn\'t provide any helper functions to make your actual migrations. It\'s just a library that will store what migrations have run. Which is actually what I need. If you need a more powerful thing you may want to take a look at <a href="https://github.com/db-migrate/node-db-migrate" target="_blank" rel="noreferrer noopener">db-migrate</a>, which provides adapters for major databases and it will help you make changes to those in a more intuitive way.</p>\n<p>Migration systems are providing a few standard things in order to make your migrations. Let\'s see those using Node.js:</p>\n<h3 id="write-a-migration"><a href="#write-a-migration" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Write a migration</h3>\n<p>Usually, we want to define two standard methods for a migration script. The function to run when we are migrating and the function when we are rolling back:</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token string">\'use strict\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">var</span> Promise <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'bluebird\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\nmodule<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  up<span class="token punctuation">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span>resolve<span class="token punctuation">,</span> reject<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token comment">/* Here we write our migration function */</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n\n  down<span class="token punctuation">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span>resolve<span class="token punctuation">,</span> reject<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token comment">/* This runs if we decide to rollback. In that case we must revert the `up` function and bring our database to it\'s initial state */</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>Our migrations are residing inside a configurable storage and umzug is referring to them with their filenames. For that matter, we should choose our naming strategy wisely before implementation. I have chosen to give them a separate versioning, e.g. 1.0.js, 1.1.js or we could give them the issue ID of our PM that refers to the particular requirement. The choice is yours. Just be consistent.</p>\n<h3 id="keep-track-of-the-migrations-that-have-already-been-executed"><a href="#keep-track-of-the-migrations-that-have-already-been-executed" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Keep track of the migrations that have already been executed</h3>\n<p>At any given moment, we must be able to tell what migrations have been executed and which migration needs to run next if there is one to run.\nThis allows us to know the state of our database.</p>\n<p>Umzug can use Sequelize to store the history of the migration into MySQL. <a href="https://github.com/sequelize/umzug#custom" target="_blank" rel="noreferrer noopener">But with no hassle at all, we can write our own Adaptor to store them wherever we want</a>.</p>\n<h3 id="run-a-migration-or-run-all-migrations"><a href="#run-a-migration-or-run-all-migrations" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Run a migration or run all migrations</h3>\n<p>We have to be able to run a specific migration or run all migrations we have written. Those must run in order because usually some of them depend on others.\nE.g. on a fresh environment we must run all migrations in order to bring the newly created database to its current state, as it currently lies in production.</p>\n<p>To run all migrations:</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js">umzug<span class="token punctuation">.</span><span class="token function">up</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token operator">...</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>or to run up to a particular migration:</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js">umzug<span class="token punctuation">.</span><span class="token function">up</span><span class="token punctuation">(</span><span class="token punctuation">{</span> to<span class="token punctuation">:</span> <span class="token string">\'migration-filename\'</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token operator">...</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<h3 id="rollback-a-migration"><a href="#rollback-a-migration" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Rollback a migration</h3>\n<p>When defining one particular migration we are describing changes that will be applied to the database. Those changes must be reversible and that is why we must also describe the reverse action of that migration.\nIn case we need to rollback our application back in a previous state that also introduced database changes, those changes must be revert as well in order for the application to continue operating like it used to do.</p>\n<p>Just like <code class="language-text">up</code>, but running <code class="language-text">down</code> instead:\nTo revert all migrations:</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js">umzug<span class="token punctuation">.</span><span class="token function">down</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token operator">...</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>or to revert down to a particular migration:</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js">umzug<span class="token punctuation">.</span><span class="token function">down</span><span class="token punctuation">(</span><span class="token punctuation">{</span> to<span class="token punctuation">:</span> <span class="token string">\'migration-filename\'</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token operator">...</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<h3 id="automating"><a href="#automating" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Automating</h3>\n<p>umzug doesn\'t come with a CLI out of the box, but it doesn\'t take much to write one yourself.\nAfter I wrote mine, it\'s just a matter of:</p>\n<div class="gatsby-highlight">\n      <pre class="language-bash"><code class="language-bash">node scripts/migrate\n</code></pre>\n      </div>\n<p>to run all migrations in fresh environments.</p>\n<div class="gatsby-highlight">\n      <pre class="language-bash"><code class="language-bash">node scripts/migrate <span class="token punctuation">[</span>up<span class="token operator">|</span>down<span class="token punctuation">]</span> <span class="token punctuation">{</span>version<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>to go to that particular migration. This will run on every instance of our application at boot time, so if there is a pending migration, it will run it.</p>\n<h2 id="in-conclusion"><a href="#in-conclusion" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>In conclusion</h2>\n<p>Database manipulation should be part of our development process. There could be heavy changes where a developer couldn\'t handle and a DBA should come, but for rapid changes, migrations will serve us right, especially when we seeking for faster release cycles and keeping track of our Database changes.</p>\n<p>I am sure that your system handles migration somehow, search it up if you have never thought of it.</p>\n<p>In case you are already doing migrations, what is your preferred workflow? Leave me a comment.</p>\n<p>See also:</p>\n<ul>\n<li><a href="http://enterprisecraftsmanship.com/2015/08/10/database-versioning-best-practices/" target="_blank" rel="noreferrer noopener">http://enterprisecraftsmanship.com/2015/08/10/database-versioning-best-practices/</a></li>\n<li><a href="http://martinfowler.com/articles/evodb.html" target="_blank" rel="noreferrer noopener">http://martinfowler.com/articles/evodb.html</a></li>\n<li><a href="http://www.brunton-spall.co.uk/post/2014/05/06/database-migrations-done-right/" target="_blank" rel="noreferrer noopener">http://www.brunton-spall.co.uk/post/2014/05/06/database-migrations-done-right/</a></li>\n<li><a href="http://databaserefactoring.com/index.html" target="_blank" rel="noreferrer noopener">http://databaserefactoring.com/index.html</a></li>\n</ul>\n<br/>\n*[Kwstas](https://twitter.com/_margaritis/), thank you for helping me write this post. :D*',id:"/home/travis/build/kbariotis/kostasbariotis.com/blog/data-migration-with-nodejs/index.md absPath of file >>> MarkdownRemark",timeToRead:7,frontmatter:{date:"2016-05-14T15:19:51.000Z",path:"/data-migration-with-nodejs/",tags:"Database, CI, node.js",title:"Database Migrations with Nodejs",draft:null}}],tag:"CI",pagesSum:1,page:1}}}});
//# sourceMappingURL=path---tag-ci-3ada9e5cbc9a1d558607.js.map
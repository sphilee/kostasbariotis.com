webpackJsonp([0xbd162aa99c78],{615:function(e,t){e.exports={data:{file:{childImageSharp:{sizes:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAVABQDASIAAhEBAxEB/8QAGQABAQADAQAAAAAAAAAAAAAAAAQBAgUD/8QAFgEBAQEAAAAAAAAAAAAAAAAAAwIB/9oADAMBAAIQAxAAAAGXEfnO2KxXytBY6QBP/8QAGxAAAgIDAQAAAAAAAAAAAAAAAQIDEQASIiH/2gAIAQEAAQUC2qMsrDRjkh7U+9ZIKYC8jNp//8QAFxEBAAMAAAAAAAAAAAAAAAAAAAEQIf/aAAgBAwEBPwFlQ//EABkRAAEFAAAAAAAAAAAAAAAAAAABECExQf/aAAgBAgEBPwGWwWz/xAAbEAACAgMBAAAAAAAAAAAAAAAAEQEhAxAxgf/aAAgBAQAGPwK2dsYo5BBWReaRB//EABwQAAICAwEBAAAAAAAAAAAAAAERACExQVFhcf/aAAgBAQABPyHzg5KmRyuAZAwYJ2aHFOw5Qmlybntx2y3CnEl/Z//aAAwDAQACAAMAAAAQOyi8/8QAGBEAAwEBAAAAAAAAAAAAAAAAAAERMUH/2gAIAQMBAT8QUXCB6YR//8QAGhEAAgIDAAAAAAAAAAAAAAAAAAERMSFBsf/aAAgBAgEBPxByVkzvonYxY//EAB0QAQEAAwACAwAAAAAAAAAAAAERACFBMVFhcbH/2gAIAQEAAT8Q6uhuUW+P3HKhIpbqr8JMNj2KrvBpVoF3uLYUDX3imLRSGt4ck1onhy7wNT0XD24jIs1n/9k=",aspectRatio:.9657118055555556,src:"/static/avatar-820706df6fdb07a9b021a790449fec17-381d6.jpg",srcSet:"/static/avatar-820706df6fdb07a9b021a790449fec17-62f05.jpg 200w,\n/static/avatar-820706df6fdb07a9b021a790449fec17-dc2b4.jpg 400w,\n/static/avatar-820706df6fdb07a9b021a790449fec17-381d6.jpg 800w,\n/static/avatar-820706df6fdb07a9b021a790449fec17-e5d70.jpg 1200w,\n/static/avatar-820706df6fdb07a9b021a790449fec17-d14e0.jpg 1600w,\n/static/avatar-820706df6fdb07a9b021a790449fec17-9cc71.jpg 2225w",srcWebp:"/static/avatar-820706df6fdb07a9b021a790449fec17-fefde.webp",srcSetWebp:"/static/avatar-820706df6fdb07a9b021a790449fec17-5eed2.webp 200w,\n/static/avatar-820706df6fdb07a9b021a790449fec17-68e3c.webp 400w,\n/static/avatar-820706df6fdb07a9b021a790449fec17-fefde.webp 800w,\n/static/avatar-820706df6fdb07a9b021a790449fec17-300fe.webp 1200w,\n/static/avatar-820706df6fdb07a9b021a790449fec17-ed5bd.webp 1600w,\n/static/avatar-820706df6fdb07a9b021a790449fec17-9442a.webp 2225w",sizes:"(max-width: 800px) 100vw, 800px"}}},site:{siteMetadata:{title:"Kostas Bariotis' Blog",description:'Senior full stack engineer <a href="https://geekbot.io">@geekbot_io</a>, co-organizer of <a href="https://devitconf.org">@devitconf</a> & <a href="https://www.meetup.com/Thessaloniki-Node-js-Meetup/">@skgnodejs</a>, host of <a href="http://devastation.tv">Devastation Podcast</a>.',siteUrl:"https://kostasbariotis.com"}},mainPost:{html:'<p>I am introducing <a title="Stargento is an online PHP Sandbox and a Magento playground" href="http://stargento.com" target="_blank">Stargento.com</a> to the <a title="Magento" href="http://magentocommerce.com/" target="_blank">Magento</a> community. I am looking forward for your thoughts and feedback.</p>\n<p>Hit me on <a title="Kostas Bariotis on Twitter" href="http://twitter.com/kbariotis" target="_blank">Twitter</a>.</p>\n<p>This is a meta-post for a post i wrote on <a href="https://medium.com/@kbariotis/introducing-stargento-com-d7b202f2a55d" target="_blank" rel="noreferrer noopener">Medium</a>. Thoughts?</p>',excerpt:"I am introducing  Stargento.com  to the  Magento  community. I am looking forward for your thoughts and feedback. Hit me on  Twitter . This…",frontmatter:{date:"September 24, 2014",path:"/introducing-stargento-com/",tags:"stargento.com, magento",title:"Introducing Stargento.com",draft:null}},nextPost:{html:'<p>Magento is hard. No doubt about it. But this is not an excuse. Beside that (and a few other issues) it\'s still the number one e-commerce solution. It\'s proven.</p>\n<p>So, i wanted to talk a little about how i maintaining my Magento projects.</p>\n<p><strong>1) I am keeping everything under version control</strong></p>\n<p>Magento\'s folder structure brings a lot of frustration. An extension can place it\'s files almost anywhere it\'s developer wants. It can be in base package theme either in package default theme. It can be in media folder for permanent files you want to keep under control either in /js folder for Javascript global libraries.</p>\n<p>Keeping a .gitignore with all the Project\'s specific files is almost impossible.</p>\n<p>Also, you can\'t carry with you your Project\'s modules, except using <a title="Composer with Magento" href="https://github.com/magento-hackathon/magento-composer-installer" target="_blank">Composer with Magento </a>which it\'s also complicate to work with. (Still struggling with it on Windows)</p>\n<p>So, what i do is keep everything under version control, except temporary files like cache, logs, etc. etc.</p>\n<p><strong>2) Never touch core files</strong></p>\n<p>By never touching core files like in folders:</p>\n<ul>\n\t<li>app/code/core</li>\n\t<li>app/locale/</li>\n\t<li>app/design/frontend/(base|default|rwd)</li>\n\t<li>app/design/adminhtml/</li>\n\t<li>js/ (initial folders only)</li>\n\t<li>lib/ (initial folders only)</li>\n\t<li>skin/frontend/(base|default|rwd)</li>\n\t<li>includes/</li>\n</ul>\nyou make sure that, when a feature release is out, you can just copy paste above you project and everything still works fine.\n<p>Keeping your Magento always up to date can save you from big disasters. I must make sure that feature releases wont be a pain to get.</p>\n<p><strong>3) Extend everything</strong></p>\n<p>In case you need to extend a Magento\'s core functionality or make it behave different, you are covered.</p>\n<p>Magento\'s team had a purpose and only one. To make the most extensible e-commerce framework out there. They even sacrifice performance on this purpose. Now, some may argue that that was stupid or they didn\'t success after all. I will have to disagree with both.</p>\n<p>Magento is a true PHP OOP project, powered by the most powerful framework, the <a title="Zend Framework" href="http://framework.zend.com/" target="_blank">Zend Framework</a>.</p>\n<p>As about performance, these days you have a lot of tools in order to create a fast website. You may be hosted at an AWS super server, use fast caching methods, etc, etc.</p>\n<p><strong>4) Keep a local Magento with stuff i use a lot</strong></p>\n<p>After a few projects, i realized that a lot of processes were repeated again and again. The same modules i will installed on every fresh Magento install, the same configuration i would do. So i keep a private(yet!) Magento repository were i have all of my Modules and a clean Database dump with my configuration set.</p>\n<p>How do you deal with your Magento projects? Share your tactics and technics with me on <a title="Kostas Bariotis on Twitter" href="http://twitter.com/kbariotis" target="_blank">Twitter </a>or bellow in the comments.</p>',excerpt:"Magento is hard. No doubt about it. But this is not an excuse. Beside that (and a few other issues) it's still the number one e-commerce…",frontmatter:{date:"September 08, 2014",path:"/maintaining-a-magento-code-base/",tags:"magento, codebase, e-commerce",title:"Maintaining a Magento code base",draft:null}}},pathContext:{mainPostPath:"/introducing-stargento-com/",nextPostPath:"/maintaining-a-magento-code-base/"}}}});
//# sourceMappingURL=path---introducing-stargento-com-704f2d734e03a1ac2723.js.map
---
author: 可乐君
pubDatetime: 2024-10-08T13:31:41.816Z
title: 为Astro博客添加AI文章摘要
slug: ai-summary
featured: false
ogImage: https://r2.xiaoayu.eu.org/2024/10/173ec715e3cce734b27d34a87b9e7c8b.webp
tags:
  - 思考
description: 文章摘要能够帮助读者迅速把握文章内容，然而，自行撰写摘要往往耗时费力。若能借助AI技术生成文章摘要，则可显著提升效率，使这一过程更加便捷。
aiSummary: 这篇文章主要讲述了作者将博客迁移至Astro平台后，逐步完善其功能的过程。作者首先添加了相册、Twikoo评论、装备展示和说说页面，随后引入了AI文章摘要功能，以提升内容浏览效率和用户阅读体验。文章详细记录了创建AI摘要组件的过程
---
最近，我将博客迁移至Astro平台，并逐步完善其功能。在添加了相册、Twikoo评论、装备展示和说说页面后，我引入了AI文章摘要功能，以提升内容浏览效率和用户的一些阅读体验。  在此，我将详细记录添加功能的过程，为那些计划迁移至Astro平台的博主提供一个实用的起点。  

![文章摘要](https://r2.xiaoayu.eu.org/2024/10/173ec715e3cce734b27d34a87b9e7c8b.webp)

## 创建AI摘要组件
在目录 `/src/components/`中创建组件`Ai.astro`，将以下代码放入组件中：  

```js
---
// 使用 Astro.glob 获取 /src/content/blog 目录下的所有 Markdown 文件
const posts =await Astro.glob('/src/content/blog/*.md');
// 获取当前页面的 slug
const currentSlug = Astro.params.slug;
// 找到与当前 slug 匹配的 Markdown 文件
const matchingPost = posts.find(post => post.frontmatter.slug === currentSlug);
// 获取 aiSummary 属性
const aiSummary = matchingPost?.frontmatter.aiSummary;
---
{aiSummary && (
<div class="post-ai">
<div class="ai-title">
<svg class="icon ai-title-icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="9827" width="40" height="40">
<path d="M717.12 274H762c82.842 0 150 67.158 150 150v200c0 82.842-67.158 150-150 150H262c-82.842 0-150-67.158-150-150V424c0-82.842 67.158-150 150-150h44.88l-18.268-109.602c-4.086-24.514 12.476-47.7 36.99-51.786 24.514-4.086 47.7 12.476 51.786 36.99l20 120c0.246 1.472 0.416 2.94 0.516 4.398h228.192c0.1-1.46 0.27-2.926 0.516-4.398l20-120c4.086-24.514 27.272-41.076 51.786-36.99 24.514 4.086 41.076 27.272 36.99 51.786L717.12 274zM262 364c-33.138 0-60 26.862-60 60v200c0 33.138 26.862 60 60 60h500c33.138 0 60-26.862 60-60V424c0-33.138-26.862-60-60-60H262z m50 548c-24.852 0-45-20.148-45-45S287.148 822 312 822h400c24.852 0 45 20.148 45 45S736.852 912 712 912H312z m-4-428c0-24.852 20.148-45 45-45S398 459.148 398 484v40c0 24.852-20.148 45-45 45S308 548.852 308 524v-40z m318 0c0-24.852 20.148-45 45-45S716 459.148 716 484v40c0 24.852-20.148 45-45 45S626 548.852 626 524v-40z" fill="" p-id="9828"></path>
</svg>
<div class="ai-title-text">AI摘要-可乐GPT</div>
</div>
<!-- Typeit 打字机效果，不需要则注释掉下面这行代码 -->
<div id="ai-explanation" class="ai-explanation">AI摘要生成中...</div>
<div class="ai-explanation ai-explanation-content" style="display: none;">
{aiSummary}
</div>
</div>
)}

<script>
document.addEventListener('astro:page-load', () => {
function loadTypeIt() {
const aiExplanationContent = document.querySelector(".ai-explanation-content");
const aiExplanation = document.querySelector("#ai-explanation");
if (aiExplanationContent && aiExplanation) {
const aiSummary = aiExplanationContent.textContent;
// 设置占位符高度
aiExplanation.style.height = `${aiExplanation.clientHeight}px`;
aiExplanation.style.overflow = 'hidden';
// 清空摘要框
aiExplanation.textContent = '';
const script = document.createElement('script');
script.src = 'https://npm.elemecdn.com/typeit@8.7.1/dist/index.umd.js';
script.async = true;
script.onload = () => {
new TypeIt("#ai-explanation", {
strings: aiSummary,
speed: 10,
lifeLike: true,
waitUntilVisible: true,
}).go();
// 移除占位符高度
aiExplanation.style.height = '';
aiExplanation.style.overflow = '';
};
document.body.appendChild(script);
}
}
loadTypeIt();
});
</script>
```
## 引入组件到Post页面
下面将AI摘要组件插入到`/src/layouts/PostDetails.astro`文件中，首先引用组件：  
```js
import Ai from "@components/Ai.astro";
```
其次，在`<article>`标签内插入AI组件在文章上：
```js
<article id="article" class="prose mx-auto mt-8 max-w-3xl">
<Ai />
<Content />
</article>
```
## 使用组件
只需要在markdown文件属性上加入如下配置，即可在文章页面显示AI摘要：
```markdown
---
aiSummary: 这是文章摘要。
---
```
已经加入检测摘要功能，如果未配置aiSummary，本篇文章将不会显示AI摘要。  
祝折腾愉快！
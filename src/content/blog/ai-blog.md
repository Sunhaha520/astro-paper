---
author: 可乐君
pubDatetime: 2024-12-30T02:31:41.816Z
title: 为Astro博客添加AI博客助手
slug: ai-blog
featured: false
ogImage: 
tags:
  - 折腾日常
description: 一直眼馋HEO大佬的AI助手，今天看字节的扣子每天100的免费额度加上支持知识库，就搞了一个，虽然功能上并不完美，但是效果还是有的。
aiSummary: 本文介绍了如何利用字节跳动的“扣子”平台创建并部署AI助手到个人网站。作者详细描述了编写和引用组件的步骤，并提到AI助手虽不完美，但具备介绍作者、理解文章和推荐内容的功能，作为展示工具具有一定价值。
---
一直眼馋HEO大佬的AI助手，今天看字节的扣子每天100的免费额度加上支持知识库，就搞了一个，虽然功能上并不完美，但是效果还是有的。  
字节对于智能体构造和知识库使用以及部署到网站都有很详细的教学，可以参考一下官方文档：[扣子官方文档](https://www.coze.cn/docs/guides/welcome)。部署到网站看这个就可以，就是发布应用为 Chat SDK。  
## 折腾过程
### 创建组件
创建一个名为`CozeSDK.astro`的组件，代码如下：
```js
---

---
<script is:inline>
    const loadCozeSDK = () => {
      return new Promise((resolve) => {
        // 移除已存在的脚本
        const existingScript = document.querySelector('script[src*="coze.cn"]');
        if (existingScript) {
          existingScript.remove();
        }
        // 加载新脚本
        const script = document.createElement('script');
        script.src = `https://lf-cdn.coze.cn/obj/unpkg/flow-platform/chat-app-sdk/1.1.0-beta.0/libs/cn/index.js?cacheBust=${Math.random()}`;
        script.onload = resolve;
        document.body.appendChild(script);
      });
    };
    const initializeCoze = async () => {
      await loadCozeSDK();
      console.log('window.CozeWebSDK:', window.CozeWebSDK); // 检查全局变量
      if (window.CozeWebSDK) {
        new CozeWebSDK.WebChatClient({
          config: {

            bot_id: '745*****4704147',//你创建的机器人id

          },
//........配置部分略，看官方文档
          componentProps: {

            title: '博客专家',

          },

        },

        });

      } else {

        console.error('CozeWebSDK 脚本加载后仍不可用。');

      }

    };

    // 监听页面切换事件

    document.addEventListener('astro:page-load', initializeCoze);

    // 监听页面内容交换事件

    document.addEventListener('astro:after-swap', initializeCoze);

  </script>
```
### 引用组件
在`Layout.astro`中引用组件：  
```js
import Coze from "@components/CozeSDK.astro";
```
然后再在`<body>`标签内，`<slot />`标签下插入组件：
```js
<Coze />
```
大功告成！！
## 总结
我的机器人叫博客专家，它可以介绍我的情况，帮你理解文章，向你推荐文章，虽然有些不太聪明，但是作为摆设的用处似乎更大些~
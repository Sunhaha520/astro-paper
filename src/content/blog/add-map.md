---
author: 可乐君
pubDatetime: 2024-10-10T02:31:41.816Z
title: 踏上旅途，留下足迹：为您的博客嵌入足迹地图
slug: add-map
featured: false
ogImage: https://r2.xiaoayu.eu.org/2024/10/a04529093195e027c46ddc0ef1fd2661.webp
tags:
  - 折腾日常
description: 旅行足迹地图不仅能清晰地呈现您的旅行路线，更能为您的博客增添视觉冲击力和互动性。本教程将为您详细介绍如何在Astro博客中嵌入旅行足迹地图组件。
aiSummary: 在数字化时代，博客已成为个人表达与信息传播的重要平台。本教程将详细介绍如何在Astro博客中嵌入旅行足迹地图组件，通过下载并配置地图组件代码，您可以轻松地将个性化足迹地图嵌入博客页面，提升博客的专业性和吸引力。
---
在数字化时代，博客已成为个人表达与信息传播的重要平台。对于热衷于旅行的博主而言，如何直观地展示旅行轨迹，并与读者分享旅途见闻，成为提升博客吸引力的关键。一张旅行足迹地图，不仅能清晰地呈现您的旅行路线，更能为您的博客增添视觉冲击力和互动性。本教程将为您详细介绍如何在Astro博客中嵌入旅行足迹地图组件。 

![地图](https://r2.xiaoayu.eu.org/2024/10/a04529093195e027c46ddc0ef1fd2661.webp)

## 下载源码
下载下列代码文件，这是一个地图组件代码：  
[地图组件代码下载](https://github.com/HelloWuJiaYi/jVectorMap-Footprint/tree/master)
组件代码几乎不用改动，重命名index.html为maps.html，然后打开maps.html进行修改，可以根据博客CSS在配置文件中修改地图主题颜色，然后配置自己的信息即可，自己去过的地方全部在配置文件中配置出来：  

```json
markers: [ // 足迹位置
// {latLng: [经度（保留两位小数）, 纬度（保留两位小数）], name: '城市名称'},
{latLng: [39.90, 116.41], name: '北京'},
{latLng: [22.19, 113.55], name: '澳门'},
{latLng: [32.06, 118.80], name: '南京'},
{latLng: [32.19, 119.43], name: '镇江'},
{latLng: [34.60, 119.22], name: '连云港'},
{latLng: [35.42, 119.53], name: '日照'},
{latLng: [36.07, 120.38], name: '青岛'},
{latLng: [22.27, 113.58], name: '珠海'},
{latLng: [34.20, 117.28], name: '徐州'},
{latLng: [35.10, 118.36], name: '临沂'},
{latLng: [32.39, 119.41], name: '扬州'},
]
```
  
推荐查询经纬度网站：http://www.gpsspg.com/maps.htm .  
## 放置正确位置
将修改配置好的文件放在`/public`路径下，此时你访问`域名/maps.html`就会显示地图组件，下面我们把它插入页面只需要嵌入即可，嵌入代码如下：  

```html
<center><iframe scrolling=no style="min-height:300px !important;" src="/maps.html" width="100%"></iframe></center>
```

预览如下：  
<center><iframe scrolling=no style="min-height:300px !important;" src="/maps.html" width="100%"></iframe></center>

足迹地图便可以正常显示，可以插入到博客的任何位置，足迹地图折腾到此为止，后续有优化会继续更新。
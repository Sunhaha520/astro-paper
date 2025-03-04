---
author: 可乐君
pubDatetime: 2025-01-04T13:31:41.816Z
title: 特别的生日礼物：抖音出圈机器狗
slug: bot-dog
featured: false
ogImage: https://r2.xiaoayu.eu.org/2025/01/461629ed847a07ae8e5fd676c22c26cb.webp
tags:
  - 折腾日常
description: 为小团子的生日制作了一款机器狗作为礼物，通过模块化设计和图形化编程轻松完成，给生日这天带来了不少乐趣。
aiSummary: 作者为了庆祝小团子的生日，决定亲手制作一款DIY机器狗作为特别礼物。受到抖音上热门视频的启发，作者选择了模块化设计的部件，使得组装过程像拼积木一样简单。语音模块使用了天问Block，支持图形化编程，降低了编程难度。整个制作过程顺利且充满乐趣，最终完成的机器狗具备多种动作和简单的语音交互功能。
---
前不久，小团子迎来了她的生日，我一直在思考送她一份特别的礼物。偶然间，我在抖音上看到一款DIY机器狗的视频，这款机器狗因其创意和趣味性迅速走红。于是，我决定亲手复刻一个，作为她的生日惊喜。  

整个制作过程出乎意料的顺利，即使是我这样的技术小白也能轻松上手。所有的部件都是模块化设计，拼搭起来就像玩乐高积木一样简单。更让我惊喜的是，语音模块使用的是天问Block，它支持图形化编程，大大降低了编程的门槛，整个过程既有趣又充满成就感。  
![机器狗](https://r2.xiaoayu.eu.org/2025/01/461629ed847a07ae8e5fd676c22c26cb.webp)

## 零件清单

| 零件名称                | 数量  |
| ------------------- | --- |
| SG90 9g经典舵机         | x5  |
| 7.4v 1500mAh SM4P电池 | x1  |
| STM32F103C8T6开发板    | x1  |
| 0.96寸OLED显示屏        | x1  |
| 排线若干                | xn  |
| 蓝牙3.0模块             | x1  |
| 喇叭                  | x1  |
| 天问语音模块              | x1  |
| 稳压模块                | x2  |

![零件](https://r2.xiaoayu.eu.org/2025/01/ed6dba1441a474ea82506b1da2cb32f5.webp)
## 组装和编程
组装过程特别简单，用胶水固定，拧上螺丝，再把对应的模块插好，机器狗就完成了。整个过程就像拼积木一样轻松。  
至于编程，我写了一个简单的程序，目前只写了语音模块的自定义，STM32我没有烧录设备，所以直接用了他之前的源码，源码支持前进，坐，立正，左转，右转，跳舞，睡觉，握手，后退，撒尿，语音模块我设计了几个简单的问答。  
## 效果
小团子拍了个抖音视频，效果还是不错的（剪辑非常好）。  
视频失效了哈哈哈哈
---
title: "HTML5 Canvas Game Development"
image: breakout-game-mdn.jpg
description: I just finished developing a 2D Breakout Game using HTML5 Canvas.
date: '2016-11-09'
tags: ["javascript", "html", "css", "github", "apis", "uis", "web-performance-optimization", "html5-canvas", "js-game-development", "mobile-development"]
categories: ["front-end-development"]
author: "Maria D. Campbell"
---

I just finished developing a 2D Breakout Game using HTML5 Canvas. I added a workflow to it of course for testing in command line purposes, for speeding up the development process, and speeding up the process of making files production ready. One thing I learned first and foremost: HTML5 Canvas games are data-consumption expensive! By ***removing*** a **few things** from the ***workflow*** like `normalize.css` and `postcss-mixins` **npm plugin**, as well as `minifying code`, I was able to ***reduce*** the `JS heap` ***by over*** `10mb`. ***However***, the `range` still ended up being ***between*** `16mb and 42mb`. Every time the **game** ***restarts***, the `heap` is `cleared` ***right beforehand***. This is good of course, but the question is: does a user want to consume up to 42mb of his/her mobile data? At home, via some kind of paid internet service where total data consumption does not matter is one thing, but mobile consumption can matter very much on the go when data caps do matter.

I did not decide to take on this project taking web performance into consideration. I just wanted to become more familiar with game development and drawing graphics with HTML, CSS, and JavaScript. And I did. It was a very interesting learning experience, and one which made me even more familiar with the JS Console and how to optimize the web performance of my project. To view this project on `Github’s gh-pages`, please visit [2D Breakout Game](https://interglobalmedia.github.io/2d-breakout-game-mdn/).
# 你所不知道的css

作为一名长期潜水的前端er、切图仔，在[木易杨老师](https://juejin.im/user/56dea4aa7664bf00559f002d/posts)的鼓励下，开始尝试去写一写文章，来整理、分享自己的一些学习所得，与掘金的大佬们共同进步。


刚开始写文章，表达欠妥，还请多多指正，如果觉得本文不错，欢迎点赞、评论、转发，您的支持就是我坚持的最大动力。

---

众所周知，随着css3的出现，css可以更加方便的书写样式层。今天我们就来整理一些你所不知道的css！

**注：IE已经被微软爸爸所抛弃，果断放弃，不做考虑。**

## 1、截取多行文本，超出文本显示...
想必大家截取一行，都会书写，**针对块级元素或行内块元素**，代码如下：
```css
.textOneLine{
    overflow:hidden;  // 超出的长度的内容截掉，不产生滚动条
    text-overflow: ellipsis;  // 该属性有三个值clip 、ellipsis 、string，代表怎么表示被截掉的文本
    white-space: nowrap; // 文本不会换行
}
```
如果需求是截取多行文本呢，又将怎么书写代码呢？
举个🌰，截取3行：
```css
.textMoreLine{
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;  //属性规定框的子元素应该被水平或垂直排列
    -webkit-line-clamp: 3;  //这个属性适合WebKit浏览器或移动端（绝大部分是WebKit内核的）浏览器
}
```
实际应用中如果有处理浏览器兼容的需求，以上方法的兼容方案也有很多。

比较靠谱简单的做法就是设置相对定位的容器高度，用包含省略号...的元素（可借助伪元素）模拟实现。这里提到伪元素，我认为伪元素是个好东西，有时候可以很好的帮助我们。

## 2、利用 javascript 获取并修改 ::before 和 ::after 的值
使用 javascript 操作，当然不能绕过 jQuery（后端开发前端的最爱，往往JQ一把梭！），然后遇到操作伪元素这个问题，他也只能彻底认栽了！为什么呢？

要知道JQ选择器是用来操作DOM的，都是基于DOM元素，而伪元素本身并不是DOM元素，这个 **‘伪’** 字就很妙了。那么我们接下来，来看看如何使用js来操作伪元素呢？

### 获取伪元素的属性值
刚才说了，伪元素不是DOM，那么任何基于选取DOM的样式而操作伪元素是行不通的，但是js为我们提供了一个直接获取CSS属性的方法getComputedStyle(),然后配合getPropertyValue()获取对应属性。
>window.getComputedStyle(element, [pseudoElt])
[该方法MDN文档](https://developer.mozilla.org/zh-CN/docs/Web/API/Window/getComputedStyle)

>getPropertyValue()

我们使用该方法来获取微元素的属性值,代码如下：

```javascript
//获取before伪元素的字号大小
var div=document.querySelector('div');
var fontSize=window.getComputedStyle(div,'::before').getPropertyValue('font-size');
```
### 更改伪元素的属性值

getComputedStyle()只能获取不能更改，通过js来更改伪元素有一下几种方法：
- js更改data-*属性值来更改伪元素的content值 **（推荐）**；

    实现原理：W3C 给伪元素的content属性值提供了一个attr()方法来获取。attr()支持多个连写，而且attr()内可以是DOM元素的任意属性。
        
    代码实现如下：
    ```html
    <div class="wrap" data-text="我是伪元素" data-class="new-wrap"></div>
    ```
    ```css
    .wrap::before{
        content: '我的类是' attr(class) '想要变成' attr(data-class);
    }
    ```
- 创建多个class，通过切换class来达到改变样式的目的；
- 利用内部css样式的高优先级来覆盖外部css。


## 3、改变选中内容颜色、禁止选中内容
啥也不说了，直接上代码：

改变选中内容颜色(**只能使用以下四个属性**)：
```css
::selection{
    color:red;
    background:blue;
    cursor:auto;
    outline:none;
}
```

禁止选中内容：
```css
.disabled-select {  
    -webkit-touch-callout: none;  
    -webkit-user-select: none;  
    -khtml-user-select: none;  
    -moz-user-select: none;  
    -ms-user-select: none;  
    user-select: none;  
}  
```
css禁用鼠标点击事件:
```css
.disabled { 
    pointer-events:none; 
}
```

## 4、改变placeholder值的样式
```css
input::-webkit-input-placeholder{
    text-align: right;
    //... 其他样式代码
}
```

## 5、盒子垂直水平居中
推荐一篇文章，总结的很到位，[直通车](https://juejin.im/post/5b9a4477f265da0ad82bf921)

## 6、利用CSS改变图片颜色的多种方法
>“说到对图片进行处理，我们经常会想到PhotoShop这类的图像处理工具。作为前端开发者，我们经常会需要处理一些特效，例如根据不同的状态，让图标显示不同的颜色。或者是hover的时候，对图片的对比度，阴影进行处理。”

这个内容也推荐一篇文章，总结很到位，不做更多介绍。[直通车](https://juejin.im/post/5ba21d78f265da0af0337fe3)


一点点内容都写了快两个小时，果然会写文章都是大神！如果对您有用，你也喜欢请点赞，如果不喜欢，甚至有错误内容（希望可以指出来，以便纠正），还请见谅，多多指正，先这样吧，明天继续~ 🙏🙏🙏



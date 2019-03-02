   function imageRotater(id){
    var cases = "",
    album = document.getElementById(id),
    images = album.getElementsByTagName("img"),
    links = album.getElementsByTagName("a"),
    length = images.length,
    aIndex = 1,
    aBefore = length;
    for(var i=0;i< length;i++){
      cases += images[i].id + ':"'+images[i].getAttribute("src")+'",'
    }
    images[0].style.cssText = "position:absolute;top:0;left:0;";//修正图片的位置错误问题
    cases = eval("({"+cases.replace(/,$/,"")+"})"); //相当于switch-case代码块
    for(var i=0;i<length;i++){ //实现点击切换图片
      links[i].onclick = function(e){
        e =e || window.event;
        var index = this.toString().split("#")[1];
        aIndex = index.substr(-1);
        images[0].src = cases[index];
          !+"\v1" ?(e.returnValue = false) :(e.preventDefault());
      }
    }
    (function(){//实现自动轮换图片
      setTimeout(function(){
        if(aIndex > length){
          aIndex = 1;
        }
        images[0].src = cases["index"+aIndex];
        links[aBefore-1].className = "";
        links[aIndex-1].className = "hover";
        aBefore = aIndex;
        aIndex++;
        setTimeout(arguments.callee,1500)
      },1500)
    })()
  }
  window.onload = function(){
    try{document.execCommand("BackgroundImageCache", false, true);}catch(e){};
    imageRotater("album");
  }



/*
 function imageRotater(id){
    var cases = "",
    album = document.getElementById(id),
    images = album.getElementsByTagName("img"),
    links = album.getElementsByTagName("a"),
    dt = album.getElementsByTagName("dt")[0],
    length = images.length,
    aIndex = 1,
    aBefore = length;
    for(var i=0;i< length;i++){
      cases += images[i].id + ':"'+images[i].getAttribute("src")+'",'
    }
    images[0].style.cssText = "position:absolute;top:0;left:0;";//修正图片的位置错误问题
    var tip = document.createElement("dd");
    tip.style.cssText = "position:absolute;bottom:0;height:20px;width:380px;padding:10px;color:#fff;background:#fff;";
    album.insertBefore(tip,dt.nextSibling);
    if(!+"\v1"){
      tip.style.color = "#369";
      tip.style.filter = "alpha(opacity=67)"
    }else{
      tip.style.cssText += "background: rgba(164, 173, 183, .65);"
    }
    cases = eval("({"+cases.replace(/,$/,"")+"})"); //相当于switch-case代码块
    for(var i=0;i<length;i++){ //实现点击切换图片
      links[i].onclick = function(e){
        e =e || window.event;
        var index = this.toString().split("#")[1];
        aIndex = index.substr(-1);
        images[0].src = cases[index];
        tip.innerHTML = images[aIndex -1].getAttribute("alt");
          !+"\v1" ?(e.returnValue = false) :(e.preventDefault());
      }
    }
    var prefix = images[0].id.substr(0,images[0].id.length -1);
    (function(){//实现自动轮换图片
      setTimeout(function(){
        if(aIndex > length){
          aIndex = 1;
        }
        images[0].src = cases[prefix+aIndex];
        tip.innerHTML = images[aIndex -1].getAttribute("alt");
        tip.style.bottom = "-40px";
        links[aBefore-1].className = "";
        links[aIndex-1].className = "hover";
        aBefore = aIndex;
        aIndex++;
        move(tip);
        setTimeout(arguments.callee,1500)
      },1500)
    })()

    var move = function(el){
      var begin = parseFloat(el.style.bottom),
      speed = 1;
      el.bottom = begin;
      (function(){
        setTimeout(function(){
          el.style.bottom = el.bottom + speed + "px";//移动
          el.bottom += speed;
          speed *= 1.5;//下一次移动的距离
          if(el.bottom >= 0){
            el.style.bottom = "0px";
          }else{
            setTimeout(arguments.callee,25);//每移动一次停留35毫秒
          }
        },25)
      })()
    }
  }
  window.onload = function(){
    try{document.execCommand("BackgroundImageCache", false, true);}catch(e){};
    imageRotater("album");
  }

*/
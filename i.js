function container(id, opti){
var p=document.getElementById(id);
console.log(p);

//设置默认高度和最小的
var conten={
    activewidth:400,
    activeheight:350,
    smallwidth:130,
    smallheight:40,
    time:300
}
var combine=Object.assign({},opti,conten);
if(combine.col*combine.row!=p.children.length){
    throw "erro";
}

var time1=new Date().getTime();
var timer=null;

p.style.width=combine.activewidth+combine.smallwidth*(combine.col-1)+"px";
//index传的下标
function actie(index){
    clearTimeout(timer);
  var time2=new Date().getTime();
  if(time2-time1<combine.time){
    timer=setTimeout(function () {
         actie(index);
     },combine.time);
  }
  time1=time2;
//索引转为坐标
var cx=index%combine.col;
var cy=Math.floor(index/combine.col);
// console.log(cx,cy);
//大的坐标系
for(var x=0;x<combine.col;x++){
    for(var y=0;y<combine.row;y++){
        console.log(x,y);
        var indec=x+y*combine.col;//坐标转为索引值
        console.log(indec);
        var pp=p.children[indec];//通过索引得到每张图片
        console.log(pp);
    
      if(cx==x && cy==y ){
       pp.style.width=combine.activewidth+"px";
       pp.style.height=combine.activeheight+"px";
         }     
      else if(cx==x){
        pp.style.width=combine.activewidth+"px";
        pp.style.height=combine.smallheight+"px";
      }
      else if(cy==y){
        pp.style.width=combine.smallwidth+"px";
        pp.style.height=combine.activeheight+"px";
      }
      else{
        pp.style.width=combine.smallwidth+"px";
        pp.style.height=combine.smallheight+"px";
      }

    }
}
//坐标转为索引值

}
actie(0)
for(var i=0;i<p.children.length;i++){
    p.children[i].de=i;
    p.children[i].style.transition="all "+combine.time/1000+"s";
    p.children[i].onmouseenter=function(){
        actie(this.de);
        // console.log(this.de);
    }
}
}



































































// function accor(id,option){
//     var p=document.getElementById(id);
//     console.log(p);
//     var option_ac={
//     defaultwidth:400,
//     defaulthight:350,
//     smallwidth:130,
//     smallhight:40,
//     time:300
//     }
//     var opt=Object.assign({},option_ac,option);
//     // console.log(p.children.length);
//     if(opt.col*opt.row!=box.children.length){
//         throw "erro";
//     }

//     //父元素的width
//     p.style.width=opt.defaultwidth+opt.smallwidth*(opt.col-1)+"px";

//     var time1=new Date().getTime();
//     var timer=null; 
//     var acti= function(index){
        
//         clearTimeout(timer)
//         var time2=new Date().getTime();
//         if (time2-time1<opt.time) {
//             timer=setTimeout(function () {
//                 acti(index);
//             },opt.time);
//             return false;
//         }
//         time1=time2;

        
//       var cx=index%opt.col;//图片的坐标
//       var cy=Math.floor(index/opt.col);
//       console.log(cx,cy);
      
//       for(var x=0;x<opt.col;x++){//整个棋盘点坐标
//          for(var y=0;y<opt.row;y++){
//              console.log(x,y); 
//              var inde=x+y*opt.col;//把坐标转成下标索引
//              console.log(inde);
//              var pCh=p.children[inde];
//              console.log(pCh)
//              if(cx===x && cy===y){
//                pCh.style.width=opt.defaultwidth+"px";
//                pCh.style.height=opt.defaulthight+"px";
//              }
//             else if(cx===x){//代表xzhi
//                 pCh.style.width=opt.defaultwidth+"px";
//                 pCh.style.height=opt.smallhight+"px";
//              }
//              else if(cy === y){//代表yzhi
//                 pCh.style.width=opt.smallwidth+"px";
//                 pCh.style.height=opt.defaulthight+"px";
//              }
//              else{
//                 pCh.style.width=opt.smallwidth+"px";
//                 pCh.style.height=opt.smallhight+"px";
//              }
               
             
//          }

//       }
     
//    }
//    acti(0)
//    for(var t=0;t<p.children.length;t++){
//        p.children[t].ind=t;
//        p.children[t].style.transition="all "+opt.time/1000+"s";
//        p.children[t].onmouseenter=function(){
//         acti(this.ind);
//        }
//    }
//    }
   
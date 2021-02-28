/*
   canvas-example-animation-game-spinner by Dustin Pfister
*/
var utils={};utils.createCanvas=function(opt){opt=opt||{};opt.container=opt.container||document.getElementById("canvas-app")||document.body;opt.canvas=document.createElement("canvas");opt.ctx=opt.canvas.getContext("2d");opt.canvas.className="canvas_example";opt.canvas.width=opt.width===undefined?320:opt.width;opt.canvas.height=opt.height===undefined?240:opt.height;opt.ctx.translate(.5,.5);opt.canvas.onselectstart=function(){return false};opt.canvas.style.imageRendering="pixelated";opt.ctx.imageSmoothingEnabled=false;opt.container.appendChild(opt.canvas);return opt};utils.getCanvasRelative=function(e){var canvas=e.target,bx=canvas.getBoundingClientRect(),pos={x:(e.changedTouches?e.changedTouches[0].clientX:e.clientX)-bx.left,y:(e.changedTouches?e.changedTouches[0].clientY:e.clientY)-bx.top,bx:bx};pos.x=Math.floor(pos.x/canvas.scrollWidth*canvas.width);pos.y=Math.floor(pos.y/canvas.scrollHeight*canvas.height);e.preventDefault();return pos};var spinner=function(){var PI2=Math.PI*2;var get=function(spin){var len=spin.sectionIndices.length,index=spin.sectionIndices[Math.floor(spin.radian/PI2*len)];return spin.sections[index]};return{create:function(opt){opt=opt||{};var spin={ver:"0.0.0",cx:opt.cx===undefined?0:opt.cx,cy:opt.cy===undefined?0:opt.cy,RPS:{current:0,start:[3,8],lossPerSecond:2},radian:0,sections:opt.sections||[1,2,3],sectionIndices:opt.sectionIndices||[0,1,0,1,2],currentSection:null};return spin},startSpin:function(spin){var RPS=spin.RPS;RPS.current=RPS.start[0]+Math.random()*(RPS.start[1]-RPS.start[0])},update:function(spin,secs){var RPS=spin.RPS;spin.radian+=RPS.current*secs;spin.radian%=PI2;RPS.current-=RPS.lossPerSecond*secs;RPS.current=RPS.current<0?0:RPS.current;spin.currentSection=get(spin)}}}();var draw=function(){var api={};api.background=function(ctx,canvas){ctx.fillStyle="black";ctx.fillRect(0,0,canvas.width,canvas.height)};var getSectionRadian=function(spin,i){return Math.PI*2/spin.sectionIndices.length*i};api.sections=function(ctx,spin){var i=0,r,len=spin.sectionIndices.length,sectionIndex,section;ctx.strokeStyle="white";ctx.lineWidth=1;while(i<len){sectionIndex=spin.sectionIndices[i];section=spin.sections[sectionIndex];var r1=getSectionRadian(spin,i),r2=getSectionRadian(spin,i+1),x1=spin.cx+Math.cos(r1)*64,y1=spin.cy+Math.sin(r1)*64;ctx.beginPath();ctx.moveTo(spin.cx,spin.cy);ctx.lineTo(x1,y1);ctx.arc(spin.cx,spin.cy,64,r1,r2);ctx.stroke();i+=1}};api.arrow=function(ctx,spin){var x=spin.cx+Math.cos(spin.radian)*64,y=spin.cy+Math.sin(spin.radian)*64;ctx.strokeStyle="red";ctx.lineWidth=5;ctx.beginPath();ctx.moveTo(spin.cx,spin.cy);ctx.lineTo(x,y);ctx.stroke()};api.info=function(ctx,spin){var x=spin.cx-64,y=spin.cy+64,section=spin.currentSection;ctx.fillStyle="white";ctx.textBaseline="top";ctx.fillText("radian: "+spin.radian.toFixed(2),x,y+20);ctx.fillText("section: "+section,x,y+30)};api.ver=function(ctx,canvas,spin){ctx.fillStyle="white";ctx.textBaseline="top";ctx.font="10px arial";ctx.textAlign="left";ctx.fillText("v"+spin.ver,5,canvas.height-15)};return api}();var canvasObj=utils.createCanvas({width:320,height:240}),canvas=canvasObj.canvas,ctx=canvasObj.ctx;var spin=spinner.create({cx:canvas.width/2,cy:canvas.height/2});var lt=new Date;var loop=function(){var now=new Date,t=now-lt,secs=t/1e3;requestAnimationFrame(loop);spinner.update(spin,secs);draw.background(ctx,canvas);draw.sections(ctx,spin);draw.arrow(ctx,spin);draw.info(ctx,spin);draw.ver(ctx,canvas,spin);lt=now};loop();canvas.addEventListener("mousedown",function(e){spinner.startSpin(spin)});

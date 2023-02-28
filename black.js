const trainingData = { 
  title : "Lorem Ipsum",
  paragraph : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  color : ["#1E1E1E", "#FFFFFF"]
}
let stick = 0;

let root = document.getElementById('root')
//align-center width 100vw height 100vh bgc #1E1E1E position absolute
root.style.backgroundColor =  trainingData.color[0]; 
root.style.position = "relative"
root.style.display = "flex"
root.style.alignItems = "center"
root.style.justifyContent = "center"
root.style.width = "430px"
root.style.height = "932px"

let bodyLine = document.createElement('div'); //color FFFFFF width 100px height 2px top 340px position absolute
bodyLine.style.width = "200px";
bodyLine.style.height = "2px";
bodyLine.style.position = "absolute";
bodyLine.style.left = "115px";
bodyLine.style.top = "340px";
bodyLine.style.backgroundColor = trainingData.color[1];
root.appendChild(bodyLine);

let title =  document.createElement('div'); //font Inter fontsize nomal font weight 400 font size 24px line-height 29px color #FFFFFF
title.style.position = "absolute";
title.style.width = "147px";
title.style.height = "29px";
title.style.left = "141px";
title.style.top = "301px";
title.style.fontFamily = "Inter";
title.style.fontStyle = "normal";
title.style.fontWeight = "400";
title.style.fontSize = "24px";
title.style.lineHeight = "29px";
title.innerText = trainingData.title;
title.style.color = trainingData.color[1];


root.appendChild(title);

let naeYong = document.createElement('div');
//position: absolute;width: 295px;height: 186px;left: 67px;top: 364px;font-family: 'Inter';font-style: normal;font-weight: 400;font-size: 12px;line-height: 15px;text-align: justify;
naeYong.style.position = "absolute";
naeYong.style.width = "295px";
// naeYong.style.height = "186px";
naeYong.style.left = "67px";
naeYong.style.top = "364px";
naeYong.style.textAlign = "justify";
naeYong.style.fontFamily = "Inter";
naeYong.style.fontStyle = "normal";
naeYong.style.fontWeight = "400";
naeYong.style.fontSize = "12px";
naeYong.style.lineHeight = "15px";

naeYong.innerText = trainingData.paragraph;
console.dir(naeYong)
naeYong.style.color = trainingData.color[1];

root.appendChild(naeYong)

let button = document.createElement('div'); //borderRadius 41px FFFFFF width 82px height 82px position absolute
button.style.width = "82px";
button.style.height = "82px";
button.style.position = "absolute";
button.style.left = "174px";
button.style.top = "673px";
button.style.borderRadius = "41px";
button.style.backgroundColor = trainingData.color[1];
root.appendChild(button)
// let rgbRan = `rgb(${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)})`;
// console.dir(rgbRan)

button.addEventListener("click",function(){
    root.style.backgroundColor     = `rgb(${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)})`;
    bodyLine.style.backgroundColor = `rgb(${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)})`;
    title.style.color              = `rgb(${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)})`;
    naeYong.style.color            = `rgb(${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)})`;
    button.style.backgroundColor   = `rgb(${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)})`;
  
  
  
  
  // if(stick == 0){
  //   root.style.backgroundColor  = trainingData.color[1]
  //   bodyLine.style.backgroundColor = trainingData.color[0];
  //   title.style.color = trainingData.color[0];
  //   naeYong.style.color = trainingData.color[0];
  //   button.style.backgroundColor = trainingData.color[0];
  //   stick = 1;
  // }else{
  //   root.style.backgroundColor  = trainingData.color[0]
  //   bodyLine.style.backgroundColor = trainingData.color[1];
  //   title.style.color = trainingData.color[1];
  //   naeYong.style.color = trainingData.color[1];
  //   button.style.backgroundColor = trainingData.color[1];
  //   stick = 0;
  // }
});






const trainingData = { 
  title : "Lorem Ipsum",
  paragraph : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  color : ["#1E1E1E", "#FFFFFF"]
}
let stick = 0;

function rootStyle (element, position, display, width, height) {
  let root = document.getElementById(element);
  element.style.backgroundColor =  trainingData.color[0]; 
  element.style.position = position;
  element.style.display = display;
  element.style.width = width;
  element.style.height = height;
  return root;
};
rootStyle(root, "relative", "flex", "430px", "932px");

// let root = document.getElementById('root')
//align-center width 100vw height 100vh bgc #1E1E1E position absolute
// root.style.backgroundColor =  trainingData.color[0]; 
// root.style.position = "relative"
// root.style.display = "flex"
// root.style.width = "430px"
// root.style.height = "932px"

function bodyLineStyle (element ,width, height, position, left, top) {
  let bodyLine = document.createElement(element);
  bodyLine.style.width = width;
  bodyLine.style.height = height;
  bodyLine.style.position = position;
  bodyLine.style.left = left;
  bodyLine.style.top = top;
  bodyLine.style.backgroundColor = trainingData.color[1];
  root.appendChild(bodyLine);
  return bodyLine;
};
bodyLineStyle('div', "200px", "2px", "absolute", "115px", "340px");

 //color FFFFFF width 100px height 2px top 340px position absolute
// let bodyLine = document.createElement('div');
// bodyLine.style.width = "200px";
// bodyLine.style.height = "2px";
// bodyLine.style.position = "absolute";
// bodyLine.style.left = "115px";
// bodyLine.style.top = "340px";
// bodyLine.style.backgroundColor = trainingData.color[1];
// root.appendChild(bodyLine);

function titleStyle (element, position, width, height, left, top, fontFamily, fontStyle, fontWeight, fontSize, lineHeight) {
  let title =  document.createElement(element);
  title.style.position = position;
  title.style.width = width;
  title.style.height = height;
  title.style.left = left;
  title.style.top = top;
  title.style.fontFamily = fontFamily;
  title.style.fontStyle = fontStyle;
  title.style.fontWeight = fontWeight;
  title.style.fontSize = fontSize;
  title.style.lineHeight = lineHeight;
  title.innerText = trainingData.title;
  title.style.color = trainingData.color[1];
  root.appendChild(title);
  return title;
};
titleStyle('div', "absolute", "147px", "29px", "141px", "301px", "Inter", "normal", "400", "24px", "29px");

 //font Inter fontsize nomal font weight 400 font size 24px line-height 29px color #FFFFFF
// let title =  document.createElement('div');
// title.style.position = "absolute";
// title.style.width = "147px";
// title.style.height = "29px";
// title.style.left = "141px";
// title.style.top = "301px";
// title.style.fontFamily = "Inter";
// title.style.fontStyle = "normal";
// title.style.fontWeight = "400";
// title.style.fontSize = "24px";
// title.style.lineHeight = "29px";
// title.innerText = trainingData.title;
// title.style.color = trainingData.color[1];

// root.appendChild(title);

function naeYongStyle (element, position, width, height, left, top, textAlign, fontFamily, fontStyle, fontWeight, fontSize, lineHeight) {
  let naeYong = document.createElement(element);
  naeYong.style.position = position;
  naeYong.style.width = width;
  naeYong.style.height = height;
  naeYong.style.left = left;
  naeYong.style.top = top;
  naeYong.style.textAlign = textAlign;
  naeYong.style.fontFamily = fontFamily;
  naeYong.style.fontStyle = fontStyle;
  naeYong.style.fontWeight = fontWeight;
  naeYong.style.fontSize = fontSize;
  naeYong.style.lineHeight = lineHeight;

  naeYong.innerText = trainingData.paragraph;
  console.dir(naeYong)
  naeYong.style.color = trainingData.color[1];

  root.appendChild(naeYong)
  return naeYong;
}
naeYongStyle('div', "absolute", "295px", "186px", "67px", "364px", "justify", "Inter", "normal", "400", "12px", "15px");


//position: absolute;width: 295px;height: 186px;left: 67px;top: 364px;font-family: 'Inter';font-style: normal;font-weight: 400;font-size: 12px;line-height: 15px;text-align: justify;
// let naeYong = document.createElement('div');
// naeYong.style.position = "absolute";
// naeYong.style.width = "295px";
// naeYong.style.height = "186px";
// naeYong.style.left = "67px";
// naeYong.style.top = "364px";
// naeYong.style.textAlign = "justify";
// naeYong.style.fontFamily = "Inter";
// naeYong.style.fontStyle = "normal";
// naeYong.style.fontWeight = "400";
// naeYong.style.fontSize = "12px";
// naeYong.style.lineHeight = "15px";

// naeYong.innerText = trainingData.paragraph;
// console.dir(naeYong)
// naeYong.style.color = trainingData.color[1];

// root.appendChild(naeYong)

function buttonStyle (element, width, height, position, left, top, borderRadius) {
  let button = document.createElement(element);
  button.style.width = width;
  button.style.height = height;
  button.style.position = position;
  button.style.left = left;
  button.style.top = top;
  button.style.borderRadius = borderRadius;
  button.style.backgroundColor = trainingData.color[1];
  root.appendChild(button)
  return button;
}
buttonStyle('div', "82px", "82px", "absolute", "174px", "673px", "41px");

// let button = document.createElement('div'); //borderRadius 41px FFFFFF width 82px height 82px position absolute
// button.style.width = "82px";
// button.style.height = "82px";
// button.style.position = "absolute";
// button.style.left = "174px";
// button.style.top = "673px";
// button.style.borderRadius = "41px";
// button.style.backgroundColor = trainingData.color[1];
// root.appendChild(button)

button.addEventListener("click",function(){
  if(stick === 0){
    root.style.backgroundColor  = trainingData.color[1]
    bodyLine.style.backgroundColor = trainingData.color[0];
    title.style.color = trainingData.color[0];
    naeYong.style.color = trainingData.color[0];
    button.style.backgroundColor = trainingData.color[0];
    stick = 1;
  }else{
    root.style.backgroundColor  = trainingData.color[0]
    bodyLine.style.backgroundColor = trainingData.color[1];
    title.style.color = trainingData.color[1];
    naeYong.style.color = trainingData.color[1];
    button.style.backgroundColor = trainingData.color[1];
    stick = 0;
  }
});






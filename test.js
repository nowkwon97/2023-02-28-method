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






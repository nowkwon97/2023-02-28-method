const trainingData = { 
  title : "Lorem Ipsum",
  paragraph : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  color : ["#1E1E1E", "#FFFFFF"]
}

let root = document.getElementById('root');

function makeMainStructure(a, b, c) {
  let rootMainTree = {
    
    divOne : document.createElement(a),
    divTwo : document.createElement(b),
    divThree : document.createElement(c),
  };
  return rootMainTree;
};
function makeDivTwoStructure(a, b) {
  let divTwoTree = {
    divOne : document.createElement(a),
    divTwo : document.createElement(b)
  };
  return divTwoTree;
};

let styleMainForm = makeMainStructure('div', 'div', 'div');
let div1 = styleMainForm.divOne;
root.appendChild(div1);
let div2 = styleMainForm.divTwo;
root.appendChild(div2);
let div3 = styleMainForm.divThree;
root.appendChild(div3);

let styleDivTwoForm = makeDivTwoStructure('div', 'div');
let divTwoOne = styleDivTwoForm.divOne;
div2.appendChild(divTwoOne);
let divTwoTwo = styleDivTwoForm.divTwo;
div2.appendChild(divTwoTwo);

function rootStyle(element, width, height, display, justifyContent, alignItems, flexDirection, backgroundColor) {
  element.style.width = width;
  element.style.height = height;
  element.style.display = display;
  element.style.justifyContent = justifyContent;
  element.style.alignItems = alignItems;
  element.style.flexDirection = flexDirection;
  element.style.backgroundColor = backgroundColor;
};
// root(wrapper) style 설정
rootStyle(root, "430px", "932px", "flex", "center", "center", "column", "#FFFFFF");
root.style.marginTop = "-100px";
//div1 style


div1.style.width = "100%";
div1.style.height = "20%";

//div2 style
div2.style.width = "100%";
div2.style.height = "60%";
div2.style.display = "flex";
div2.style.flexDirection = "column";
div2.style.justifyContent = "center";
div2.style.alignItems = "center";
div2.style.textAlign = "center";

//div2 inner div-1
divTwoOne.style.width = "50%";
divTwoOne.style.height = "25%"
divTwoOne.style.fontSize = "24px";
divTwoOne.textContent = trainingData.title;

//div2 inner div-2
divTwoTwo.style.width = "50%";
divTwoTwo.style.height = "75%"
divTwoTwo.style.fontSize = "12px";
divTwoTwo.textContent = trainingData.paragraph;

//div3 style
div3.style.width = "20%";
div3.style.height = "10%";
div3.style.borderRadius = "50%";
div3.style.marginTop = "-200px";
div3.style.backgroundColor = trainingData.color[0];


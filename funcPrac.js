// tag 요소의 속성 값을 설정해주는 함수
function makeTag(tagName, setAttributeName, setAttributeValue, parent) {
  const element = document.createElement(tagName);
  element.setAttribute(setAttributeName, setAttributeValue);
  parent.appendChild(element);
};

function makeStructure(container, ) {
  const element = document.getElementById(container);
  
}
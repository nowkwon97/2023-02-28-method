// tag 요소의 속성 값을 설정해주는 함수
function makeTag(tagName, setAttributeName, setAttributeValue, parent) {
  const element = document.createElement(tagName);
  element.setAttribute(setAttributeName, setAttributeValue);
  parent.appendChild(element);
  
};

// id 가 없는 구조를 생성하는 함수
function makeStructure(container, tagName) {
  const newTag = document.createElement(tagName);
  container.appendChild(newTag);
}
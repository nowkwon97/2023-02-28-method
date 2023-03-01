
// function makeTag(tagName, setAttributeName, setAttributeValue, parent) {
//   const element = document.createElement(tagName);
//   element.setAttribute(setAttributeName, setAttributeValue);
//   parent.appendChild(element);
// };

// tag 요소의 속성 값을 설정해주는 함수
// attribute를 지정 안해줄경우 tagName, parent만 입력해준다.
function makeTag(tagName, parent, setAttributeName, setAttributeValue) {
  const element = document.createElement(tagName);
  parent.appendChild(element);
  if (setAttributeName !== undefined) {
    element.setAttribute(setAttributeName, setAttributeValue);
  }
};

// id 가 없는 구조를 생성하는 함수
function makeStructure(container, tagName) {
  const newTag = document.createElement(tagName);
  container.appendChild(newTag);
};

// tag의 width, height 조정해주는 함수
function tagWidthHeightStyle(tagName, width, height) {
  tagName.style.width = width;
  tagName.style.height = height;
};

// tag의 display 설정 함수
// 사용하지 않을 매게변수는 ''로 공백을 준다.
function tagDisplayStyle(tagName, display, flexDirection, justifyContent, alignItems) {
  tagName.style.display = display;
  tagName.style.flexDirection = flexDirection;
  tagName.style.justifyContent = justifyContent;
  tagName.style.alignItems = alignItems;
}

// function tagDisplayStyle(tagName, display, flexDirection, justifyContent, alignItems) {
//   tagName.style.display = display;
//   if (typeof(flexDirection) !== undefined) {
//     tagName.style.flexDirection = flexDirection;
//   };
//   if (typeof(justifyContent) !== undefined) {
//     tagName.style.justifyContent = justifyContent;
//   };
//   if (typeof(alignItems) !== undefined) {
//     tagName.style.alignItems = alignItems;
//   };
// }


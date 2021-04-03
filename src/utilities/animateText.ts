/* eslint-disable @typescript-eslint/no-use-before-define */
/* eslint-disable no-param-reassign */
const animateText = (
  node: HTMLHeadingElement | HTMLParagraphElement,
  time: number
): void => {
  const text: string = node.innerText;
  const splitStr: string[] = text?.split('');
  node.innerText = '';

  for (let i = 0; i < splitStr.length; i += 1) {
    node.innerHTML += `<span>${splitStr[i]}</span>`;
  }
  let character = 0;
  const timer: NodeJS.Timeout = setInterval(onTime, time);

  function onTime() {
    const span = node.querySelectorAll('span')[character];
    span.classList.add('fade');
    character += 1;
    if (character === splitStr.length) {
      clearInterval(timer);
    }
  }
};

export default animateText;

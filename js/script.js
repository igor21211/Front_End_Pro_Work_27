const mainElement = document.querySelector(".root");
const array = [1, 2, 3, [5, 3, 2, 1], 4, 3, [2, 3], 4];

function generateList(params) {
  let result = "<ul>";
  for (const item of params) {
    if (Array.isArray(item)) {
      result += `<li> ${generateList(item)}</li>`;
    } else {
      result += `<li>${item}</li>`;
    }
  }

  result += "</ul>";
  return result;
}

const innerHtml = generateList(array);
mainElement.innerHTML = innerHtml;

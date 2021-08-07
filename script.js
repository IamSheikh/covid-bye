replaceText(document.body);

function replaceText(element) {
  if (element.hasChildNodes()) {
    element.childNodes.forEach(replaceText);
  } else if (element.nodeType === Text.TEXT_NODE) {
    if (element.textContent.match(/coronavirus/gi)) {
      element.parentElement.remove();
    } else if (element.textContent.match(/COVID/gi)) {
      element.parentElement.remove();
    } else if (element.textContent.match(/COVID-19/gi)) {
      element.parentElement.remove();
    } else if (element.textContent.match(/COVID 19/gi)) {
      element.parentElement.remove();
    }
  }
}

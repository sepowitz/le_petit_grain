if ( !!(window.addEventListener)) {
  window.addEventListener("DOMContentLoaded", () => fadeIn());
} else { //IE
  window.attachEvent("onload", () => fadeIn());
}

const fadeIn = () => {
  const content = document.getElementsByClassName('content');
  if (!content.length) return;
  return content[0].classList.add('js-reveal');
}
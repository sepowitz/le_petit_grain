if ( !!(window.addEventListener) )
  window.addEventListener("DOMContentLoaded", () => execute())
else // MSIE
  window.attachEvent("onload", execute)

  const execute = () => {
    const content = document.getElementsByClassName('content');
    if (!content.length) return;
    return content[0].classList.add('js-reveal');
  }
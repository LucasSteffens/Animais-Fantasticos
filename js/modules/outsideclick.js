export default function outsideClick(element, events, callback) {
  const html = document.documentElement;
  const outisde = 'data-outside';

  if(!element.hasAttribute(outisde)) {
    events.forEach(userEvent => {
      html.addEventListener(userEvent, handOutsideClick); 
    })
    element.setAttribute(outisde, '');
  }
  function handOutsideClick(event) {
    if(!element.contains(event.target)) {
      element.removeAttribute(outisde)
      events.forEach(userEvent => {
      html.removeEventListener(userEvent, handOutsideClick)
      })
      callback();
    }
  }
}
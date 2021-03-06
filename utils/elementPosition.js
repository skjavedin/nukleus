import {isBrowser} from './executionEnvironment';

export default function getElementPositionY (element, offset = 0) {
  if (!isBrowser) return 0;
  const box = element.getBoundingClientRect();
  const {
    body,
    docElem
  } = document;
  const scrollTop = window.pageYOffset || docElem.scrollTop || body.scrollTop;
  const clientTop = docElem.clientTop || body.clientTop || 0;
  return (box.top + scrollTop) - clientTop - offset;
}

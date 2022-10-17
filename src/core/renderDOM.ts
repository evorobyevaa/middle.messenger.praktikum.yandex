import Block from './Block';

export default function renderDOM(rootSelector: string, block: Block) {
  const root = document.querySelector(rootSelector);

  if (root === null) {
    throw new Error('Root has not found');
  }

  root!.innerHTML = '';
  root!.appendChild(block.getContent());
}

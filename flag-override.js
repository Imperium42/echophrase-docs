// Replace China flag with Taiwan flag and rename to 中文（台灣）
function swapFlagsAndLabel() {
  document.querySelectorAll('img[src*="/flags/CN.svg"]').forEach((img) => {
    img.src = img.src.replace('/flags/CN.svg', '/flags/TW.svg');
    img.alt = 'TW';
  });

  document.querySelectorAll('button, a, span, div').forEach((el) => {
    if (el.children.length === 0 && el.textContent.trim() === '繁體中文') {
      el.textContent = '中文（台灣）';
    }
  });
}

const observer = new MutationObserver(swapFlagsAndLabel);
observer.observe(document.body, { childList: true, subtree: true });
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', swapFlagsAndLabel);
} else {
  swapFlagsAndLabel();
}

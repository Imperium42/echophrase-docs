// Mintlify renders a China (CN) flag for every Chinese entry in the language
// switcher. Our Traditional entry (zh-Hant) targets Taiwan, so swap ITS flag to
// TW and relabel it 中文（台灣）. The Simplified entry (zh-CN) keeps Mintlify's
// default CN flag and 简体中文 label - do not touch it.
function swapFlagsAndLabel() {
  document.querySelectorAll('button, a, span, div').forEach((el) => {
    if (el.children.length !== 0 || el.textContent.trim() !== '繁體中文') return;

    // Walk up to the switcher row that owns this label and fix only its flag.
    let row = el;
    for (let i = 0; i < 4 && row && !row.querySelector('img[src*="/flags/"]'); i++) {
      row = row.parentElement;
    }
    const flag = row && row.querySelector('img[src*="/flags/CN.svg"]');
    if (flag) {
      flag.src = flag.src.replace('/flags/CN.svg', '/flags/TW.svg');
      flag.alt = 'TW';
    }

    el.textContent = '中文（台灣）';
  });
}

const observer = new MutationObserver(swapFlagsAndLabel);
observer.observe(document.body, { childList: true, subtree: true });
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', swapFlagsAndLabel);
} else {
  swapFlagsAndLabel();
}

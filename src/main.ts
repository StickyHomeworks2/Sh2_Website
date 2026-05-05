import 'mdui/mdui.css';
import 'mdui';
import { setColorScheme } from 'mdui/functions/setColorScheme.js';
import './styles/global.css';

// 与 Sh2.2 一致：动态配色，Hero/CTA 散光与组件色调才明显
setColorScheme('#5B6BBF');
import './styles/home-sh22.css';

import { initAnimations } from './components/Layout';
import { PAGE_TITLES } from './constants';
import { runMduiMutation } from './utils/mduiMutation';

function getCurrentPath(): string {
  const path = window.location.pathname;
  if (path === '/' || path === '/index.html') {
    return '/';
  }
  return path.replace(/\.html$/, '').replace(/\/$/, '') || '/';
}

async function renderPage(): Promise<void> {
  const currentPath = getCurrentPath();
  document.title = PAGE_TITLES[currentPath] ?? PAGE_TITLES['/'];

  const app = document.getElementById('app');
  if (!app) return;

  let initPage: ((nav: typeof navigate) => void) | undefined;

  if (currentPath === '/') {
    const mod = await import('./pages/Home');
    app.innerHTML = mod.renderHomePage();
    initPage = mod.initHomePage;
  } else if (currentPath === '/download') {
    const mod = await import('./pages/Download');
    app.innerHTML = mod.renderDownloadPage();
  } else if (currentPath === '/about') {
    const mod = await import('./pages/About');
    app.innerHTML = mod.renderAboutPage();
    initPage = mod.initAboutPage;
  } else {
    const mod = await import('./pages/Home');
    app.innerHTML = mod.renderHomePage();
    initPage = mod.initHomePage;
  }

  runMduiMutation();
  window.scrollTo(0, 0);

  requestAnimationFrame(() => {
    initAnimations();
    initPage?.(navigate);
  });
}

export function navigate(path: string): void {
  history.pushState({}, '', path);
  void renderPage();
}

window.addEventListener('popstate', () => {
  void renderPage();
});

document.addEventListener('click', (e) => {
  const target = e.target as HTMLElement;
  const link = target.closest('a[data-link]');
  if (link) {
    e.preventDefault();
    const href = link.getAttribute('href');
    if (href && !href.startsWith('http')) {
      navigate(href);
    }
  }
});

document.addEventListener('DOMContentLoaded', () => {
  void renderPage();
});

if (window.location.hash) {
  const path = window.location.hash.slice(1);
  if (path) {
    history.replaceState({}, '', path);
  }
}

// Layout - Material Design 3

import { DOCS_URL } from '../constants';

function normalizeAppPath(path: string): string {
  if (path === '/' || path === '/index.html') return '/';
  const p = path.replace(/\.html$/, '').replace(/\/$/, '') || '/';
  return p;
}

/** 桌面：侧边栏；窄屏：底部栏（见 global.css @media max-width:600px） */
export function renderMobileNavigationBar(): string {
  return `
    <mdui-navigation-bar id="nav-bar" class="app-mobile-nav" label-visibility="labeled">
      <mdui-navigation-bar-item value="/" icon="home" href="/" data-link>首页</mdui-navigation-bar-item>
      <mdui-navigation-bar-item value="/download" icon="download" href="/download" data-link>下载</mdui-navigation-bar-item>
      <mdui-navigation-bar-item value="docs" icon="menu_book" href="${DOCS_URL}" target="_blank" rel="noopener noreferrer">文档</mdui-navigation-bar-item>
      <mdui-navigation-bar-item value="/about" icon="info" href="/about" data-link>关于</mdui-navigation-bar-item>
    </mdui-navigation-bar>
  `;
}

export function renderNavigationRail(): string {
  return `
    <mdui-navigation-rail id="nav-rail" divider>
      <div slot="top" style="padding: 16px 0; text-align: center;">
        <img src="/AppLogo.png" alt="Logo" style="width: 40px; height: 40px; border-radius: 12px;">
      </div>
      <mdui-navigation-rail-item icon="home" href="/" data-link>首页</mdui-navigation-rail-item>
      <mdui-navigation-rail-item icon="download" href="/download" data-link>下载</mdui-navigation-rail-item>
      <mdui-navigation-rail-item icon="menu_book" href="${DOCS_URL}" target="_blank" rel="noopener noreferrer">文档</mdui-navigation-rail-item>
      <mdui-navigation-rail-item icon="info" href="/about" data-link>关于</mdui-navigation-rail-item>
      <!-- <mdui-button-icon icon="dark_mode" slot="bottom" id="theme-toggle"></mdui-button-icon> -->
    </mdui-navigation-rail>
  `;
}

export function renderFooter(): string {
  return `
    <footer class="footer">
      <div class="footer-divider"></div>
      <div class="container">
        <div class="footer-content">
          <div class="footer-brand">
            <div class="footer-logo">
              <img src="/AppLogo.png" alt="Logo" style="width: 32px; height: 32px; border-radius: 8px;">
              <span style="font-size: 16px; font-weight: 500; margin-left: 12px;">StickyHomeworks2</span>
            </div>
            <p class="footer-desc">桌面作业贴工具，为班级一体机设计</p>
          </div>
          <div class="footer-links">
            <mdui-button variant="text" href="https://github.com/StickyHomeworks2/StickyHomeworks2" target="_blank">
              <mdui-icon slot="icon" name="code"></mdui-icon>
              GitHub
            </mdui-button>
            <mdui-button variant="text" href="${DOCS_URL}" target="_blank">
              <mdui-icon slot="icon" name="menu_book"></mdui-icon>
              文档
            </mdui-button>
            <mdui-button variant="text" href="https://qm.qq.com/q/w6vcjZA3DO" target="_blank">
              <mdui-icon slot="icon" name="chat"></mdui-icon>
              QQ群
            </mdui-button>
          </div>
        </div>
      </div>
    </footer>
  `;
}

export function renderPage(content: string): string {
  return `
    ${renderNavigationRail()}
    <div class="app-shell">
      <main class="main" id="page-main" tabindex="-1">${content}</main>
      ${renderFooter()}
    </div>
    ${renderMobileNavigationBar()}
  `;
}

/** 与当前路由同步侧边栏、底部栏高亮 */
export function syncNavigationActive(): void {
  const path = normalizeAppPath(window.location.pathname);
  const rail = document.getElementById('nav-rail');
  if (rail) {
    const items = rail.querySelectorAll('mdui-navigation-rail-item');
    items.forEach((item) => {
      const href = item.getAttribute('href');
      if (!href || href.startsWith('http')) {
        (item as unknown as { active: boolean }).active = false;
        return;
      }
      const itemPath = normalizeAppPath(href);
      (item as unknown as { active: boolean }).active = itemPath === path;
    });
  }

  const bar = document.getElementById('nav-bar') as HTMLElement & { value?: string } | null;
  if (bar) {
    const tabRoutes: string[] = ['/', '/download', '/about'];
    if (tabRoutes.includes(path)) {
      bar.value = path;
    }
  }
}

// 初始化动画和交互
export function initAnimations(): void {
  // 动画观察器
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

  document.querySelectorAll('.animate').forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      el.classList.add('visible');
    } else {
      observer.observe(el);
    }
  });

  document.querySelectorAll('.animate-on-scroll').forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      el.classList.add('visible');
    } else {
      observer.observe(el);
    }
  });

  syncNavigationActive();
}

import { renderFeatureCard } from '../components/feature-card';
import { renderFeatureSection } from '../components/feature-section';
import { renderPage } from '../components/Layout';
import { DOCS_URL } from '../constants';
import { publicAsset } from '../utils/publicAsset';

const logoSrc = publicAsset('AppLogo.png');
const bannerSrc = publicAsset('sh2banner.png');

const GITHUB_ICON_SVG = `<svg class="github-icon" viewBox="0 0 24 24" fill="currentColor">
  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
</svg>`;

const COLORS = {
  cyan: '#01CCFD',
  purple: '#EBA2FD',
  gold: '#FFB802',
  skyBlue: '#66CCFF',
};

export function renderHomePage(): string {
  return renderPage(`
<div class="home-sh22">
  ${renderHeroSection()}
  ${renderHomeworkManagementSection()}
  ${renderTimeMachineSection()}
  ${renderCustomizationSection()}
  ${renderMoreFeaturesSection()}
  ${renderCtaSection()}
</div>
  `);
}

export function initHomePage(navigate: (path: string) => void): void {
  const downloadBtn = document.getElementById('hero-download-btn');
  if (downloadBtn) {
    downloadBtn.addEventListener('click', () => navigate('/download'));
  }

  const githubBtn = document.getElementById('hero-github-btn');
  if (githubBtn) {
    githubBtn.addEventListener('click', () => {
      window.open('https://github.com/StickyHomeworks2/StickyHomeworks2', '_blank');
    });
  }

  const ctaDownloadBtn = document.getElementById('cta-download-btn');
  if (ctaDownloadBtn) {
    ctaDownloadBtn.addEventListener('click', () => navigate('/download'));
  }

  const ctaDocsBtn = document.getElementById('cta-docs-btn');
  if (ctaDocsBtn) {
    ctaDocsBtn.addEventListener('click', () => {
      window.open(DOCS_URL, '_blank');
    });
  }
}

function renderHeroSection(): string {
  const bannerCssUrl = `url('${bannerSrc.replace(/'/g, '%27')}')`;
  return `
    <section class="hero-section">
      <div class="hero-banner-plane" style="--hero-banner: ${bannerCssUrl}"></div>
      <div class="hero-banner-skew" aria-hidden="true"></div>
      <div class="hero-ambient" aria-hidden="true"></div>
      <div class="container hero-banner-inner">
        <div class="hero-content">
          <img
            src="${logoSrc}"
            alt="StickyHomeworks2 Logo"
            class="hero-logo hero-animate"
            width="80"
            height="80"
          >
          <h1 class="hero-title hero-animate delay-1">StickyHomeworks2</h1>
          <p class="hero-subtitle hero-animate delay-2">一款专为班级一体机设计的桌面作业贴</p>

          <div class="hero-chips hero-animate delay-3">
            <mdui-chip icon="edit">富文本</mdui-chip>
            <mdui-chip icon="auto_awesome">智能管理</mdui-chip>
            <mdui-chip icon="palette">个性定制</mdui-chip>
          </div>

          <div class="hero-buttons hero-animate delay-4">
            <mdui-button variant="filled" id="hero-download-btn">
              <mdui-icon slot="icon" name="download"></mdui-icon>
              立即下载
            </mdui-button>
            <mdui-button variant="outlined" id="hero-github-btn">
              <span slot="icon">${GITHUB_ICON_SVG}</span>
              GitHub
            </mdui-button>
          </div>
        </div>
      </div>
    </section>
  `;
}

function renderHomeworkManagementSection(): string {
  const cards = [
    renderFeatureCard({
      icon: 'edit_note',
      title: '富文本编辑',
      description: '支持格式化文本编辑，插入图片、超链接，让作业记录更清晰',
      sectionColor: COLORS.cyan,
      animateDelay: 1,
    }),
    renderFeatureCard({
      icon: 'category',
      title: '科目分组',
      description: '按科目自动分类展示作业，一目了然查看各科任务',
      sectionColor: COLORS.cyan,
      animateDelay: 2,
    }),
    renderFeatureCard({
      icon: 'label',
      title: '标签系统',
      description: '为作业添加自定义标签，灵活分类和筛选',
      sectionColor: COLORS.cyan,
      animateDelay: 3,
    }),
    renderFeatureCard({
      icon: 'auto_delete',
      title: '智能清理',
      description: '自动处理过期作业，支持延迟清理模式，避免误删',
      sectionColor: COLORS.cyan,
      animateDelay: 4,
    }),
  ].join('');

  return renderFeatureSection({
    id: 'homework-management',
    number: '01',
    title: '作业管理',
    color: COLORS.cyan,
    cards,
    isEven: false,
  });
}

function renderTimeMachineSection(): string {
  const cards = [
    renderFeatureCard({
      icon: 'restore',
      title: '时间机器',
      description: '·自动创建备份快照，支持可视化预览截图，快速恢复到任意历史时间点',
      sectionColor: COLORS.purple,
      animateDelay: 1,
    }),
    renderFeatureCard({
      icon: 'school',
      title: 'ClassIsland联动',
      description: '支持ClassIsland联动，上下课自动显示/隐藏，导入科目数据',
      sectionColor: COLORS.purple,
      animateDelay: 2,
    }),
    renderFeatureCard({
      icon: 'update',
      title: '一键更新',
      description: '支持一键更新，自动下载最新版本，无需手动下载',
      sectionColor: COLORS.purple,
      animateDelay: 3,
    }),
    renderFeatureCard({
      icon: 'rocket_launch',
      title: '开机自启',
      description: '支持系统启动时自动运行，上课前作业已就绪',
      sectionColor: COLORS.purple,
      animateDelay: 4,
    }),
  ].join('');

  return renderFeatureSection({
    id: 'time-machine',
    number: '02',
    title: '实用功能',
    color: COLORS.purple,
    cards,
    isEven: true,
  });
}

function renderCustomizationSection(): string {
  const cards = [
    renderFeatureCard({
      icon: 'dark_mode',
      title: '主题系统',
      description: '支持深色/浅色模式自由切换，保护用眼健康',
      sectionColor: COLORS.gold,
      animateDelay: 1,
    }),
    renderFeatureCard({
      icon: 'palette',
      title: '配色方案',
      description: '自定义主色调和副色调，打造专属界面风格',
      sectionColor: COLORS.gold,
      animateDelay: 2,
    }),
    renderFeatureCard({
      icon: 'wallpaper',
      title: '壁纸取色',
      description: '智能提取桌面壁纸主色调，自动适配界面配色',
      sectionColor: COLORS.gold,
      animateDelay: 3,
    }),
    renderFeatureCard({
      icon: 'opacity',
      title: '透明度调节',
      description: '窗口透明度自由调整，与桌面环境完美融合',
      sectionColor: COLORS.gold,
      animateDelay: 4,
    }),
  ].join('');

  return renderFeatureSection({
    id: 'customization',
    number: '03',
    title: '个性定制',
    color: COLORS.gold,
    cards,
    isEven: false,
  });
}

function renderMoreFeaturesSection(): string {
  const cards = [
    renderFeatureCard({
      icon: 'branding_watermark',
      title: '窗口管理',
      description: '无框式设计，自由调整窗口大小和位置，不遮挡桌面内容',
      sectionColor: COLORS.skyBlue,
      animateDelay: 1,
    }),
    renderFeatureCard({
      icon: 'fit_screen',
      title: '大屏适配',
      description: '专为班级一体机优化，支持全局缩放，大屏显示更清晰',
      sectionColor: COLORS.skyBlue,
      animateDelay: 2,
    }),
    renderFeatureCard({
      icon: 'screenshot_monitor',
      title: '截图导出',
      description: '一键导出作业列表截图，方便分享和保存',
      sectionColor: COLORS.skyBlue,
      animateDelay: 3,
    }),
    renderFeatureCard({
      icon: 'inbox',
      title: '系统托盘',
      description: '支持系统托盘图标，方便快捷操作',
      sectionColor: COLORS.skyBlue,
      animateDelay: 4,
    }),
  ].join('');

  return renderFeatureSection({
    id: 'more-features',
    number: '04',
    title: '更多特性',
    color: COLORS.skyBlue,
    cards,
    isEven: true,
  });
}

function renderCtaSection(): string {
  return `
    <section class="cta-section">
      <div class="container">
        <div class="cta-content animate-on-scroll">
          <h2 class="cta-title">让作业管理更简单</h2>
          <p class="cta-subtitle">下载 StickyHomeworks2，开始高效管理班级作业</p>
          <div class="cta-buttons">
            <mdui-button variant="filled" id="cta-download-btn">
              <mdui-icon slot="icon" name="download"></mdui-icon>
              立即下载
            </mdui-button>
            <mdui-button variant="outlined" id="cta-docs-btn">
              <mdui-icon slot="icon" name="description"></mdui-icon>
              查看文档
            </mdui-button>
          </div>
        </div>
      </div>
    </section>
  `;
}

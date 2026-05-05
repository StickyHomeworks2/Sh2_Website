import { renderPage } from '../components/Layout';
import { DOCS_URL } from '../constants';
import { publicAsset } from '../utils/publicAsset';

const logoUrl = publicAsset('AppLogo.png');

export function initAboutPage(navigate: (path: string) => void): void {
  const downloadBtn = document.getElementById('about-download-btn');
  if (downloadBtn) {
    downloadBtn.addEventListener('click', () => navigate('/download'));
  }
  const ctaDocsBtn = document.getElementById('cta-docs-btn');
  if (ctaDocsBtn) {
    ctaDocsBtn.addEventListener('click', () => {
      window.open(DOCS_URL, '_blank');
    });
  }
}

export function renderAboutPage(): string {
  return renderPage(`
    <div class="about-page">
      <section class="about-hero animate-on-scroll">
        <div class="about-hero-bg"></div>
        <div class="about-hero-content">
          <img src="${logoUrl}" alt="StickyHomeworks2 Logo" class="about-hero-logo" />
          <h1 class="about-hero-title">StickyHomeworks2</h1>
          <p class="about-hero-subtitle">支持富文本的桌面作业贴工具</p>
        </div>
      </section>

      <section class="about-intro animate-on-scroll">
        <mdui-card variant="filled" class="about-intro-card">
          <div class="about-intro-content">
            <h2 class="about-section-title">
              <mdui-icon name="info"></mdui-icon>
              项目简介
            </h2>
            <p class="about-intro-text">
              StickyHomeworks2 是一款专为班级一体机和教室场景设计的桌面作业贴工具。它帮助老师和学生高效管理每日作业，让作业信息清晰展示在桌面上，支持富文本编辑、时间机器、主题定制等强大功能。
            </p>
            <div class="about-tech-stack">
              <span class="tech-label">技术栈：</span>
              <div class="tech-chips">
                <mdui-chip variant="assist">
                  <mdui-icon slot="icon" name="code"></mdui-icon>
                  .NET 8
                </mdui-chip>
                <mdui-chip variant="assist">
                  <mdui-icon slot="icon" name="window"></mdui-icon>
                  WPF
                </mdui-chip>
                <mdui-chip variant="assist">
                  <mdui-icon slot="icon" name="storage"></mdui-icon>
                  Entity Framework Core
                </mdui-chip>
                <mdui-chip variant="assist">
                  <mdui-icon slot="icon" name="palette"></mdui-icon>
                  Material Design
                </mdui-chip>
              </div>
            </div>
          </div>
        </mdui-card>
      </section>

      <section class="about-team animate-on-scroll">
        <h2 class="about-section-title centered">
          <mdui-icon name="groups"></mdui-icon>
          团队与贡献者
        </h2>
        <div class="contributors-container">
          <mdui-card variant="outlined" class="contributor-card main-contributor">
            <mdui-avatar src="https://github.com/HelloWRC.png" class="contributor-avatar"></mdui-avatar>
            <div class="contributor-info">
              <h3 class="contributor-name">HelloWRC</h3>
              <p class="contributor-role">Sh项目创建者</p>
              <div class="contributor-badges">
                <mdui-chip variant="outlined" size="small">
                  <mdui-icon slot="icon" name="create"></mdui-icon>
                  创建者
                </mdui-chip>
                <mdui-chip variant="outlined" size="small">
                  <mdui-icon slot="icon" name="code"></mdui-icon>
                  开发者
                </mdui-chip>
              </div>
            </div>
            <mdui-button variant="text" href="https://github.com/HelloWRC" target="_blank" rel="noopener noreferrer" class="contributor-link">
              <mdui-icon slot="icon" name="open_in_new"></mdui-icon>
              GitHub 主页
            </mdui-button>
          </mdui-card>

          <mdui-card variant="outlined" class="contributor-card main-contributor">
            <mdui-avatar src="https://github.com/jizilin6732.png" class="contributor-avatar"></mdui-avatar>
            <div class="contributor-info">
              <h3 class="contributor-name">Jizilin</h3>
              <p class="contributor-role">Sh2项目创建者 & 开发者</p>
              <div class="contributor-badges">
                <mdui-chip variant="outlined" size="small">
                  <mdui-icon slot="icon" name="create"></mdui-icon>
                  创建者
                </mdui-chip>
                <mdui-chip variant="outlined" size="small">
                  <mdui-icon slot="icon" name="code"></mdui-icon>
                  开发者
                </mdui-chip>
              </div>
            </div>
            <mdui-button variant="text" href="https://github.com/jizilin6732" target="_blank" rel="noopener noreferrer" class="contributor-link">
              <mdui-icon slot="icon" name="open_in_new"></mdui-icon>
              GitHub 主页
            </mdui-button>
          </mdui-card>

          <mdui-card variant="outlined" class="contributor-card main-contributor">
            <mdui-avatar src="https://github.com/belugaQAQ.png" class="contributor-avatar"></mdui-avatar>
            <div class="contributor-info">
              <h3 class="contributor-name">ClassIsBand</h3>
              <p class="contributor-role">主要开发者</p>
              <div class="contributor-badges">
                <mdui-chip variant="outlined" size="small">
                  <mdui-icon slot="icon" name="code"></mdui-icon>
                  开发者
                </mdui-chip>
              </div>
            </div>
            <mdui-button variant="text" href="https://github.com/belugaQAQ" target="_blank" rel="noopener noreferrer" class="contributor-link">
              <mdui-icon slot="icon" name="open_in_new"></mdui-icon>
              GitHub 主页
            </mdui-button>
          </mdui-card>

          <mdui-card variant="outlined" class="contributor-card join-card">
            <div class="join-icon">
              <mdui-icon name="group_add"></mdui-icon>
            </div>
            <div class="contributor-info">
              <h3 class="contributor-name">更多贡献者</h3>
              <p class="contributor-role">期待你的加入</p>
            </div>
            <mdui-button variant="tonal" href="https://github.com/StickyHomeworks2/StickyHomeworks2" target="_blank" rel="noopener noreferrer">
              <mdui-icon slot="icon" name="favorite"></mdui-icon>
              参与贡献
            </mdui-button>
          </mdui-card>
        </div>
      </section>

      <section class="about-thanks animate-on-scroll">
        <h2 class="about-section-title centered">
          <mdui-icon name="volunteer_activism"></mdui-icon>
          特别致谢
        </h2>
        <div class="thanks-grid">
          <mdui-card variant="outlined" class="thanks-card">
            <div class="thanks-icon">
              <mdui-icon name="widgets"></mdui-icon>
            </div>
            <h3>ElysiaFramework</h3>
            <p>提供基础 UI 框架支持，让界面更加美观流畅</p>
          </mdui-card>
          <mdui-card variant="outlined" class="thanks-card">
            <div class="thanks-icon">
              <mdui-icon name="font_download"></mdui-icon>
            </div>
            <h3>HarmonyOS Sans SC</h3>
            <p>华为提供的优质开源字体，提升阅读体验</p>
          </mdui-card>
          <mdui-card variant="outlined" class="thanks-card">
            <div class="thanks-icon">
              <mdui-icon name="group"></mdui-icon>
            </div>
            <h3>QQ群 & GitHub</h3>
            <p>社区支持，感谢优秀的开源社区</p>
          </mdui-card>
        </div>
      </section>

      <section class="about-sponsors animate-on-scroll">
        <h2 class="about-section-title centered">
          <mdui-icon name="workspace_premium"></mdui-icon>
          赞助商
        </h2>
        <p class="about-sponsors-lead">感谢以下赞助商对项目的支持</p>
        <div class="about-sponsors-inner">
          <mdui-card variant="outlined" class="about-sponsors-card">
            <div class="flex items-center gap-4">
              <img src="https://eb48d3a3.xy.proaa.top/Ystron/icon-256x256.png"
                   alt="苏州晔淞信息科技有限公司"
                   class="about-sponsors-logo">
              <div class="about-sponsors-text">
                <h3 class="about-sponsors-name">苏州晔淞信息科技有限公司</h3>
                <p class="about-sponsors-desc">提供云计算支持</p>
              </div>
              <mdui-button variant="outlined" href="https://www.yesongit.com" target="_blank" rel="noopener noreferrer">
                <mdui-icon slot="icon" name="language"></mdui-icon>
                访问
              </mdui-button>
            </div>
          </mdui-card>
        </div>
      </section>

      <section class="about-opensource animate-on-scroll">
        <mdui-card variant="elevated" class="opensource-card">
          <div class="opensource-icon">
            <mdui-icon name="gavel"></mdui-icon>
          </div>
          <h2 class="opensource-title">开源许可</h2>
          <p class="opensource-desc">
            StickyHomeworks2 基于 <strong>GNU General Public License v3.0</strong> 开源协议发布。您可以自由地使用、修改和分发本软件，修改后的版本须以相同协议开源。
          </p>
          <div class="opensource-links">
            <mdui-button variant="filled" href="https://github.com/StickyHomeworks2/StickyHomeworks2" target="_blank" rel="noopener noreferrer">
              <mdui-icon slot="icon" name="code"></mdui-icon>
              GitHub 仓库
            </mdui-button>
            <mdui-button variant="outlined" href="https://github.com/StickyHomeworks2/StickyHomeworks2/blob/master/LICENSE.txt" target="_blank" rel="noopener noreferrer">
              <mdui-icon slot="icon" name="description"></mdui-icon>
              查看许可证
            </mdui-button>
          </div>
        </mdui-card>
      </section>

      <section class="cta-section">
        <div class="container">
          <div class="cta-content animate-on-scroll">
            <h2 class="cta-title">让作业管理更简单</h2>
            <p class="cta-subtitle">下载 StickyHomeworks2，开始高效管理班级作业</p>
            <div class="cta-buttons">
              <mdui-button variant="filled" id="about-download-btn">
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
    </div>
  `);
}

import { renderPage } from '../components/Layout';

export function renderDownloadPage(): string {
  return renderPage(`
    <!-- Header Section（与 Sh2.2 download-hero 一致） -->
    <section class="download-hero animate-on-scroll">
      <div class="download-hero-bg"></div>
      <div class="download-hero-content">
        <mdui-icon name="download" class="download-hero-icon"></mdui-icon>
        <h1 class="download-title">下载 StickyHomeworks2</h1>
        <p class="download-subtitle">获取最新版本，开始高效管理作业</p>
      </div>
    </section>

    <!-- Download Options -->
    <section class="section" style="background-color: rgb(var(--mdui-color-surface-container)); padding-top: 0;">
      <mdui-tabs value="stable" full-width>
        <mdui-tab value="stable">正式版</mdui-tab>
        <mdui-tab value="beta">测试版</mdui-tab>

        <mdui-tab-panel slot="panel" value="stable">
          <div class="container" style="padding-top: 32px;">
            <p class="text-center" style="color: rgb(var(--mdui-color-on-surface-variant)); margin: 0 0 32px 0; font-size: 14px;">
              正式版经过充分测试，推荐普通用户使用
            </p>

            <div class="grid grid-2" style="max-width: 720px; margin: 0 auto; gap: 16px;">
              <mdui-card variant="filled" class="animate delay-1" style="padding: 24px;">
                <div class="flex items-center gap-3" style="margin-bottom: 16px;">
                  <mdui-icon name="code" style="font-size: 32px; color: rgb(var(--mdui-color-primary));"></mdui-icon>
                  <div>
                    <h3 style="margin: 0 0 4px 0; font-size: 16px; font-weight: 500;">GitHub</h3>
                    <mdui-chip style="font-size: 12px;">推荐</mdui-chip>
                  </div>
                </div>
                <p style="color: rgb(var(--mdui-color-on-surface-variant)); margin: 0 0 16px 0; font-size: 14px;">
                  官方发布渠道，稳定可靠
                </p>
                <mdui-button variant="filled" href="https://github.com/StickyHomeworks2/StickyHomeworks2/releases/latest" target="_blank" style="width: 100%;">
                  <mdui-icon slot="icon" name="download"></mdui-icon>
                  下载正式版
                </mdui-button>
              </mdui-card>

              <mdui-card variant="filled" class="animate delay-2" style="padding: 24px;">
                <div class="flex items-center gap-3" style="margin-bottom: 16px;">
                  <mdui-icon name="chat" style="font-size: 32px; color: rgb(var(--mdui-color-primary));"></mdui-icon>
                  <div>
                    <h3 style="margin: 0 0 4px 0; font-size: 16px; font-weight: 500;">QQ群文件</h3>
                    <mdui-chip style="font-size: 12px;">推荐</mdui-chip>
                  </div>
                </div>
                <p style="color: rgb(var(--mdui-color-on-surface-variant)); margin: 0 0 16px 0; font-size: 14px;">
                  国内用户推荐，下载速度快
                </p>
                <mdui-button variant="filled" href="https://qm.qq.com/q/w6vcjZA3DO" target="_blank" style="width: 100%;">
                  <mdui-icon slot="icon" name="open_in_new"></mdui-icon>
                  前往下载
                </mdui-button>
              </mdui-card>
            </div>
          </div>
        </mdui-tab-panel>

        <mdui-tab-panel slot="panel" value="beta">
          <div class="container" style="padding-top: 32px;">
            <p class="text-center" style="color: rgb(var(--mdui-color-on-surface-variant)); margin: 0 0 32px 0; font-size: 14px;">
              测试版包含最新功能，但可能存在不稳定因素
            </p>

            <div class="animate" style="max-width: 400px; margin: 0 auto;">
              <mdui-card variant="outlined" style="padding: 32px; text-align: center;">
                <mdui-icon name="warning" style="font-size: 40px; color: rgb(var(--mdui-color-tertiary)); margin-bottom: 16px;"></mdui-icon>
                <h3 style="margin: 0 0 8px 0; font-size: 16px; font-weight: 500;">测试版说明</h3>
                <p style="color: rgb(var(--mdui-color-on-surface-variant)); margin: 0 0 24px 0; font-size: 14px; line-height: 1.6;">
                  测试版可能包含未完善的功能和潜在问题，请谨慎使用
                </p>
                <mdui-button variant="outlined" href="https://github.com/StickyHomeworks2/StickyHomeworks2/releases/" target="_blank">
                  <mdui-icon slot="icon" name="list"></mdui-icon>
                  查看所有版本
                </mdui-button>
              </mdui-card>
            </div>
          </div>
        </mdui-tab-panel>
      </mdui-tabs>
    </section>

    <!-- System Requirements -->
    <section class="section">
      <div class="container">
        <div class="text-center animate" style="margin-bottom: 48px;">
          <h2 style="margin: 0 0 8px 0; font-size: 24px; font-weight: 400;">系统要求</h2>
          <p style="color: rgb(var(--mdui-color-on-surface-variant)); margin: 0; font-size: 14px;">
            下载前请确认您的设备满足以下要求
          </p>
        </div>

        <div class="grid grid-3">
          <mdui-card variant="outlined" class="animate delay-1" style="padding: 24px; text-align: center;">
            <mdui-icon name="computer" style="font-size: 36px; color: rgb(var(--mdui-color-primary)); margin-bottom: 12px;"></mdui-icon>
            <h3 style="margin: 0 0 12px 0; font-size: 16px; font-weight: 500;">操作系统</h3>
            <p style="color: rgb(var(--mdui-color-on-surface-variant)); margin: 0; font-size: 14px; line-height: 1.6;">
              Windows 10 及以上<br>x64 架构处理器
            </p>
          </mdui-card>

          <mdui-card variant="outlined" class="animate delay-2" style="padding: 24px; text-align: center;">
            <mdui-icon name="developer_mode" style="font-size: 36px; color: rgb(var(--mdui-color-primary)); margin-bottom: 12px;"></mdui-icon>
            <h3 style="margin: 0 0 12px 0; font-size: 16px; font-weight: 500;">运行环境</h3>
            <p style="color: rgb(var(--mdui-color-on-surface-variant)); margin: 0; font-size: 14px; line-height: 1.6;">
              <a href="https://dotnet.microsoft.com/zh-cn/download/dotnet/8.0" target="_blank">.NET 8.0 桌面运行时</a><br>
              运行应用必需
            </p>
          </mdui-card>

          <mdui-card variant="outlined" class="animate delay-3" style="padding: 24px; text-align: center;">
            <mdui-icon name="storage" style="font-size: 36px; color: rgb(var(--mdui-color-primary)); margin-bottom: 12px;"></mdui-icon>
            <h3 style="margin: 0 0 12px 0; font-size: 16px; font-weight: 500;">存储空间</h3>
            <p style="color: rgb(var(--mdui-color-on-surface-variant)); margin: 0; font-size: 14px; line-height: 1.6;">
              约 150MB 可用空间<br>
              用于应用程序和缓存
            </p>
          </mdui-card>
        </div>
      </div>
    </section>

    <!-- Installation Steps -->
    <section class="section" style="background-color: rgb(var(--mdui-color-surface-container));">
      <div class="container">
        <div class="text-center animate" style="margin-bottom: 48px;">
          <h2 style="margin: 0 0 8px 0; font-size: 24px; font-weight: 400;">安装步骤</h2>
          <p style="color: rgb(var(--mdui-color-on-surface-variant)); margin: 0; font-size: 14px;">
            简单几步，快速上手
          </p>
        </div>

        <div style="max-width: 600px; margin: 0 auto;">
          <div class="steps">
            <div class="step animate delay-1">
              <div class="step-number">1</div>
              <div class="step-content">
                <h4>下载软件本体</h4>
                <p>从上方下载渠道获取软件压缩包，根据您的网络环境选择合适的渠道。</p>
              </div>
            </div>
            <div class="step animate delay-2">
              <div class="step-number">2</div>
              <div class="step-content">
                <h4>安装 .NET 运行时</h4>
                <p>如果尚未安装，请先下载并安装 <a href="https://dotnet.microsoft.com/zh-cn/download/dotnet/8.0" target="_blank">.NET 8.0 桌面运行时</a></p>
              </div>
            </div>
            <div class="step animate delay-3">
              <div class="step-number">3</div>
              <div class="step-content">
                <h4>解压并运行</h4>
                <p>将下载的压缩包解压到您喜欢的位置，双击运行 StickyHomeworks2.exe 即可开始使用。</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Help Section -->
    <section class="section">
      <div class="container text-center">
        <div class="animate">
          <mdui-icon name="help" style="font-size: 40px; color: rgb(var(--mdui-color-primary)); margin-bottom: 16px;"></mdui-icon>
          <h2 style="margin: 0 0 8px 0; font-size: 24px; font-weight: 400;">遇到问题？</h2>
          <p style="color: rgb(var(--mdui-color-on-surface-variant)); margin: 0 0 24px 0; font-size: 14px;">
            如果在下载或使用过程中遇到问题，欢迎加入QQ群获取帮助
          </p>
          <mdui-button variant="filled" href="https://qm.qq.com/q/w6vcjZA3DO" target="_blank">
            <mdui-icon slot="icon" name="chat"></mdui-icon>
            加入QQ群
          </mdui-button>
        </div>
      </div>
    </section>
  `);
}

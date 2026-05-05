/** 在替换 innerHTML 后刷新 MDUI 对自定义元素的绑定 */
export function runMduiMutation(): void {
  window.mdui?.mutation?.();
}

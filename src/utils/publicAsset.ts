/**
 * public 目录资源 URL：在带 base 的部署下与根路径一致，避免子路径下相对路径错误。
 */
export function publicAsset(name: string): string {
  const b = import.meta.env.BASE;
  if (typeof b === 'string' && b.startsWith('/') && b.length > 1) {
    return `${b.replace(/\/$/, '')}/${name.replace(/^\//, '')}`;
  }
  return `/${name.replace(/^\//, '')}`;
}

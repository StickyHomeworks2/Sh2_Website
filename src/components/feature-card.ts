export interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
  variant?: 'filled' | 'outlined' | 'elevated';
  sectionColor?: string;
  animateDelay?: number;
}

export function renderFeatureCard(props: FeatureCardProps): string {
  const variant = props.variant || 'outlined';
  const sectionColor = props.sectionColor || 'rgb(var(--mdui-color-primary))';
  const delayClass = props.animateDelay !== undefined ? `delay-${props.animateDelay}` : '';

  return `<div class="feature-card-host animate-on-scroll ${delayClass}">
  <mdui-card class="feature-card" variant="${variant}" style="--card-icon-color: ${sectionColor}">
    <mdui-icon name="${props.icon}" style="font-size: 40px; color: var(--card-icon-color);"></mdui-icon>
    <h3>${props.title}</h3>
    <p>${props.description}</p>
  </mdui-card>
</div>`;
}

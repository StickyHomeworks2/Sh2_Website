export interface FeatureSectionProps {
  id: string;
  number: string;
  title: string;
  color: string;
  cards: string;
  isEven?: boolean;
}

export function renderFeatureSection(props: FeatureSectionProps): string {
  const isEven = props.isEven || false;
  const bgClass = isEven ? 'feature-section--even' : 'feature-section--odd';

  return `<section class="feature-section ${bgClass}" id="${props.id}" style="--section-color: ${props.color}">
    <div class="container">
      <div class="feature-section-content">
        <div class="feature-title animate-on-scroll">
          <span class="feature-number">${props.number}</span>
          <h2>${props.title}</h2>
        </div>
        <div class="feature-grid">${props.cards}</div>
      </div>
    </div>
  </section>`;
}

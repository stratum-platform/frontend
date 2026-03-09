import type { SectionTitleProps } from './SectionTitle.types';

export const SectionTitle = ({ children, style }: SectionTitleProps) => (
  <h2 className="section-title" style={style}>{children}</h2>
);
import type { CardProps } from './Card.types';

export const Card = ({ children, className = '' }: CardProps) => (
  <div className={`card ${className}`}>{children}</div>
);
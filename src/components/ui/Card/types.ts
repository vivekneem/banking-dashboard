export interface CardProps {
  title?: string;
  showSeeAll?: boolean;
  className?: string;
  children: React.ReactNode;
  onSeeAllClick?: () => void;
}

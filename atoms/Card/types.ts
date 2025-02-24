type Colors = 'base' | 'primary' | 'secondary';
type Sizes = 'sm' | 'md' | 'lg';

interface CardProps {
    children?: React.ReactNode;
    getStyles?: () => React.CSSProperties;
    onClick?: () => void;
    color?: Colors,
    size?: Sizes,
    isClickable?: boolean,
    isDraggable?: boolean,
};
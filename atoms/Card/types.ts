type Colors = 'base' | 'primary' | 'secondary';
type Sizes = 'sm' | 'md' | 'lg';

export interface CardProps {
    children?: React.ReactNode;
    getStyles: (arg0: string, arg1: string[], arg2: object) => string;
    onClick?: () => void;
    color?: Colors,
    size?: Sizes,
    isClickable?: boolean,
    isDraggable?: boolean,
};
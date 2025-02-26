export type Sizes = 'sm' | 'md' | 'lg';

export interface AvatarProps {
    src: string;
    getStyles: (arg0: string) => string;
    size: Sizes;
};
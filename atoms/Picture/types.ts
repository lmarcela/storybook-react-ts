export interface PictureProps {
    src: string;
    getStyles: (arg0: string, arg2: object) => string;
    width: number | string;
    height?: number | string;
    isRounded?: boolean,
    withBorder?: boolean,
};
declare module "*.module.scss" {
    const styles: Record<string, string>;
    export default styles;
}

declare module "*.svg" {
    const content: string;
    export default content;
}

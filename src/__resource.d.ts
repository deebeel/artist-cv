declare module '*.css' {
    const styles: Record<string, string>;
    export = styles;
}
declare module '*.svg' {
    const ReactComponent: React.FunctionComponent<React.SVGProps<SVGSVGElement> & { title?: string }>;
    export default ReactComponent;
}
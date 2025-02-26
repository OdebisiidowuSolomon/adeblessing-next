export {};

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "rs-module-wrap": React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    }
  }
}

export {};

declare global {
  interface Window {
    mdui?: {
      mutation?: () => void;
    };
  }
}

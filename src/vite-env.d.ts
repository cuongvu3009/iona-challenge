/// <reference types="vite/client" />
declare module '*.jpg' {
  const content: any; // you can also set this to string
  export default content;
}
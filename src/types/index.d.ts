declare module "*.module.css";
declare module "*.module.scss";
declare module "react-transition-group";
declare module "*.svg" {
  const content: any;
  export default content;
}
declare module "*.svg" {
  import React = require("react");
  export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
  const src: string;
  export default src;
}

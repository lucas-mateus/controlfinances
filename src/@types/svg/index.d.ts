declare module "*.svg" {
  import React, { SVGProps } from "react";
  import { SVGProps } from "react-native-svg";
  const content: React.FC<SVGProps>;

  export default content;
}

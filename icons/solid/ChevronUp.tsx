import { Base, IconProps } from "@icons";
import { FC } from "react";

export const ChevronUp: FC<IconProps> = (props) => {
  return (
    <Base
      defaultSize={{ width: 448, height: 512 }}
      viewBox="0 0 448 512"
      {...props}
    >
      <path
        fill="currentColor"
        d="M416 352c-8.188 0-16.38-3.125-22.62-9.375L224 173.3l-169.4 169.4c-12.5 12.5-32.75 12.5-45.25 0s-12.5-32.75 0-45.25l192-192c12.5-12.5 32.75-12.5 45.25 0l192 192c12.5 12.5 12.5 32.75 0 45.25C432.4 348.9 424.2 352 416 352z"
      />
    </Base>
  );
};

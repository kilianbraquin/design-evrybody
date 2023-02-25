import { CSS, styled, VariantProps } from "@stitches";
import { FC, MouseEvent, PropsWithChildren, useMemo } from "react";

export const SVGIcon = styled("svg", {
  verticalAlign: "middle",
  variants: {
    color: {
      primary: {
        color: "$primary9",
      },
      loContrast: {
        color: "$loContrast",
      },
      dark: {
        color: "$neutral12",
      },
    },
    cursor: {
      pointer: {
        cursor: "pointer",
      },
    },
    hidden: {
      true: {
        display: "none",
      },
    },
  },
});

export type IconProps = VariantProps<typeof SVGIcon> & {
  className?: string;
  css?: CSS;
  hidden?: boolean;
  onClick?: (e: MouseEvent) => void;
  size?: number | { width: number; height: number };
};

type Props = PropsWithChildren<
  IconProps & {
    viewBox: string;
    defaultSize: number | { width: number; height: number };
    fill?: string;
  }
>;

export const Base: FC<Props> = ({
  children,
  className,
  css,
  defaultSize,
  fill = "none",
  hidden,
  onClick,
  size,
  viewBox,
  ...props
}) => {
  const [height, width] = useMemo(() => {
    const sizeValue = size || defaultSize;
    return typeof sizeValue === "number"
      ? [sizeValue, sizeValue]
      : [sizeValue?.height, sizeValue?.width];
  }, [defaultSize, size]);
  return (
    <SVGIcon
      className={className}
      css={css}
      visibility={hidden ? "hidden" : "visible"}
      onClick={onClick}
      width={width.toString()}
      height={height.toString()}
      viewBox={viewBox}
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      {children}
    </SVGIcon>
  );
};

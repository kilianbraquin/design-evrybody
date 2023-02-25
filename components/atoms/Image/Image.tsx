import NextImage, { ImageLoader, ImageProps } from "next/image";
import { FC } from "react";

const normalizeSrc = (src: string) => {
  return src[0] === "/" ? src.slice(1) : src;
};

export const cloudflareLoader: ImageLoader = ({ src, width, quality }) => {
  const cdnUrl = "https://cdn.indiebaie.com";
  const params = [`width=${width}`, `format=auto`];
  if (quality) {
    params.push(`quality=${quality}`);
  }
  const paramsString = params.join("&");
  return `${cdnUrl}/${normalizeSrc(src)}?${paramsString}`;
};

export const Image: FC<ImageProps> = (props) => {
  return <NextImage loader={cloudflareLoader} {...props} />;
};

export type { ImageProps };

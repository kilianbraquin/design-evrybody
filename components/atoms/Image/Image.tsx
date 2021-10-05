import NextImage, { ImageLoader, ImageProps } from "next/image";
import { FC } from "react";

const normalizeSrc = (src: string) => {
  return src[0] === "/" ? src.slice(1) : src;
};

export const cloudflareLoader: ImageLoader = ({ src, width, quality }) => {
  const cdnUrl = "https://cdn.kbraquin.com";
  const params = [`width=${width}`, `f=auto`];
  if (quality) {
    params.push(`quality=${quality}`);
  }
  const paramsString = params.join(",");
  return `${cdnUrl}/cdn-cgi/image/${paramsString}/${normalizeSrc(src)}`;
};

export const Image: FC<ImageProps> = (props) => {
  return <NextImage loader={cloudflareLoader} {...props} />;
};

export type { ImageProps };

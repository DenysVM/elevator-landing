import React from 'react';
import { Image, ImageProps } from '@chakra-ui/react';

type Props = Omit<ImageProps, 'src'> & {
  src: string;
  webpSrc?: string;
};

function toWebp(src: string): string {
  const idx = src.lastIndexOf('.');
  if (idx === -1) return src + '.webp';
  return src.slice(0, idx) + '.webp';
}

function withBase(url: string): string {
  if (!url) return url;
  if (url.startsWith('http://') || url.startsWith('https://') || url.startsWith('data:')) return url;
  const base = import.meta.env.BASE_URL || '/';
  const trimmed = url.startsWith('/') ? url.slice(1) : url;
  return base.endsWith('/') ? base + trimmed : base + '/' + trimmed;
}

export default function LazyImage({ src, webpSrc, alt, ...rest }: Props) {
  const resolvedSrc = withBase(src);
  const webp = withBase(webpSrc || toWebp(src));
  return (
    <picture>
      <source srcSet={webp} type="image/webp" />
      <Image src={resolvedSrc} alt={alt} loading="lazy" {...rest} />
    </picture>
  );
}

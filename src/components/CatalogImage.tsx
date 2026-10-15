import { imageSrc } from "@/data/catalog";

interface Props {
  id: string;
  alt: string;
  width: number;
  height: number;
  sizes: string;
  className?: string;
  priority?: boolean;
}

/** Pre-generated WebP derivatives (640w / 1280w). Plain <img> avoids re-encoding through the image optimizer. */
export function CatalogImage({ id, alt, width, height, sizes, className, priority }: Props) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={imageSrc(id, 640)}
      srcSet={`${imageSrc(id, 640)} 640w, ${imageSrc(id, 1280)} 1280w`}
      sizes={sizes}
      width={width}
      height={height}
      alt={alt}
      loading={priority ? "eager" : "lazy"}
      fetchPriority={priority ? "high" : "auto"}
      decoding="async"
      className={className}
    />
  );
}

import { PropsWithChildren } from "react";
import { Helmet } from "react-helmet-async";

type SeoProps = PropsWithChildren & {
  title: string;
  description: string;
  thumbImage?: string;
  url?: string;
};

const Seo = ({ title, description, thumbImage, url, children }: SeoProps) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta
        name="keywords"
        content="Actifeet, athletic shoes, running shoes, cross-training shoes, climbing shoes, hiking shoes, fitness shoes, outdoor footwear"
      />
      <meta name="author" content="Actifeet" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      {/* Open Graph / Facebook */}
      <meta
        property="og:title"
        content="Actifeet | Premium Athletic, Running, Cross-Training, Climbing & Hiking Shoes"
      />
      <meta
        property="og:description"
        content="Shop Actifeet for top-tier athletic shoes designed for running, cross-training, climbing, and hiking. Elevate your performance with our durable and comfortable footwear collection."
      />
      <meta property="og:image" content={thumbImage || "/thumb.jpg"} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />

      <meta property="og:url" content={url || "https://actifeet.netlify.app"} />
      <meta property="og:type" content="website" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta
        property="twitter:title"
        content="Actifeet | Premium Athletic, Running, Cross-Training, Climbing & Hiking Shoes"
      />
      <meta
        property="twitter:description"
        content="Discover Actifeet's premium athletic footwear for running, cross-training, climbing, and hiking. Achieve new heights with our high-performance shoes."
      />
      <meta property="twitter:image" content={thumbImage || "/thumb.jpg"} />
      <meta property="twitter:image:width" content="1200" />
      <meta property="twitter:image:height" content="600" />

      {children}
    </Helmet>
  );
};

export default Seo;

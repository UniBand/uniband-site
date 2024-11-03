import { UniBandConfig } from "@/config";
import { GetServerSideProps } from "next";

interface PageProps {
  title: string;
  description: string;
  imageUrl: string;
  ogUrl: string;
}

const LinkPreview: React.FC<PageProps> = ({
  title,
  description,
  imageUrl,
  ogUrl,
}) => {
  return (
    <>
      <head>
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={imageUrl} />
        <meta property="og:url" content={ogUrl} />
      </head>
      <div>
        <h1>{title}</h1>
        <p>{description}</p>
        <img src={imageUrl} alt={title} />
      </div>
    </>
  );
};

interface SlugParams {
  slug: string;
  title?: string;
  description?: string;
  imageUrl?: string;
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  // biome-ignore lint/style/noNonNullAssertion: <explanation>
  const { slug } = context.params!;
  const protocol = context.req.headers["x-forwarded-proto"] || "http";
  const host = context.req.headers.host; // Get host
  const currentUrl = `${protocol}://${host}/links/${slug}`;

  // Per-page data
  const data: SlugParams[] = [
    // {
    //   slug: "example-title",
    //   title: "Example Title",
    //   description: "This is an example description for the link preview.",
    //   imageUrl: "/other-image.jpg",
    // },
  ];

  // Default values
  const defaultData = {
    title: "UniBand",
    description: UniBandConfig.home.subtitle,
    imageUrl: "/Icon.png",
  };

  const linkData = data.find((link) => link.slug === slug);

  return {
    props: {
      title: linkData ? linkData.title : defaultData.title,
      description: linkData ? linkData.description : defaultData.description,
      imageUrl: linkData ? linkData.imageUrl : defaultData.imageUrl,
      ogUrl: linkData
        ? currentUrl
        : `${protocol}://${host}/links/${defaultData.title}`,
    },
  };
};

export default LinkPreview;

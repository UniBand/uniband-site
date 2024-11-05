import { UniBandConfig } from "@/config";
import { GetServerSideProps } from "next";
interface SlugProps {
  title?: string;
  description?: string;
  imageUrl?: string;
}

export const slugDefaultData = {
  title: "UniBand",
  description: UniBandConfig.home.subtitle,
  imageUrl: "/Icon.png",
};
interface PageProps extends SlugProps {
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

interface SlugParams extends SlugProps {
  slug: string;
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
    {
      slug: "about",
      title: "UniBand | About",
    },
    {
      slug: "contact",
      title: "UniBand | Contact",
    },
    {
      slug: "events",
      title: "UniBand | Events",
    },
    {
      slug: "videos",
      title: "UniBand | Videos",
    },
    {
      slug: "join",
      title: "UniBand | Join",
    },
  ];

  // Default values
  const {
    title: defaultTitle,
    description: defaultDescription,
    imageUrl: defaultImageUrl,
  } = slugDefaultData;

  const linkData = data.find((link) => link.slug === slug);

  return {
    props: {
      title: linkData ? linkData.title : defaultTitle,
      description: linkData ? linkData.description : defaultDescription,
      imageUrl: linkData ? linkData.imageUrl : defaultImageUrl,
      ogUrl: linkData
        ? currentUrl
        : `${protocol}://${host}/links/${defaultTitle}`,
    },
  };
};

export default LinkPreview;

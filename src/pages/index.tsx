import React from "react";
import { GetServerSideProps } from "next";
import { UniBandConfig } from "@/config";

export interface SlugProps {
  title?: string;
  description?: string;
  imageUrl?: string;
}

export const slugDefaultData = {
  title: "UniBand",
  description: UniBandConfig.home.subtitle,
  imageUrl: "/Icon.png",
};

const Home: React.FC<{ ogUrl: string }> = ({ ogUrl }) => {
  const { title, description, imageUrl } = slugDefaultData;

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
        <img src={imageUrl} alt={slugDefaultData.title} />
      </div>
    </>
  );
};

// Server-side function to get the current URL
export const getServerSideProps: GetServerSideProps = async (context) => {
  const protocol = context.req.headers["x-forwarded-proto"] || "http";
  const host = context.req.headers.host;
  const currentUrl = `${protocol}://${host}/`;

  return {
    props: {
      ogUrl: currentUrl,
    },
  };
};

export default Home;

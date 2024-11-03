import { useQuery } from "@tanstack/react-query";
import { gapi } from "gapi-script";
import styled from "styled-components";
import { Skeleton } from "@mui/material";
import config from "@/app/config/config";
import { decodeHTMLEntities } from "./components";
import { UniBandConfig } from "@/config";

const API_KEY = config.youtube.apiKey;

interface YoutubeVideo {
  id: { videoId: string };
  snippet: { title: string };
}

const VideoList = styled.div`
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
  justify-content: center;
`;

const VideoCardStyle = styled.div`
  height: auto;
`;

const VideoEmbed = styled.iframe`
  aspect-ratio: 16 / 9;
  border-radius: 1rem;
  border: none;
  box-shadow: 0 0 1rem rgba(0, 0, 0, 0.1);
  height: auto;
  transition: box-shadow 300ms ease;
  width: 100%;

  &:hover {
    box-shadow: 0 0 1rem rgba(0, 0, 0, 0.3);
  }
`;

const VideoTitle = styled.h2`
  font-size: 1.5rem;
  font-stretch: condensed;
  font-weight: 400;
  margin-top: 0.25rem;
  text-align: left;
`;

const SystemText = styled.p`
  font-size: 1.5rem;
  font-weight: 400;
  text-align: center;
`;

async function fetchVideos() {
  return new Promise<YoutubeVideo[]>((resolve, reject) => {
    gapi.load("client", async () => {
      try {
        await gapi.client.init({ apiKey: API_KEY });
        await gapi.client.load("youtube", "v3");

        const response = await gapi.client.youtube.search.list({
          part: "snippet",
          channelId: UniBandConfig.youTubeChannelId,
          maxResults: 100,
          order: "date",
          type: "video",
        });

        resolve(response.result.items);
      } catch (err) {
        console.error("Error loading GAPI client or fetching videos:", err);
        reject("Failed to load videos");
      }
    });
  });
}

function VideoCard({ video }: { video: YoutubeVideo }) {
  const title = decodeHTMLEntities(video.snippet.title);

  return (
    <VideoCardStyle key={video.id.videoId}>
      <VideoEmbed
        src={`https://www.youtube.com/embed/${video.id.videoId}`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      />
      <VideoTitle>
        <a
          href={`https://youtu.be/${video.id.videoId}`}
          target="_blank"
          rel="noreferrer"
        >
          {title}
        </a>
      </VideoTitle>
    </VideoCardStyle>
  );
}

const VideoCardSkeleton = () => (
  <VideoCardStyle>
    <Skeleton
      animation="wave"
      variant="rounded"
      sx={{
        aspectRatio: "16 / 9",
        borderRadius: "1rem",
        border: "none",
        height: "auto",
        width: "100%",
      }}
    />
    <VideoTitle>
      <Skeleton animation="wave" variant="text" />
    </VideoTitle>
  </VideoCardStyle>
);

export default function VideosComponent() {
  const {
    data: videos,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["videos"],
    queryFn: fetchVideos,
    retry: 2,
    enabled: typeof window !== "undefined", // Only run on the client
  });

  if (error) return <SystemText>Failed to load videos</SystemText>;

  if (isLoading)
    return (
      <VideoList>
        {Array.from({ length: 4 }).map((_, index) => (
          // biome-ignore lint/suspicious/noArrayIndexKey: No keys needed for skeletons
          <VideoCardSkeleton key={index} />
        ))}
      </VideoList>
    );

  return (
    <VideoList>
      {videos?.map((video) => (
        <VideoCard key={video.id.videoId} video={video} />
      ))}
    </VideoList>
  );
}

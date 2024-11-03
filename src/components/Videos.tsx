// components/Videos.tsx
import { useQuery } from "@tanstack/react-query";
import styled from "styled-components";
import { Skeleton } from "@mui/material";
import { decodeHTMLEntities } from "./components";

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

const VideoTitle = styled.p`
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
  const response = await fetch("/api/videos");
  if (!response.ok) {
    throw new Error("Failed to fetch videos");
  }
  return response.json();
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
  });

  if (error) return <SystemText>Failed to load videos</SystemText>;

  if (isLoading)
    return (
      <VideoList>
        {Array.from({ length: 4 }).map((_, index) => (
          // biome-ignore lint/suspicious/noArrayIndexKey: Skeleton
          <VideoCardSkeleton key={index} />
        ))}
      </VideoList>
    );

  return (
    <VideoList>
      {videos?.map((video: YoutubeVideo) => (
        <VideoCard key={video.id.videoId} video={video} />
      ))}
    </VideoList>
  );
}

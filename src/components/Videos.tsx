import { useEffect, useState } from "react";
import { gapi } from "gapi-script";
import config from "@/app/config/config";
import styled from "styled-components";
import { decodeHTMLEntities } from "./components";

const API_KEY = config.youtube.apiKey;
const CHANNEL_ID = config.youtube.channelId;

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

const fetchVideos = () => {
  const [videos, setVideos] = useState<YoutubeVideo[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadClient = async () => {
      try {
        await gapi.load("client", async () => {
          await gapi.client.init({
            apiKey: API_KEY,
          });
          await gapi.client.load("youtube", "v3");

          const response = await gapi.client.youtube.search.list({
            part: "snippet",
            channelId: CHANNEL_ID,
            maxResults: 100,
            order: "date",
            type: "video",
          });

          setVideos(response.result.items);
        });
      } catch (err) {
        console.error("Error loading GAPI client or fetching videos:", err);
        setError("Failed to load videos");
      }
    };

    loadClient();
  }, []);

  if (error) return error;
  if (!videos.length) return null;

  return videos;
};

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

export default function VideosComponent() {
  const videos = fetchVideos();

  if (!videos) return <SystemText>Loading...</SystemText>;
  if (typeof videos === "string") return <SystemText>{videos}</SystemText>;

  return (
    <VideoList>
      {videos.map((video) => (
        <VideoCard key={video.id.videoId} video={video} />
      ))}
    </VideoList>
  );
}

import styled from "styled-components";
import { HighlightImage } from "./components";

export interface Event {
  title: string;
  startDate: string;
  endDate?: string;
  description: string;
  imagePath?: string;
  location?: string;
  locationUrl?: string;
  urls?: Url[];
  youtubeCodes?: string[];
}

interface Url {
  name: string;
  url: string;
  alt?: string;
  hideWhenComplete: boolean;
}

const EventContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2rem;
`;

const EventImage = styled.div`
  max-height: 750px;
  max-width: 40%;
`;

const EventContents = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const EventTitle = styled.h1`
  font-size: 3rem;
  font-stretch: expanded;
`;

const EventDetails = styled.p`
  font-size: 1.5rem;
  font-style: italic;

  a:hover {
    text-decoration: underline;
  }
`;

const Urls = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  flex-direction: row;
  padding-block: 1rem;
`;

const UrlButtonStyled = styled.a`
  border-radius: 1rem;
  border: var(--dark-blue) 2px solid;
  color: var(--dark-blue);
  cursor: pointer;
  padding-block: 0.5rem;
  padding-inline: 1rem;
  text-align: center;
  transition: background-color 400ms ease, color 400ms ease;
  font-size: 1.25rem;

  &:hover {
    background-color: var(--dark-blue);
    color: var(--background);
  }
`;

const YouTubeEmbedContainer = styled.div`
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
`;

const YouTubeEmbedStyle = styled.iframe`
  aspect-ratio: 16 / 9;
  border: none;
  height: 100%;
  width: 100%;
  border-radius: 1rem;
`;

function UrlButton({ url }: { url: Url }) {
  return (
    <UrlButtonStyled href={url.url} target="_blank" rel="noreferrer">
      {url.name}
    </UrlButtonStyled>
  );
}

function formatDate(startDate: string, endDate?: string) {
  const startDateObject = new Date(startDate);
  const endDateObject = endDate ? new Date(endDate) : undefined;

  const options: Intl.DateTimeFormatOptions = {
    day: "numeric",
    month: "long",
    year: "numeric",
  };
  const startDateFormatted = startDateObject.toLocaleDateString(
    "en-NZ",
    options
  );

  if (endDateObject) {
    const endDateFormatted = endDateObject.toLocaleDateString("en-NZ", options);

    if (startDateObject.getFullYear() === endDateObject.getFullYear()) {
      if (startDateObject.getMonth() === endDateObject.getMonth()) {
        return `${startDateObject.getDate()} - ${endDateObject.getDate()} ${startDateObject.toLocaleDateString(
          "en-NZ",
          { month: "long", year: "numeric" }
        )}`;
      }
      return `${startDateObject.getDate()} ${startDateObject.toLocaleDateString(
        "en-NZ",
        { month: "long" }
      )} - ${endDateObject.getDate()} ${endDateObject.toLocaleDateString(
        "en-NZ",
        { month: "long", year: "numeric" }
      )}`;
    }
    return `${startDateFormatted} - ${endDateFormatted}`;
  }

  return startDateFormatted;
}

export function sortEventsByStartDate(events: Event[]): Event[] {
  return events.sort(
    (a, b) => new Date(b.startDate).getTime() - new Date(a.startDate).getTime()
  );
}

function YouTubeEmbed({ youtubeCode }: { youtubeCode: string }) {
  return (
    <YouTubeEmbedStyle
      src={`https://www.youtube.com/embed/${youtubeCode}`}
      title="YouTube video player"
      allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerPolicy="strict-origin-when-cross-origin"
      allowFullScreen
    />
  );
}

export function EventComponent({
  title,
  startDate,
  endDate,
  description,
  imagePath,
  location,
  locationUrl,
  urls = [],
  youtubeCodes = [],
  imageFirst = true,
}: Event & { imageFirst?: boolean }) {
  const imageFragment = (
    <>
      {imagePath && (
        <EventImage>
          <HighlightImage src={imagePath} alt={title} />
        </EventImage>
      )}
    </>
  );

  const contentsFragment = (
    <>
      <EventContents>
        <EventTitle>{title}</EventTitle>

        <EventDetails>
          {location && (
            <>
              {locationUrl ? (
                <a href={locationUrl} target="_blank" rel="noreferrer">
                  {location}
                </a>
              ) : (
                location
              )}
              {" · "}
            </>
          )}
          {formatDate(startDate, endDate)}
        </EventDetails>

        <p>{description}</p>

        <Urls>
          {urls.map((url) => (
            <UrlButton key={url.url} url={url} />
          ))}
        </Urls>

        <YouTubeEmbedContainer>
          {youtubeCodes.map((youtubeCode) => (
            <YouTubeEmbed key={youtubeCode} youtubeCode={youtubeCode} />
          ))}
        </YouTubeEmbedContainer>
      </EventContents>
    </>
  );

  return (
    <EventContainer>
      {imageFirst ? (
        <>
          {imageFragment}
          {contentsFragment}
        </>
      ) : (
        <>
          {contentsFragment}
          {imageFragment}
        </>
      )}
    </EventContainer>
  );
}

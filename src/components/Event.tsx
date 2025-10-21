import styled from "styled-components";
import { HighlightImage } from "./components";
import { ConfigText } from "./ConfigText";

export interface Event {
  title: string;
  startDate: string;
  endDate?: string;
  description?: string;
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
  hideWhenComplete?: boolean;
}

const EventContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2rem;
  justify-content: space-between;
  width: 100%;

  @media (max-width: 1200px) {
    flex-direction: column;
    align-items: center;
  }
`;

const EventImage = styled.div`
  max-height: 750px;
  width: 40%;

  @media (max-width: 1200px) {
    display: none;
  }
`;

const EventContents = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  flex: 1;
  width: 100%;
`;

const EventTitle = styled.h1`
  font-size: 3rem;
  font-stretch: expanded;
`;

const EventDetails = styled.p`
  font-size: 1.5rem;
  font-variation-settings: "slnt" -10;

  a {
    color: var(--foreground) !important;
  }
`;

const EventDescription = styled.p``;

const Urls = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 1rem;
  margin-top: 1rem;

  @media (max-width: 1200px) {
    margin-top: 0rem;
  }
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
  margin-top: 1rem;

  @media (max-width: 1200px) {
    grid-template-columns: 1fr;
    justify-items: center;
  }
`;

const YouTubeEmbedStyle = styled.iframe`
  aspect-ratio: 16 / 9;
  border: none;
  height: 100%;
  width: 100%;
  max-width: 60vw;
  border-radius: 1rem;
`;

const Countdown = styled.p`
  font-size: 4rem;
  font-stretch: expanded;
  font-variation-settings: "slnt" -10;
  font-weight: 700;
  margin-top: 1rem;
  opacity: 0.4;
  padding-left: 1rem;

  @media (max-width: 1200px) {
    font-size: 3rem;
    margin-top: 0rem;
  }
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
        return `${startDateObject.getDate()}–${endDateObject.getDate()} ${startDateObject.toLocaleDateString(
          "en-NZ",
          { month: "long", year: "numeric" }
        )}`;
      }
      return `${startDateObject.getDate()} ${startDateObject.toLocaleDateString(
        "en-NZ",
        { month: "long" }
      )} – ${endDateObject.getDate()} ${endDateObject.toLocaleDateString(
        "en-NZ",
        { month: "long", year: "numeric" }
      )}`;
    }
    return `${startDateFormatted} – ${endDateFormatted}`;
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
  const isComplete = endDate
    ? new Date(endDate) < new Date()
    : new Date(startDate) < new Date();

  const activeUrls = urls.filter(
    (url) => !(url.hideWhenComplete && isComplete)
  );

  const imageFragment = (
    <EventImage>
      <HighlightImage src={imagePath ?? "logo_spaced.png"} alt={title} />
    </EventImage>
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

        {description && (
          <ConfigText text={description} wrapper={EventDescription} />
        )}

        {activeUrls.length > 0 && (
          <Urls>
            {activeUrls.map((url) => (
              <UrlButton key={url.url} url={url} />
            ))}
          </Urls>
        )}

        {youtubeCodes.length > 0 && (
          <YouTubeEmbedContainer>
            {youtubeCodes.map((youtubeCode) => (
              <YouTubeEmbed key={youtubeCode} youtubeCode={youtubeCode} />
            ))}
          </YouTubeEmbedContainer>
        )}

        {!isComplete &&
          (() => {
            const daysUntil = Math.ceil(
              (new Date(startDate).getTime() - new Date().getTime()) /
                (1000 * 60 * 60 * 24)
            );
            return (
              <Countdown>
                in {daysUntil} day{daysUntil !== 1 ? "s" : ""}
              </Countdown>
            );
          })()}
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

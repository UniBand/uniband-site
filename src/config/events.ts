import {
  Event,
} from "@/components/Event";

// Each event contains these fields: title, startDate
// Optional fields: description, endDate, imagePath, location, locationUrl, urls, youtubeCodes

// Order doesn't matter, as the site will sort them by date
// To help navigate the list below, they're grouped by the type of event

export const UniBandEvents: Event[] = [
    // Self-hosted performances

    {
      title: "Land, City, Sea",
      startDate: "2025-10-18",
      description:
        "The 2025 Semester 2 concert, performed by UniBand, Jazz Band and the Wind Ensemble. Directed by Jono Palmer with guest conductors Sue Lynn Leong and Athena Shui        You can purchase tickets here:https://www.eventbrite.co.nz/e/land-city-sea-tickets-1666109290739?aff=oddtdtcreator.",
      imagePath: "events/Land City Sea.png",
      location: "Dorothy Winstone Centre",
      locationUrl: "https://maps.app.goo.gl/GWJ756XwKECdwTCC9",
    },
    {
      title: "Fire and Fable",
      startDate: "2025-06-01",
      description:
        "The 2025 Semester 1 concert, performed by UniBand and featuring UniBand's Jazz Band. Directed by Jono Palmer with guest conductors Sue Lynn Leong, Athena Shiu, and Christopher Todd.",
      imagePath: "events/Fire and Fable.png",
      location: "Dorothy Winstone Centre",
      locationUrl: "https://maps.app.goo.gl/GWJ756XwKECdwTCC9",
    },
    {
      title: "Glorious Heights",
      startDate: "2024-10-12",
      description:
        "The 2024 Semester 2 concert, performed by UniBand and AUSC. Directed by Jono Palmer with guest conductors Sue Lynn Leong, Athena Shiu, and Jennifer Yuan.",
      imagePath: "events/glorious-heights.png",
      location: "St. Paul's Church",
      locationUrl: "https://maps.app.goo.gl/nycGm4TsT3TcsUMs5",
      urls: [
        {
          name: "Givealittle",
          url: "https://givealittle.co.nz/cause/glorious-heights",
          hideWhenComplete: true,
        },
      ],
      youtubeCodes: ["EVVWa5orsvs", "JCSIT45_dX4"],
    },
    {
      title: "A Night At The Movies",
      startDate: "2024-05-18",
      description:
        "The 2024 Semester 1 concert, performed by UniBand and AUSC. Directed by Jono Palmer.",
      imagePath: "events/a-night-at-the-movies.png",
      location: "UOA School of Music",
      locationUrl: "https://maps.app.goo.gl/CnUqPeCbFpZ6ka4aA",
      urls: [
        {
          name: "Givealittle",
          url: "https://givealittle.co.nz/cause/uniband-and-ausc-concert",
          hideWhenComplete: true,
        },
      ],
      youtubeCodes: ["RZHpBmaUu2I"],
    },
    {
      title: "End of Year Concert 2023",
      startDate: "2023-10-07",
      description:
        "The 2023 Semester 2 concert, performed by UniBand, AYSB, and AUSC. Directed by Jono Palmer and Michael Jamieson.",
      imagePath: "events/end-of-year-2023.jpg",
      location: "UOA School of Music",
      locationUrl: "https://maps.app.goo.gl/CnUqPeCbFpZ6ka4aA",
      youtubeCodes: ["7uQD_O2jOFg", "e6Xe2XssKSA", "AsXP5PaNwWk"],
    },
    {
      title: "Midsem Showcase 2023",
      startDate: "2023-05-18",
      description:
        "The 2023 Semester 1 concert, performed by UniBand. Directed by Jono Palmer.",
      imagePath: "events/midsem-showcase-2023.png",
      location: "UOA School of Music",
      locationUrl: "https://maps.app.goo.gl/CnUqPeCbFpZ6ka4aA",
    },
    {
      title: "Sam Uatahausi's Honours Recital",
      startDate: "2022-10-14",
      description:
        "UniBand was conducted by Sam Uatahausi in his honours recital performance.",
      location: "UOA School of Music",
      locationUrl: "https://maps.app.goo.gl/CnUqPeCbFpZ6ka4aA",
      youtubeCodes: ["Iu6xt97DQvc"],
    },
    {
      title: "Simple Gifts",
      startDate: "2022-07-30",
      description:
        "A joint pre-Festival concert, performed by UniBand, AYSB, and AWO. Directed by Jono Palmer.",
      location: "Presbyterian Church St Lukes",
      locationUrl: "https://maps.app.goo.gl/bJXfpysBYAAAJZeK6",
      youtubeCodes: ["yze1AbWHAZU", "ykN6BejL6Jo", "-e7OaW1dKwA", "ZF0AyR3RFTY", "-mHZcYbfUbQ"]
    },

    // NZCBA Festivals
    {
      title: "NZCBA Festival 2024",
      startDate: "2024-08-02",
      endDate: "2024-08-04",
      description:
        "UniBand performed at the 2024 NZCBA Concert Band Festival in Hamilton, scoring a Bronze award. Directed by Jono Palmer.",
      imagePath: "events/nzcba-2024.jpg",
      location: "Gallagher Academy of Performing Arts, Hamilton",
      locationUrl: "https://maps.app.goo.gl/m9U94Cf6gMKxT2JE9",
      youtubeCodes: ["ry6SNKaqEVM?start=24498"],
    },
    {
      title: "NZCBA Festival 2023",
      startDate: "2023-08-04",
      endDate: "2023-08-06",
      description:
        "UniBand performed at the 2023 NZCBA Concert Band Festival in Auckland, scoring a Silver award. Directed by Jono Palmer. UniBand co-hosted this event alongside West City Concert Band.",
      imagePath: "events/nzcba-2023.jpg",
      location: "Westlake Girls High School, Auckland",
      locationUrl: "https://maps.app.goo.gl/m9U94Cf6gMKxT2JE9",
      urls: [
        {
          name: "Photos",
          url: "https://dispersion.co.nz/view/nzcba2023/?q=k:76",
        }
      ],
      youtubeCodes: ["VyB2Ps8wlQk?start=13731"],
    },
    {
      title: "NZCBA Festival 2022",
      startDate: "2022-08-05",
      endDate: "2022-08-07",
      description:
        "UniBand performed at the 2022 NZCBA Concert Band Festival in Hamilton, scoring a Bronze award. Directed by Jono Palmer.",
      imagePath: "events/nzcba-2022.jpg",
      location: "Gallagher Academy of Performing Arts, Hamilton",
      locationUrl: "https://maps.app.goo.gl/m9U94Cf6gMKxT2JE9",
      urls: [
        {
          name: "Photos",
          url: "https://dispersion.co.nz/view/nzcba2022/?q=k:10967",
        }
      ],
      youtubeCodes: ["KpD9TIL04KA"],
    },
    {
      title: "NZCBA Festival 2021",
      startDate: "2021-07-30",
      endDate: "2021-08-01",
      description:
        "UniBand performed at the 2021 NZCBA Concert Band Festival in Napier, scoring a Bronze award. Directed by Leo Jaffrey.",
      imagePath: "events/nzcba-2021.png",
      location: "Napier Municipal Theatre, Napier",
      locationUrl: "https://maps.app.goo.gl/QVe4w2nChqYzdjDF6",
      youtubeCodes: ["PGMTUdf121w"],
    }
  ];
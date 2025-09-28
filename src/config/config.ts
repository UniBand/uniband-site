interface Config {
  galleryPath: string;
  email: string;
  youTubeChannelId: string;
  instagram: string;
  facebook: string;
  givealittle: string;
  signUpForm: string;

  home: {
    subtitle: string;
    infoHeader: string;
    infoContent: string[];
    infoImage: ConfigImage;
  };

  about: {
    aboutText: string[];
    aboutImage: ConfigImage;
  };

  faq: Question[];

  contact: {
    contactText: string[];
  };

  join: {
    joinText: string[];
  };
}

export interface Question {
  question: string;
  answer: string;
}

interface ConfigImage {
  path: string;
  alt: string;
}

export const UniBandConfig: Config = {
  // Path is public/[galleryPath]/, e.g. public/gallery/ => galleryPath: "gallery"
  // Try to not go overboard with the number of images in the gallery! More images = more data for users to load when they visit the site. One or two dozen should be fine.
  galleryPath: "gallery",

  email: "info@uniband.nz",
  youTubeChannelId: "UCy_Eez7ZamDM31jOTRvqrWw", // Just the ID
  instagram: "https://www.instagram.com/uoa_uniband",
  facebook: "https://www.facebook.com/UniBandNZ",
  givealittle: "https://givealittle.co.nz/org/uniband",

  // Try to keep in the format of "https://docs.google.com/forms/d/e/FORM_ID/viewform". I don't know if it'll work with other URL formats.
  signUpForm: 
  "https://docs.google.com/forms/d/e/1FAIpQLSfO3X3oqM8RcFlv5efZb8CbCdJ2jf5feYTQaenjdtCs1IWxXA/viewform",

  // For multi-line text, use an array of strings, like so: ["Line 1", "Line 2"]
  // Any of the variables set above can be referenced in text like "Email us at ${email}!"
  // Wrap text in ** for bold like "This is **bold** text."
  // Wrap text in []() for links like "Visit [our website](https://example.com)."
  // Make sure image extensions are all lowercase (e.g. no .JPGs only .jpgs!)

  home: {
    subtitle: "Auckland’s top tertiary-level Concert Band",
    infoHeader:
      "**UniBand** is the University of Auckland’s leading Concert Band",
    infoContent: [
      "UniBand provides an opportunity for wind, brass, and percussion musicians studying all degrees in all universities to make music together.",
      "We rehearse weekly on Thursday evenings and perform in concerts and competitions throughout the year.",
    ],
    infoImage: {
      path: "img/2024-nzcba-fun.jpg",
      alt: "UniBand at the NZCBA Concert Band Festival 2024",
    } as ConfigImage,
  },
  about: {
    aboutText: [
      "**UniBand** is a student-founded and student-run concert band in Auckland. Founded in 2013, UniBand has been providing university students an opportunity to play challenging, yet fulfilling music with peers.",
      "UniBand is an all-comers band; you don't have to be studying music to join us! Many of our members are studying degrees such as engineering, law, and others.",
      "UniBand performs at a variety of events throughout the year, including self-hosted concerts, university events, and the annual NZCBA Concert Band Festival.",
      "The heart of UniBand is the tight social community at its core. With a welcoming social environment and multiple casual events throughout the year, members form lasting friendships and connections.",
      "Rehearsals are held weekly on Thursdays evenings from 7-9pm on UoA campus during the University of Auckland semester.",
    ],
    aboutImage: {
      path: "about/blurb-img.jpg",
      alt: "UniBand performing",
    } as ConfigImage,
  },
  faq: [
    {
      question: "Do I need to be studying music to join UniBand?",
      answer:
        "Not at all! UniBand is an all-comers concert band. You don’t need to be studying music to join. Many of our members are studying engineering, law, health sciences, and other degrees.",
    },
    {
      question: "What events does UniBand perform at?",
      answer:
        "UniBand plays at a range of events throughout the year, including end-of-semester concerts, university events, and the annual NZCBA Concert Band Festival, which is hosted in a different city each year.",
    },
    {
      question: "What instruments are we currently looking for?",
      answer:
        "We would love to hear from students who play low brass instruments such as the tuba, french horn and euphonium. If you don’t have your own instrument, we have some available for hire from the band.",
    },
    {
      question: "What instruments does UniBand have for hire?",
      answer:
        "A euphonium, tuba, baritone saxophone, bass clarinet, and bassoon.",
    },
    {
      question:
        "Are there opportunities for high school students to see or join UniBand?",
      answer:
        "If you’re a high school student interested in exploring musical groups at university, you are very welcome to come visit and even join some of our rehearsals at the start of each semester. Our first rehearsal of each semester is always in week 1, check our social media for more details.",
    },
    {
      question: "What is UniBand all about?",
      answer:
        "UniBand is more than just music — it’s a supportive and social community. We host several fun events throughout the year, such as movie nights, quiz nights and The Chase. It's a fantastic way to meet new people, make new friends, and build lasting connections.",
    },
    {
      question: "What kind of music does UniBand play?",
      answer:
        "We play a variety of repertoire that is both challenging, fun and exciting. We perform music from films and musicals such as Star Wars, Les Misérables, Jurassic Park, and Wicked, as well as classical and contemporary works by composers like Gustav Holst, Robert W. Smith, and Dmitri Shostakovich.",
    },
  ],
  contact: {
    contactText: [
      "You can contact us by sending an email to **${email}**.",
      "You can also find us at the **School of Music** in the University of Auckland (6 Symonds Street, Auckland 1010).",
      "Follow us on [Instagram](${instagram}), [Facebook](${facebook}), and [YouTube](https://www.youtube.com/channel/${youTubeChannelId})!",
    ],
  },
  join: {
    joinText: [
      "UniBand is open to all students studying in any university, including the **University of Auckland** and **AUT**. No audition required!",
      "As a concert band, we are always looking for musicians playing **woodwind**, **brass**, and **percussion** instruments.",
      "We rehearse every **Thursday** from **7pm** to **9pm** at the University of Auckland **School of Music** during the university semester.",
      "If you have any questions, feel free to [contact us](/contact)!",
    ],
  },
};

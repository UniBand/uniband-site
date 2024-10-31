export const UniBandConfig = {
  // Path is public/[galleryPath]/, e.g. public/gallery/ => galleryPath: "gallery"
  // Try to not go overboard with the number of images in the gallery! More images = more data for users to load when they visit the site. One or two dozen should be fine.
  galleryPath: "gallery",

  email: "info@uniband.nz",

  signUpForm: "https://docs.google.com/forms/d/e/1FAIpQLSeUf4YVvyk2cH3Y6nMQVkczT5ERUwSndkvwAW3oLRre_xxsCg/viewform",

  youTubeChannelId: "UCy_Eez7ZamDM31jOTRvqrWw",

  // For multi-line text, use an array of strings, like so: ["Line 1", "Line 2"]
  // Any of the variables set above can be referenced in text like "Email us at ${email}!"
  // Wrap text in ** for bold like "This is **bold** text."
  // Wrap text in []() for links like "Visit [our website](https://example.com)."

  text: {
    home: {
      subtitle: "Auckland’s top tertiary-level Concert Band",
      infoHeader:
        "**UniBand** is the University of Auckland’s leading Concert Band",
      infoContent: [
        "UniBand provides an opportunity for wind, brass, and percussion musicians from all across the university to come together and make music.",
        "We rehearse weekly on Thursday evenings and perform in concerts and competitions throughout the year.",
      ],
    },
    about: {
      aboutText: [
        "**UniBand** is a student-founded and student-run concert band in Auckland. Founded in 2013, UniBand has been providing university students an opportunity to play challenging, yet fulfilling music with peers.",
        "Unlike most other university music groups which strongly prioritise students studying Music, UniBand is an all-comers band; open to musicians studying any degree, with many members studying degrees such as Engineering and Law.",
        "UniBand performs at a variety of events throughout the year, including self-hosted concerts, university events, and the annual NZCBA Concert Band Festival.",
        "The heart of UniBand is the tight social community at its core. With a welcoming social environment and multiple casual events throughout the year, members form lasting friendships and connections.",
        "Rehearsals are held weekly on Thursdays evenings from 7-9pm on campus during the University of Auckland semester.",
      ],
    },
    contact: {
      contactText: [
        "You can contact us by sending an email to ${email}.",
        "You can also find us at the **School of Music** in the University of Auckland (6 Symonds Street, Auckland 1010).",
      ],
    },
    join: {
      joinText: [
        "UniBand is open to all students studying in the **University of Auckland** and **AUT**. No audition required!",
        "As a concert band, we are always looking for musicians playing **woodwind**, **brass**, and **percussion** instruments.",
        "We rehearse every **Thursday** from **7pm** to **9pm** at the University of Auckland **School of Music** during the university semester.",
        "If you have any questions, feel free to [contact us](/contact)!"
      ],
    }
  },
};

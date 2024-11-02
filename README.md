# UniBand website

Check out the website over at https://uniband.nz!

## About

This website was coded in Next.js with Typescript.

This project was designed and developed by [Samuel Ou](https://github.com/S-Ou) in 2024.

## How to configure

### Environment variables

An `.env` file needs to be created in the root-level directory of the project. This contains the values specified in `.env.example`.

The API keys must be provided for the videos on the Videos page and the map on the Contact page to load. Links for how to obtain the API keys are given in `.env.example`.

### Page content

The contents of each page can be configured with the files in `src/config/`. Files (such as images and audio) are stored in the `public/` directory.

#### Page text and images

The majority of content can be configured in `src/config/config.ts`.

- The gallery path (`galleryPath`) can be set, and is relative to the `public/` folder.
- Email (`email`), YouTube (`youtubeChannelId`), Instagram (`instagram`), Facebook (`facebook`), and Givealittle (`givealittle`) can also be set.
- The sign-up form (`signUpForm`) can also be set. Keep the URL in the format "https://docs.google.com/forms/d/e/FORM_ID/viewform"

The rest of the config file is for text content. The categories are already set, and the text inside the "quotes" are the only things that require editing.

Text is just plaintext, and formatting etc. can be applied as per the instructions in the file itself.

Images can also be set by specifying the path (relative to `public/`).

#### People

This is for setting the executive & general committee members and director, for the About page. These can be set in `src/config/people.ts`.

Each person entry requires solely a name. If a property is left blank, you can just not include the property at all. Would highly recommend providing an image, which will be in an aspect ratio of `1:1` i.e., a square (crop it before-hand!).

If an email is provided, then clicking on the profile will open the `mailto:` email.

The director functions like another person but also includes a space for text. This text works the exact same as in `config.ts`.

I would recommend keeping images in `public/about/people`.

#### Events

This populates the Events page. These are set in `src/config/events.ts`.

Each event listing must contain a title and a start date. Optionally, a description, an end date, an image (via `imagePath`), and a location + optional URL (can be any link for the location to link to).

URLs can also be provided, which are each turned into buttons below the description. The button text is specified by the `name` and links to the `url`. If `hideWhenComplete` is `true`, the URL will no longer show once the event has passed (e.g. ticket links etc.)

YouTube videos can also be linked by providing a list of video IDs in `youtubeCodes`. These are listed in the order that they are listed in the array.

I would recommend keeping images in `public/events`.

_It doesn't matter what order the event listings are in._ They will be sorted by date when added onto the page. However, for good organisation, I would recommend grouping up similar events within the file and adding comments to label each group.

#### Audio

This is for providing audio for the music button on the Home page. These are set in `src/config/audio.ts`.

This is a simple list of names with lists of audio files that correspond to each name. e.g., `"Piece name": ["audio/audio-1.mp3", "audio/audio-2.mp3", "audio/woah.mp3"]`.

The `audio.ts` file gives more detailed instructions on the best practise for creating new audio snippets.

Order also does not matter, as the selection is completely random, however sorting the list can keep things more organised.

I would recommend keeping audio files in `public/audio`.

## Contact

If you have any questions or concerns, contact UniBand at [info@uniband.nz](mailto:info@uniband.nz). Feel free to reach out to Samuel Ou if you've got a technical question :\)

interface AudioFiles {
  [name: string]: string[];
}

// Audio snippets!
// - I recommend using Audacity - able to record audio (Host > WASAPI + Recording > Loopback)
// - Try to keep them around 10 seconds-ish
// - 0.5s fade in/out (Audacity > Effect > Fading > Fade In/Out)
// - Loudness equalisation to -18 LUFS (Audacity > Effect > Volume and Compression > Loudness Equalisation)

export const UniBandAudioFiles: AudioFiles = {
  // ~~ 2024 ~~

  // NZCBA - Holst's Second Suite & Star Wars
  "March (Holst's Second Suite)": [
    "/audio/2024-second-suite-1-1.mp3",
    "/audio/2024-second-suite-1-2.mp3",
  ],
  "Song without words \"I'll love my Love\" (Holst's Second Suite)": [
    "/audio/2024-second-suite-2-1.mp3",
    "/audio/2024-second-suite-2-2.mp3",
  ],
  "Song of the Blacksmith (Holst's Second Suite)": [
    "/audio/2024-second-suite-3-1.mp3",
    "/audio/2024-second-suite-3-2.mp3",
  ],
  "Fantasia on the \"Dargason\" (Holst's Second Suite)": [
    "/audio/2024-second-suite-4-1.mp3",
    "/audio/2024-second-suite-4-2.mp3",
  ],

  "Star Wars: The Force Awakens": [
    "/audio/2024-star-wars-1.mp3",
    "/audio/2024-star-wars-2.mp3",
    "/audio/2024-star-wars-3.mp3",
  ],

  // Glorious Heights - Folk Dances & October
  "Folk Dances": [
    "/audio/2024-folk-dances-1.mp3",
    "/audio/2024-folk-dances-2.mp3",
  ],
  "October": [
    "/audio/2024-october-1.mp3",
    "/audio/2024-october-2.mp3",
  ],

  // Glorious Heights - The Divine Comedy
  "The Inferno (The Divine Comedy)": [
    "/audio/2024-inferno-1.mp3",
    "/audio/2024-inferno-2.mp3",
  ],
  "Purgatorio (The Divine Comedy)": [
    "/audio/2024-purgatorio-1.mp3",
    "/audio/2024-purgatorio-2.mp3",
  ],
  "The Ascension (The Divine Comedy)": [
    "/audio/2024-ascension-1.mp3",
    "/audio/2024-ascension-2.mp3",
  ],
  "Paradiso (The Divine Comedy)": [
    "/audio/2024-paradiso-1.mp3",
    "/audio/2024-paradiso-2.mp3",
  ],
}
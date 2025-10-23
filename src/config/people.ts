import { Person } from "@/components";
import { Director as Director } from "@/components/People";

// Name is required.  Role, image, and email are optional.
// Order on the page is determined by the order in the list below.
// Images get cropped to a square, so make sure they're square.
// Make sure image extensions are all lowercase (e.g. no .JPGs only .jpgs!)

const executiveCommittee: Person[] = [
  {
    name: "Kate Le Lievre",
    role: "President",
    image: "about/people/kate.jpg",
    email: "president@uniband.nz",
  },
  {
    name: "Anna Haine",
    role: "Vice President",
    image: "about/people/anna.jpg",
    email: "vicepresident@uniband.nz",
  },
  {
    name: "Charlotte Crean",
    role: "Band Manager",
    // image: "about/people/charlotte.jpg",
    email: "bandmanager@uniband.nz",
  },
  {
    name: "Bryn Kliskey",
    role: "Treasurer",
    image: "about/people/bryn.jpg",
    email: "treasurer@uniband.nz",
  },
  {
    name: "Jamie O'Brien",
    role: "Secretary",
    // image: "about/people/jamie.jpg",
    email: "secretary@uniband.nz",
  },
];

const generalCommittee: Person[] = [
  // Roles: Social Media Manager, Marketing, Librarian, Events Manager
  {
    name: "Anthony Wang",
    // role: "Marketing",
    image: "about/people/anthony.jpg",
    email: "info@uniband.nz",
  },
  {
    name: "Elodie Broad",
    // role: "",
    // image: "about/people/elodie.jpg",
    email: "info@uniband.nz",
  },
  {
    name: "Hawami Seki Lema",
    // role: "",
    // image: "about/people/hawami.jpg",
    email: "info@uniband.nz",
  },
  {
    name: "Rianna Samant",
    // role: "",
    // image: "about/people/rianna.jpg",
    email: "info@uniband.nz",
  },
];

// These images aren't cropped but they fit most nicely with a 3:2 horizontal ratio
const directors: Director[] = [
  {
    person: {
      name: "Michael Jamieson",
      role: "Musical Director",
      // image: "about/people/michael.jpg",
    },
    text: "Michael completed his Bachelors and Honours degrees at Victoria University and Massey University respectively, in Wellington. He was a recipient of the prestigious Patricia Pratt Scholarship, a Massey University Blues Award, and a Creative NZ study grant which enabled him to continue his study at the Messiaen Academy in The Netherlands and the Conservatoire National de Région de Strasbourg in France. As a saxophonist, he works with the Royal NZ Navy Band as well as freelancing as an orchestral and chamber musician with such groups as the NZSO, Auckland Philharmonia, Dutch Radio Chamber Orchestra, Rotterdam Philharmonic, Netherlands Symphony Orchestra, The Royal Concertgebouw Orchestra, the Rata Trio and Hanumi Saxophone Quartet. Michael is a D'Addario Woodwinds and Selmer-Paris Saxophones Performing Artist.",
  },
  {
    person: {
      name: "Sue Lynn Leong",
      role: "Assistant Conductor",
      image: "about/people/sue-lynn.jpg",
    },
    // text: "Sue Lynn Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent lorem sapien, interdum sit amet convallis eget, dignissim ut diam. Interdum et malesuada fames ac ante ipsum primis in faucibus. Mauris ultricies ac urna ac hendrerit. Mauris scelerisque turpis vel blandit accumsan. Sed ornare pharetra velit ac rutrum. Sed non facilisis orci. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Morbi efficitur vitae mauris eget varius. Donec bibendum rutrum orci, eget tempus nisi varius in. Cras vitae risus consequat lacus rutrum malesuada ut at est. Praesent eu eros non massa venenatis malesuada at quis erat. Vivamus id tortor non ligula semper feugiat pulvinar et tortor. Fusce nec mauris at dui fermentum tristique vel ac dolor. Fusce blandit est in diam ornare cursus. Nunc dapibus augue vel posuere sodales. Phasellus sit amet commodo tellus.",
  },
  {
    person: {
      name: "Athena Shiu",
      role: "Assistant Conductor",
      image: "about/people/athena.jpg",
    },
    // text: "Athena Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent lorem sapien, interdum sit amet convallis eget, dignissim ut diam. Interdum et malesuada fames ac ante ipsum primis in faucibus. Mauris ultricies ac urna ac hendrerit. Mauris scelerisque turpis vel blandit accumsan. Sed ornare pharetra velit ac rutrum. Sed non facilisis orci. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Morbi efficitur vitae mauris eget varius. Donec bibendum rutrum orci, eget tempus nisi varius in. Cras vitae risus consequat lacus rutrum malesuada ut at est. Praesent eu eros non massa venenatis malesuada at quis erat. Vivamus id tortor non ligula semper feugiat pulvinar et tortor. Fusce nec mauris at dui fermentum tristique vel ac dolor. Fusce blandit est in diam ornare cursus. Nunc dapibus augue vel posuere sodales. Phasellus sit amet commodo tellus.",
  },
  {
    person: {
      name: "Jono Palmer",
      role: "Musical Director", // TODO: update title
      image: "about/people/jono.jpg",
    },
    text: "Jono Palmer is a dynamic and enterprising conductor from Auckland, New Zealand. His choirs have won national and international acclaim, including two Gold Medals at the 2015 Grand Prix of Nations in Magdeburg, Germany, and many awards at regional and national festivals of the NZCF Big Sing festival. As a conductor, Jono has been selected for masterclasses at the 2017 World Symposium of Choral Music and the 2017 National Collegiate Choral Organization National Conference. In October 2018, he was a finalist in the inaugural London International Choral Conducting Competition.",
  },
];

export const UniBandCommittee: {
  executiveCommittee: Person[];
  generalCommittee: Person[];
  directors: Director[];
} = {
  executiveCommittee,
  generalCommittee,
  directors,
};

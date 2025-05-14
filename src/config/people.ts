import { Person } from "@/components";
import { directorProps } from "@/components/People";

// Name is required.  Role, image, and email are optional.
// Order on the page is determined by the order in the list below.
// Images get cropped to a square, so make sure they're square.
// Make sure image extensions are all lowercase (e.g. no .JPGs only .jpgs!)

const executiveCommittee: Person[] = [
  {
    name: "Bianca Anderson",
    role: "President",
    image: "about/people/bianca.jpg",
    email: "president@uniband.nz",
  },
  {
    name: "Kate Le Lievre",
    role: "Vice President",
    image: "about/people/kate.jpg",
    email: "vicepresident@uniband.nz",
  },
  {
    name: "Anna Haine",
    role: "Band Manager",
    image: "about/people/anna.jpg",
    email: "bandmanager@uniband.nz",
  },
  {
    name: "Josiah Grimmer",
    role: "Treasurer",
    image: "about/people/josiah.jpg",
    email: "treasurer@uniband.nz",
  },
  {
    name: "Cameron Burton",
    role: "Secretary",
    image: "about/people/cameron.jpg",
    email: "secretary@uniband.nz",
  },
];

const generalCommittee: Person[] = [
  {
    name: "Jamie",
    role: "Librarian",
    image: "path/to/image/here.png" 
    email: "info@uniband.nz",
  },
  {
    name: "Anthony Wang",
    role: "Marketing",
    image: "about/people/anthony.jpg",
    email: "info@uniband.nz",
  },
  {
    name: "Becky Cheng",
    role: "Social Media Manager",
    image: "about/people/becky.jpg",
    email: "info@uniband.nz",
  },
  {
    name: "Bryn Klisky",
    role: "Events Manager",
    image: "about/people/bryn.jpg",
    email: "info@uniband.nz",
  },
];


const director: directorProps = {
  person: {
    name: "Jono Palmer",
    role: "Musical Director",
    image: "about/people/jono.jpg",
  },
  text: "Jono Palmer is a dynamic and enterprising conductor from Auckland, New Zealand. His choirs have won national and international acclaim, including two Gold Medals at the 2015 Grand Prix of Nations in Magdeburg, Germany, and many awards at regional and national festivals of the NZCF Big Sing festival. As a conductor, Jono has been selected for masterclasses at the 2017 World Symposium of Choral Music and the 2017 National Collegiate Choral Organization National Conference. In October 2018, he was a finalist in the inaugural London International Choral Conducting Competition."
};


export const UniBandCommittee: { executiveCommittee: Person[]; generalCommittee: Person[]; director: directorProps } = {
  executiveCommittee,
  generalCommittee,
  director,
};

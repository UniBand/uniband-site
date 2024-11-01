import { Person } from "@/components";

interface directorProps {
  person: Person,
  text: string,
};

// Name is required.  Role, image, and email are optional.
// Order on the page is determined by the order in the list below.

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
  {
    name: "TBA",
    role: "Band Manager",
    image: "about/people/placeholder.jpg",
    email: "bandmanager@uniband.nz",
  },
];

const generalCommittee: Person[] = [
  {
    name: "Adara Burns",
    role: "Librarian(?)",
    image: "about/people/adara.jpg",
  },
  {
    name: "Anna Haine",
    role: "TBA",
    image: "about/people/anna.jpg",
  },
  {
    name: "Anthony Wang",
    role: "TBA",
    image: "about/people/anthony.jpg",
  },
  {
    name: "Becky Cheng",
    role: "Social Media Manager(?)",
    image: "about/people/becky.jpg",
  },
  {
    name: "Bryn Klisky",
    role: "TBA",
    image: "about/people/bryn.jpg",
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
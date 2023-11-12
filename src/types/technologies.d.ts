interface Technology {
  image: string;
  name: string;
  site: string;
}

interface TechnologyGroup {
  name: string;
  technologies: Technology[];
  className: string;
}

type Technologies = TechnologyGroup[];

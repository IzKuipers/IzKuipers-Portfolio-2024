interface Project {
  image: string;
  title: string;
  description: string;
  site?: string;
  imageBackdrop?: boolean;
}

type FeaturedProjects = Project[];

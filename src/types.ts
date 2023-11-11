export interface Project {
  id: number;
  title: string;
  desc: string;
  img: string;
  link?: string;
  github?: string;
  tags: string[];
}

export interface Skill {
  title: string;
  icon: string;
  style?: object;
}

export interface Route {
  title: string;
  path: string;
}

export interface FooterColLink {
  name: string;
  link: string;
  icon?: string;
  leavesWebsite: boolean;
}

export interface FooterCol {
  title: string;
  links: FooterColLink[];
}

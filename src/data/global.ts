import { type FooterCol, type Route } from "types";

export const routes: Route[] = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "Projects",
    path: "/projects",
  },
];

export const footerCols: FooterCol[] = [
  {
    title: "Pages",
    links: [
      {
        name: "Home",
        link: "/",
        leavesWebsite: false,
      },
      {
        name: "Projects",
        link: "/projects",
        leavesWebsite: false,
      },
    ],
  },
  {
    title: "Social",
    links: [
      {
        name: "Twitter",
        link: "https://twitter.com/imconnorngl",
        icon: "/static/icons/twitter-f.svg",
        leavesWebsite: true,
      },
      {
        name: "GitHub",
        link: "https://github.com/imconnorngl",
        icon: "/static/icons/github-f.svg",
        leavesWebsite: true,
      },
      {
        name: "LinkedIn",
        link: "https://www.linkedin.com/in/connorkieranlewis/",
        icon: "/static/icons/linkedin-f.svg",
        leavesWebsite: true,
      },
      {
        name: "Email",
        link: "mailto:connorkieranlewis@gmail.com",
        icon: "/static/icons/mail-f.svg",
        leavesWebsite: true,
      },
    ],
  },
];

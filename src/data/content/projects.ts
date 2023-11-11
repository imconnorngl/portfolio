import { type Project } from "types";

const projects: Project[] = [
  {
    id: 0,
    title: "Statsify",
    desc: "An easy to use multipurpose Discord bot for viewing your Hypixel stats used in over 97,000 Discord servers.",
    img: "/static/projects/statsify.png",
    link: "https://statsify.net/",
    github: "https://github.com/statsify/statsify",
    tags: ["NodeJS", "NextJS", "SCSS", "MongoDB", "Redis"],
  },
  {
    id: 1,
    title: "Lunar Client",
    desc: "The largest custom launcher and client for Minecraft. Offering cosmetics, mods, and more.",
    img: "/static/projects/lunarclient.png",
    link: "https://lunarclient.com/",
    tags: ["NodeJS", "NextJS", "Django", "Electron", "AWS", "Terraform"],
  },
  {
    id: 2,
    title: "Bedwars Tinder",
    desc: "A full stack project for matchmaking players based on a swipe system of their Bedwars stats.",
    img: "/static/projects/bwtinder.png",
    tags: ["React", "MongoDB", "SCSS", "Express"],
  },
  {
    id: 3,
    title: "Ranked Bedwars",
    desc: "A custom Discord bot for tracking stats and matchmaking for competitive Bedwars games.",
    img: "/static/projects/rankedbw.png",
    tags: ["NodeJS", "MongoDB", "Redis"],
  },
  {
    id: 4,
    title: "Sound, Mind & Body",
    desc: "Custom wordpress website for a local business, a boutique personal training gym.",
    img: "/static/projects/smb.png",
    link: "https://soundmindandbody.co.uk/",
    tags: ["WordPress", "CSS", "PHP", "SEO"],
  },
  {
    id: 4,
    title: "Discord Vanity Grabber",
    desc: "Simple Python script for automatically tracking and grabbing vanity URLs on Discord.",
    img: "/static/projects/discord-vanity-grabber.png",
    github: "https://github.com/imconnorngl/discord-vanity-grabber",
    tags: ["Python"],
  },
];

export default projects;

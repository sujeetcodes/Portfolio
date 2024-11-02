import { images } from "../assets/images";

export interface Image {
  id: number;
  url: string;
}

export interface ProjectType {
  id: number;
  title: string;
  description: string; // should be 200 characters or less
  tags: string[];
  images: Image[];
  liveLink: string;
  gitHubLink: string;
}

export const ProjectsData: ProjectType[] = [
  {
    id: 1,
    title: "Slotify: Meet Scheduling",
    description: "A web application that integrates with Google Calendar to enable users to schedule one-on-one meetings based on their availability. Powered by Clerk Auth, Google Calendar API, and Vercel Serverless Functions.",
    tags: ["NextJs", "PostgreSQL"],
    images: [
      {
        id: 1,
        url: images.slotify.src,
      },
    ],
    liveLink: "https://slotify-theta.vercel.app/",
    gitHubLink: "https://github.com/SujeetYT/Slotify",
  },
  {
    id: 2,
    title: "Mail Automation System",
    description: "This mail automation system streamlines recruitment by enabling mass email dispatch to candidates. Built with Redux Toolkit for state management, it features secure registration through OTP verification and JWT-based authentication. The system facilitates job postings and automates candidate communications using Nodemailer, while managing company data, job listings, and email logs in MongoDB with validation.",
    tags: ["React", "NodeJs", "MongoDB", "Redux-Toolkit", "ExpressJs"],
    images: [
      {
        id: 1,
        url: images.mailAutomation.src,
      },
    ],
    liveLink: "https://cuvette-assignment-iota.vercel.app/",
    gitHubLink: "https://github.com/SujeetYT/Cuvette-Assignment",
  },
];
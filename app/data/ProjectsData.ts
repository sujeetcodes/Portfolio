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
  liveLink?: string;
  gitHubLink?: string;
}

export const ProjectsData: ProjectType[] = [
  {
    id: 1,
    title: "CodeDSA",
    description:
      "CodeDSA is an interactive platform designed to help users master data structures and algorithms through hands-on coding practice. It features a built-in online compiler, a wide range of coding problems, and tools to prepare for technical interviews, making it ideal for learners and job seekers looking to enhance their programming skills. This project is owned by Cuvette Tech, and I developed it while working as a full-time employee at the company.",
    tags: [
      "NextJs",
      "TypeScript",
      "Docker",
      "MongoDB",
      "Redis",
      "TailwindCSS",
      "EC2",
      "S3",
      "Express.js",
      "Nginx",
    ],
    images: [
      {
        id: 1,
        url: images.codeDsaHero.src,
      },
    ],
    liveLink: "https://codedsa.cuvette.tech/",
  },
  {
    id: 2,
    title: "Scholarship Test Program",
    description:
      "Developed a scholarship test program at Cuvette Tech as a full-time employee. The program allowed students to enroll in a Placement Guarantee Program via a CTA button integrated with Razorpay for seat confirmation (₹999). Built an internal tool to generate unique, secure test URLs, ensuring only valid links could access the test.",
    tags: [
      "NextJs",
      "Sass",
      "Razorpay",
      "Nginx",
      "EC2",
      "Express.js",
      "TypeScript",
      "MongoDB",
    ],
    images: [
      {
        id: 1,
        url: images.scholarshipTestProgram.src,
      },
    ],
    liveLink:
      "https://staging.cuvette.tech/scholarship-program/apply/?linkId=OFL2EF",
  },
  {
    id: 3,
    title: "Slotify: Meet Scheduling",
    description:
      "A web application that integrates with Google Calendar to enable users to schedule one-on-one meetings based on their availability. Powered by Clerk Auth, Google Calendar API, and Vercel Serverless Functions.",
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
];

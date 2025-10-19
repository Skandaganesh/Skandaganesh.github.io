// import { v4 as uuid } from "uuid"

// type Position =
//   | "1st Place"
//   | "2nd Place"
//   | "3rd Place"
//   | "Finalist"
//   | "Participant"
//   | "Project Pitching"
//   | "Idea Pitching"
//   | "Track Winners"

// type Achievement = {
//   id: string
//   competition: string
//   position: Position
//   description: string
//   date: string
//   teamMembers: string[]
//   organizer: string
// }

// export const achievements: Achievement[] = [
//   {
//     id: uuid(),
//     competition: "CIDECode - CID Hackathon",
//     position: "Finalist",
//     description:
//       "Developed a solution for crawling onion sites, extracting data and correlating with clear net",
//     date: "February 2024",
//     teamMembers: ["Rishab Budale", "Akkil MG", "Sushruth Rao"],
//     organizer: "PES University, Bengaluru",
//   },
//   {
//     id: uuid(),
//     competition: "Devhacks 5.0",
//     position: "Track Winners",
//     description:
//       "Developed a collaborative savings platform using blockchain to decentralize transactions.",
//     date: "February 2024",
//     teamMembers: ["Akkil MG", "Srajan Kumar", "Srujan Rai", "Zeliq Zayyan"],
//     organizer: "IIT Dharwad",
//   },
//   {
//     id: uuid(),
//     competition: "Echelon 2024",
//     position: "2nd Place",
//     description:
//       "Pitched the idea for ResQ phone for children and oldage people, competed against MBA students.",
//     date: "January 2024",
//     teamMembers: ["Chinmaya Vittal V", "Tejas GK"],
//     organizer: "Shreedevi Institute of Technology",
//   },
//   {
//     id: uuid(),
//     competition: "Roolathon 2023",
//     position: "1st Place",
//     description:
//       "Developed and proposed idea for providing financial education for underserved people using Web and App.",
//     date: "December 2023",
//     teamMembers: ["Srujan Rai", "Akkil MG", "Zeliq Zayyan"],
//     organizer: "GDSC - Srinvias Institute of Technology",
//   },
//   {
//     id: uuid(),
//     competition: "API Day Coastal Karnataka",
//     position: "Project Pitching",
//     description:
//       "Pitched our project Rudraksh to about 400+ participants, and received positive feedback.",
//     date: "November 2023",
//     teamMembers: ["Srujan Rai", "Sannidhi Kaje"],
//     organizer: "National Institute of Technology, Karnataka",
//   },
//   {
//     id: uuid(),
//     competition: "Techzooka 2023",
//     position: "Idea Pitching",
//     description:
//       "Pitched the idea for AI based learning assistant, for efficient learning experience by different kinds of learners.",
//     date: "November 2023",
//     teamMembers: ["Varshaa Shetty"],
//     organizer: "Infosys, Mangalore",
//   },
//   {
//     id: uuid(),
//     competition: "Smart India Internal Hackathon",
//     position: "3rd Place",
//     description:
//       "Proposed Idea and Prototype for Smart Irrigation System using AI and IoT.",
//     date: "September 2023",
//     teamMembers: [
//       "Srujan Rai",
//       "Akkil MG",
//       "Rishab Budale",
//       "Varshaa Shetty",
//       "Sinchana PR",
//     ],
//     organizer: "Sahyadri College of Engineering and Management",
//   },
//   {
//     id: uuid(),
//     competition: "Nivhack 2023",
//     position: "Finalist",
//     description:
//       "Developed a web-based application for demand forecasting and warehouse management using AI and Google Cloud.",
//     teamMembers: ["Srujan Rai", "Akkil MG", "Rishab Budale"],
//     date: "August 2023",
//     organizer: "Niveus Solutions",
//   },
//   {
//     id: uuid(),
//     competition: "API Literacy",
//     position: "2nd Place",
//     description:
//       "Built Rudraksh, web-based plant disease detection through image uploads.",
//     teamMembers: ["Srujan Rai", "Sannidhi Kaje", "Kaushik KU", "Divya P"],
//     date: "August 2023",
//     organizer: "IEEE Mangalore Subsection",
//   },
//   {
//     id: uuid(),
//     competition: "Hacknight, DevHost 2022",
//     position: "1st Place",
//     description:
//       "Developed a realtime driver tracking application with React.js and Leaflet.js.",
//     teamMembers: ["Akkil MG", "Tejas GK"],
//     date: "October 2022",
//     organizer: "SOSC",
//   },
//   {
//     id: uuid(),
//     competition: "Cyber Security Hackathon",
//     position: "3rd Place",
//     description:
//       "Secured by capturing flags by decoding patterns, and breaking into Linux Servers",
//     date: "June 2022",
//     teamMembers: ["Individual"],
//     organizer: "CyberSapiens, Mangalore",
//   },
// ]

import { v4 as uuid } from "uuid"

type Position =
  | "1st Place"
  | "2nd Place"
  | "3rd Place"
  | "Finalist"
  | "Participant"
  | "Project Pitching"
  | "Idea Pitching"
  | "Track Winners"

type Achievement = {
  id: string
  competition: string
  position: Position
  description: string
  date: string
  teamMembers: string[]
  organizer: string
}

export const achievements: Achievement[] = [
  
  {
    id: uuid(),
    competition: "MIT Hackotsav 2025",
    position: "1st Place",
    description:
      "Designed a Multi-Agent Prompt Attack Assessment and Mitigation System to detect and neutralize malicious or jailbreaking prompts in LLMs.",
    date: "September 2025",
    teamMembers: ["Skanda Ganesh", "Srishti Rai M"],
    organizer: "Manipal Academy of Higher Education (Bengaluru)",
  },
  {
    id: uuid(),
    competition: "Smart India Internal Hackathon (SIH 2025)",
    position: "3rd Place",
    description:
      "Proposed an AI-powered Precise Train Traffic Control System to optimize scheduling and prevent congestion.",
    date: "October 2025",
    teamMembers: ["Srujan Rai", "Akkil MG", "Rishab Budale", "Varshaa Shetty", "Sinchana PR"],
    organizer: "Sahyadri College of Engineering and Management",
  }
]
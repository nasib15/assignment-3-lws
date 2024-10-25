export const projectsData = [
  {
    id: 1,
    category: "To-Do",
    color: "indigo",
  },
  {
    id: 2,
    category: "On Progress",
    color: "yellow",
  },
  {
    id: 3,
    category: "Done",
    color: "teal",
  },
  {
    id: 4,
    category: "Revise",
    color: "rose",
  },
];

const tasksList = [
  {
    id: crypto.randomUUID(),
    taskName: "Content Writer",
    description: "Prepare proctor for client meeting",
    date: "2024-04-01",
    category: "To-Do",
  },
  {
    id: crypto.randomUUID(),
    taskName: "Graphic Designer",
    description: "Create visuals for social media campaign",
    date: "2024-05-05",
    category: "To-Do",
  },
  {
    id: crypto.randomUUID(),
    taskName: "Project Manager",
    description: "Finalize project timeline and milestones",
    date: "2024-08-10",
    category: "On Progress",
  },
  {
    id: crypto.randomUUID(),
    taskName: "Developer",
    description: "Implement new features in the app",
    date: "2024-03-15",
    category: "Done",
  },
  {
    id: crypto.randomUUID(),
    taskName: "SEO Specialist",
    description: "Conduct keyword research for the upcoming blog post",
    date: "2024-01-20",
    category: "Revise",
  },
  {
    id: crypto.randomUUID(),
    taskName: "Marketing Coordinator",
    description: "Plan the email newsletter content for next month",
    date: "2024-06-25",
    category: "Revise",
  },
];

function getAllProjects() {
  return projectsData;
}

function getAllTasks() {
  return tasksList;
}

export { getAllProjects, getAllTasks };

const data = [
  {
    id: 1,
    category: "To-Do",
    projects: [
      {
        id: crypto.randomUUID(),
        taskName: "Content Writer",
        description: "Prepare proctor for client meeting",
        date: "February 20, 2024",
      },
      {
        id: crypto.randomUUID(),
        taskName: "Content Writer",
        description: "Make Promotional Ads for Instagram fasto's",
        date: "March 02, 2024",
      },
    ],
    color: "indigo-600",
  },
  {
    id: 2,
    category: "On Progress",
    projects: [
      {
        id: crypto.randomUUID(),
        taskName: "Content Writer",
        description: "Prepare proctor for client meeting",
        date: "May 12, 2024",
      },
    ],
    color: "yellow-500",
  },
  {
    id: 3,
    category: "Done",
    projects: [
      {
        id: crypto.randomUUID(),
        taskName: "Content Writer",
        description: "Make Promotional Ads for Instagram fasto's",
        date: "Septempber 03, 2024",
      },
    ],
    color: "teal-500",
  },
  {
    id: 4,
    category: "Revise",
    projects: [
      {
        id: crypto.randomUUID(),
        taskName: "Content Writer",
        description: "Make Promotional Ads for Instagram fasto's",
        date: "October 29, 2024",
      },
    ],
    color: "rose-500",
  },
];

function getAllProjects() {
  return data;
}

export { getAllProjects };
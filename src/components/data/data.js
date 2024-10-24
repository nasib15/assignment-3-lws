export const data = [
  {
    id: 1,
    category: "To-Do",
    tasks: [
      {
        id: crypto.randomUUID(),
        taskName: "Content Writer",
        description: "Prepare proctor for client meeting",
        date: "2024-02-01",
        category: "To-Do",
      },
      {
        id: crypto.randomUUID(),
        taskName: "Content Writer",
        description: "Make Promotional Ads for Instagram fasto's",
        date: "2024-03-02",
        category: "To-Do",
      },
    ],
    color: "indigo",
  },
  {
    id: 2,
    category: "On Progress",
    tasks: [
      {
        id: crypto.randomUUID(),
        taskName: "Content Writer",
        description: "Prepare proctor for client meeting",
        date: "2024-05-12",
        category: "On Progress",
      },
    ],
    color: "yellow",
  },
  {
    id: 3,
    category: "Done",
    tasks: [
      {
        id: crypto.randomUUID(),
        taskName: "Content Writer",
        description: "Make Promotional Ads for Instagram fasto's",
        date: "2024-09-03",
        category: "Done",
      },
    ],
    color: "teal",
  },
  {
    id: 4,
    category: "Revise",
    tasks: [
      {
        id: crypto.randomUUID(),
        taskName: "Content Writer",
        description: "Make Promotional Ads for Instagram fasto's",
        date: "2024-10-29",
        category: "Revise",
      },
    ],
    color: "rose",
  },
];

function getAllProjects() {
  return data;
}

export { getAllProjects };

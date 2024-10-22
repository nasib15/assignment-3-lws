import { DeleteSVG, EditSVG } from "../SVG/IconSVG";

const ProjectCardDetails = ({ color, taskName, description, date }) => {
  // Formatting date with a comma
  const parts = new Date(date)
    .toLocaleDateString("en-GB", {
      day: "numeric",
      month: "long",
      year: "numeric",
    })
    .split(" ");
  const formattedDate = `${parts[0]} ${parts[1]}, ${parts[2]}`;

  // Color variants for dynamic class
  const colorVariants = {
    "indigo-600": "text-indigo-600",
    "yellow-500": "text-yellow-500",
    "teal-500": "text-teal-500",
    "rose-500": "text-rose-500",
  };

  return (
    <>
      <div className="mb-4 rounded-lg bg-gray-800 p-4">
        <div className="flex justify-between">
          <h4 className={`mb-2 flex-1 font-semibold ${colorVariants[color]}`}>
            {taskName}
          </h4>

          <div className="flex gap-2">
            <EditSVG />
            <DeleteSVG />
          </div>
        </div>
        <p className="mb-2 text-sm text-zinc-200">{description}</p>

        <p className="mt-6 text-xs text-zinc-400">{formattedDate}</p>
      </div>
    </>
  );
};
export default ProjectCardDetails;

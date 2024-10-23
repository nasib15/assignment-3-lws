const TaskListEmpty = () => {
  return (
    <>
      <div className="mb-2 rounded-lg bg-gray-800 p-4 mt-4">
        <div className="flex justify-between ">
          <h4 className={`flex-1 font-semibold text-center`}>
            TaskList is empty. Please add a task.
          </h4>
        </div>
      </div>
    </>
  );
};
export default TaskListEmpty;

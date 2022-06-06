import React from "react";

const Task = (tasks) => {
  return (
    <div className="task">
      <h3>
        {tasks.map((task) => (
          <Task key={task.id} task={task} />
        ))}
      </h3>
    </div>
  );
};

export default Task;

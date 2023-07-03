import { Link } from "react-router-dom";

export function Navigation() {
  return (
    <div className="flex justify-between py-3 mx-10">
      <Link to="/tasks">
        <h1 className="font-blod text-5xl mb-4">Task App</h1>
      </Link>
      <button className="bg-slate-800 px-3 rounded-md">
        <Link to="/tasks-create">
          Create Task
        </Link>
      </button>
    </div>
  );
}

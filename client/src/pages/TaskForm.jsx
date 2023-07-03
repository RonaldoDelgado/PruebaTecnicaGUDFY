import { useForm } from "react-hook-form";
import { createTasks } from "../api/task.api";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

export function TaskForm() {
  const navegate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = handleSubmit(async (data) => {
    await createTasks(data);
    toast.success("Tarea Creada", {
      position: "bottom-left",
    });
    navegate("/tasks");
  });

  return (
    <div className="max-w-xl mx-auto">
      <form onSubmit={onSubmit}>
        <input
          className="bg-zinc-700 p-3 rounded-md block w-full mb-3"
          type="text"
          placeholder="Title"
          {...register("title", { required: true })}
        />
        {errors.title && <span>this field is required</span>}
        <textarea
          className="bg-zinc-700 p-3 rounded-md block w-full mb-3"
          rows="3"
          placeholder="Description"
          {...register("description", { required: true })}
        ></textarea>
        {errors.description && <span>this field is required</span>}
        <button className="bg-lime-600 p-3 rounded-md block w-full mt-3">Save</button>
      </form>
    </div>
  );
}

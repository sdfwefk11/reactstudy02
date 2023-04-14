import { useForm } from "react-hook-form";

interface Iform {
  toDo: string;
}

function ToDoList() {
  const { register, handleSubmit, setValue } = useForm<Iform>();
  const onSubmit = (data: Iform) => {
    console.log("add to do", data.toDo);
    setValue("toDo", "");
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register("toDo", { required: "Please write To Do" })}
          placeholder="Write a to do"
        />
        <button>Add</button>
      </form>
    </div>
  );
}

export default ToDoList;

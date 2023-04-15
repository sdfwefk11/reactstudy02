import { useForm } from "react-hook-form";
import { atom, useRecoilState } from "recoil";
interface Iform {
  toDo: string;
}
interface IToDo {
  text: string;
  category: "TO_DO" | "DOING" | "DONE";
  id: number;
}
const toDostate = atom<IToDo[]>({
  key: "toDo",
  default: [],
});

function ToDoList() {
  const [toDos, setToDos] = useRecoilState(toDostate);
  const { register, handleSubmit, setValue } = useForm<Iform>();
  const onSubmit = ({ toDo }: Iform) => {
    setToDos((oldToDos) => [
      { text: toDo, category: "TO_DO", id: Date.now() },
      ...oldToDos,
    ]);
    setValue("toDo", "");
  };
  return (
    <div>
      <h1>To Dos</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register("toDo", { required: "Please write To Do" })}
          placeholder="Write a to do"
        />
        <button>Add</button>
      </form>
      <ul>
        {toDos.map((toDo) => (
          <li key={toDo.id}>{toDo.text}</li>
        ))}
      </ul>
    </div>
  );
}

export default ToDoList;

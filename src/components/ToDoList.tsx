import { useRecoilValue } from "recoil";
import { toDostate } from "./atoms";
import CreateToDo from "./CreateToDo";
import ToDo from "./ToDo";

function ToDoList() {
  const toDos = useRecoilValue(toDostate);

  return (
    <div>
      <h1>To Dos</h1>
      <CreateToDo />
      <ul>
        {toDos.map((toDo) => (
          <ToDo
            key={toDo.id}
            text={toDo.text}
            category={toDo.category}
            id={toDo.id}
          />
          // <toDo  {...toDo}/> ...toDo로도 모든 프롭을 보내줄수있다
        ))}
      </ul>
    </div>
  );
}

export default ToDoList;

import { useRecoilValue } from "recoil";
import { toDoSelector } from "./atoms";
import CreateToDo from "./CreateToDo";
import ToDo from "./ToDo";

function ToDoList() {
  const [toDo, doing, done] = useRecoilValue(toDoSelector);
  return (
    <div>
      <h1>To Dos</h1>
      <CreateToDo />
      <h2>To Do</h2>
      <ul>
        {toDo.map((toDo) => (
          <ToDo
            key={toDo.id}
            text={toDo.text}
            category={toDo.category}
            id={toDo.id}
          />
          // <toDo  {...toDo}/> ...toDo로도 모든 프롭을 보내줄수있다
        ))}
      </ul>
      <hr />
      <h2>Doing</h2>
      <ul>
        {doing.map((toDo) => (
          <ToDo
            key={toDo.id}
            text={toDo.text}
            category={toDo.category}
            id={toDo.id}
          />
          // <toDo  {...toDo}/> ...toDo로도 모든 프롭을 보내줄수있다
        ))}
      </ul>
      <hr />
      <h2>Done</h2>
      <ul>
        {done.map((toDo) => (
          <ToDo
            key={toDo.id}
            text={toDo.text}
            category={toDo.category}
            id={toDo.id}
          />
          // <toDo  {...toDo}/> ...toDo로도 모든 프롭을 보내줄수있다
        ))}
      </ul>
      <hr />
    </div>
  );
}

export default ToDoList;

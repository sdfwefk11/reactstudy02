import { useSetRecoilState } from "recoil";
import { IToDo, toDoState } from "./atoms";

function ToDo({ text, category, id }: IToDo) {
  const setToDos = useSetRecoilState(toDoState);
  const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const {
      currentTarget: { name },
    } = event;
    setToDos((oldtoDos) => {
      const targetIndex = oldtoDos.findIndex((toDo) => toDo.id === id);
      const oldToDo = oldtoDos[targetIndex];
      const newToDo = { text, id, category: name as any };
      console.log(oldToDo, newToDo);
      return [
        ...oldtoDos.slice(0, targetIndex),
        newToDo,
        ...oldtoDos.slice(targetIndex + 1),
      ];
    });
  };
  return (
    <li>
      <span>{text}</span>
      {category !== "DOING" && (
        <button name="DOING" onClick={onClick}>
          Doing
        </button>
      )}
      {category !== "TO_DO" && (
        <button name="TO_DO" onClick={onClick}>
          To Do
        </button>
      )}
      {category !== "DONE" && (
        <button name="DONE" onClick={onClick}>
          Done
        </button>
      )}
    </li>
  );
}
export default ToDo;

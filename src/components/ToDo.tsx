import { useSetRecoilState } from "recoil";
import { IToDo, toDostate } from "./atoms";

function ToDo({ text, category, id }: IToDo) {
  const setToDos = useSetRecoilState(toDostate);
  const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const {
      currentTarget: { name },
    } = event;
    setToDos((oldtoDos) => {
      const targetIndex = oldtoDos.findIndex((toDo) => toDo.id === id);
      console.log(targetIndex);
      return oldtoDos;
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

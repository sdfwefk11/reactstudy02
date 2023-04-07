import { useState } from "react";
import { useForm } from "react-hook-form";

/* function ToDoList() {
  const [value, setValue] = useState("");
  const [error, setError] = useState("");
  const onChange = (event: React.FormEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value },
    } = event;
    setValue(value);
    setError("");
  };
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (value.length < 10) {
      return setError("To do should be longer");
    }
    console.log("submit");
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          placeholder="Write a to do"
          value={value}
        ></input>
        <button>Add</button>
        {error !== "" ? error : null}
      </form>
    </div>
  );
}

export default ToDoList; */

function ToDoList() {
  const { register, watch } = useForm();
  console.log(watch());
  return (
    <div>
      <form>
        <input {...register("Email")} placeholder="Email"></input>
        <input {...register("FirstName")} placeholder="FirstName"></input>
        <input {...register("LastName")} placeholder="LastName"></input>
        <input {...register("UserName")} placeholder="UserName"></input>
        <input {...register("Password")} placeholder="EmaPasswordil"></input>
        <input {...register("Password1")} placeholder="Password1"></input>

        <button>Add</button>
      </form>
    </div>
  );
}

export default ToDoList;

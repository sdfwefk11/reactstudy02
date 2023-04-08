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
  const { register, handleSubmit } = useForm();
  const onValid = (data: any) => {
    console.log(data);
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onValid)}>
        <input
          {...register("Email", { required: true })}
          placeholder="Email"
        ></input>
        <input
          {...register("FirstName", { required: true })}
          placeholder="FirstName"
        ></input>
        <input
          {...register("LastName", { required: true })}
          placeholder="LastName"
        ></input>
        <input
          {...register("UserName", { required: true })}
          placeholder="UserName"
        ></input>
        <input
          {...register("Password", { required: true })}
          placeholder="EmaPasswordil"
        ></input>
        <input
          {...register("Password1", { required: true })}
          placeholder="Password1"
        ></input>

        <button>Add</button>
      </form>
    </div>
  );
}

export default ToDoList;

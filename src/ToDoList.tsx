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
  const { register, handleSubmit, formState } = useForm();
  const onValid = (data: any) => {
    console.log(data);
  };
  console.log(formState.errors);
  return (
    <div>
      <form
        style={{ display: "flex", flexDirection: "column" }}
        onSubmit={handleSubmit(onValid)}
      >
        <input
          {...register("Email", { required: true })}
          placeholder="Email"
        ></input>
        <input
          {...register("FirstName", { required: true })}
          placeholder="FirstName"
        ></input>
        <input
          {...register("LastName", { required: true, minLength: 10 })}
          placeholder="LastName"
        ></input>
        <input
          {...register("UserName", { required: true, minLength: 5 })}
          placeholder="UserName"
        ></input>
        <input
          {...register("Password", {
            required: "Password is required",
            minLength: {
              value: 5,
              message: "Your password is too short.",
            },
          })}
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

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
interface IForm {
  email: string;
  firstName: string;
  lastName: string;
  userName: string;
  password: string;
}

function ToDoList() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IForm>({
    defaultValues: {
      email: "@naver.com",
    },
  });
  const onValid = (data: any) => {
    console.log(data);
  };
  return (
    <div>
      <form
        style={{ display: "flex", flexDirection: "column" }}
        onSubmit={handleSubmit(onValid)}
      >
        <input
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[A-Za-z0-9._%+-]+@naver.com$/,
              message: "Only naver.com emails allowed",
            },
          })}
          placeholder="Email"
        ></input>
        <span>{errors?.email?.message}</span>
        <input
          {...register("firstName", { required: true })}
          placeholder="FirstName"
        ></input>
        <span>{errors?.firstName?.message}</span>
        <input
          {...register("lastName", { required: true, minLength: 10 })}
          placeholder="LastName"
        ></input>
        <span>{errors?.lastName?.message}</span>
        <input
          {...register("userName", {
            required: true,
            minLength: 5,
            maxLength: 20,
          })}
          placeholder="UserName"
        ></input>
        <span>{errors?.userName?.message}</span>
        <input
          {...register("password", {
            required: "Password is required",
            minLength: {
              value: 5,
              message: "Your password is too short.",
            },
          })}
          placeholder="Password"
        ></input>
        <span>{errors?.password?.message}</span>
        <button>Add</button>
      </form>
    </div>
  );
}

export default ToDoList;

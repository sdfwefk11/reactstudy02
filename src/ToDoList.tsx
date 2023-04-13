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
  password1: string;
  extraError?: string;
}

function ToDoList() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<IForm>({
    defaultValues: {
      email: "@naver.com",
    },
  });
  const onValid = (data: IForm) => {
    if (data.password !== data.password1) {
      setError(
        "password1",
        { message: "Password are not the same" },
        { shouldFocus: true }
      );
    }
    // setError("extraError", { message: "Server offline" });
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
          {...register("firstName", { required: "write here" })}
          placeholder="FirstName"
        ></input>
        <span>{errors?.firstName?.message}</span>
        <input
          {...register("lastName", { required: "write here", minLength: 10 })}
          placeholder="LastName"
        ></input>
        <span>{errors?.lastName?.message}</span>
        <input
          {...register("userName", {
            required: "write here",
            minLength: { value: 5, message: "User name is too short 5~10" },
            maxLength: { value: 10, message: "User name is too long 5~10" },
            validate: {
              nojs: (value) => (value.includes("js") ? "no js allowed" : true),
              nopepsi: (value) =>
                value.includes("pepsi") ? "no pepsi allowed" : true,
            },
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
        <input
          {...register("password1", {
            required: "Password1 is required",
            minLength: {
              value: 5,
              message: "Your password1 is too short.",
            },
          })}
          placeholder="Password1"
        ></input>
        <span>{errors?.password1?.message}</span>
        <button>Add</button>
        <span>{errors?.extraError?.message}</span>
      </form>
    </div>
  );
}

export default ToDoList;

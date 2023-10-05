import { useState } from "react";
type Authuser = {
  name: string;
  email: string;
};
const User = () => {
  const [user, setUser] = useState<Authuser | null>(null);
  const handleLoggedin = () => {
    setUser({
      name: "SetUp",
      email: "setup@gmail.com",
    });
  };
  const handleLoggedout = () => {
    setUser(null);
  };
  return (
    <div>
      <button onClick={handleLoggedin}>Log in </button>
      <button onClick={handleLoggedout}>Log Out</button>
      <h1>Welcome!</h1>
      <h4>User Name is {user?.name}</h4>
      <h4>Email is{user?.email}</h4>
    </div>
  );
};

export default User;

// if user will be initialized after setup and will always have a value we can use type assertion

// const [user, setUser] = useState<AuthUser>({} as AuthUser);

// so we have
{
  /* <h4>User Name is {user.name}</h4> */
}
//   <h4>Email is{user?email}</h4>

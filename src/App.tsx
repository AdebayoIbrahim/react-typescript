import "./App.css";
import Greet from "./components/Greet";
import Person from "./components/Person";
import People from "./components/People";
import Status from "./components/Status";
import ChildrenProps from "./components/childrenProps";
import MountText from "./mountText";
import Button from "./components/Button";
import Input from "./components/Input";
import Container from "./components/Container";
function App() {
  const Details = {
    fname: "Martin",
    lname: "braitwaith",
  };
  const PeopleGroup = [
    {
      fname: "Khalid",
      lname: "Rodri",
    },
    {
      fname: "Ibrahim",
      lname: "Abdullah",
    },
    {
      fname: "Muhammad",
      lname: "quadri",
    },
  ];
  return (
    <div className="App">
      <Greet name="SetUp" isLogged={true} />
      <Person name={Details} />
      <People list={PeopleGroup} />
      <Status status="loading" />
      <ChildrenProps>
        <MountText />
      </ChildrenProps>
      <Button
        handleClick={(event, id) => {
          console.log("Clicked", event, id);
        }}
      />
      <Input
        id="from"
        value=""
        name="name"
        handleChange={(e) => {
          console.log("changed", e);
        }}
      />
      <Container
        styles={{ color: "red", background: "yellow", padding: "2rem" }}
      />
    </div>
  );
}

export default App;

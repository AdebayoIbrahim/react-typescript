import "./App.css";
import Greet from "./components/Greet";
import Person from "./components/Person";
import People from "./components/People";
import Status from "./components/Status";
import ChildrenProps from "./components/childrenProps";
import MountText from "./mountText";
import Button from "./components/Button";
function App() {
  const Details = {
    fname: "Martin",
    lname: "braitwaith",
  };
  const PeopleGroup = [
    {
      first: "Khalid",
      last: "Rodri",
    },
    {
      first: "Ibrahim",
      last: "Abdullah",
    },
    {
      first: "Muhammad",
      last: "quadri",
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
    </div>
  );
}

export default App;

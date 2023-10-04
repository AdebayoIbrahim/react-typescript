import "./App.css";
import Greet from "./components/Greet";
import Person from "./components/Person";
import People from "./components/People";
import Status from "./components/Status";
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
      <Greet name="SetUp" version={10} isLogged={false} />
      <Person name={Details} />
      <People list={PeopleGroup} />
      <Status status="loading" />
    </div>
  );
}

export default App;

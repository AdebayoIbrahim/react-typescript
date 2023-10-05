import { Personname } from "./types/person";

const Person = (props: Personname) => {
  return <div>{`${props.name.fname},${props.name.lname}`}</div>;
};

export default Person;

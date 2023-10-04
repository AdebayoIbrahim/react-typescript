type Personname = {
  name: {
    fname: string;
    lname: string;
  };
};

const Person = (props: Personname) => {
  return <div>{`${props.name.fname},${props.name.lname}`}</div>;
};

export default Person;

type Greetprops = {
  name: string;
  version: number;
  isLogged: boolean;
};

const Greet = (props: Greetprops) => {
  return (
    <div>
      {props.isLogged
        ? `Hello ${props.name} Welcome To Your First Typescript ${props.version}`
        : `Welcome Please Sign In!`}
    </div>
  );
};

export default Greet;

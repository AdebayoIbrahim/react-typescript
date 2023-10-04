type Greetprops = {
  name: string;
  version?: number;
  isLogged: boolean;
};

const Greet = (props: Greetprops) => {
  const { version = 0 } = props;
  return (
    <div>
      {props.isLogged
        ? `Hello ${props.name} Welcome To Your First Typescript ${version}`
        : `Welcome Please Sign In!`}
    </div>
  );
};

export default Greet;

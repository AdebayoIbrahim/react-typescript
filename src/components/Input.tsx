//typings
type Inptypes = {
  value: string;
  name: string;
  id: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};
const Input = (props: Inptypes) => {
  // defining inline
  //   const handleCh = (event: React.ChangeEvent<HTMLInputElement>) => {
  //     console.log(event)
  //   }
  return (
    <div>
      <input
        type="text"
        name={props.name}
        id={props.id}
        value={props.value}
        onChange={props.handleChange}
      />
    </div>
  );
};

export default Input;

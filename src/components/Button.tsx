type BucctonClick = {
  handleClick: (event: React.MouseEvent<HTMLButtonElement>, id: number) => void;
};
const Button = (props: BucctonClick) => {
  return (
    <button onClick={(event) => props.handleClick(event, 2)}>Clicks</button>
  );
};

export default Button;

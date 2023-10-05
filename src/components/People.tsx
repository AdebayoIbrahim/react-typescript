import { Name } from "./types/person";
type Lists = {
  list: Name[];
};
const People = (props: Lists) => {
  return (
    <div>
      {props.list.map((item, index) => {
        return <h4 key={index}>{`${item.fname}-${item.lname}`}</h4>;
      })}
    </div>
  );
};

export default People;

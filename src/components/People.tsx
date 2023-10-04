type Lists = {
  list: {
    first: string;
    last: string;
  }[];
};
const People = (props: Lists) => {
  return (
    <div>
      {props.list.map((item, index) => {
        return <h4 key={index}>{`${item.first}-${item.last}`}</h4>;
      })}
    </div>
  );
};

export default People;

type PropsVal = {
  children: string;
};
const ChildrenProps = (props: PropsVal) => {
  return <div>{props.children}</div>;
};

export default ChildrenProps;

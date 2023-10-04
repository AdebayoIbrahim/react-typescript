type PropsVal = {
  children: React.ReactNode;
};
const ChildrenProps = (props: PropsVal) => {
  return <div>{props.children}</div>;
};

export default ChildrenProps;

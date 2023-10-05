type ContainerStyle = {
  styles: React.CSSProperties;
};
const Container = (props: ContainerStyle) => {
  const { styles } = props;
  return <div style={styles}>Container</div>;
};

export default Container;

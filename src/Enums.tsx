export enum Color {
  Red = 'red',
  Green = 'green',
  Blue = 'blue',
}

interface Props {
  color: Color;
}

const Enums: React.FC<Props> = ({ color }) => {
  return <div style={{
     backgroundColor: color }}>Hello, World!</div>;
};

export default Enums;

import { FC, useState } from 'react';

interface Props {
  name: string;
}

const Functions: FC<Props> = ({name} ) => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h1>Hello, {name}!</h1>
      <p>You clicked the button {count} times.</p>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
};

export default Functions;

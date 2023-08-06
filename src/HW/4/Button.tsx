type ButtonPropsType = {
  callBack: () => void
  name: string
};

export const Button = ({callBack, name}: ButtonPropsType) => {

  return (
    <button id={'hw04-button'} onClick={callBack}>
      {name}
    </button>
  );
};

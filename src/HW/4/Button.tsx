type ButtonPropsType = {
  callBack: () => void
  name: string
};

export const Button = ({callBack, name}: ButtonPropsType) => {
  const callbackHandler = () => callBack()

  return (
    <button id={'hw04-button'} onClick={callbackHandler}>
      {name}
    </button>
  )
}

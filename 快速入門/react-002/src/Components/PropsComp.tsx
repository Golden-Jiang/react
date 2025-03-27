import { FC } from 'react'

type PropsType = {
  para1: string
  para2: string
  name: string
}

const PropsComp: FC<PropsType> = (props: PropsType) => {
  const { para1, para2, name } = props
  return (
    <>
      <h2>{para1}</h2>
      <h2>{para2}</h2>
      <h2>{name}</h2>
    </>
  );
};

export default PropsComp;

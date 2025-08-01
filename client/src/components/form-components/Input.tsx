import { useState, type ChangeEvent } from "react";
import { type InputInterface } from "../../types/InputInterface";
import styled from "styled-components";
import { fontStack } from "../../styles/fontStack";
import { colorPalette } from "../../styles/colorPalette";

const InputElem = styled.input`
  font-family: ${fontStack.text};
  font-size: 1rem;
  line-height: 1.5;
  padding: 0.5rem;
  border: 2px solid ${colorPalette.black};
  
`

export const Input = ({inputType, name, id, fn, isRequired}:InputInterface) => {
  const [valueData, setValueData] = useState('')

  const changeHandler = (e:ChangeEvent<HTMLInputElement>) => {
    setValueData(e.target.value)
    fn(e.target.name, e.target.value)
  }

  return (
    <InputElem type={inputType} name={name} id={id} onChange={(e) => changeHandler(e)} value={valueData} required={isRequired} />
  )
}

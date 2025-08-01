import { useId } from "react"
import styled from "styled-components";
import { Label } from "./Label";
import { Input } from "./Input";
import type { InputandLabelInterface } from "../../types/InputandLabelInterface";

const WrapperInput = styled.div`
    display: flex;
    flex-direction: column;
    gap: 6px 0;
    max-width: 343px;
    margin: 0 auto 1.5rem;
`

export const InputandLabel = ({label, inputType, name, fn, isRequired, order }:InputandLabelInterface) => {
  const id = useId()
  if(order) {
    return (
      <WrapperInput>
          <Input inputType={inputType} name={name} id={id+"_user"} fn={fn} isRequired={isRequired}/>
          <Label labelText={label} id={id+"_user"} />
      </WrapperInput>
    )
  }
  return (
    <WrapperInput>
        <Label labelText={label} id={id+"_user"} />
        <Input inputType={inputType} name={name} id={id+"_user"} fn={fn} isRequired={isRequired} />
    </WrapperInput>
  )
}

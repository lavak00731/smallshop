import styled from "styled-components";
import { fontStack } from "../../styles/fontStack";
import { type LabelInterface } from "../../types/LabelInterface";

const LabelTag = styled.label`
  font-family: ${fontStack.titles};
  font-size: 1rem;
  line-height: 1rem;
  font-weight: 700;
`

export const Label = ({labelText, id}:LabelInterface) => {
  return (
    <LabelTag htmlFor={id}>{labelText}</LabelTag>
  )
}

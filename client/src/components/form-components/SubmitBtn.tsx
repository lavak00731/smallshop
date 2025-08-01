import styled from "styled-components"
import { fontStack } from "../../styles/fontStack"
import { colorPalette } from "../../styles/colorPalette"

const Btn = styled.button`
    font-family: ${fontStack.text};
    font-size: 1rem;
    line-height: 1rem;
    padding: 1rem 2rem;
    border-radius: 4rem;
    color: ${colorPalette.white};
    background: ${colorPalette.buttonlink};
    border: 2px solid transparent;
    cursor: pointer;
    &:hover,
    &:focus-visible {
      background: ${colorPalette.orange};
    }

`

export const SubmitBtn = ({ text }: { text: string }) => {
  return (
    <Btn type="submit">{text}</Btn>
  )
}

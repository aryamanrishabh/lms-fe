import styled from "styled-components";

import { GRAY_300, GRAY_600, WHITE } from "@constants/colors";

const TextInput = styled.input`
  width: 100%;
  font-size: 1rem;
  color: ${GRAY_600};
  font-family: inherit;
  padding: 1.125rem 1rem;
  border-radius: 0.25rem;
  background-color: ${WHITE};
  border: 1px solid ${GRAY_300};

  &::placeholder {
    color: ${GRAY_300};
  }
`;

export default TextInput;

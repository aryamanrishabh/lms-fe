import { useState } from "react";
import { FiCheck } from "react-icons/fi";
import styled, { css } from "styled-components";
import { IoSearch, IoAddCircle } from "react-icons/io5";

import Text from "@common/Text";
import FlexBox from "@common/FlexBox";
import { ViewButton } from "@common/Buttons";
import ModalBackDrop from "@common/ModalBackDrop";

import CreateStudent from "./CreateStudent";

import {
  WHITE,
  GRAY_100,
  GRAY_500,
  PRIMARY_600,
  SUCCESS_600,
} from "@constants/colors";

const Wrapper = styled(FlexBox)`
  flex: 1;
  max-width: 100%;
  position: relative;
  align-items: center;
  padding: 4rem 0 2rem;
  flex-direction: column;
`;

const Container = styled(FlexBox)`
  width: 95%;
  row-gap: 1.5rem;
  flex-direction: column;
`;

const Actions = styled(FlexBox)`
  column-gap: 0.75rem;
  justify-content: flex-end;
`;

const SearchInput = styled(FlexBox)`
  width: 15.625rem;
  align-items: center;
  column-gap: 0.375rem;
  border-radius: 0.25rem;
  padding: 0.625rem 0.75rem;
  border: 1px solid ${PRIMARY_600};

  input {
    flex: 1;
    padding: 0;
    border: none;
  }
`;

const ExportExcel = styled(FlexBox)`
  cursor: pointer;
  column-gap: 0.5rem;
  align-items: center;
  border-radius: 0.25rem;
  padding: 0.625rem 1.25rem;
  border: 1px solid ${SUCCESS_600};
`;

const NewStudent = styled(FlexBox)`
  cursor: pointer;
  column-gap: 0.5rem;
  align-items: center;
  border-radius: 0.25rem;
  padding: 0.625rem 1.25rem;
  background-color: ${PRIMARY_600};
`;

const Table = styled.div`
  width: 100%;
  display: grid;
  overflow: hidden;
  row-gap: 0.75rem;
  border-radius: 0.5rem;
  grid-template-columns: 9% 28.8% 27% 21.2% 14%;
`;

const TextContainer = styled(FlexBox)`
  width: 100%;
  padding: 0.75rem;
  align-items: center;

  ${({ head }) =>
    head &&
    css`
      background-color: ${GRAY_100};
    `}
`;

const CheckboxContainer = styled(FlexBox)`
  width: 100%;
  padding: 0.75rem;
  align-items: center;
  justify-content: center;

  ${({ head }) =>
    head &&
    css`
      background-color: ${GRAY_100};
    `}
`;

const Checkbox = styled(FlexBox)`
  cursor: pointer;
  min-width: 1.25rem;
  min-height: 1.25rem;
  align-items: center;
  border-radius: 0.25rem;
  justify-content: center;
  background-color: ${GRAY_100};
  border: 0.8px solid ${GRAY_500};
  transition: all 250ms ease-in-out;

  svg {
    color: ${GRAY_100};
    font-size: 0.75rem;
  }

  ${({ selected }) =>
    selected &&
    css`
      border-color: ${PRIMARY_600};
      background-color: ${PRIMARY_600};

      svg {
        color: ${WHITE};
      }
    `}
`;

const StudentEntry = () => (
  <>
    <CheckboxContainer>
      <Checkbox>
        <FiCheck />
      </Checkbox>
    </CheckboxContainer>
    <TextContainer>
      <Text size="0.75rem">Student Name</Text>
    </TextContainer>
    <TextContainer>
      <Text size="0.75rem">Program</Text>
    </TextContainer>
    <TextContainer>
      <Text size="0.75rem">Primary Staff</Text>
    </TextContainer>
    <TextContainer justify="center">
      <Text size="0.75rem">
        <ViewButton />
      </Text>
    </TextContainer>
  </>
);

const Roster = () => {
  const [showCreateStudentModal, setShowCreateStudentModal] = useState(false);

  const toggleCreateStudentModal = () =>
    setShowCreateStudentModal(prev => !prev);

  return (
    <Wrapper>
      {showCreateStudentModal && (
        <ModalBackDrop>
          <CreateStudent toggleModal={toggleCreateStudentModal} />
        </ModalBackDrop>
      )}

      <Container>
        <Text bold>Student Roster</Text>

        <Actions>
          <SearchInput>
            <IoSearch size="0.875rem" />
            <input />
          </SearchInput>

          <ExportExcel>
            <Text weight={600} color={SUCCESS_600} size="0.625rem">
              Export in Excel
            </Text>
          </ExportExcel>

          <NewStudent onClick={toggleCreateStudentModal}>
            <Text color={WHITE} size="0.625rem">
              New Student
            </Text>
            <IoAddCircle color={WHITE} size="0.875rem" />
          </NewStudent>
        </Actions>

        <Table>
          <>
            <CheckboxContainer head>
              <Checkbox>
                <FiCheck />
              </Checkbox>
            </CheckboxContainer>
            <TextContainer head>
              <Text bold size="0.75rem">
                Student Name
              </Text>
            </TextContainer>
            <TextContainer head>
              <Text bold size="0.75rem">
                Program
              </Text>
            </TextContainer>
            <TextContainer head>
              <Text bold size="0.75rem">
                Primary Staff
              </Text>
            </TextContainer>
            <TextContainer head justify="center">
              <Text bold size="0.75rem">
                Action
              </Text>
            </TextContainer>
          </>

          <StudentEntry />
          <StudentEntry />
          <StudentEntry />
        </Table>
      </Container>
    </Wrapper>
  );
};

export default Roster;
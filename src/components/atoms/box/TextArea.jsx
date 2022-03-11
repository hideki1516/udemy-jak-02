import styled from "styled-components";

export const TextArea = (props) => {
  const { text } = props;

  return (
    <STextArea>{text}</STextArea>
  );
};

const STextArea = styled.div`
  width: 60%;
`;
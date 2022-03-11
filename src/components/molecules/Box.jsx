import styled from "styled-components";

import { BaseImageArea } from "../atoms/box/BaseImageArea";
import { TextArea } from '../atoms/box/TextArea';

export const Box = () => {
  return (
    <>
      <div>
        <SContainer>
          <SImageArea />
          <TextArea text={'テキストエリアA'} />
        </SContainer>
        <SContainer>
          <SImageArea />
          <TextArea text={'テキストエリアB'} />
        </SContainer>
      </div>
    </>
  );
};

const SContainer = styled.div`
  display: flex;
  align-items: center;
  width: 400px;
  height: 160px;
  border: 1px solid #000;
  margin: 0 auto;
`;

const SImageArea = styled(BaseImageArea)`
  background-color: #ddd;
`;
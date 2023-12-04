import styled from '@emotion/styled';

export const Title = styled.h3`
  padding: 16px;
  color: black;
  background: #ca2c92;
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Input = styled.input`
  padding: 8px;
`;

export const Select = styled.select`
  padding: 8px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 16px;
  justify-content: flex-end;
`;

export const ButtonSave = styled.button`
  background: #f97316;
  color: white;
  border-radius: 8px;
`;

export const ButtonClose = styled.button`
  background: #fff;
  color: #f97316;
  border-radius: 8px;
  border: 1px solid #f97316;
`;

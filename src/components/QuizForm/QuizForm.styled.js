import styled from 'styled-components';
import { Form, ErrorMessage } from 'formik';

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: ${p => p.theme.spacing(1)};
  max-width: 300px;
`;

export const Group = styled.label`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: ${p => p.theme.spacing(1)};
  padding-bottom: 12px;
`;

export const ErrMessage = styled(ErrorMessage)`
  position: absolute;
  bottom: -4px;
  color: ${p => p.theme.colors.error};
  font-size: 12px;
`;

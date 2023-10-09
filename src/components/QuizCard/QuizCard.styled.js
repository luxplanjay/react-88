import styled from 'styled-components';

const getBorderColor = ({ theme, $level }) => {
  switch ($level) {
    case 'beginner':
      return theme.colors.green;
    case 'intermediate':
      return theme.colors.blue;
    case 'advanced':
      return theme.colors.orange;
    default:
      return null;
  }
};

export const Container = styled.div`
  position: relative;
  padding: ${p => p.theme.spacing(2)};
  border: 1px solid ${getBorderColor};
  border-radius: ${p => p.theme.radii.sm};

  &:hover {
    background-color: orange;
  }
`;

export const Topic = styled.h2`
  margin-top: 0;
  margin-bottom: ${p => p.theme.spacing(2)};
`;

export const InfoWrapper = styled.div`
  display: flex;
  gap: ${p => p.theme.spacing(2)};
`;

export const Info = styled.p`
  margin: 0;
`;

export const ActionBar = styled.div`
  position: absolute;
  display: flex;
  gap: ${p => p.theme.spacing(1)};
  top: ${p => p.theme.spacing(2)};
  right: ${p => p.theme.spacing(2)};
`;

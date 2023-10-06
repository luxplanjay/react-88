import { HiCake, HiCloudUpload, HiTrash } from 'react-icons/hi';
import { Container, InfoWrapper, Info, IconWrapper } from './QuizCard.styled';

export const QuizCard = ({
  quiz: { id, topic, level, time, questions },
  onDelete,
}) => {
  return (
    <Container level={level}>
      <IconWrapper type="a">
        <HiCake size={32} />
      </IconWrapper>
      <IconWrapper type="b">
        <HiCloudUpload size={40} />
      </IconWrapper>

      <h2>{topic}</h2>
      <button onClick={() => onDelete(id)}>
        <HiTrash />
      </button>
      <InfoWrapper>
        <Info>Level: {level}</Info>
        <Info>Time: {time} min</Info>
        <Info>Questions: {questions}</Info>
      </InfoWrapper>
    </Container>
  );
};

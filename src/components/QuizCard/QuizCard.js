import { HiTrash } from 'react-icons/hi';
import Modal from 'react-modal';
import {
  Container,
  Topic,
  InfoWrapper,
  Info,
  ActionBar,
} from './QuizCard.styled';
import { Component } from 'react';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

Modal.setAppElement('#root');

export class QuizCard extends Component {
  state = {
    isModalOpen: false,
  };

  openModal = () => {
    this.setState({ isModalOpen: true });
  };

  closeModal = () => {
    this.setState({ isModalOpen: false });
  };

  render() {
    const { isModalOpen } = this.state;
    const {
      quiz: { id, topic, level, time, questions },
      onDelete,
    } = this.props;

    return (
      <Container $level={level}>
        <Topic>{topic}</Topic>
        <InfoWrapper>
          <Info>Level: {level}</Info>
          <Info>Time: {time} min</Info>
          <Info>Questions: {questions}</Info>
        </InfoWrapper>

        <ActionBar>
          <button onClick={() => onDelete(id)}>
            <HiTrash />
          </button>
          <button onClick={this.openModal}>Open modal</button>
        </ActionBar>

        <Modal
          isOpen={isModalOpen}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <p>I'm a modal window - {topic}</p>
          <button onClick={this.closeModal}>close</button>
        </Modal>
      </Container>
    );
  }
}

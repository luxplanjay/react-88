import { Formik, Field } from 'formik';
import * as Yup from 'yup';
import { ErrMessage, StyledForm, Group } from './QuizForm.styled';

const quizSchema = Yup.object().shape({
  topic: Yup.string().min(3, 'Too short!').required('This field is required!'),
  time: Yup.number()
    .min(10, 'Min 10 mins')
    .max(45, 'Max 45 mins')
    .required('This field is required!'),
  questions: Yup.number()
    .min(3, 'Min 3 questions')
    .required('This field is required!'),
  level: Yup.string()
    .oneOf(['beginner', 'intermediate', 'advanced'])
    .required('This field is required!'),
});

export const QuizForm = ({ onAdd }) => {
  return (
    <Formik
      initialValues={{
        topic: '',
        time: 0,
        questions: 0,
        level: 'beginner',
      }}
      validationSchema={quizSchema}
      onSubmit={(values, actions) => {
        onAdd(values);
        actions.resetForm();
      }}
    >
      <StyledForm>
        <Group>
          Topic
          <Field name="topic" />
          <ErrMessage name="topic" component="div" />
        </Group>

        <Group>
          Time
          <Field type="number" name="time" />
          <ErrMessage name="time" component="div" />
        </Group>

        <Group>
          Questions
          <Field type="number" name="questions" />
          <ErrMessage name="questions" component="div" />
        </Group>

        <Group>
          Level
          <Field as="select" name="level">
            <option value="beginner">Beginner</option>
            <option value="intermediate">Intermediate</option>
            <option value="advanced">Advanced</option>
          </Field>
          <ErrMessage name="level" component="div" />
        </Group>

        <button type="submit">Add quiz</button>
      </StyledForm>
    </Formik>
  );
};

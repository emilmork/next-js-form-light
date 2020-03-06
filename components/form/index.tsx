import { TextField } from "../input";
import { reduxForm, FieldArray } from "redux-form";
import Button from "../button";
import TextQuestion from "../question";
import { Field } from "redux-form";

const renderQuestions = ({ fields, meta: { error, submitFailed } }: any) => {
  return fields.map((member: string, index) => {
    return <TextQuestion member={member} key={index} />;
  });
};

const Form = props => {
  const {
    array: { push }
  } = props;

  return (
    <div>
      <Field
        placeholder="Untitled form"
        name="title"
        component={TextField}
        fullWidth
      />
      <FieldArray name="questions" component={renderQuestions} />
      <div className="mt">
        <Button variant="outlined" onClick={() => push("questions", {})}>
          Add question
        </Button>
      </div>
    </div>
  );
};

export default reduxForm({
  form: "newForm"
})(Form);

import { Field } from "redux-form";
import { TextField } from "../input";
import { Paper } from "@material-ui/core";
import * as React from "react";

type Props = {
  member: string;
};

const Question: React.FC<Props> = props => {
  const { member } = props;
  return (
    <div className="mt">
      <Paper>
        <div className="p">
          <Field
            name={`${member}.question`}
            placeholder="Untitled Question"
            component={TextField}
          />
        </div>
      </Paper>
    </div>
  );
};

export default Question;

import { useNavigate } from "react-router-dom";
import * as C from "./styles";
import { FormActions, useForm } from "../../contexts/FormContext";
import { Theme } from "../../components/Theme";
import { ChangeEvent, useEffect } from "react";

export const FormStep1 = () => {
  const history = useNavigate();
  const { state, dispatch } = useForm();

  useEffect(() => {
    dispatch({ type: FormActions.setCurrentStep, payload: 1 });
  }, [dispatch]);

  const handleNextStep = () => {
    if (state.name !== "") {
      history("/step2");
    } else {
      alert("Please fill in your name");
    }
  };

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: FormActions.setName, payload: e.target.value });
  };
  return (
    <Theme>
      <C.Container>
        <p>Step 1 of 3</p>
        <h1>Great! Let's start with your name</h1>
        <p>Fill in the information with your full name.</p>

        <hr />

        <label>
          Your full name
          <input
            type="text"
            autoFocus
            value={state.name}
            onChange={handleNameChange}
          />
        </label>

        <button onClick={handleNextStep}>Next</button>
      </C.Container>
    </Theme>
  );
};

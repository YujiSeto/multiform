import { useNavigate } from "react-router-dom";
import * as C from "./styles";
import { FormActions, useForm } from "../../contexts/FormContext";
import { Theme } from "../../components/Theme";
import { useEffect } from "react";
import { SelectOption } from "../../components/SelectOption";
import { Link } from "react-router-dom";

export const FormStep2 = () => {
  const history = useNavigate();
  const { state, dispatch } = useForm();

  useEffect(() => {
    if (state.name === "") {
      history("/");
    }
    dispatch({ type: FormActions.setCurrentStep, payload: 2 });
  }, [state.name, dispatch, history]);

  const handleNextStep = () => {
    if (state.name !== "") {
      history("/step3");
    } else {
      alert("Please fill in your name");
    }
  };

  const setLevel = (level: number) => {
    dispatch({ type: FormActions.setLevel, payload: level });
  };

  return (
    <Theme>
      <C.Container>
        <p>Step 2 of 3</p>
        <h1>{state.name}, what's your level?</h1>
        <p>
          Choose the option that best describes your experience with
          programming.
        </p>

        <hr />

        <SelectOption
          title="I'm a beginner"
          description="I started programming less than 2 years ago"
          icon="🥳"
          selected={state.level === 0}
          onClick={() => setLevel(0)}
        />

        <SelectOption
          title="I'm a programmer"
          description="I started programming less than 2 years ago or more"
          icon="😎"
          selected={state.level === 1}
          onClick={() => setLevel(1)}
        />

        <Link to="/" className="backButton">
          Back
        </Link>
        <button onClick={handleNextStep}>Next</button>
      </C.Container>
    </Theme>
  );
};

import { useNavigate, Link } from "react-router-dom";
import * as C from "./styles";
import { FormActions, useForm } from "../../contexts/FormContext";
import { Theme } from "../../components/Theme";
import { ChangeEvent, useEffect } from "react";

export const FormStep3 = () => {
  const history = useNavigate();
  const { state, dispatch } = useForm();

  useEffect(() => {
    if (state.name === "") {
      history("/");
    }
    dispatch({ type: FormActions.setCurrentStep, payload: 3 });
  }, [state.name, dispatch, history]);

  const handleNextStep = () => {
    if (state.email !== "" && state.github !== "") {
      history("/thanks");
    } else {
      alert("Please fill in your email and github");
    }
  };

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: FormActions.setEmail, payload: e.target.value });
  };

  const handleGithubChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: FormActions.setGithub, payload: e.target.value });
  };

  return (
    <Theme>
      <C.Container>
        <p>Step 3 of 3</p>
        <h1>Cool, where did we find you?</h1>
        <p>Fill in the contact information so we can contact you.</p>

        <hr />

        <label>
          What is your email?
          <input
            type="email"
            autoFocus
            value={state.email}
            onChange={handleEmailChange}
          />
        </label>

        <label>
          What is your github?
          <input
            type="url"
            value={state.github}
            onChange={handleGithubChange}
          />
        </label>

        <Link to="/step2" className="backButton">
          Back
        </Link>

        <button onClick={handleNextStep}>Finish Registration</button>
      </C.Container>
    </Theme>
  );
};

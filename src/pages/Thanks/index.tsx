import { useNavigate } from "react-router-dom";
import * as C from "./styles";
import { FormActions, useForm } from "../../contexts/FormContext";
import { Theme } from "../../components/Theme";
import { useEffect } from "react";

export const Thanks = () => {
  const history = useNavigate();
  const { state, dispatch } = useForm();

  useEffect(() => {
    dispatch({ type: FormActions.setCurrentStep, payload: 4 });
  }, [dispatch]);

  if (state.name === "") {
    history("/");
    return null;
  }

  const handleRestart = () => {
    dispatch({ type: FormActions.reset, payload: null });
    history("/");
  };

  return (
    <Theme>
      <C.Container>
        <div className="icon">{state.level === 0 ? "🥳" : "😎"}</div>
        <p>Registration completed</p>
        <h1>Excellent, {state.name}!</h1>
        <p>Your data has been sent and we will analyze your profile.</p>

        <hr />

        <h2>Your data:</h2>
        <p>Name: {state.name}</p>
        <p>Level: {state.level === 0 ? "Beginner" : "Advanced"}</p>
        <p>Email: {state.email}</p>
        <p>Github: {state.github}</p>

        <hr />
        <button onClick={handleRestart}>Start again</button>
      </C.Container>
    </Theme>
  );
};

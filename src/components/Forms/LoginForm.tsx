import React from "react";
import "./LoginForm.scss";

type LoginFormState = {
  username: string;
  password: string;
};

type LoginFormProps = {
  onUserAuthenticated: () => void;
};

export class LoginForm extends React.Component<LoginFormProps, LoginFormState> {
  // POST
  // /api/user/login/
  // {"cn": string, "password": string}

  constructor(props: LoginFormProps) {
    super(props);
  }

  state: LoginFormState = {
    username: "",
    password: "",
  };

  handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      username: event.target.value,
    });
  };

  handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      password: event.target.value,
    });
  };

  handleFormSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();

    const data = {
      cn: this.state.username,
      password: this.state.password,
    };
    if (this.state.username !== "" && this.state.password !== "") {
      const body = JSON.stringify(data);
      this.props.onUserAuthenticated();
    }
  };

  render() {
    return (
      <form className="login-form" onSubmit={this.handleFormSubmit}>
        <p>
          <span>imię.nazwisko</span>
          <input
            type="text"
            placeholder="np. ania.kowalska"
            name="username"
            onChange={this.handleUsernameChange}
          />
        </p>
        <p>
          <span>hasło</span>
          <input
            type="password"
            name="password"
            onChange={this.handlePasswordChange}
          />
        </p>
        <input type="submit" className="submit-button" value="Zaloguj się" />
      </form>
    );
  }
}

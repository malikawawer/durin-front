import Logo from "../../assets/durin_logo";
import { LoginForm } from "../../components/Forms/LoginForm";
import { TopBar } from "../../components/TopBar/TopBar";
import { EnrollTimer } from "../../assets/enroll_timer";

type FormScreenProps = {
  onUserAuthenticated: () => void;
};
export const FormScreen = (props: FormScreenProps) => {
  return (
    <div className="screen-wrapper">
      <div className="main">
        <TopBar />
        <div className="resize-logo">
          <Logo />
        </div>
        <EnrollTimer />
      </div>
      <div className="user-data-wrapper">
        <LoginForm onUserAuthenticated={props.onUserAuthenticated} />
      </div>
    </div>
  );
};

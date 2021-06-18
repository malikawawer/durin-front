type UserDataProps = {
  name: string;
  surname: string;
  albumNumber: number;
};

export const UserData = (props: UserDataProps) => {
  return (
    <div className="user-data">
      <p className="section-name">{"Twoje Dane: "}</p>
      <p className="user-data-p">
        <span>
          {"Imię: "}
          <span>{props.name}</span>
        </span>
      </p>
      <p className="user-data-p">
        {" "}
        <span>
          {"Nazwisko: "}
          <span>{props.surname}</span>
        </span>
      </p>
      <p className="user-data-p">
        <span>{"Nr Albumu: "}</span>
        <span>{props.albumNumber}</span>
      </p>
    </div>
  );
};

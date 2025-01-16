import { useContext } from "react";
import { ContextUsers } from "../usersContext/usersControl";
import SetTitle from "../components/ReuserComponents/ReactHalmet";

const Register = () => {
  const { card } = useContext(ContextUsers);
  console.log(card);
  return (
    <div>
      <SetTitle title="Register" />
      Register{" "}
    </div>
  );
};

export default Register;

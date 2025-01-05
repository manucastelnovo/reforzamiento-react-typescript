import { useAuthContext } from "../context/AuthContext";

export const LoginPage = () => {
  const { hola } = useAuthContext();
  return <div>{hola}</div>;
};

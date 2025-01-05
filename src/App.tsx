// import { BasicTypes } from "./typescript/BasicTypes";
// import { BasicFunctions } from "./typescript/BasicFunctions";
// import { ObjectsLiterals } from "./typescript/ObjectsLiterals";

import { Counter } from "./components/Counter";
import { LoginPage } from "./components/loginPage";
import { AuthProvider } from "./context/AuthContext";

function App() {
  return (
    <AuthProvider>
      <div className="flex flex-col justify-center items-center h-svh">
        <h1>react + typescript</h1>
        {/* <BasicTypes /> */}
        {/* <ObjectsLiterals /> */}
        {/* <BasicFunctions /> */}
        <h1 className="text-4xl mb-5">Hello world!</h1>
        <Counter />
        <LoginPage />
      </div>
    </AuthProvider>
  );
}

export default App;

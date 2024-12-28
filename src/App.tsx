// import { BasicTypes } from "./typescript/BasicTypes";
// import { BasicFunctions } from "./typescript/BasicFunctions";
// import { ObjectsLiterals } from "./typescript/ObjectsLiterals";

import { Counter } from "./components/Counter";

function App() {
  return (
    <>
      <div className="flex flex-col justify-center items-center h-svh">
        <h1>react + typescript</h1>
        {/* <BasicTypes /> */}
        {/* <ObjectsLiterals /> */}
        {/* <BasicFunctions /> */}
        <h1 className="text-4xl mb-5">Hello world!</h1>
        <Counter />
      </div>
    </>
  );
}

export default App;

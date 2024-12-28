export const BasicTypes = () => {
  const name: string = "fernando";
  const age: number = 38;
  const isActive: boolean = true;
  const powers: string[] = ["react", "react native"];
  return (
    <>
      <div>BasicTypes</div>
      {name} - {age} - {isActive ? "true " : "no activo "} - {powers}
    </>
  );
};

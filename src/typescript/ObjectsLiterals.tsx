export const ObjectsLiterals = () => {
  interface Persona {
    age: number;
    firstName: string;
    lastName: string;
    address?: Address;
  }

  interface Address {
    country: string;
    houseNo: string;
  }
  const person: Persona = {
    age: 29,
    firstName: "manu",
    lastName: "castelnovo",
    address: {
      country: "Rusia",
      houseNo: "que se yo",
    },
  };
  return (
    <>
      <div>ObjectsLiterals</div>
      {JSON.stringify(person, null, 2)}
    </>
  );
};

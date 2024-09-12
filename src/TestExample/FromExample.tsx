// import React, { FormEvent, useRef } from "react";

// const Form = () => {
//   const nameRef = useRef<HTMLInputElement>(null);
//   const ageRef = useRef<HTMLInputElement>(null);

//   const person = {
//     name: "",
//     age: 0,
//   };
//   const handleSubmit = (event: FormEvent) => {
//     event.preventDefault();
//     if (nameRef.current !== null) {
//       person.name = nameRef.current.value;
//     }
//     if (ageRef.current !== null) {
//       person.age = parseInt(ageRef.current.value);
//     }
//     console.log(person);
//   };
//   return (
//     <form action="" onSubmit={handleSubmit}>
//       <div className="mb-3">
//         <label htmlFor="name" className="form-label">
//           Name
//         </label>
//         <input ref={nameRef} type="text" id="name" className="form-control" />
//       </div>
//       <div className="mb-3">
//         <label htmlFor="age" className="form-label">
//           Age
//         </label>
//         <input ref={ageRef} type="number" id="age" className="form-control" />
//       </div>
//       <button className="btn btn-primary" type="submit">
//         Submit
//       </button>
//     </form>
//   );
// };

// import React, { FormEvent, useRef, useState } from "react";

// const Form = () => {
//   const [person, setPerson] = useState({
//     name: "",
//     age: 0,
//   });

//   const handleSubmit = (event: FormEvent) => {
//     event.preventDefault();
//     console.log(person);
//   };
//   return (
//     <form action="" onSubmit={handleSubmit}>
//       <div className="mb-3">
//         <label htmlFor="name" className="form-label">
//           Name
//         </label>
//         <input
//           onChange={(event) =>
//             setPerson({ ...person, name: event.target.value })
//           }
//           value={person.name}
//           type="text"
//           id="name"
//           className="form-control"
//         />
//       </div>
//       <div className="mb-3">
//         <label htmlFor="age" className="form-label">
//           Age
//         </label>
//         <input
//           onChange={(event) =>
//             setPerson({
//               ...person,
//               age: parseInt(event.target.value),
//             })
//           }
//           value={person.age}
//           type="number"
//           id="age"
//           className="form-control"
//         />
//       </div>
//       <button className="btn btn-primary" type="submit">
//         Submit
//       </button>
//     </form>
//   );
// };

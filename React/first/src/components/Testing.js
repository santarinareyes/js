import React, { useState } from "react";

// const Testing = (props) => {
//   return (
//     <div>
//       <h1>Testing: {props.name}</h1>
//       <h1>Testing: {props.testProp}</h1>
//     </div>
//   );
// };

// class Testing extends React.Component {
//   render() {
//     return (
//       <div>
//         <h1>Testing: {this.props.name}</h1>
//         <h1>Testing: {this.props.testProp}</h1>
//       </div>
//     );
//   }
// }

const Testing = () => {
  let [count, setCount] = useState(0);

  //   const plus = () => {
  //     setCount(count++);
  //   };

  //   const minus = () => {
  //     setCount(count--);
  //   };

  return (
    <div className="Testing">
      <p>{count}</p>
      <button onClick={() => setCount(count++)}>Plus</button>
      <button onClick={() => setCount(count--)}>Minus</button>
    </div>
  );
};

export default Testing;

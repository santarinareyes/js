import React from "react";

// const Testing = (props) => {
//   return (
//     <div>
//       <h1>Testing: {props.name}</h1>
//       <h1>Testing: {props.testProp}</h1>
//     </div>
//   );
// };

class Testing extends React.Component {
  render() {
    return (
      <div>
        <h1>Testing: {this.props.name}</h1>
        <h1>Testing: {this.props.testProp}</h1>
      </div>
    );
  }
}

export default Testing;

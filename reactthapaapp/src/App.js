import React from 'react'
import Restaurant from './component/Basics/Restaurant';
// function App () {
//   return (
//     <div>Welcome to react</div>
//   )
// };

const App = () => {
    return (
        <>
        {/* calling myname component */}
        {/* <MyName/>  */}
        {/* including restaurant.js  */}
        <Restaurant></Restaurant>
            {/* <h1>Hello World {3 + 3}</h1> */}
        </>

    )
}
// const MyName=()=>{ //in MyName first letter should be capital
//     return <h1>My name is amit kumar</h1>;
// };
export default App;

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Counter from './component/counter/counter';



function App() {


  const [showbtn, setToggle] = useState<boolean>(true)

  useEffect(() => {
    console.log('This is Mount')

    return function () {

      console.log('unmount', '')

    }


  }, [showbtn]);

  return (
    <div className="App">


      <button onClick={(e) => setToggle(!showbtn)}>Show Counter</button>

      {showbtn ? <Counter title="Cool Itemm" /> : ''}


    </div>
  );
}

export default App;

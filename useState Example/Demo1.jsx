import React from 'react'
import { useState } from 'react'

const Demo1 = () => {
  // const [setCount, count] = useState("0");
  // const [show, setShow] = useState(false);
  // const [Text, setText] = useState('Clicked Me');
  // const [setThime, dark] = useState(false);
  // const [liked, setLiked] = useState(false);
  // const [setNum, num] = useState(0);
  // const [color, setColor] = useState("Red");
  // const [ visible, setVisible] = useState(false);
  // const [name,setName] = useState('');
  // const [show, setShow] = useState(true);
  const names = ['vishal', 'Harshil', 'keyur'];
  return (
    <div>
       {/* <button onClick={() => setCount(count + 1)}>Increase</button> 
       <button onClick={() => setShow(!show)}>Toggle</button>
       {show && <p>Hello!</p>} */}
       {/* <button onClick={() => setText("Hello Vishal Panchal How are you ?")}>{Text}</button> */}
       {/* <div style={{background: dark ? 'black' : 'white'}}>
        <button onClick={() => setThime(!dark)}>Thime Change</button>
       </div> */}

       {/* <button onClick={() => setLiked(!liked)}>{liked ? 'Dislike' : '❤️Liked'}</button> */}
{/* <button onClick={() => setNum(num + 1)}>+</button>
<button onClick={() => setNum(num - 1)}>-</button>
<button onClick={() => setNum(0)}>Reset</button> */}
{/* <div style={{color}}>
  <h2>{color}</h2>
  <button onClick={() => setColor("Hello Vishal Panchal")}>Blue</button>
  <button onClick={() => setColor("How are you ? ")}>Red</button>
  <button onClick={() => setColor("I am Fine ")}>Pink</button>
</div> */}

{/* <button onClick={() => setVisible(!visible)}>Click A Image</button>
{visible && <img src="src\componets\Navbar\Image\veg burger.jpg" alt="" />} */}

{/* <input onChange={(e) => setName(e.target.value)} />
<p>Hello {name}</p> */}

{/* <input type={show ? 'text' : 'password'} />
<button onClick={() => setShow(!show)}>Show</button> */}
            
          <div>
            {names.map((name, index) => (
              <div key={index}>Hello {name}</div>
            ))}
          </div>

    </div>
  )
}

export default Demo1

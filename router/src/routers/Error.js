import React, {useState} from 'react';

export function ErrorComponent() {
  const [count, setCount] = useState(0);
  const [userName, setUserName] = useState('');
  
  return (
    <div>
      Error {count}
      <input type="text" onChange={e => setUserName(e.target.value)} />
      {userName}
      <button onClick={() => setCount(count + 1)}>+</button> 
      <button onClick={() => setCount(count - 1)}>-</button>
    </div>
  )
}

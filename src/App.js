import React, {useState} from 'react';
import Tweet from './Tweet';

import tweets from './data/tweets.json';

function App() {
 
 const [users, setUsers] = useState(tweets);
 
  return(
    <div className="app">
      {users.map(user => (
        <Tweet name={user.name} message={user.message} likes={user.likes}/>
      ))}
    </div>
  );

}
export default App;
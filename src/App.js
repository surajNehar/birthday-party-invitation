import Invitation from './components/invitation'
import './App.css';

function App() {
  return (
    <div className="App">
      <Invitation
       subject="Birthday party Invitation"
       to="jaGdish@gmail.com"
       name="jaGdish"
       birthday="birthday party"
       friends="Ritu ,Saurabh ,Kartik"
       location="Green field Avenue"
       from="JaGdish"
      />
    </div>
  );
}

export default App;

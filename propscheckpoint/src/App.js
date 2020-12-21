import './App.css';
import Image from './Profile/photodeprofil.jpg'
import ProfileComp from './Profile/ProfileComponent'

function App() {
  return (
    <div className="App">
      <ProfileComp fullName = 'Bechir Kamkoum '  bio='Viste my profile to read my bio' profession='GoMyCode Student'>
        <img src={Image} alt ='profil' ></img>
        </ProfileComp>  
    </div>
  );
}

export default App;
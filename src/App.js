
import './style.css';
import Image from './gomycode.jpg';
import Video from './video.mp4';

function App() {
  return (
    <div className="App">
      <h1 className="titleRed">FARES MOHAMED </h1>
      <div  style={{border:"solid 1px black", maxWidth:"100%"}}>
<br />
<img  className="Photo" src="/fares.jpg" alt="image" />
<br/>
<img   className="Photo"src={Image} alt ='Image' />
</div>
<video autostart autoPlay muted src={Video} type="video/mp4"  style={{width:900, height:500}} />



    </div>
  );
}

export default App;

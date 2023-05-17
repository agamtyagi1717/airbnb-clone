import Navbar from './Navbar.js'
import Hero from './Hero.js'
import Card from './Card.js'
import './styles.css'

function App() {
  return (
    <div className="App">
        <Navbar/>
        <Hero/>
        <div className='cards-view'>

          <Card 
            img="./Images/img-card1.png"
            rating={5}
            country="USA"
            reviews={6}
            title="Life lessons with Katie Zaferes"
            price={136}
          />
          <Card 
            img="./Images/img-card2.png"
            rating={5}
            country="USA"
            reviews={30}
            title="Learn wedding photography"
            price={125}
          />
          <Card 
            img="./Images/img-card3.png"
            rating={4.8}
            country="USA"
            reviews={2}
            title="Group Mountain Biking"
            price={50}
          />
          
                    

        </div>
    </div>
  );
}

export default App;

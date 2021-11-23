import './App.css';
import logo from './logo.svg'

const dishes = [ "Pizza", "Pasta", "Burgers"];
const dishMap =  dishes.map((dish, i) => (  {key:i , val: dish }));
const [furnitureList] = [ "Tables", "Chairs", "Bar Stool"];

function Header(props) {
  return (<header><h1>{props.name} {props.info} Kitchen</h1></header>)
}

function Main(props) {
  
  return (
    <section>
      <img src="https://hota.com.au/wp-content/uploads/2021/05/Untitled-design-10.png" height="200"/>
      <ul>
        {props.dishMap.map((dish) =>  <li className="leftAlign" key={dish.key}>{dish.val}</li>)}
      </ul>
    </section>)
}

function Footer(props) {
  return (<footer><h5>Copyright {props.year}</h5></footer>)
}

function App(props) {
  return props.authorised ? secretComponent() : genericComponent() ;
}

function myResaurantContent() {
   return (    
    <div className="App">
      <Header name="Sushant's" info="First" />
      <Main dishMap={dishMap} />
      <Footer year={new Date().getFullYear()} />
    </div>
   )
}

function secretComponent() {
  return <h1>Only secret users can see this</h1>
}

function genericComponent() {
  return <h1>Everyone can see this</h1>
}

export default App;

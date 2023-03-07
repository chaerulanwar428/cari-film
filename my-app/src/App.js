import './App.css';




const App = () => {
 const search = (q) => {
  console.log({q})
 }
  return (
    <div classname="App">
      <header className="App-header">
      <h1>CR movie</h1>
      <div className="Movie-container">
        <input placeholder="cari film favoritmu disini..." className="Movie-search" 
        onChange={({target}) => search(target.value)}/>
        <img className="Movie-title"/>
        <div className="Movie-date"></div>
        <div className="Movie-rate"></div>
      </div>
      </header>
    </div>
  );
}

export default App;

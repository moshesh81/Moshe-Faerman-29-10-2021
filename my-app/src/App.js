import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {useState ,useEffect} from "react"
import {useDispatch, useSelector} from "react-redux"
import {fetchAction} from "../src/redux/slices/weatherSlices"
import axios from "axios";

function App() {

  // function cityFetch(){
  //   console.log("enter to cityFetch")
  //   axios.get(`https://dataservice.accuweather.com/currentconditions/v1/${id}?apikey=2ByQz0FGdgJOGYmYyuM9PD9nnQYt9R0h&details=true`)
  // }

  
  const [city, setCity] = useState("Tel")
  const  dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchAction(city))
  }, [])
  
  // useEffect(() => {
  //   console.log("change at city")
  // }, [city])
  
  const state= useSelector(state=>state);
  // console.log(state.weather[0].LocalizedName)
  return (
    <div className="App">
      {/* navbar */}
      <nav class="nav">
        <div className="leftSide">Herolo Weather Task</div>
        <div className="rightSide">
          <a type="button" class="btn btn-info ml-4" href="home">Home</a>
          <a type="button" class="btn btn-info ml-5" href="#favorites">Favorites</a>
        </div>
      </nav>
      <div className="main">
        <div className="inputGroup">
          <input
            defaultValue={"tel"}
            type="search"
            className="form-control rounded "
            placeholder="Search"
            aria-label="Search"
            aria-describedby="search-addon"
          />
          <button type="button" class="btn btn-outline-primary">
            search
          </button>
        </div>
      </div>
      <div className="display">
          <div className="topPart">
          <button type="button" class="btn btn-outline-primary">add to favorites</button>
          </div>
          <div className="lowerPart">
            {/* <div>{state.weather[0].LocalizedName}</div> */}
            <div></div>
            <div>temperature</div>
          </div>

      </div>
    </div>
  );
}

export default App;

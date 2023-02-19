import { Fragment } from "react";
import { Article } from "./components/Article";
import Header from "./components/Header";
import { Nav } from "./components/Nav";
import './profile.css';
function App () {
    return (
        <Fragment>
        <Header/>
        
    <section>
            <Nav/>
            
            <Article/>
        
    </section>
    </Fragment>
    )
}

export default App;
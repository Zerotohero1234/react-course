import {css} from '@emotion/css';
import styled from '@emotion/styled';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from "react-router-dom";

const Box = (props) => {
    return <div 
    className={css`
    width:75px;
    height:75px;
    background-color:${props.color};
    `}
    >
        {props.number}
    </div>
}

const Container = styled.div`
    width:100%;
    height:200px;
    background-color:aqua;
    display:flex;
    justify-content:center;
    align-items:center;
`;

const App2 = () =>{
    return(
        <Router>
                    <ul>
                        <li>
                            <Link to="/">Box9999</Link>
                        </li>
                        <li>
                            <Link to="/box1">Box1</Link>
                        </li>
                        <li>
                            <Link to="/box2">Box2</Link>
                        </li>
                        <li>
                            <Link to="/box3">Box3</Link>
                        </li>
                    </ul>
                    
            <Container>
                <Routes>
                    <Route   path="/" element={<Box color="gray" number="9999"/>}/>
                    <Route   path="/box1" element={<Box color="red" number="1"/>}/>
                    <Route  path="/box2" element={<Box color="green" number="2"/>}/>
                    <Route  path="/box3" element={<Box color="blue" number="3"/>}/>
                </Routes>
            </Container>
        </Router>

    )
}

export default App2;
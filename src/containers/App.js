import React, { useEffect, useState } from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import "./App.css";

const App = () => {
    const [robots, setRobots] = useState([]);
    const [searchfield, setSearchfield] = useState("");

    useEffect(() => {
        fetch("http://jsonplaceholder.typicode.com/users")
            .then((res) => res.json())
            .then((users) => {
                setRobots(users);
            });
    }, []);

    const onSearchChange = (e) => setSearchfield(e.target.value);

    const filteredRobots = robots.filter((robot) =>
        robot.name.toLowerCase().includes(searchfield.toLowerCase())
    );

    return (
        <div>
            {!robots.length ? (
                <p>Loading...</p>
            ) : (
                <div className='tc'>
                    <h1 className='f1'>RoboFriends</h1>
                    <SearchBox searchChange={onSearchChange} />
                    <Scroll>
                        <CardList robots={filteredRobots} />
                    </Scroll>
                </div>
            )}
        </div>
    );
};


export default App;

import { useEffect, useState } from 'react'
import './App.css';

function App() {
    const [username, setUsername] = useState('Pesho');
    // const [age, setAge] = useState('');
    const [age, setAge] = useState();


    useEffect(() => {
        setTimeout(() => {
            setUsername('Gosho')
        }, 3000)
    }, []);



    const onUsernameChange = (e) => {
        console.log(e.target.value);
        setUsername(e.target.value)
    };

    const onAgeChange = (e) => {
        console.log(e.target.value);
        setAge(Number(e.target.value))
    };

    return (
        <div className="App">
            <header className="App-header">
                <form>
                    <div>
                        <label htmlFor="username">Username</label>
                        <input
                            type="text"
                            name="username"
                            id="username"
                            value={username}
                            onChange={onUsernameChange}
                        />
                    </div>


                    <div>
                        <label htmlFor="age">Age</label>
                        <input
                            type="number"
                            name="age"
                            id="age"
                    //          ??operator works only with null and undefined
                    // if "age" is null or undefined will show "0"
                            value={age ?? 0}
                            onChange={onAgeChange}
                        />
                    </div>
                    <div>
                        <input type="submit" value="Send" />
                    </div>
                </form>
            </header>
        </div>
    );
}

export default App;

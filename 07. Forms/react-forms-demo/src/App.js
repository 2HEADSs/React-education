import { useEffect, useState } from 'react'
import './App.css';

function App() {
    const [username, setUsername] = useState('Pesho');
    useEffect(() => {
        setTimeout(() => {
            setUsername('Gosho')
        }, 3000)
    }, [])

    const onUsernameChange = (e) => { 
        console.log('Change');
        console.log(e.target.value);
    }

    return (
        <div className="App">
            <header className="App-header">
                <form action="">
                    <div>
                        <label htmlFor="username">Username</label>
                        <input
                            type="text"
                            name="username"
                            id="username"
                            defaultValue={username}
                            onChange={onUsernameChange}
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

import { useEffect, useState } from 'react'
import './App.css';

function App() {
    const [username, setUsername] = useState('Pesho');
    // const [age, setAge] = useState('');
    const [age, setAge] = useState();
    const [creditCard, setCreditCard] = useState('');


    useEffect(() => {
        setTimeout(() => {
            setUsername('Gosho')
        }, 3000)
    }, []);



    const onUsernameChange = (e) => {
        // console.log(e.target.value);
        setUsername(e.target.value)
    };

    const onAgeChange = (e) => {
        // console.log(e.target.value);
        setAge(Number(e.target.value))
    };

    const onCreditCardChange = (e) => {
        // console.log(e.target.value);
        setCreditCard(e.target.value) 
    };
    const onSubmitHandler = (e)=>{
        e.preventDefault();
        console.log(username);
        console.log(age);
        console.log(creditCard);
    }

    return (
        <div className="App">
            <header className="App-header">
                <form onSubmit={onSubmitHandler} >
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
                            value={age ?? ''}
                            onChange={onAgeChange}
                        />
                    </div>


                    {age >= 18 && (
                        <div>
                            <label htmlFor="credit-cards">Credit Cards</label>
                            <input
                                type="text"
                                name="creditCard"
                                id="credit-cards"
                                value={creditCard}
                                onChange={onCreditCardChange}
                            />
                        </div>
                    )}

                    <div>
                        <input type="submit" value="Send" onClick={onSubmitHandler}/>
                        {/* <input type="button" value="Send" onClick={onSubmitHandler}/> */}
                        {/* <button type="button"  onClick={onSubmitHandler}>Send</button> */}
                    </div>
                </form>
            </header>
        </div>
    );
}

export default App;

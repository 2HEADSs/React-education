import { useEffect, useState } from 'react'
import './App.css';

function App() {
    const [username, setUsername] = useState('Pesho');
    // const [age, setAge] = useState('');
    const [age, setAge] = useState();
    const [creditCard, setCreditCard] = useState('');
    const [occupation, setOccupation] = useState('engineering');
    const [gender, setGender] = useState('male');
    const [bio, setBio] = useState('');
    const [hobbies, setHobbies] = useState({
        "hiking": false,
        "reading": false,
        "sports": false,
        "gaming": false,
        "coding": false
    });


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
    const onSubmitHandler = (e) => {
        e.preventDefault();
        console.log(username);
        console.log(age);
        console.log(creditCard);
    };

    const onOccupationSelect = (e) => {
        console.log(e.target.value);
        setOccupation(e.target.value)
    };

    const onGenderChange = (e) => {
        setGender(e.target.value)
    };


    const onBioChange = (e) => {
        setBio(e.target.value)
    };

    const onHobbiesChange = (e) => {
        console.log(e.target.checked);
        console.log(e.target.value);

        setHobbies(state => ({ ...state, [e.target.value]: e.target.checked }))
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
                        <label htmlFor="occupation">Occupation</label>
                        <select name="occupation" id="occupation" value={occupation} onChange={onOccupationSelect}>
                            <option value="it">IT</option>
                            <option value="engineering">Engineering</option>
                            <option value="medicine">Medicine</option>
                        </select>
                    </div>

                    <div>
                        <label htmlFor="male">Male</label>
                        <input type="radio" name="gender" id="male" value="male" onChange={onGenderChange} checked={gender == 'male'} />
                        <label htmlFor="female">Female</label>
                        <input type="radio" name="gender" id="female" value="female" onChange={onGenderChange} checked={gender == 'female'} />
                    </div>

                    <div>
                        <label htmlFor="bio">Bio</label>
                        <textarea name="bio" id="bio" cols="30" rows="3" value={bio} onChange={onBioChange}></textarea>
                    </div>

                    <div>
                        <label htmlFor="hiking">Hiking</label>
                        <input type="checkbox" name="hobbies" id="hiking" value="hiking" onChange={onHobbiesChange} checked={hobbies['hiking']}/>
                        <label htmlFor="reading">Reading</label>
                        <input type="checkbox" name="hobbies" id="reading" value="reading" onChange={onHobbiesChange} checked={hobbies['reading']}/>
                        <label htmlFor="sports">Sports</label>
                        <input type="checkbox" name="hobbies" id="sports" value="sports" onChange={onHobbiesChange} checked={hobbies['sports']}/>
                        <label htmlFor="gaming">Gaming</label>
                        <input type="checkbox" name="hobbies" id="gaming" value="gaming" onChange={onHobbiesChange} checked={hobbies['gaming']}/>
                        <label htmlFor="coding">Coding</label>
                        <input type="checkbox" name="hobbies" id="coding" value="coding" onChange={onHobbiesChange} checked={hobbies['coding']}/>
                    </div>


                    <div>
                        <input type="submit" value="Send" onClick={onSubmitHandler} />
                        {/* <input type="button" value="Send" onClick={onSubmitHandler}/> */}
                        {/* <button type="button"  onClick={onSubmitHandler}>Send</button> */}
                    </div>
                </form>
            </header>
        </div>
    );
}

export default App;

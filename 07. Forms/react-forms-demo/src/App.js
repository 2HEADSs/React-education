import { useState } from 'react'
import './App.css';

function App() {
    const [hobbies, setHobbies] = useState({
        "hiking": false,
        "reading": false,
        "sports": false,
        "gaming": false,
        "coding": false
    });

    const [values, setValues] = useState({
        username: 'Pesho',
        creditCard: '',
        occupation: 'engineering',
        gender: 'male',
        bio: '',
        age: ''
    });

    const onChangeHandler = (e) => {
        setValues(state => ({ ...state, [e.target.name]: e.target.value }))
    };

    const onSubmitHandler = (e) => {
        e.preventDefault();
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
                            value={values.username}
                            onChange={onChangeHandler}
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
                            value={values.age}
                            onChange={onChangeHandler}
                        />
                    </div>


                    {Number(values.age) >= 18 && (
                        <div>
                            <label htmlFor="credit-cards">Credit Cards</label>
                            <input
                                type="text"
                                name="creditCard"
                                id="credit-cards"
                                value={values.creditCard}
                                onChange={onChangeHandler}
                            />
                        </div>
                    )}

                    <div>
                        <label htmlFor="occupation">Occupation</label>
                        <select name="occupation" id="occupation" value={values.occupation} onChange={onChangeHandler}>
                            <option value="it">IT</option>
                            <option value="engineering">Engineering</option>
                            <option value="medicine">Medicine</option>
                        </select>
                    </div>

                    <div>
                        <label htmlFor="male">Male</label>
                        <input type="radio" name="gender" id="male" value="male" onChange={onChangeHandler} checked={values.gender === 'male'} />
                        <label htmlFor="female">Female</label>
                        <input type="radio" name="gender" id="female" value="female" onChange={onChangeHandler} checked={values.gender === 'female'} />
                    </div>

                    <div>
                        <label htmlFor="bio">Bio</label>
                        <textarea name="bio" id="bio" cols="30" rows="3" value={values.bio} onChange={onChangeHandler}></textarea>
                    </div>

                    <div>
                        <label htmlFor="hiking">Hiking</label>
                        <input type="checkbox" name="hobbies" id="hiking" value="hiking" onChange={onHobbiesChange} checked={hobbies['hiking']} />
                        <label htmlFor="reading">Reading</label>
                        <input type="checkbox" name="hobbies" id="reading" value="reading" onChange={onHobbiesChange} checked={hobbies['reading']} />
                        <label htmlFor="sports">Sports</label>
                        <input type="checkbox" name="hobbies" id="sports" value="sports" onChange={onHobbiesChange} checked={hobbies['sports']} />
                        <label htmlFor="gaming">Gaming</label>
                        <input type="checkbox" name="hobbies" id="gaming" value="gaming" onChange={onHobbiesChange} checked={hobbies['gaming']} />
                        <label htmlFor="coding">Coding</label>
                        <input type="checkbox" name="hobbies" id="coding" value="coding" onChange={onHobbiesChange} checked={hobbies['coding']} />
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

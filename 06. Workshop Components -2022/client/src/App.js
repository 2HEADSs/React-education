import { Header } from "./components/common-components/Header";
import './App.css'
import { Footer } from "./components/common-components/Footer";
import { Search } from "./components/search/Search";
import { UserSection } from "./components/user-section/UserSection";
import { useEffect, useState } from "react";

const baseUrl = 'http://localhost:3005/api';

function App() {

    const [users, setUsers] = useState([])

    useEffect(() => {
        fetch(`${baseUrl}/users`)
            .then(res => res.json())
            .then(result => {
                setUsers(result.users)
            })
    }, []);
    console.log(users);

    return (
        <div className="App">
            <Header />

            <main className="main">
                <section className="card users-container">

                    <Search />

                    <UserSection user={users} />
                </section>

            </main>

            <Footer />
        </div>
    );
}

export default App;

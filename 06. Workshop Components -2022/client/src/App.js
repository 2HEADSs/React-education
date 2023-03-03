import { Header } from "./components/common-components/Header";
import { Search } from "./components/search/Search";
import { UserList } from "./components/user-list/UserList";
import { Footer } from "./components/common-components/Footer";
import './App.css'


function App() {

    return (
        <div className="App">
            <Header />

            <main className="main">
                <section className="card users-container">

                    <Search />

                    <UserList />
                </section>

            </main>

            <Footer />
        </div>
    );
}

export default App;

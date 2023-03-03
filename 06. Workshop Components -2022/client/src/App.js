import { Header } from "./components/common-components/Header";
import './App.css'
import { Footer } from "./components/common-components/Footer";
import { Search } from "./components/search/Search";
import { UserSection } from "./components/user-section/UserSection";
function App() {
    return (
        <div className="App">
            <Header />

            <main className="main">
                <section className="card users-container">
                    <Search />
                    <UserSection/>
                </section>

            </main>

            <Footer />
        </div>
    );
}

export default App;

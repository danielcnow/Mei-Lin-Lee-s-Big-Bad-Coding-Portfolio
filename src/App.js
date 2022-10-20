import './App.css';
import Header from './components/Header';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Resume from './components/Resume';
import { useState } from 'react';

function App() {

const [page, setPage] = useState("About")

  function render() {
    if (page=="About") {
      return  <About/>
    }
    if (page=="Portfolio") {
      return <Portfolio/>
    }
    if (page=="Contact") {
      return <Contact/>
    }
    if (page=="Resume") {
      return <Resume/>
    }
  }

  return (
    <div className="App">
        <Header setPage={setPage} />
        <section class="hero">
            <div class="quote">
                <blockquote>
                    <p id="quote-text">
                        I like boys. I like loud music. I like gyrating!<br/> I'm 13, deal with it!
                    </p>
                    <p>
                        Mei-Lin Lee<br/>
                    </p>
                </blockquote>
            </div>
        </section>
{render()}
<Footer/>
    </div>
  );
}

export default App;

import {
  Header,
  Hero,
  Projects,
  Technologies,
  TimeLine,
  Footer,
} from './components';

import 'tailwindcss/tailwind.css';
import './Global.less';
import { useEffect } from 'react';

import { client } from './studio';

function App() {
  useEffect(() => {
    client
      .fetch(`*[_name==techs]`)
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="app container mx-auto">
      <Header />
      <main className="container mx-auto p-3">
        <Hero />
        <Projects />
        <Technologies />
        <TimeLine />
      </main>
      <Footer />
    </div>
  );
}

export default App;

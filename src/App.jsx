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

function App() {
  //
  //
  //
  //
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

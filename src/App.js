import Header from '../src/components/header/header'
import Introduction from '../src/components/introduction/introduction'
import { Footer } from './components/footer/footer';
import { InfoBoxComponent } from './components/info-box/info-box';



function App() {
  return (
      <>
       <Header />
       <div className="content-container">
        <Introduction />
        <InfoBoxComponent />
       </div>
       <Footer />
      </>
  );
}

export default App;

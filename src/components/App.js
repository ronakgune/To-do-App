import React from "react";
import Navbar from "./Header.js";
import MainConent from "./MainContent.js";
import Footer from "./Footer.js";

// function App() {
//   return (
//     <div>
//       <Navbar />
//       <MainConent />
//       <Footer />
//     </div>
//   );
// }

class App extends React.Component {
  render() {
    return (
      <main>
        <Navbar />
        <MainConent />
        <Footer />
      </main>
    );
  }
}

export default App;

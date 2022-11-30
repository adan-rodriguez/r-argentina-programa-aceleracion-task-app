import TaskApp from "./components/TaskApp";
import Logo from "./assets/images/logo.png";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <h1>Task App</h1>
      <img src={Logo} alt="Logo" className="logo" />
      <TaskApp />
      <Footer />
    </>
  );
}

export default App;

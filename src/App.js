import "./App.css";
import SideBar from "./components/sidebar/sidebar-index";
import "./css/styles-global.css";
// import "./css/styles-global.css";
function App() {
  return (
    <section>
      <div className="section-principal">
        <SideBar />
        <main className="main"></main>
      </div>
      <div></div>
    </section>
  );
}

export default App;

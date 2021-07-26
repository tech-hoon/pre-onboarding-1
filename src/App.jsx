import "./assets/css/App.css";
import "./components/InfiniteScrollList";
import InfiniteScrollList from "./components/InfiniteScrollList";

function App() {
  return (
    <>
      <div className="container">
        <InfiniteScrollList />
      </div>
    </>
  );
}

export default App;

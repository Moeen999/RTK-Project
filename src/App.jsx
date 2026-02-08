import Searchbar from "./components/Searchbar";
import Tabs from "./components/Tabs";

const App = () => {
  return (
    <div className="h-screen w-full bg-gray-950 text-white">
      <Searchbar/>
      <Tabs/>
    </div>
  );
};

export default App;

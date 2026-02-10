import ResultGrid from "./components/ResultGrid";
import Searchbar from "./components/Searchbar";
import Tabs from "./components/Tabs";

const App = () => {
  return (
    <>
      <div className="w-full bg-gray-950 text-white min-h-screen">
      <h1 className="bg-gray-900 text-white flex justify-center items-center py-3 sm:text-lg sm:py-2 md:text-3xl font-bold">
        RTK API Practice App
      </h1>
        <Searchbar />
        <Tabs />
        <ResultGrid />
      </div>
    </>
  );
};

export default App;

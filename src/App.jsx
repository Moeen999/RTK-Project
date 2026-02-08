import { getPhotos } from "./api/mediaApi";

const App = () => {
  return (
    <div>
      RTK Project
      <button
        className="border m-5 bg-orange-600 p-3"
        onClick={() => getPhotos("lion")}
      >
        Get Photos Data
      </button>
    </div>
  );
};

export default App;

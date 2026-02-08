import { getPhotos, getVideos } from "./api/mediaApi";

const App = () => {
  return (
    <div>
      <button
        className="border m-5 bg-green-500 p-3"
        onClick={async() => {
          const data = await getPhotos("lion") ;
          console.log("Tasveerain>>>",data.results); 
        }}
      >
        Get Photos Data
      </button>
      <button
        className="border m-5 bg-green-500 p-3"
        onClick={async() => {
          const data = await getVideos("lion") ;
          console.log("Videos>>>",data.videos); 
        }}
      >
        Get Videos Data
      </button>
    </div>
  );
};

export default App;

const ResultCard = ({ item }) => {
  return (
    <div className="cursor-pointer sm:w-[230px] md:w-[18vw] h-80 bg-white rounded relative">
      <div className="h-[80%]">
        {item.type == "photo" ? (
          <img
            className="h-full w-full object-cover object-center"
            src={item.src}
            alt=""
          />
        ) : (
          ""
        )}
        {item.type == "video" ? (
          <video
            className="h-full w-full object-cover object-center"
            muted
            loop
            autoPlay
            src={item.src}
          ></video>
        ) : (
          ""
        )}
      </div>
      <div
        className="w-full py-10 px-6 absolute bottom-0 text-white"
        id="bottom"
      >
        <h2 className="text-xl font-semibold capitalize">
          {item.type == "photo" ? item.title : item.item}
        </h2>
      </div>
    </div>
  );
};

export default ResultCard;

const ResultCard = ({ item }) => {
  return (
    <div className="sm:w-[230px] md:w-[18vw] h-80 bg-white rounded">
      {item.type == "photo" ? <img src={item.src} alt="" /> : ""}
      {item.type == "video" ? (
        <video muted loop autoPlay src={item.src}></video>
      ) : (
        ""
      )}
      <h1 className="text-black">{item.item}</h1>
    </div>
  );
};

export default ResultCard;

import { useDispatch, useSelector } from "react-redux";
import { setActiveTabs } from "../redux/features/searchSlice";

const Tabs = () => {
  const tabs = ["photos", "videos"];
  const dispatch = useDispatch();
  const activeTab = useSelector((state) => state.search.activeTab);
  return (
    <div className="flex gap-5 p-10">
      {tabs.map((tab, index) => {
        return (
          <button
            onClick={() => dispatch(setActiveTabs(tab))}
            className={`px-5 py-2 text-white cursor-pointer rounded ${activeTab === tab ? "bg-blue-500" : "bg-gray-600"}`}
            key={index}
          >
            {tab}
          </button>
        );
      })}
    </div>
  );
};

export default Tabs;

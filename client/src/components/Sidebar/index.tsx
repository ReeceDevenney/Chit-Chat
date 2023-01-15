import Controlpanel from "../Controlpanel";
import Searchbar from "../Searchbar";
import Contactbox from "../Contactbox";

function Sidebar() {
  return (
    <div className='col-span-3 flex flex-col h-screen'>
      <div className="outline max-h-screen overflow-auto h-screen">
        <Controlpanel/>
        <Searchbar/>
        <Contactbox/>
      </div>
    </div>
  );
}

export default Sidebar;
import Controlpanel from "../Controlpanel";
import Searchbar from "../Searchbar";

function Sidebar() {
  return (
    <div className='grid grid-cols-12 flex flex-col h-screen'>
      <div className="outline col-span-3">
        <Controlpanel/>
        <Searchbar/>
      </div>
    </div>
  );
}

export default Sidebar;
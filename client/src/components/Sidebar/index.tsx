import ControlPanel from "../ControlPanel";

function Sidebar() {
  return (
    <div className='grid grid-cols-12 flex flex-col h-screen'>
      <div className="outline col-span-3">
        <ControlPanel/>
      </div>
    </div>
  );
}

export default Sidebar;
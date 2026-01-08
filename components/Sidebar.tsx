import SidebarButton from "./SidebarButton";

export default function Sidebar() {
  return (
    <div className="flex flex-col justify-between border-r-2 border-r-gray-500 h-full w-48">
      <div>
        <span>logo</span>
        <h1>Auri</h1>
        <SidebarButton label="Dashboard" />
        <SidebarButton label="Timers" />
        <SidebarButton label="Task Lists" />
        <SidebarButton label="Sensory Profile" />
        <SidebarButton label="Journal" />
      </div>
      <div>
        <SidebarButton label="Settings" />
        <SidebarButton label="Help" />
        <div>PFP</div>
        <div>Name</div>
        <div>Email</div>
      </div>
    </div>
  );
}

import SidebarButton from "./SidebarButton";

export default function Sidebar() {
  return (
    <div className="flex flex-col bg-surface-dark justify-between border-r border-border-light dark:border-border-dark h-full w-48">
      <div>
        <div className="flex items-center p-3">
          <span className="material-symbols-outlined text-primary text-4xl! ms-2">
            all_inclusive
          </span>
          <h1 className="text-2xl text-text-primary-dark font-bold ms-3">
            Auri
          </h1>
        </div>
        <SidebarButton icon="dashboard" label="Dashboard" />
        <SidebarButton icon="timer" label="Timers" />
        <SidebarButton icon="list_alt" label="Task Lists" />
        <SidebarButton icon="psychology" label="Sensory Profile" />
        <SidebarButton icon="book" label="Journal" />
      </div>
      <div>
        <SidebarButton icon="settings" label="Settings" />
        <SidebarButton icon="help" label="Help" />
        <div>PFP</div>
        <div>Name</div>
        <div>Email</div>
      </div>
    </div>
  );
}

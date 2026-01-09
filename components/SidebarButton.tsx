type Button = {
  icon?: string;
  label: string;
};

export default function SidebarButton({ icon, label }: Button) {
  return (
    <div>
      <button className="flex items-center gap-3 rounded-lg px-3 py-2 text-text-secondary-light dark:text-text-secondary-dark hover:bg-primary-subtle dark:hover:bg-primary-subtle-dark hover:text-text-primary-light dark:hover:text-white transition-all hover:shadow-sm dark:hover:shadow-btn-dark">
        <span className="material-symbols-outlined">{icon}</span>{" "}
        <p className="text-sm font-medium">{label}</p>
      </button>
    </div>
  );
}

type Button = {
  icon?: string;
  label: string;
};

export default function SidebarButton({ icon, label }: Button) {
  return <div>{label}</div>;
}

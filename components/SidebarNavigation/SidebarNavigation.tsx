import Link from "next/link";

const menuItems = [
  { text: "Projects", iconSrc: "/icons/projects.svg", href: "#" },
  { text: "Issues", iconSrc: "/icons/issues.svg", href: "#" },
  { text: "Alerts", iconSrc: "/icons/alert.svg", href: "#" },
  { text: "Users", iconSrc: "/icons/users.svg", href: "#" },
  { text: "Settings", iconSrc: "/icons/settings.svg", href: "#" },
];

export function SidebarNavigation() {
  return (
    <nav>
      <ul>
        {menuItems.map(({ text, href }, index) => (
          <li key={index}>
            <Link href={href}>
              <a>{text}</a>
            </Link>
          </li>
        ))}
      </ul>

      <ul>
        <li>Support</li>
        <li>Collapse</li>
      </ul>
    </nav>
  );
}

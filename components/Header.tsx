"use client";

import { ThemeSwitcher } from "@/components/theme-switcher";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/ui/navbar";
import { Separator } from "@/components/ui/separator";
import { IconHome5, IconSearch } from "justd-icons";
import { usePathname } from "next/navigation";
interface TypeNavItem {
  href: string;
  label: string;
}
const navItems: TypeNavItem[] = [
  { href: "/", label: "Home" },
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const pathname = usePathname();
  return (
    <Navbar>
      <Navbar.Nav>
        <Navbar.Logo aria-label="Logo" href="/">
          <IconHome5 className="size-6 sm:size-5" />
        </Navbar.Logo>
        <Navbar.Section>
          {navItems.map((item: TypeNavItem, i: number) => (
            <Navbar.Item
              key={i}
              isCurrent={pathname === item.href ? true : false}
              href={item.href}
            >
              {item.label}
            </Navbar.Item>
          ))}
        </Navbar.Section>
        <Navbar.Section className="ml-auto hidden sm:flex">
          <Navbar.Flex>
            <Button
              intent="plain"
              size="square-petite"
              aria-label="Search for products"
            >
              <IconSearch />
            </Button>
            <ThemeSwitcher intent="plain" />
          </Navbar.Flex>
        </Navbar.Section>
      </Navbar.Nav>

      <Navbar.Compact>
        <Navbar.Flex>
          <Navbar.Trigger className="-ml-2" />
          <Separator orientation="vertical" className="h-6 sm:mx-1" />
          <Navbar.Logo aria-label="Logo" href="/">
            <IconHome5 className="size-5" />
          </Navbar.Logo>
        </Navbar.Flex>
        <Navbar.Flex>
          <Navbar.Flex>
            <Button
              intent="plain"
              size="square-petite"
              aria-label="Search for products"
            >
              <IconSearch />
            </Button>
            <ThemeSwitcher intent="plain" />
          </Navbar.Flex>
          <Separator orientation="vertical" className="mr-3 ml-1 h-6" />
        </Navbar.Flex>
      </Navbar.Compact>
    </Navbar>
  );
}

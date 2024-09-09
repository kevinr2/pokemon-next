import Image from "next/image";
import {
  IoLogoReact,
  IoBrowsersOutline,
  IoCalculator,
  IoFootball,
  IoHeartOutline,
} from "react-icons/io5";
import { SidebarMenu } from "./SidebarMenu";

const menuItems = [
  {
    url: "/dashboard/",
    path: "main",
    icon: <IoBrowsersOutline size={40} />,
    title: "Dashboard",
    subTitle: "Visualizacion",
  },
  {
    url: "/dashboard/",
    path: "counter",
    icon: <IoCalculator size={40} />,
    title: "Counter",
    subTitle: "Contador Side",
  },
  {
    url: "/dashboard/",
    path: "pokemons",
    icon: <IoFootball size={40} />,
    title: "Pokemons",
    subTitle: "Pokedex",
  },
  {
    url: "/dashboard/",
    path: "favorites",
    icon: <IoHeartOutline size={40} />,
    title: "favoritos",
    subTitle: "global state",
  },

];

export const Sidebar = () => {
  return (
    <div
      style={{ width: "400px", overflow: "hidden" }}
      id="menu"
      className="bg-gray-900 min-h-screen z-10 text-slate-300 w-64  left-0  overflow-y-scroll"
    >
      <div id="logo" className="my-4 px-6">
        <h1 className="text-lg md:text-2xl font-bold text-white">
          <IoLogoReact />

          <span>Dash</span>
        </h1>
        <p className="text-slate-500 text-sm">
          Manage your actions and activities
        </p>
      </div>
      <div id="profile" className="px-6 py-10">
        <p className="text-slate-500">Welcome back,</p>
        <a href="#" className="inline-flex space-x-2 items-center">
          <span>
            <Image
              width={50}
              height={50}
              className="rounded-full w-8 h-8"
              src="https://images.unsplash.com/photo-1542909168-82c3e7fdca5c"
              alt="usuario"
              priority
            />
          </span>
          <span className="text-sm md:text-base font-bold">Kevin Revelo</span>
        </a>
      </div>
      <div id="nav" className="w-full px-6">
        {menuItems.map((item) => (
          <SidebarMenu key={item.path} {...item} />
        ))}
      </div>
    </div>
  );
};

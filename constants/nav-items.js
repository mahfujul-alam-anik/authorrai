import { BiHomeAlt2 } from "react-icons/bi";
import { RiDashboard2Line, RiPriceTag3Line } from "react-icons/ri";
import { RiPagesLine } from "react-icons/ri";
import { PiFileAudioDuotone, PiKeyhole } from "react-icons/pi";
import { IoBookOutline, IoPersonAddOutline } from "react-icons/io5";
import { RxDashboard } from "react-icons/rx";
import { MdOutlineLibraryBooks, MdOutlineManageAccounts } from "react-icons/md";

export const navItems = [
  {
    id: 1,
    name: "home",
    path: "/",
  },
  {
    id: 2,
    name: "pricing",
    path: "/pricing",
  },
  {
    id: 3,
    name: "ebook",
    path: "/about/ebook",
  },
  {
    id: 4,
    name: "audio book",
    path: "/about/audio-book",
  },
];

export const mobileNavItems = [
  {
    id: 1,
    name: "home",
    path: "/",
    icon: <BiHomeAlt2 />,
  },
  {
    id: 2,
    name: "pricing",
    path: "/pricing",
    icon: <RiPriceTag3Line />,
  },
  {
    id: 3,
    name: "ebook",
    path: "/about/ebook",
    icon: <RiPagesLine />,
  },
  {
    id: 4,
    name: "audio",
    path: "/about/audio-book",
    icon: <IoPersonAddOutline />,
  },
  {
    id: 5,
    name: "account",
    path: "/auth/signin",
    icon: <IoPersonAddOutline />,
  },
];

export const userSidebarItems = [
  {
    name: "dashboard",
    path: "/user/dashboard",
    icon: <RxDashboard />,
  },
  {
    name: "generator",
    path: "/user/generator",
    icon: <MdOutlineLibraryBooks />,
  },
  {
    name: "ebooks",
    path: "/user/ebooks",
    icon: <IoBookOutline />,
  },
  {
    name: "audio books",
    path: "/user/audio-books",
    icon: <PiFileAudioDuotone />,
  },
  {
    name: "account",
    path: "/user/account",
    icon: <MdOutlineManageAccounts />,
  },
];

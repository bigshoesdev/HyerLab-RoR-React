import { HashtagIcon, HomeIcon, BellIcon, UserIcon, BookmarkIcon, InboxIcon } from '@heroicons/react/24/solid';
import { prependOnceListener } from 'process';
import logo from '../assets/hypelab_logo.svg';

export function Menu() {
  return (
    <div className="menu sticky top-0">
      <div className="mt-5">
        <img
          src={logo}
          style={{ width: '200px' }}
          className="py-3 p-4 my-2 w-fit rounded-full dark:hover:bg-slate-800"
        ></img>
      </div>
      <MenuItem title="Home">
        <HomeIcon className="h-7 w-7 dark:text-white text-blue-500"></HomeIcon>
      </MenuItem>
      <MenuItem title="Explore">
        <HashtagIcon className="h-7 w-7 dark:text-white text-blue-500"></HashtagIcon>
      </MenuItem>
      <MenuItem title="Notifications">
        <BellIcon className="h-7 w-7 dark:text-white text-blue-500"></BellIcon>
      </MenuItem>
      <MenuItem title="Messages">
        <InboxIcon className="h-7 w-7 dark:text-white text-blue-500"></InboxIcon>
      </MenuItem>
      <MenuItem title="Bookmarks">
        <BookmarkIcon className="h-7 w-7 dark:text-white text-blue-500"></BookmarkIcon>
      </MenuItem>
      <MenuItem title="Profile">
        <UserIcon className="h-7 w-7 dark:text-white text-blue-500"></UserIcon>
      </MenuItem>
    </div>
  );
}

export function MenuItem(props: { children: JSX.Element; title: string }) {
  return (
    <div className="py-3 px-4 mr-4 my-2 w-fit rounded-full dark:hover:bg-slate-800">
      <div className="align-top inline-flex">{props.children}</div>
      <div className="ml-2 text-xl inline-flex align-top">{props.title}</div>
    </div>
  );
}

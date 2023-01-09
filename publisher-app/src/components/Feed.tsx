import { getRandomInt } from '../utils/utils';
import {
  ChatBubbleBottomCenterIcon,
  ArrowPathRoundedSquareIcon,
  HeartIcon,
  ArrowUpTrayIcon,
} from '@heroicons/react/24/outline';
import { map } from 'underscore';
import { faker } from '@faker-js/faker';

export function Feed() {
  let generatePosts = () => {
    return map([...Array(10).keys()], (body) => (
      <Post key={body} body={faker.lorem.lines(faker.datatype.number({ min: 2, max: 4 }))}></Post>
    ));
  };

  return <div className="feed divide-y divide-slate-200 dark:divide-slate-800">{generatePosts()}</div>;
}

export function Post(props: { body: string }) {
  return (
    <div className="px-5 pt-4">
      <div className="grid grid-cols-12">
        <div className="col-span-1 content-center">
          <img src={`${faker.image.avatar()}`} className="rounded-full"></img>
        </div>
        <div className="col-span-11 pl-5">
          <div className="author">
            <span className="font-bold mr-2">{faker.name.fullName()}</span>
            <span className="text-slate-500">@{faker.internet.userName()}</span>
          </div>
          <div className="body">{props.body}</div>
          <Actions></Actions>
        </div>
      </div>
    </div>
  );
}

export function Actions() {
  return (
    <div className="grid grid-cols-4 py-1">
      <div className="inline-flex" key="1">
        <div className="p-2 rounded-full dark:text-slate-400 dark:hover:text-blue-500 dark:hover:bg-blue-500/20 text-blue-500">
          <ChatBubbleBottomCenterIcon className="h-5 w-5"></ChatBubbleBottomCenterIcon>
        </div>
        <span className="inline-flex items-center pl-2 text-m">{faker.datatype.number({ min: 0, max: 100 })}</span>
      </div>
      <div className="inline-flex" key="2">
        <div className="p-2 rounded-full dark:text-slate-400 dark:hover:text-emerald-500 dark:hover:bg-emerald-500/20 text-blue-500">
          <ArrowPathRoundedSquareIcon className="h-5 w-5"></ArrowPathRoundedSquareIcon>
        </div>
        <span className="inline-flex items-center pl-2 text-m">{faker.datatype.number({ min: 0, max: 100 })}</span>
      </div>
      <div className="inline-flex" key="3">
        <div className="p-2 rounded-full dark:text-slate-400 dark:hover:text-red-500 dark:hover:bg-red-500/20 text-blue-500">
          <HeartIcon className="h-5 w-5"></HeartIcon>
        </div>
        <span className="inline-flex items-center pl-2 text-m">{faker.datatype.number({ min: 0, max: 100 })}</span>
      </div>
      <div className="inline-flex" key="4">
        <div className="p-2 rounded-full dark:text-slate-400 dark:hover:text-blue-500 dark:hover:bg-blue-500/20 text-blue-500">
          <ArrowUpTrayIcon className="h-5 w-5"></ArrowUpTrayIcon>
        </div>
      </div>
    </div>
  );
}

import { faker } from '@faker-js/faker';
import { numberWithCommas } from '../utils/utils';

export function Trending() {
  return (
    <div className="trending sticky top-0 pl-5">
      <div className="rounded-lg dark:bg-stone-900 bg-slate-100 p-5 my-5 space-y-6 trending">
        <div className="text-2xl font-bold mb-5">What's happening</div>
        <Topic category="Soccer" headline="2022 FIFA World Cup"></Topic>
        <Topic category="Business and finance" headline="Coinbase"></Topic>
        <Topic category="Trending" headline="$AVAX"></Topic>
        <Topic category="Business and finance" headline="Fidelity"></Topic>
      </div>
      <div className="rounded-lg dark:bg-stone-900 bg-slate-100 px-5 py-5">
        <div className="text-2xl font-bold">Who to follow</div>
        <FollowSuggestion
          avatar={faker.image.avatar()}
          name={faker.name.fullName()}
          handle={`@${faker.internet.userName()}`}
        ></FollowSuggestion>
        <FollowSuggestion
          avatar={faker.image.avatar()}
          name={faker.name.fullName()}
          handle={`@${faker.internet.userName()}`}
        ></FollowSuggestion>
        <FollowSuggestion
          avatar={faker.image.avatar()}
          name={faker.name.fullName()}
          handle={`@${faker.internet.userName()}`}
        ></FollowSuggestion>
      </div>
    </div>
  );
}

export function FollowSuggestion(props: { avatar: string; name: string; handle: string }) {
  return (
    <div className="grid grid-cols-6 items-center mt-7">
      <div className="col-span-1 content-center mr-3">
        <img src={props.avatar} className="rounded-full"></img>
      </div>
      <div className="col-span-3">
        <div className="font-bold">{props.name}</div>
        <div className="">{props.handle}</div>
      </div>
      <div className="col-span-2 text-right">
        <button className="rounded-full dark:bg-slate-200 bg-slate-900 dark:text-slate-900 text-white text-md font-bold py-1">
          Follow
        </button>
      </div>
    </div>
  );
}

export function Topic(props: { category: string; headline: string }) {
  return (
    <div className="group">
      <div className="text-slate-500 text-sm">{props.category}</div>
      <div className="font-bold">{props.headline}</div>
      <div className="text-slate-500 text-sm">
        {numberWithCommas(faker.datatype.number({ min: 1000, max: 100000 }))} tweets
      </div>
    </div>
  );
}

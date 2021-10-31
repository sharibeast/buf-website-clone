import slack from '../../../public/assets/slack.svg';
import Image from 'next/image';
export const MobileNavData = [
  {
    id: 1,
    name: 'Home',
  },
  {
    id: 2,
    name: 'buf schema registry',
  },
  {
    id: 3,
    name: 'buf cli',
  },
  {
    id: 4,
    name: 'docs',
  },
  {
    id: 5,
    name: 'Tour',
  },
  {
    id: 6,
    name: 'blog',
  },
  {
    id: 7,
    name: 'careers',
  },
];
export const MobileNav = (show: any): JSX.Element => {
  return (
    <nav
      className={` ${show} ? lg:hidden h-0' : 'lg:hidden h-screen z-20  transition-all duration-500`}
    >
      <div className="z-10 w-full p-6">
        <div>
          <ul>
            <div className="flex justify-between items-center">
              <li className="uppercase text-lg mb-4">menu</li>
              <span className="block">close</span>
            </div>
            {MobileNavData.map((navlink) => (
              <li
                key={navlink.id}
                className="text-blue-700 border-b-2  py-3 border-blue-700 uppercase text-2xl"
              >
                <a href="#">{navlink.name}</a>
              </li>
            ))}
          </ul>
          <button className="uppercase p-3 font-bold text-center w-full border-2 mt-3">
            sign in
          </button>
          <button className="uppercase p-3 font-bold text-center w-full bg-gray-900 text-white outline-none border-2 mt-3">
            sign up
          </button>
          <div className="flex justify-between mt-4">
            <button className="flex justify-center items-center px-4  py-2  w-2/5 px text-3xl border-2">
              <div className="flex items-center">
                <Image src={slack} alt="slack" width={20} height={20} />
                <span className="uppercase text-3xl ml-4">slack</span>
              </div>
            </button>
            <button className="flex justify-center items-center px-4  py-2 w-2/5 px text-3xl border-2">
              <div className="flex items-center">
                <Image src={slack} alt="slack" width={20} height={20} />
                <span className="uppercase text-3xl ml-4">slack</span>
              </div>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

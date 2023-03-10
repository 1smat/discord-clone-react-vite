import { DiscordSearchIcon } from 'src/utils/DiscordIcons';

const Search = () => (
    <div
        className="relative flex h-6
    w-[144px] items-stretch 
    rounded-[4px] bg-gray-300 px-0.5 transition-all duration-[.25s] ease-in-out focus-within:w-[240px]"
    >
        <input
            className="w-full overflow-hidden bg-transparent
      px-0.5 text-sm text-gray-800
      placeholder-gray-500 outline-none"
            type="text"
            placeholder="Search"
        />
        <div className="flex h-6 w-6 items-center justify-center">
            <DiscordSearchIcon className="realtive h-4 w-4 text-gray-600" />
        </div>
    </div>
);

export default Search
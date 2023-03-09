import { DiscordHashIcon } from 'src/05_utils/DiscordIcons';

const TopicSelection = ({ selection }: any) => (
    <li className="relative">
        <div className="relative overflow-visible py-[1px]">
            <div className="group relative ml-2 flex cursor-pointer flex-row items-center rounded px-2 hover:bg-gray-300">
                <div className="flex min-w-0 flex-auto flex-row items-center p-[6px]">
                    <div className="relative mr-[6px]">
                        <DiscordHashIcon size="24" className="h-5 w-5 text-gray-500" />
                    </div>
                    <div className="font-semibold text-gray-500 group-hover:text-gray-800">
                        {selection}
                    </div>
                </div>
            </div>
        </div>
    </li>
);

export default TopicSelection
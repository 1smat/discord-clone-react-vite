import {
    DiscordMicIcon,
    DiscordHeadsetIcon,
    DiscordSettingsIcon,
} from "src/05_utils/DiscordIcons";
import { channels } from "src/05_utils/Data";
import SectionIcon from "./components/SectionIcon";
import Dropdown from "./components/DropDown";
import ChannelBlock from "./components/ChannelBlock";

const ChannelList = () => {
    return (
        <div className="channel-list">
            <nav className="relavite flex flex-auto select-none flex-col">
                <ChannelBlock />
                <div className="relative flex-auto overflow-x-hidden overflow-y-scroll">
                    <ul className="relative">
                        {channels.map((channel, id) => (
                            <Dropdown
                                header={channel.header}
                                selections={channel.sub}
                                key={id}
                            />
                        ))}
                    </ul>
                </div>
            </nav>
            <section className="block flex-shrink-0 flex-grow-0 bg-gray-200">
                <div className="mb-[1px] flex h-[52px] items-center px-2 text-sm font-semibold">
                    <div className="-ml-0.5 mr-2 flex min-w-[120px] cursor-pointer items-center rounded pl-0.5 hover:bg-gray-400">
                        <img
                            src="https://yt3.googleusercontent.com/RIZShYWEREiuNks5Hok79M1uepUPpQq8c7D8J7p-B2iPGxgb-NxU8o4KBzwcXku4yylYwkOrYw=s176-c-k-c0x00ffffff-no-rj"
                            alt=""
                            className="relative mt-0 h-8 w-8 rounded-[50%] object-cover"
                        />
                        <div className="mr-1 select-none py-1 pl-2">
                            <div className=" flex leading-[18px]">
                                ism4t
                            </div>
                            <div className="text-xs font-normal leading-[13px] text-gray-600">
                                #1302
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-shrink flex-row items-stretch justify-start">
                        <SectionIcon IconType={DiscordMicIcon} />
                        <SectionIcon IconType={DiscordHeadsetIcon} />
                        <SectionIcon IconType={DiscordSettingsIcon} />
                    </div>
                </div>
            </section>
        </div>
    );
};


export default ChannelList;

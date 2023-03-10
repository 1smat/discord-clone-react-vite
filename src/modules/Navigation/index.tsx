import {
    DiscordHashIcon,
    DiscordHelpIcon,
    DiscordInboxIcon,
    DiscordMemberIcon,
    DiscordNotificationIcon,
    DiscordPinIcon,
    DiscordThreadsIcon,
} from "src/utils/DiscordIcons";
import Search from "./components/Search";
import HashtagIcon from "./components/HashTagIcon";
import Title from "./components/Title";

const Navigation = () => {
    return (
        <section className="top-navigation shadow-sm-discord">
            <div className="relative flex flex-auto">
                <HashtagIcon />
                <Title />
            </div>
            <div className="flex min-w-0 flex-shrink-0 flex-grow-0 items-center">
                <DiscordThreadsIcon className="top-navigation-icon" />
                <DiscordNotificationIcon className="top-navigation-icon" />
                <DiscordPinIcon className="top-navigation-icon" />
                <DiscordMemberIcon className="top-navigation-icon" />
                {/* <ThemeIcon /> */}
                <Search />
                <DiscordInboxIcon className="top-navigation-icon" />
                <DiscordHelpIcon className="top-navigation-icon" />
            </div>
        </section>
    );
}

export default Navigation;

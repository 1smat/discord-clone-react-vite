import { DiscordArrowIcon } from 'src/05_utils/DiscordIcons';

const ChevronIcon = ({ expanded }: any) => {
    const chevClass = "absolute left-[2px] top-[6px] h-3 w-3";
    return expanded ? (
        <DiscordArrowIcon
            size="24"
            className="absolute left-[2px] top-[6px] h-3 w-3 transition-all"
        />
    ) : (
        <DiscordArrowIcon
            size="24"
            className="absolute left-[2px] top-[6px] h-3 w-3 -rotate-90 transition-all"
        />
    );
};

export default ChevronIcon
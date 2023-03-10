import { useState } from "react";
import ChevronIcon from "../ChevronIcon";
import { DiscordAddIcon } from "src/utils/DiscordIcons";
import TopicSelection from "../TopicSelection";
import { IChannel } from "src/utils/Data";


const Dropdown = ({ header, sub }: IChannel) => {
    const [expanded, setExpanded] = useState(true);

    return (
        <>
            <li className="relative pt-4">
                <div onClick={() => setExpanded(!expanded)} className="dropdown-header">
                    <div className="group flex-auto overflow-hidden hover:text-gray-800">
                        <ChevronIcon expanded={expanded} />
                        <h3 className="flex-auto text-xs font-extrabold uppercase tracking-wide text-gray-600 group-hover:text-gray-800">
                            {header}
                        </h3>
                    </div>
                    <DiscordAddIcon size="18" className="text-accent" />
                </div>
            </li>
            {expanded &&
                sub &&
                sub.map((sub: string, id: number) => (
                    <TopicSelection key={id} sub={sub} />
                ))}
        </>
    );
};

export default Dropdown
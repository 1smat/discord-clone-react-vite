import { DiscordDownloadIcon } from 'src/utils/DiscordIcons';
import { FaDiscord } from 'react-icons/fa';
import { IoMdCompass } from 'react-icons/io';
import { IoAddSharp } from 'react-icons/io5';
import { IServer, servers } from 'src/utils/Data';
import SideBarIcon from './components/SideBarIcon';
import Divider from './components/Divider';

const SideBar = () => {
    return (
        <nav className='relative flex w-[72px] flex-shrink-0 overflow-hidden bg-gray-500'>
            <div className='sidebar-container hide-scrollbar'>
                <SideBarIcon
                    main={true}
                    icon={<FaDiscord size='28' />}
                />
                <Divider />
                {servers.map((server: IServer, id: number) => (
                    <SideBarIcon
                        image={true}
                        icon={
                            <img
                                className='sidebar-icon-image'
                                src={server.url}
                            />
                        }
                        key={id}
                    />
                ))}
                <SideBarIcon
                    icon={<IoAddSharp size='25' />}
                />
                <SideBarIcon
                    icon={<IoMdCompass size='23' />}

                />
                <Divider />
                <SideBarIcon
                    icon={<DiscordDownloadIcon />}

                />

            </div>
        </nav>
    );
};


export default SideBar;

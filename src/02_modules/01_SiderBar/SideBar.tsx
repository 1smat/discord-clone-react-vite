import { DiscordDownloadIcon } from 'src/06_utils/DiscordIcons';
import { FaDiscord } from 'react-icons/fa';
import { IoMdCompass } from 'react-icons/io';
import { IoAddSharp } from 'react-icons/io5';
import { servers } from 'src/06_utils/Data';

const SideBar = () => {
    return (
        <nav className='relative flex w-[72px] flex-shrink-0 overflow-hidden bg-gray-500'>
            <div className='sidebar-container hide-scrollbar'>
                <SideBarIcon
                    main={true}
                    icon={<FaDiscord size='28' />}
                />
                <Divider />
                {servers.map((server, id) => (
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

const SideBarIcon = ({ icon, image = false, main = false }: any) => {
    let IconColor = '';
    if (!image) {
        main
            ? (IconColor = 'sidebar-icon-color-main')
            : (IconColor = 'sidebar-icon-color');
    }
    return (
        <div className='sidebar-icon-wrap'>
            <div
                className={`sidebar-icon ${image ? '' : `${IconColor}`
                    }`}>
                {icon}
            </div>
        </div>
    );
};

const Divider = () => (
    <div className='sidebar-icon-wrap'>
        <hr className='sidebar-hr' />
    </div>
);

export default SideBar;

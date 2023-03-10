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

export default SideBarIcon
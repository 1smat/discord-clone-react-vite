
const SectionIcon = ({ IconType }: any) => {
    return (
        <div className="group relative flex h-8 w-8 cursor-pointer items-center justify-center rounded hover:bg-gray-400">
            <IconType className="text-gray-600 group-hover:text-gray-800" />
        </div>
    );
};

export default SectionIcon
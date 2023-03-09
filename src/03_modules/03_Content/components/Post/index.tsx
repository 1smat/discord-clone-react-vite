const Post = ({ name, timestamp, text, image }: any) => {

    return (
        <div className="post mt-[17px]">
            <div className="static">
                <img src={image} alt="" className="avatar" />
                <h3 className="relative min-h-[22px] font-bold leading-[22px] ">
                    <span className="relative mr-1 cursor-pointer hover:underline">
                        {name}
                    </span>
                    <span className="pointer-events-none ml-1  text-[0.75rem] font-medium leading-[1.375rem] text-gray-500 ">
                        {timestamp}
                    </span>
                </h3>
                <div
                    className="relative select-text whitespace-pre-wrap leading-[22px] text-gray-800  "
                >
                    {text}
                </div>
            </div>
        </div>
    );
};

export default Post
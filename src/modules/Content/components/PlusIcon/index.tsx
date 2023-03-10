import { BsPlusCircleFill } from "react-icons/bs";

const PlusIcon = () => (
    <div className="sticky flex-shrink-0 flex-grow-0 self-stretch">
        <button className="sticky top-0 m-0 -ml-4 box-border flex h-11 w-auto items-center justify-center rounded-[3px] px-4 py-[10px] text-sm leading-4">
            <BsPlusCircleFill
                size="20"
                className="text-gray-600"
            />
        </button>
    </div>
);

export default PlusIcon
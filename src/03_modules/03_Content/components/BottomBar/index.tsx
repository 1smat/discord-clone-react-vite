import PlusIcon from '../PlusIcon';

const BottomBar = () => (
    <div className="form-inputBar">
        <div className="relative mb-1 w-full rounded-lg bg-gray-200 indent-0 ">
            <div className="hide-scrollbar max-h-[50vh] overflow-x-hidden overflow-y-scroll rounded-lg">
                <div className="relative flex pl-4">
                    <PlusIcon />
                    <input
                        type="text"
                        placeholder="Message #general"
                        spellCheck="true"
                        aria-haspopup="listbox"
                        aria-invalid="false"
                        aria-autocomplete="list"
                        autoCorrect="off"
                        data-can-focus="true"
                        aria-label="Message #tailwind-css"
                        aria-multiline="true"
                        contentEditable="true"
                        className="bottom-bar-input"
                    />
                </div>
            </div>
        </div>
    </div>
);

export default BottomBar
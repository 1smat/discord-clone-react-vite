import Navigation from "src/modules/Navigation";
import { IChatMessage, chatMessages } from "src/utils/Data";
import Post from "./components/Post";
import BottomBar from "./components/BottomBar";

const Content = () => {
    return (
        <div className="content-container">
            <Navigation />
            <div className="content-wrap">
                <main className="relative flex min-h-0 min-w-0 flex-auto flex-col">
                    <div className="relative z-0 flex min-h-0 min-w-0 flex-auto">
                        <div className="absolute top-0 bottom-0 left-0 right-0 overflow-x-hidden overflow-y-scroll">
                            <div className="content-list">
                                {chatMessages.map((message: IChatMessage, id: number) => (
                                    <Post
                                        name={message.name}
                                        timestamp={message.timestamp}
                                        text={message.text}
                                        image={message.image}
                                        key={id}
                                    />
                                ))}
                                <div className="h-[30px] w-[1px]"></div>
                            </div>
                        </div>
                    </div>
                    <BottomBar />
                </main>
            </div>
        </div>
    );
};






export default Content;

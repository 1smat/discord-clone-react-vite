export interface IServer {
  url: string
}

export interface IChannel {
  header?: string
  sub: string[]
}


export interface IChatMessage {
  name: string
  timestamp: string
  text: string
  image: string
}


export const servers: IServer[] = [
  {
    url: "https://cdn.discordapp.com/icons/662267976984297473/e75033be72087a87fa09e91727dac2a4.webp?size=96",
  },
  {
    url: "https://cdn.discordapp.com/icons/950701840901746708/9e2a49f7e589690844740c8754e0715e.webp?size=96",
  },
];

export const channels:IChannel[] = [
  {
    header: "general",
    sub: ["general", "chill-chat", "memes"],
  },
  { header: "game", sub: ["mine-sweeper", "snake", "tic-tac-toe"] },
  { header: "dev chat", sub: ["react", "vite" ,"tailwind-css"] },
];

export const chatMessages:IChatMessage[] = [
  {
    name: "Ismat",
    timestamp: "Today at 4:35 PM",
    text: "Hello",
    image: "https://yt3.googleusercontent.com/RIZShYWEREiuNks5Hok79M1uepUPpQq8c7D8J7p-B2iPGxgb-NxU8o4KBzwcXku4yylYwkOrYw=s176-c-k-c0x00ffffff-no-rj"
  },
  {
    name: "Higuain",
    timestamp: "Today at 4:36 PM",
    text: "Hello?",
    image: "https://img.a.transfermarkt.technology/portrait/big/39153-1647683336.jpg?lm=1"
  },

];






  

 
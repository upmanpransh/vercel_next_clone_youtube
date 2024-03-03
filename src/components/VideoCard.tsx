import { useRouter } from "next/router"
import type { Video } from "../videos"
import { Line } from "./Line"

export const VideoCard = ({video}: {video: Video}) => {
    const router = useRouter();
    return <div className="cursor-pointer " onClick={() => {
        router.push("/video/1");
    }}>
        <div className="rounded-xl overflow-hidden">
            <div>
                <img src={video?.image} />
                <Line progress={10} />
            </div>
        </div>
        <div className="grid grid-cols-12 pt-1">
        <div className="col-span-2">
                 <img className="rounded-full w-12 h-12" src={video?.thumbimage} alt="" />
             </div>
        <div className="col-span-8">
        <div className={"text-white-800 text-lg font-medium"}>
            {video?.title}
        </div>
        <div className={"text-gray-400 text-base font-normal		"}>
            {video?.author}
        </div>
        <div className="flex">
            <div className={"text-gray-400 text-base font-normal	pr-2	"}>
                {video?.views} 
            </div>
            <div className={"text-gray-400 text-base font-normal		"}>
            • {video?.timestamp}
            </div>
            </div>
        </div>
        </div>
    </div>
}






























// export function VideoCard(props : any){
//     return <div className="p-3">
//         <img className="rounded-xl" src={props.image} alt="" />
//          <div className="grid grid-cols-12 pt-2">
//             <div className="col-span-1">
//                 <img className="rounded-full w-12 h-12" src={props.thumbimage} alt="" />
//             </div>
//             <div className="col-span-11 pl-2">
//                 <div>
//                     {props.title}
//                 </div>
//                 <div className="col-span-11 text-gray-400 text-base">
//                     {props.author}
//                 </div>
//                 <div className="col-span-11 text-gray-400 text-base">
//                     {props.views} | {props.timestamp}
//                 </div>
//             </div>
//          </div>
//     </div>
// }
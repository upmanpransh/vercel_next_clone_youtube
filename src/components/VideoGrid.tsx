import { VideoCard } from "./VideoCard"
import { VIDEOS } from "@/videos"


export const VideoGrid = () =>{
    return <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {VIDEOS.map(video => <div className="p-2">
            <VideoCard
                video={video}
            ></VideoCard>
        </div>)}
    </div>
}

























































// const VIDEOS = [{
//   title:"Fighter: Mitti(Full video) Hrithik Roshan, Deepika Padukone, Anil Kapoor|Vishal-Sheykhar",
//     image:"photo.png",
//     thumbimage:"photo2.png",
//     author:"T-series",
//     views:"23 lakh",
//     timestamp:"4 days to go"
// },{
//   title:"Fighter: Mitti(Full video) Hrithik Roshan, Deepika Padukone, Anil Kapoor|Vishal-Sheykhar",
//     image:"photo.png",
//     thumbimage:"photo2.png",
//     author:"T-series",
//     views:"23 lakh",
//     timestamp:"4 days to go"
// },{
//   title:"Fighter: Mitti(Full video) Hrithik Roshan, Deepika Padukone, Anil Kapoor|Vishal-Sheykhar",
//     image:"photo.png",
//     thumbimage:"photo2.png",
//     author:"T-series",
//     views:"23 lakh",
//     timestamp:"4 days to go"
// },{
//   title:"Fighter: Mitti(Full video) Hrithik Roshan, Deepika Padukone, Anil Kapoor|Vishal-Sheykhar",
//     image:"photo.png",
//     thumbimage:"photo2.png",
//     author:"T-series",
//     views:"23 lakh",
//     timestamp:"4 days to go"
// },{
//   title:"Fighter: Mitti(Full video) Hrithik Roshan, Deepika Padukone, Anil Kapoor|Vishal-Sheykhar",
//     image:"photo.png",
//     thumbimage:"photo2.png",
//     author:"T-series",
//     views:"23 lakh",
//     timestamp:"4 days to go"
// },{
//   title:"Fighter: Mitti(Full video) Hrithik Roshan, Deepika Padukone, Anil Kapoor|Vishal-Sheykhar",
//     image:"photo.png",
//     thumbimage:"photo2.png",
//     author:"T-series",
//     views:"23 lakh",
//     timestamp:"4 days to go"
// },{
//   title:"Fighter: Mitti(Full video) Hrithik Roshan, Deepika Padukone, Anil Kapoor|Vishal-Sheykhar",
//     image:"photo.png",
//     thumbimage:"photo2.png",
//     author:"T-series",
//     views:"23 lakh",
//     timestamp:"4 days to go"
// },{
//   title:"Fighter: Mitti(Full video) Hrithik Roshan, Deepika Padukone, Anil Kapoor|Vishal-Sheykhar",
//     image:"photo.png",
//     thumbimage:"photo2.png",
//     author:"T-series",
//     views:"23 lakh",
//     timestamp:"4 days to go"
// },{
//   title:"Fighter: Mitti(Full video) Hrithik Roshan, Deepika Padukone, Anil Kapoor|Vishal-Sheykhar",
//     image:"photo.png",
//     thumbimage:"photo2.png",
//     author:"T-series",
//     views:"23 lakh",
//     timestamp:"4 days to go"
// },{
//   title:"Fighter: Mitti(Full video) Hrithik Roshan, Deepika Padukone, Anil Kapoor|Vishal-Sheykhar",
//     image:"photo.png",
//     thumbimage:"photo2.png",
//     author:"T-series",
//     views:"23 lakh",
//     timestamp:"4 days to go"
// }]

// export const VideoGrid = () =>{
//   return <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
//       {VIDEOS.map(video => <div>
//           <VideoCard
//               title={video.title}
//               image={video.image}
//               thumbimage={video.thumbimage}
//               author={video.author}
//               views={video.views}
//               timestamp={video.timestamp}
//           ></VideoCard>
//       </div>)}
//   </div>
// }
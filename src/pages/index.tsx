import Image from "next/image";
import { Inter } from "next/font/google";
import { VideoCard } from "../components/VideoCard";
import { VideoGrid } from "@/components/VideoGrid";
import { Appbar } from "@/components/Appbar";
import { LeftBar } from "@/components/LeftBar";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <Appbar></Appbar>
      <div className="flex">
      <LeftBar></LeftBar>
      <VideoGrid></VideoGrid>
      </div>
    </main>
  );
}

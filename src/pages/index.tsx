import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="w-screen overflow-clip h-screen flex flex-col items-center py-40 bg-stone-800">
      <div>
        <div className="overflow-clip rounded-3xl">
          <iframe src="/vilgain-small.pdf" className="w-[350px] md:w-[512px] xl:w-[1024px] relative h-[400px] md:h-[800px] bg-white"></iframe>
        </div>
      </div>
    </div>
  );
}

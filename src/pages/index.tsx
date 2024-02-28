import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="w-full h-full flex flex-col items-center py-40">
      <div>
        <div className="overflow-clip rounded-3xl">
          <iframe src="/vilgain-small.pdf" className="w-[350px] md:w-[512px] xl:w-[1024px] relative h-[800px]"></iframe>
        </div>
      </div>
    </div>
  );
}

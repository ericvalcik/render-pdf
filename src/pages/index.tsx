import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="w-full h-full flex flex-col items-center py-40">
      <div className="overflow-clip rounded-3xl">
        <iframe src="/vilgain-small.pdf"
                style={{ width: "1020px", height: "800px" }}></iframe>
      </div>
    </div>
  );
}

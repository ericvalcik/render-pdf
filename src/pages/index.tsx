import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="w-full h-full flex flex-col items-center py-40">
      <iframe src="/pdfresizer.com-pdf-resize-motr.pdf"
              style={{ width: "1020px", height: "800px" }}></iframe>
    </div>
  );
}

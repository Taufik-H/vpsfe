import Navbar from "@/components/custom/Navbar";
import RentGpu from "@/components/custom/RentGpu";

export default function Home() {
  return (
    <>
      <RentGpu tabs={true} query={""} />
    </>
  );
}

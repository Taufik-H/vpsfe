import RentGpu from "@/components/custom/RentGpu";

export default function Home() {
  return (
    <>
      <RentGpu query={"ctg=gaming"} name={"Gaming"} />
    </>
  );
}

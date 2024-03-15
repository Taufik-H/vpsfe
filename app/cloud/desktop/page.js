import RentGpu from "@/components/custom/RentGpu";

export default function Home() {
  return (
    <>
      <RentGpu query={"ctg=desktop"} name={"Desktop"} />
    </>
  );
}

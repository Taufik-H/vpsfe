import Navbar from "@/components/custom/Navbar";

export default function UserLayout({ children }) {
  return (
    <div className="">
      <Navbar />
      {children}
    </div>
  );
}

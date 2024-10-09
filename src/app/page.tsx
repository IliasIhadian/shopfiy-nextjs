import Image from "next/image";
import Navbar from "../components/navbar";

export default function Home() {
  return (
    <div className="grid grid-cols-3">
      <div>
        <Navbar></Navbar>
      </div>
      <div></div>
      <div></div>
    </div>
  );
}

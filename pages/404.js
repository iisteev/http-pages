import Image from "next/image";
import emoji from "../assets/emoji.png";

export default function NotFoundError() {
  return (
    <>
      <div className="h-screen w-screen bg-gray-100 flex justify-center items-center">
        <div className="container flex flex-col md:flex-row items-center justify-center px-5 text-gray-700">
          <div className="max-w-md flex flex-col items-center">
            <div className="text-8xl font-dark font-medium font-bold">404</div>
            <p className="text-2xl md:text-3xl font-light leading-normal">
              Sorry we couldn&apos;t find this page.
            </p>
            <div className="w-56 h-56 mr-4">
              <Image src={emoji} alt="emoji" layout="intrinsic" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

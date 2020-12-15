export default function ErrorCode() {
  return (
    <>
      <div className="h-screen w-screen bg-gray-100 flex justify-center items-center">
        <div className="container flex flex-col md:flex-row items-center justify-center px-5 text-gray-700">
          <div className="max-w-md flex flex-col items-center">
            <div className="text-8xl font-dark font-medium font-bold">503</div>
            <p className="text-2xl md:text-3xl font-light leading-normal">
              Sorry Something went wrong
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

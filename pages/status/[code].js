import { getReasonPhrase } from "http-status-codes";
import Head from "next/head";

function Code({ statusCode, message }) {
  return (
    <div className="h-screen w-screen bg-gray-100 flex justify-center items-center">
      <Head>
        <title>{statusCode + " " + message}</title>
      </Head>

      <main className="container flex flex-col md:flex-row items-center justify-center px-5 text-gray-700">
        <div className="text-8xl font-dark font-medium font-bold">
          {statusCode}
        </div>
        <div className="text-center m-5">
          <h1 className="text-base md:text-4xl sm:text-2xl font-dark font-medium font-bold">
            {statusCode >= 400
              ? "Sorry, something went wrong !"
              : "Working on it..."}
          </h1>

          <p className="text-3xl md:text-4xl sm:text-xl font-light leading-normal">
            {message}
          </p>
        </div>
      </main>
    </div>
  );
}

function getInitialProps({ query, res }) {
  let { code, message } = query;
  let statusCode = code;

  try {
    message = message ? message : getReasonPhrase(code);
    res.statusCode = code;
  } catch (error) {
    res.statusCode = 503;
    statusCode = 503;
    message = getReasonPhrase(503);
  }

  return {
    statusCode: statusCode,
    message: message,
  };
}

Code.getInitialProps = getInitialProps;

export default Code;

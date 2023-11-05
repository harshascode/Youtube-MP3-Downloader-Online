import axios from "axios";
import { useRef, useState } from "react";
import { youtube_parser } from "./utils";

function App() {
  const inputUrlRef = useRef();
  const [urlResult, setUrlResult] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const youtubeID = youtube_parser(inputUrlRef.current.value);

    const options = {
      method: "get",
      url: "https://youtube-mp36.p.rapidapi.com/dl",
      headers: {
        "X-RapidAPI-Key": import.meta.env.VITE_RAPID_API_KEY,
        "X-RapidAPI-Host": "youtube-mp36.p.rapidapi.com",
      },
      params: {
        id: youtubeID,
      },
    };
    axios(options)
      .then((res) => setUrlResult(res.data.link))
      .catch((err) => console.log(err));

    inputUrlRef.current.value = "";
  };

  return (
    <div className="app">
      <div className="flex justify-between items-center my-6 py-6 px-4 rounded-2xl bg-white text-black font-bold">
        <span className="logo text-base cursor-pointer">MP3 Downloader</span>
        <nav className="flex-col flex-grow hidden pb-4 md:pb-0 md:flex md:justify-end md:flex-row">
          <a
            className="px-2 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
            href="#"
          >
            YT to MP3 Converter
          </a>

          <a
            className="px-2 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
            href="#"
          >
            Pricing
          </a>

          <a
            className="bg-[#0085FF] px-2 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
            href="#"
          >
            Login
          </a>
        </nav>
      </div>
      <section className="content py-12 sm:py-24 mt-8 mb-6">
        <h1 className="content_title">Youtube MP3 Downloader Online</h1>
        {/* <p className="content_description">
          Transform YouTube videos into MP3s in just a few clicks!
        </p> */}

        <div className="rounded pt-6 pb-2 mx-2">
          <form onSubmit={handleSubmit} className="form w-[450px] sm:w-[500px]">
            <input
              ref={inputUrlRef}
              placeholder="Paste a Youtube video URL link..."
              // className="form_input"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-6 rounded-l-2xl dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              type="text"
            />
            {/* <button type="submit" className="form_button flex absolute inset-y-0 right-0 items-center pr-3"> */}
            <button
              type="submit"
              className="flex inset-y-0 right-0 items-center bg-[#0085FF] p-6 rounded-r-2xl text-white"
            >
              Search
            </button>
          </form>
        </div>
        <p className="text-xs opacity-80">
          By downloading this video, you agree to the Fair Use Policy.
        </p>

        {urlResult ? (
          <a
            target="_blank"
            rel="noreferrer"
            href={urlResult}
            className="download_btn"
          >
            Download MP3
          </a>
        ) : (
          ""
        )}
      </section>
      <br />
      <hr />
      <div className="bg-[#0085ff] rounded-xl p-5 mt-12 text-base">
        <h2 className="font-bold">
          Simple Steps to Acquire Online MP3 Files for Free
        </h2>
        <div className="bg-[#0085ff] rounded-lg py-5 mt-0 text-sm">
          {/* <h2 className="font-bold my-3">Simple Steps to Acquire Online MP3 Files for Free</h2> */}
          <p className="font-bold my-0">Step 1: Copy the Source Link</p>
          <p>
            Start by opening the source website, then copy the URL from the
            address bar.
          </p>

          <p className="font-bold my-3 mt-6">
            Step 2: Paste the Link in the Search Bar
          </p>
          <p>
            Access our free MP3 grab tool in your browser, paste the URL into
            the search bar, and await the results.
          </p>

          <p className="font-bold my-3 mt-6">
            Step 3: Download Your Favorite MP3
          </p>
          <p>
            Select your desired MP3 download settings and click the Download
            button. Now, you can store the MP3 file on your computer.
          </p>
        </div>
      </div>

      <div className="pb-2">
        <div className="mx-auto my-5">
          <footer className="p-4 bg-white rounded-lg shadow md:px-6 md:py-8 dark:bg-gray-800">
            <div className="sm:flex sm:items-center sm:justify-between">
              <a
                href="#"
                target="_blank"
                className="flex items-center mb-4 sm:mb-0"
              >
                {/* <img src="https://flowbite.com/docs/images/logo.svg" className="mr-4 h-8" alt="Flowbite Logo" /> */}
                <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
                  MP3 Downloader
                </span>
              </a>
              <ul className="flex flex-wrap items-center mb-6 sm:mb-0">
                <li>
                  <a
                    href="#"
                    className="mr-4 text-sm text-gray-500 hover:underline md:mr-6 dark:text-gray-400"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="mr-4 text-sm text-gray-500 hover:underline md:mr-6 dark:text-gray-400"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="mr-4 text-sm text-gray-500 hover:underline md:mr-6 dark:text-gray-400"
                  >
                    Disclaimer
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm text-gray-500 hover:underline dark:text-gray-400"
                  >
                    DMCA
                  </a>
                </li>
              </ul>
            </div>
            <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
            <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
              © 2023{" "}
              <a href="/" target="_blank" className="hover:underline">
                MP3 Downloader™
              </a>
              . All Rights Reserved.
            </span>
          </footer>
        </div>
      </div>
    </div>
  );
}

export default App;

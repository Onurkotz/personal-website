"use client";
import useDownloader from "react-use-downloader";

export default function Download({ ...dict }) {
  const downloadText: any = dict.downloadButton;

  const { download, error, isInProgress, percentage } =
    useDownloader();

  const fileUrl =
    "https://e.pcloud.link/publink/show?code=XZeqjnZ7KgpVSAGfvb8nEe6NvlFamLAhcTV";

  //pcloud ayrıntılar alt satırda

  const filename = "myresume.pdf";

  return (
    <div>
      <button
        className="btn bg-amber-500 py-2 px-4 mb-5 rounded"
        onClick={() => download(fileUrl, filename)}
      >
        {isInProgress
          ? `${downloadText.processText} %${percentage}`
          : `${downloadText.buttonText}`}
      </button>

      {error && <p>possible error {JSON.stringify(error)}</p>}
    </div>
  );
}

{
  /* <button onClick={() => cancel()}>Cancel the download</button>
      <p>Download size in bytes {size}</p>
      <label>Downloading progress: {percentage}</label> */
}

// const { size, elapsed, percentage, download, cancel, error, isInProgress } =
//     useDownloader();


const VideoTitle = ({ originalTitle, title, overview }) => {
  return (
    <div className="py-6 pl-[100px] w-full h-full flex justify-end flex-col gap-3 rounded-sm bg-gradient-to-r from-black absolute  bottom-6">
      <h1 className="text-5xl text-white font-bold">{originalTitle} ({title})</h1>
      <p className="max-w-[450px] text-white text-lg">{overview}</p>
      <div className="flex gap-3">
        <button className="px-5 py-2 text-lg bg-white rounded-sm text-black "><i className="fa-solid fa-play" /> Play</button>
        <button className="px-5 py-2 text-lg bg-gray-500 opacity-70 text-white"><i className="fa-solid fa-circle-info" />  More Info</button>
      </div>
    </div>
  )
}

export default VideoTitle

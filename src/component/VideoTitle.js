
const VideoTitle = ({ originalTitle, title, overview }) => {
  return (
    <div className="py-6 md:pl-[100px] pl-2 w-full aspect-video flex justify-end flex-col gap-3 rounded-sm bg-gradient-to-r from-black absolute top-0">
      <h1 className="md:text-5xl text-white font-bold">{originalTitle} ({title})</h1>
      <p className="md:max-w-[450px] w-[250px] text-[12px] text-white md:text-lg">{overview}</p>
      <div className="flex gap-3">
        <button className="md:px-5 md:py-2 px-3 py-1 md:text-lg bg-white rounded-sm text-black "><i className="fa-solid fa-play" /> Play</button>
        <button className="md:px-5 md:py-2 px-3 py-1 md:text-lg bg-gray-500 opacity-70 text-white"><i className="fa-solid fa-circle-info" />  More Info</button>
      </div>
    </div>
  )
}

export default VideoTitle

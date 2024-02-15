import Header from "./Header"
import useBrowse from "../utils/useBrowse"

const Browse = () => {


  const browse = useBrowse()

  console.log("Render");

  return (
    <div className=" h-screen">
      {/* Header */}
      <div className="flex items-center border-b-2 shadow-lg shadow-slate-200">
        <Header />
      </div>
      {/* Browse Body */}
      <h1>Hello</h1>
    </div>
  )
}

export default Browse

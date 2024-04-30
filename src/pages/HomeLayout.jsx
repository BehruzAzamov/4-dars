import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"

function HomeLayout() {
  return (
    <>
      <main className="mx-auto px-5 max-w-[1200px]">
        <Navbar />
        <Outlet />
      </main>
    </>
  )
}

export default HomeLayout
import Avatar from "./Avatar";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
function AppBar() {
  const navigate = useNavigate()
  const { pathname } = useLocation()

  function logOut() {
    localStorage.removeItem("token")
    localStorage.removeItem("userId")
    localStorage.removeItem("username")

    navigate("/")
  }
  return (
    <div className=" border-b border-b-slate-600 flex items-center justify-between px-4 md:px-10 py-2">
      <Link to={"/"}><div className="font-custom text-xl">INKSPOT</div></Link>
      <div className="flex gap-1 md:gap-4 items-center">
        {
          pathname == "/publish" || pathname == `/profile/${localStorage.getItem("userId")}` ? null : (
            <Link to={"/publish"}>
              <button
                type="submit"
                className=" hover:shadow-[0_6px_20px_rgba(0,118,255,23%)] hover:bg-[rgba(0,118,255,0.9)] px-4 md:px-8 py-1 bg-[#0070f3] rounded-md text-white font-md transition duration-200 ease-linear"
              >
                <p className="font-semibold ">New</p>
              </button>
            </Link>
          )
        }

        {
          pathname == `/profile/${localStorage.getItem("userId")}` ? null : (<>
            <Link to={`/profile/${localStorage.getItem("userId")}`}>
              <div>
                <Avatar authorName="Gurveer Singh" />
              </div>
            </Link>
            <div>
              <button onClick={logOut} type="button" className="hidden md:block text-sm font-medium hover:underline underline-offset-4 border px-2 py-1 rounded-lg">
                Log Out
              </button>
              <button title="log out" onClick={logOut} type="button" className="md:hidden text-sm font-medium hover:underline underline-offset-4  px-2 py-1 rounded-lg">
                <svg fill="#000000" height="24px" width="20px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 384.971 384.971" xmlSpace="preserve"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g id="Sign_Out"> <path d="M180.455,360.91H24.061V24.061h156.394c6.641,0,12.03-5.39,12.03-12.03s-5.39-12.03-12.03-12.03H12.03 C5.39,0.001,0,5.39,0,12.031V372.94c0,6.641,5.39,12.03,12.03,12.03h168.424c6.641,0,12.03-5.39,12.03-12.03 C192.485,366.299,187.095,360.91,180.455,360.91z"></path> <path d="M381.481,184.088l-83.009-84.2c-4.704-4.752-12.319-4.74-17.011,0c-4.704,4.74-4.704,12.439,0,17.179l62.558,63.46H96.279 c-6.641,0-12.03,5.438-12.03,12.151c0,6.713,5.39,12.151,12.03,12.151h247.74l-62.558,63.46c-4.704,4.752-4.704,12.439,0,17.179 c4.704,4.752,12.319,4.752,17.011,0l82.997-84.2C386.113,196.588,386.161,188.756,381.481,184.088z"></path> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> </g> </g></svg>
              </button>

            </div>
          </>

          )
        }

      </div>
    </div >
  );
}

export default AppBar;

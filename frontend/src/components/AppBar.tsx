import Avatar from "./Avatar";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
function AppBar() {
  const navigate = useNavigate()
  const { pathname } = useLocation()

  function logOut() {
    localStorage.removeItem("token")
    navigate("/")
  }
  return (
    <div className=" border-b border-b-slate-600 flex items-center justify-between px-10 py-2">
      <Link to={"/"}><div className="font-custom text-xl">INKSPOT</div></Link>
      <div className="flex gap-4 items-center">
        {
          pathname == "/publish" ? null : (
            <Link to={"/publish"}>
          <button
            type="submit"
            className=" hover:shadow-[0_6px_20px_rgba(0,118,255,23%)] hover:bg-[rgba(0,118,255,0.9)] px-8 py-1 bg-[#0070f3] rounded-md text-white font-md transition duration-200 ease-linear"
          >
            <p className="font-semibold ">New</p>
          </button>
        </Link>
          )
        }
        
        <div>
          <Avatar authorName="Gurveer Singh" />
        </div>
        <div>
          <button onClick={logOut} type="button" className="text-sm font-medium hover:underline underline-offset-4  border px-2 py-1 rounded-lg">
            Log Out
          </button>
        </div>
      </div>
    </div>
  );
}

export default AppBar;

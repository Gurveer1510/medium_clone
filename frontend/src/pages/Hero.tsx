import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Hero() {
  const token = localStorage.getItem("token")
  const [loggedIn, setLoggedIn] = useState(false)
  useEffect(() => {
    if(token){
      setLoggedIn(true)
    } else{
      setLoggedIn(false)
    }
  } ,[token])

  function logOut(){
    localStorage.removeItem("token")
  }
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <header className="bg-primary text-primary-foreground px-4 lg:px-6 h-14 flex items-center">
        <Link to="/" className="flex items-center justify-center">
          <PrinterIcon className="h-6 w-6" />
          <span className="sr-only">Inkspot</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link to="/signin" className={`text-sm font-medium hover:underline underline-offset-4 border px-2 py-1 ${loggedIn ?  "hidden" : null}  rounded-lg`}>
            Sign in
          </Link>
          <Link to="/signup" className={`text-sm font-medium hover:underline underline-offset-4  border px-2 py-1 ${loggedIn ?  "hidden" : null} rounded-lg`}>
            Sign up
          </Link>
          <button onClick={logOut} type="button" className={`text-sm font-medium hover:underline underline-offset-4  border px-2 py-1 rounded-lg ${!  loggedIn ?  "hidden" : null}`}>
            Log Out
          </button>
          
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full bg-[url('/hero-image.jpg')] bg-cover bg-center py-24 md:py-32 lg:py-40">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-3xl space-y-6 text-center">
              <h1 className="text-4xl font-bold tracking-tight text-primary-foreground sm:text-5xl md:text-6xl">
                INKSPOT
              </h1>
              <p className="text-xl text-muted-foreground md:text-2xl">
                Explore the world of creative writing and storytelling.
              </p>
              <Link
                to="/blogs"
                className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-6 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
              >
                Explore the Blog
              </Link>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-primary text-primary-foreground py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <div className="container flex flex-col gap-2 sm:flex-row justify-between">
          <p className="text-xs">&copy; 2024 Inkspot. All rights reserved.</p>
          <nav className="sm:ml-auto flex gap-4 sm:gap-6">
            <Link to="/terms" className="text-xs hover:underline underline-offset-4">
              Terms of Service
            </Link>
            <Link to="/privacy" className="text-xs hover:underline underline-offset-4">
              Privacy
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  );
}

interface PrinterIconProps extends React.SVGProps<SVGSVGElement> {}

function PrinterIcon(props: PrinterIconProps) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />
      <path d="M6 9V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6" />
      <rect x="6" y="14" width="12" height="8" rx="1" />
    </svg>
  );
}

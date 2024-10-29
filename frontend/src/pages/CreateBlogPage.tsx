import Editor from "../components/Editor";
import axios from "axios";
import { useState } from "react";
import parse from "html-react-parser";
import { useNavigate } from "react-router-dom";

function CreateBlogPage() {
  const [value, setValue] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate()

  async function createBlog(){
    try {
      const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/v1/blog`,{
        title: value,
        content: content
      },{
        headers:{
          "Authorization" : localStorage.getItem("token")
        }
      })

      if(response){
        const id = response.data.id
        navigate(`/blog/${id}`)
      }
    } catch (error) {
      
    }
  }

  return (
    <div
      className="m-4 p-8  border-2 rounded-lg "
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 ">
        <div className="col-span-2 lg:col-span-1 lg:border-r-2   ">
          <div>
            <div className="font-custom absolute text-3xl gap-80 flex items-center justify-between tracking-wide top-10 ">
              Title
              <div>
                <button
                onClick={createBlog}
                  type="button"
                  className="flex flex-row items-center justify-center bg-black px-2 py-2  text-sm font-bold border-2 text-white  leading-6 capitalize duration-100 transform rounded-md shadow-lg cursor-pointer focus:ring-4 focus:ring-green-500 focus:ring-opacity-50 focus:outline-none sm:mb-0 sm:w-auto sm:mr-4 md:pl-8 md:pr-6 xl:pl-6 xl:pr-6   hover:shadow-lg hover:-translate-y-1"
                >
                  Publish
                  <span className="ml-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      data-name="Layer 1"
                      viewBox="0 0 24 24"
                      className="w-5 h-5 fill-current"
                    >
                      <path
                        fill="currentColor"
                        d="M17.92,11.62a1,1,0,0,0-.21-.33l-5-5a1,1,0,0,0-1.42,1.42L14.59,11H7a1,1,0,0,0,0,2h7.59l-3.3,3.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0l5-5a1,1,0,0,0,.21-.33A1,1,0,0,0,17.92,11.62Z"
                      ></path>
                    </svg>
                  </span>
                </button>
              </div>
            </div>
            <Editor
              value={value}
              onChange={setValue}
              theme={"bubble"}
              style="h-full"
            />

            <div className="mt-4">
              <p className="font-custom text-3xl absolute ">Content</p>
              <Editor
                value={content}
                onChange={setContent}
                theme="snow"
                style="min-h-[360px] "
              />
            </div>
          </div>
        </div>

        <div className="col-span-2 lg:col-span-1 hidden lg:block p-8 pt-0 ">
          <p className="text-3xl font-custom">Preview</p>
          <div className="mt-4" >
            {parse(value)}
          </div>
          <div className="mt-4" >
            {parse(content)}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateBlogPage;

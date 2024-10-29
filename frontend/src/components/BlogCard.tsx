import Avatar from "./Avatar";
import { Link } from "react-router-dom";
import parse from "html-react-parser";

type BlogCardProps = {
  id: string;
  authorName: string;
  title: string;
  content: string;
  publishedDate: string;
};

function BlogCard({
  id,
  authorName,
  title,
  content,
  publishedDate,
}: BlogCardProps) {
  const created_at = publishedDate.split("T")[0];
  const date = new Date(created_at);
  const formattedDate = date.toLocaleDateString("en-gb", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
  return (
    <Link to={`/blog/${id}`}>
      <div className="flex justify-center ">
        <div
          className=" border-b-2 border-b-slate-200 mx-5 md:mx-50  pb-2 cursor-pointer my-1 w-screen max-w-screen-lg"
          key={id}
        >
          <div className="font-[20px] flex gap-2 p-2 pb-1 items-center">
            <Avatar authorName={authorName} />
            <div className="flex items-center gap-1">
              {authorName}{" "}
              <p className="text-[8px] pt-1 text-gray-500">&#9679;</p>{" "}
              {formattedDate}
            </div>
          </div>

          <div className="text-2xl font-bold tracking-tighter pl-2">
            {parse(title)}
          </div>
          <div className="pl-2 hidden lg:block">
            <p>{parse(content.slice(0, 300))}...</p>
          </div>
          <div className="pl-2 lg:hidden ">
            {parse(content.slice(0, 100))}...
          </div>

          <div className="pl-2 text-gray-500 mt-4">
            {Math.ceil(content.length / 100)} minute read
          </div>
        </div>
      </div>
    </Link>
  );
}

export default BlogCard;

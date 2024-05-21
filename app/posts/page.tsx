// This is the posts tab, don't get confused bozo

import Navbar from "@/app/ui/Navbar"

export default function PostsTab () {
    const posts = [
        {
        id:1,
        header: "Git rid of it",
        path: "git-rid-of-it",
        date: "14022024",
        },
        {
        id:2,
        header: "Minimal bash-like error",
        path: "minimal-bash-like-error",
        date: "03032024",
        }
      ]
    return (
        <>
            <div className="mt-5 px-[20%]">
                <Navbar />
                <h1 className="text-xl mt-5">Posts: </h1>
                <p>Some of these posts are problems i have encountered, so i put them here since i forget stuff</p>
                <div className="pl-5 mt-5">
                    {posts.reverse().map((element, index) => (
                        <>
                        <dl>
                        <li>
                        <span key={index}>{element.date}{index < posts.length && " "}</span>
                        <a
                        className="underline hover:text-red-400"
                        href={`/posts/${element.path}`}
                        target="_self"
                        >{element.header}
                        </a>
                        </li>
                        </dl>
                        </>
                    ))}
                </div>
            </div>
        </>
    )
}
import axios from "axios"

export const deleteBlog = async(id: string) => {
    try {
        await axios.delete(`${import.meta.env.VITE_BACKEND_URL}/api/v1/blog/${id}`,{
                    headers: {
                        "Authorization" : localStorage.getItem("token")
                    }
                })
    } catch (error) {
        console.log("blog delete error", error)
    }
}
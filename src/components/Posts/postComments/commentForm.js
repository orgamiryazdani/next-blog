import http from "@/services/httpService";
import routerPush from "@/utils/routerPush";
import { useRouter } from "next/router";
import React, { useState } from "react"
import { toast } from "react-hot-toast";

const CommentForm = ({ postId, responseTo, setOnReply }) => {
    const [commentValue, setCommentValue] = useState("")
    const router = useRouter()
    const submitHandler = (e) => {
        e.preventDefault();
        const data = {
            content: commentValue,
            postId,
            responseTo
        }
        http.post("/post-comment/save-comment", data).then(res => {
            setCommentValue("")
            if (setOnReply) setOnReply((open) => !open)
            toast.success(res.data.message)
            routerPush(router)
        }).catch((err) => {
            toast.error(err?.response?.data?.message)
        })
    }
    return (
        <form>
            <textarea
                className="focus:ring-primary ring-1 ring-gray-300 shadow-sm focus:outline-none focus:ring-2 p-4 rounded my-4 w-full border-none focus:ring-purple-700"
                value={commentValue}
                onChange={(e) => setCommentValue(e.target.value)}
                placeholder="نظرت رو برام بنویس ..."
            />
            <button onClick={submitHandler} className="mt-4 mx-auto py-3 w-full sm:w-56 bg-violet-600 rounded-2xl text-white px-3 md:text-lg">
                ارسال نظر
            </button>
        </form>
    );
}

export default CommentForm;
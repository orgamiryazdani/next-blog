import toLocalDate from "@/utils/toLocalDate";
import { UserIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import CommentForm from "./commentForm";

const SingleComment = ({ comment, postId }) => {
    const [onReply, setOnReply] = useState(false)

    return (
        <div className="border border-gray-300 rounded-xl p-4 mb-8">
            <div className="flex  items-center justify-start">
                <UserIcon className="h-12 w-12 stroke-gray-400" strokeWidth={1} />
                <div className="flex flex-col justify-between mr-4">
                    <span className="block text-xs text-gray-600">{comment.writer?.name}</span>
                    <span className="block text-xs text-gray-500 mt-2 dark:text-slate-500">{toLocalDate(comment.createdAt)}</span>
                </div>
            </div>
            <div className="mt-4 leading-10">{comment.content}</div>
            <button className="text-sm p-4 cursor-pointer text-blue-600" onClick={() => setOnReply(!onReply)}>
                {!onReply ? "پاسخ به؟" : "بیخیال"}
            </button>
            {onReply &&
                <div className="mt-4">
                    <span className="text-gray-500 text-sm">در حال پاسخ به {comment.writer?.name}</span>
                    <CommentForm postId={postId} responseTo={comment._id} setOnReply={setOnReply}/>
                </div>
            }
        </div>
    );
}

export default SingleComment;
import React, { useState } from "react"
import SingleComment from "./SingleComment";
import CommentForm from "./commentForm";
import ReplyComment from "./ReplyComment";

const PostComments = ({ post }) => {


    return (
        <div>
            <h2>نظرات</h2>
            {post.comments.map((comment, index) => {
                return !comment.responseTo && comment.status === 2 &&
                    <React.Fragment key={comment._id}>
                        <SingleComment comment={comment} postId={post._id}/>
                        <ReplyComment comments={post.comments} parentCommentId={comment._id} postId={post._id}/>
                    </React.Fragment>
            })}
            {/* base comment form */}
            <div className="mt-4">
                <span className="text-gray-500 text-sm">ارسال دیدگاه جدید</span>
                <CommentForm postId={post._id} responseTo={null}/>
            </div>
        </div>
    );
}

export default PostComments;
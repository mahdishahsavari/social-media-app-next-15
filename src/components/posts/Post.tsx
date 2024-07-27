"use client";

import { PostData } from "@/lib/types";
import Link from "next/link";
import React from "react";
import UserAvatar from "../mainPage/UserAvatar";
import { formatRelativeDate } from "@/lib/utils";
import { useSession } from "@/app/(main)/SessionProvider";
import PostMoreButton from "./PostMoreButton";

type PostProps = {
  post: PostData;
};

const Post = ({ post }: PostProps) => {
  const { user } = useSession();

  return (
    <div>
      <article className="group/post space-y-3 rounded-2xl bg-card p-5 shadow-sm">
        <div className="flex justify-between gap-3">
          <div className="flex flex-wrap gap-3">
            <Link href={`/users/${post.user.username}`}>
              <UserAvatar avatarUrl={post.user.avatarUrl} />
            </Link>
            <div>
              <Link
                href={`/users/${post.user.username}`}
                className="block font-medium hover:underline"
              >
                {post.user.username}
              </Link>
              <Link
                href={`/posts/${post.id}`}
                className="block text-sm text-muted-foreground hover:underline"
              >
                {formatRelativeDate(post.createdAt)}
              </Link>
            </div>
          </div>
          {post.user.id === user.id && (
            <PostMoreButton
              post={post}
              className="opacity-0 transition-opacity group-hover/post:opacity-100"
            />
          )}
        </div>
        <div className="whitespace-pre-line break-words rounded-2xl bg-gray-100/60 p-5 shadow-md dark:bg-transparent">
          {post.content}
        </div>
      </article>
    </div>
  );
};

export default Post;

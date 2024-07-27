"use client";

import React from "react";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Placeholder from "@tiptap/extension-placeholder";
import { SubmitPost } from "./actions";
import UserAvatar from "@/components/mainPage/UserAvatar";
import { useSession } from "@/app/(main)/SessionProvider";
import { Button } from "@/components/ui/button";
import "./styles.css";
import { useSubmitPostMutation } from "./mutation";
import LoadingButton from "@/components/LoadingButton";

const PostEditor = () => {
  const { user } = useSession();

  if (!user) throw new Error("Unauthorized");

  const mutation = useSubmitPostMutation();

  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        bold: false,
        italic: false,
      }),
      Placeholder.configure({
        placeholder: "Write Something To Post ✍️",
      }),
    ],
  });

  const input =
    editor?.getText({
      blockSeparator: "\n",
    }) || "";

  function onSubmit() {
    mutation.mutate(input, {
      onSuccess: () => {
        editor?.commands.clearContent();
      },
    });
  }

  return (
    <div className="flex flex-col gap-5 rounded-2xl bg-card p-5 shadow-sm">
      <div className="flex gap-5">
        <UserAvatar avatarUrl={user.avatarUrl} className="hidden sm:inline" />
        <EditorContent
          editor={editor}
          className="max-h-[20rem] w-full overflow-y-auto rounded-2xl bg-background px-5 py-3"
        />
      </div>
      <div className="flex justify-end">
        <LoadingButton
          loading={mutation.isPending}
          onClick={onSubmit}
          disabled={!input.trim()}
          className="min-w-20 px-8 py-3 text-sm font-medium transition hover:rotate-3 hover:scale-110 hover:shadow-xl focus:outline-none focus:ring"
        >
          Post
        </LoadingButton>
      </div>
    </div>
  );
};

export default PostEditor;

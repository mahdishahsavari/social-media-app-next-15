import React from "react";
import Image from "next/image";
import avatarPlaceHolder from "@/assets/avatar-placeholder.png";
import { cn } from "@/lib/utils";

type UserAvatarProps = {
  avatarUrl: string | null | undefined;
  size?: number;
  className?: string;
};

const UserAvatar = ({ avatarUrl, className, size }: UserAvatarProps) => {
  return (
    <Image
      src={avatarUrl || avatarPlaceHolder}
      alt="Avatar image"
      width={size ?? 48}
      height={size ?? 48}
      className={cn(
        "aspect-square h-fit flex-none rounded-full bg-secondary object-cover",
        className,
      )}
    />
  );
};

export default UserAvatar;

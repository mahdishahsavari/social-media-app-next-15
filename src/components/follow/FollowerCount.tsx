"use client";

import React from "react";
import { FollowerInfo } from "@/lib/types";
import useFollowerInfo from "@/hooks/useFollowerInfo";
import { formatNumber } from "@/lib/utils";

type FollowerCountProps = {
  userId: string;
  initialState: FollowerInfo;
};

const FollowerCount = ({ initialState, userId }: FollowerCountProps) => {
  const { data } = useFollowerInfo(userId, initialState);

  return (
    <span>
      Followers:{" "}
      <span className="font-semibold">{formatNumber(data.followers)}</span>
    </span>
  );
};

export default FollowerCount;

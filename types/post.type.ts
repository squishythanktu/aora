import { UserResponse } from "@/types/user.type";

export type Post = {
  $id: string;
  title: string;
  thumbnail: string;
  video: string;
  users: UserResponse;
};

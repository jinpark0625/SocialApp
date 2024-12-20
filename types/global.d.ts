export {};

declare global {
  type ColorTypes =
    | "primary"
    | "gray_600"
    | "gray_500"
    | "gray_400"
    | "gray_300"
    | "gray_200"
    | "gray_100"
    | "white";

  type User = {
    id: number;
    email: string;
    password?: string;
    nickname: string;
    profileImg: string;
  };

  type Feed = {
    id: number;
    userId: number;
    image: string;
    text: string;
    comments: Comment[];
    createdAt: string;
  };

  type Comment = {
    id: number;
    userId: number;
    text: string;
    createdAt: string;
  };

  type ProfileData = {
    nickname?: string;
    profileImg?: string;
  };

  type FeedData = {
    image: string;
    text: string;
  };

  type MockDatabase = {
    users: User[];
    feeds: Feed[];
  };
}

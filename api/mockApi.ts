import mockDatabase from "@/data/mockDatabase.json";
import { UserWithPassword, UserWithoutPasswordAndEmail } from "@/types/api";
const db: MockDatabase = mockDatabase;

export const mockApi = {
  // User API
  login: async (email: string, password: string): Promise<UserWithPassword> => {
    const user = db.users.find(
      (u) => u.email === email && u.password === password
    );
    if (!user) {
      throw new Error("아이디 또는 비밀번호를 확인해주세요.");
    }
    const { password: _, ...userWithoutPassword } = user;
    return userWithoutPassword;
  },

  signUp: async (
    email: string,
    password: string,
    nickname: string
  ): Promise<UserWithPassword> => {
    if (db.users.find((u) => u.email === email)) {
      throw new Error("이메일이 이미 존재합니다.");
    }
    const newUser: User = {
      id: db.users.length + 1,
      email,
      password,
      nickname,
      profileImg: "",
    };
    db.users.push(newUser);
    const { password: _, ...userWithoutPassword } = newUser;
    return userWithoutPassword;
  },

  updateProfile: async (
    userId: number,
    profileData: ProfileData
  ): Promise<UserWithPassword> => {
    const user = db.users.find((u) => u.id === userId);
    if (!user) {
      throw new Error("사용자를 찾을 수 없습니다.");
    }

    const updatedUser = {
      ...user,
      ...(profileData.nickname && { nickname: profileData.nickname }),
      ...(profileData.profileImg && { profileImg: profileData.profileImg }),
    };

    const { password: _, ...userWithoutPassword } = updatedUser;
    return userWithoutPassword;
  },

  getFeedDetail: async (
    feedId: number
  ): Promise<Feed & { user: UserWithoutPasswordAndEmail }> => {
    const feed = db.feeds.find((f) => f.id === feedId);
    if (!feed) {
      throw new Error("게시글을 찾을 수 없습니다.");
    }
    const user = db.users.find((u) => u.id === feed.userId);
    if (!user) throw new Error("사용자를 찾을 수 없습니다.");
    return {
      ...feed,
      user: {
        id: user.id,
        nickname: user.nickname,
        profileImg: user.profileImg,
      },
    };
  },

  getFeeds: async (): Promise<
    (Feed & { user: UserWithoutPasswordAndEmail })[]
  > => {
    return db.feeds.map((feed) => {
      const user = db.users.find((u) => u.id === feed.userId);
      if (!user) throw new Error("사용자를 찾을 수 없습니다.");
      return {
        ...feed,
        user: {
          id: user.id,
          nickname: user.nickname,
          profileImg: user.profileImg,
        },
      };
    });
  },

  getUserFeeds: async (
    userId: number
  ): Promise<(Feed & { user: UserWithoutPasswordAndEmail })[]> => {
    const userFeeds = db.feeds.filter((feed) => feed.userId === userId);

    return userFeeds.map((feed) => {
      const user = db.users.find((u) => u.id === feed.userId);
      if (!user) throw new Error("사용자를 찾을 수 없습니다.");
      return {
        ...feed,
        user: {
          id: user.id,
          nickname: user.nickname,
          profileImg: user.profileImg,
        },
      };
    });
  },
};

"use client";

import { useEffect, useState } from "react";
import type { User } from "@supabase/supabase-js";
import { createContext, useContext } from "react";
import { createClient } from "@/lib/supabase/client";

const supabase = createClient();

type SetState<T> = React.Dispatch<React.SetStateAction<T>>;

type UserType = {
  user: User | null;
  setUser: SetState<User | null> | null;
  loading: boolean;
};

const defaultUser: UserType = {
  user: null,
  setUser: null,
  loading: false,
};

const UserContext = createContext<UserType>(defaultUser);

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      setLoading(true);

      const { data, error } = await supabase.auth.getUser();
      if (error) {
        console.error("Error fetching user:", error);
      } else {
        setUser(data.user);
      }

      setLoading(false);
    };

    fetchUser();
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser, loading }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);

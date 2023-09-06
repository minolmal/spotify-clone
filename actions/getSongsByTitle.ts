import { cookies } from "next/headers";

import { Song } from "@/types/types";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";

import getSongs from "./getSongs";

const getSongsByTitle = async (title: string): Promise<Song[]> => {
  const supabase = createServerComponentClient({
    cookies: cookies,
  });

  if (!title) {
    const allSongs = await getSongs();
    return allSongs;
  }

  const { data, error } = await supabase
    .from("songs")
    .select("*")
    .ilike("title", `%${title}%`)
    .order("created_at", { ascending: false });

  if (error) {
    console.error(error);
  }

  return (data as any) || [];
};

export default getSongsByTitle;

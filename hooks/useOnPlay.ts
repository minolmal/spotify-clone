import { Song } from "@/types/types";

import usePlayer from "./usePlayer";
import { useUser } from "./useUser";
import useAuthModal from "./useAuthModal";
import useSubscribeModal from "./useSubscribeModal";

const useOnPlay = (songs: Song[]) => {
  const subscribeModal = useSubscribeModal();
  const player = usePlayer();
  const authModal = useAuthModal();
  const { user, subscription } = useUser();

  const onPlay = (id: string) => {
    if (!user) return authModal.onOpen();
    if (!subscription) return subscribeModal.onOpen();

    player.setId(id);
    player.setIds(songs.map((song) => song.id));
  };

  return onPlay;
};

export default useOnPlay;

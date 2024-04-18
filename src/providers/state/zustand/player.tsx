import { BASE_URL } from "@/utils/environment";
import { create } from "zustand";


const defaultSrc = `${BASE_URL}/sample/ts/output.m3u8`;

export enum PlayerEvent {
  onPlay = 'onPlay',
  onPlaying = 'onPlaying',
  onPause = 'onPause',
  onVolumeChange = 'onVolumeChange',
  onEnded = 'onEnded',
}

export type PlayerState = {
  src: string;
  logs: { playerName: string; when: Date; event: PlayerEvent }[];
};

type Actions = {
  changeSrc: (newSrc: PlayerState["src"]) => void;
  track: (playerName: string, event: PlayerEvent, when?: Date) => void;
};

export const usePlayerState = create<PlayerState & Actions>((set) => ({
  src: defaultSrc,
  logs: [],
  changeSrc: (newSrc) => set(() => ({ src: newSrc })),
  track: (playerName, event, when) =>
    set((prevState) => ({
      logs: [
        ...prevState.logs,
        { playerName, when: when ?? new Date(), event },
      ],
    })),
}));

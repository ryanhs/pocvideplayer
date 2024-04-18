"use client";

import React, { RefObject, useEffect } from "react";
import Player from "react-hls-player";
import { PlayerEvent, usePlayerState } from "@/providers/state/zustand/player";
import { useDebouncedCallback } from "use-debounce";

export function ReactHLSPlayer() {
  const playerName = "ReactHLSPlayer";
  const { src, track } = usePlayerState();

  const playerRef = React.useRef<HTMLVideoElement>();

  const onPlay = useDebouncedCallback(() => track(playerName, PlayerEvent.onPlay), 200);
  const onPlaying = useDebouncedCallback(() => track(playerName, PlayerEvent.onPlaying), 200);
  const onPause = useDebouncedCallback(() => track(playerName, PlayerEvent.onPause), 200);
  const onVolumeChange = useDebouncedCallback(() => track(playerName, PlayerEvent.onVolumeChange), 200);
  const onEnded = useDebouncedCallback(() => track(playerName, PlayerEvent.onEnded), 200);

  

  useEffect(() => {
    if (!playerRef.current) return;
    if (!playerRef.current.src) return;

    playerRef.current.addEventListener("play", onPlay);
    playerRef.current.addEventListener("playing", onPlaying);
    playerRef.current.addEventListener("pause", onPause);
    playerRef.current.addEventListener("volumechange", onVolumeChange);
    playerRef.current.addEventListener("ended", onEnded);


  }, [playerRef?.current?.src]);

  return (
    <>
      <Player
        src={src}
        autoPlay={false}
        controls={true}
        width="100%"
        height="auto"
        playerRef={playerRef as RefObject<HTMLVideoElement>}
      />
    </>
  );
}

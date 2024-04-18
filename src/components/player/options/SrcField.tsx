"use client";

import { usePlayerState } from "@/providers/state/zustand/player";
import { PlayArrow } from "@mui/icons-material";
import {
  Button,
  Stack,
  TextField,
} from "@mui/material";
import { useState } from "react";

export function SrcField() {
  const { src, changeSrc } = usePlayerState();
  const [tmpSrc, setTmpSrc] = useState<string>(src);
  
  return (
    <div style={{ width: "100%" }}>
      <Stack
        spacing={{ xs: 1, sm: 2 }}
        direction="row"
        useFlexGap
        flexWrap="wrap"
      >
        <TextField
          id="video-src-field"
          label="Standard"
          variant="standard"
          value={tmpSrc}
          onChange={(e) => setTmpSrc(e.target.value)}
          sx={{ minWidth: 800 }}
          onKeyDown={e => {
            if (e.key === 'Enter') {
              changeSrc(tmpSrc);
            }
          }}
        />

        <Button variant="contained" size="medium" startIcon={<PlayArrow />} sx={{ maxHeight: 38 }} onClick={() => changeSrc(tmpSrc)}>Change</Button>
      </Stack>
    </div>
  );
}

"use client";

import {
  AppBar,
  Box,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Paper,
  Toolbar,
  Typography,
} from "@mui/material";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot, { TimelineDotProps } from "@mui/lab/TimelineDot";
import TimelineOppositeContent, {
  timelineOppositeContentClasses,
} from "@mui/lab/TimelineOppositeContent";
import { usePlayerState } from "@/providers/state/zustand/player";
import dayjs from "dayjs";

export function LogBox() {
  const { logs } = usePlayerState();

  return (
    <>
      <Paper elevation={1} square>
        <AppBar component="nav" position="static">
          <Toolbar>
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
            >
              Logs / Event Tracking
            </Typography>
          </Toolbar>
        </AppBar>

        <div style={{ width: "100%" }}>
          <Timeline
            sx={{
              [`& .${timelineOppositeContentClasses.root}`]: {
                flex: 0.2,
              },
            }}
          >
            {logs
              .slice(-8)
              .reverse()
              .map((v) => {
                let color = 'success';
                return (
                  <TimelineItem key={`${v.when.toISOString()}/${v.event}`}>
                    <TimelineOppositeContent color="textSecondary">
                      {dayjs(v.when).format("HH:mm:ss")}
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                      <TimelineDot
                        variant="outlined"
                        color={
                          {
                            onPlay: "success",
                            onPlaying: "info",
                            onPause: "info",
                            onVolumeChange: "info",
                            onEnded: "warning",
                          }[v.event] as TimelineDotProps["color"]
                        }
                      />
                      <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>
                      <Typography variant="body1">{v.event}</Typography>
                      <Typography variant="subtitle2" fontSize={12} color={'gray'}>{v.playerName}</Typography>
                    </TimelineContent>
                  </TimelineItem>
                );
              })}
          </Timeline>

          {logs.length > 8 && (
            <div style={{ padding: "0px 20px 10px 20px" }}>
              <Typography variant="caption" fontStyle={'italic'}>
                {logs.length - 8} more events...
              </Typography>
            </div>
          )}
        </div>
      </Paper>
    </>
  );
}

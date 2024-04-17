#!/bin/sh

ffmpeg -i orig.mp4 -bsf:v h264_mp4toannexb -codec copy -hls_list_size 0 ts/output.m3u8
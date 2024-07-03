"use-client";
import React, { useState } from "react";
import { Box, Divider, IconButton, Typography } from "@mui/material";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import "../app/globals.css";
import Link from "next/link";

const VideoList = () => {
  const initialVideoData = [
    {
      title: "Music to Boost productivity & Reduce Stress",
      viewCount: "4,565,456",
      likeCount: "23,454,544",
      videoId: "KeSeFHfSqys",
      videoUrl: "https://youtu.be/KeSeFHfSqys",
      description:
        "528 Hz | This promotes being in harmony with the natural frequency of the Universe jfkbjs qnwf  qwnf qjn fnnq nf qwkf kq wf qwjhbfkjqwbjkf qwf qwjk fkq wkhf qhk fhkq fhf q fhq whf qhf heq fhqeh vi",
    },
    {
      title: "The King Man Circle",
      viewCount: "42,313",
      likeCount: "657,756",
      videoId: "-rmMcpP3iSM",
      videoUrl: "https://youtu.be/-rmMcpP3iSM",
      description:
        "528 Hz | This promotes being in harmony with the natural frequency of the Universe",
    },
    {
      title: "Honey king the special song",
      viewCount: "454,43,62,313",
      likeCount: "423,325,33,756",
      videoUrl: "https://youtu.be/SNY48U-kPok",
      videoId: "W5fLrb9QqC8",
      description:
        "528 Hz | fh ugqfugq ufgguf uqfuq uif uqfguiqwgfuigqiufuqf uiqwg uifg qwuifg uiqg ufg uqwgf uiqg fg uqg fuqg wufg uqwgf qwg fgqw fg qfg qg fuqg fug quf guqg fuqg fuqg ufg qfg qfg qg fqeg ",
    },
  ];

  const [videoData, setVideoData] = useState(initialVideoData);
  const [playingVideoId, setPlayingVideoId] = useState(null);

  const playVideoActionType = (videoId) => {
    setPlayingVideoId(videoId);
  };

  const isVideoPlaying = (videoId) => {
    return playingVideoId === videoId;
  };

  const toggleExpand = (index) => {
    const updatedVideoData = [...videoData];
    updatedVideoData[index].expanded = !updatedVideoData[index].expanded;
    setVideoData(updatedVideoData);
  };

  const renderDescription = (description, index) => {
    const isExpanded = videoData[index].expanded;
    if (isExpanded) {
      return description;
    } else {
      return description.length > 100
        ? `${description.substring(0, 100)}...`
        : description;
    }
  };

  return (
    <Box className="m-auto container w-full">
      <Box className=" max-w-[1000px] px-5 m-auto py-[70px]">
        <Box className="md:flex grid items-center gap-3  ">
          <Link href="/">
            <IconButton className="rounded-full cursor-pointer commonShadowLight  text-[--text] bg-[#f2f5fddf]">
              <KeyboardBackspaceIcon className="text-gray-400 w-5 h-5" />
            </IconButton>
          </Link>
          <Box className="border-[--border] !w-full bg-[--white] px-[18px] rounded py-[14px] border">
            <Typography
              variant="h6"
              className="!text-sm lg:text-right text-left Mukta500 !font-medium text-[--suggestion-text]"
            >
              Here are some music suggestions to help you feel sleepy:
            </Typography>
          </Box>
        </Box>

        {videoData.map((video, index) => (
          <Box key={index} className="my-7">
            <Typography
              variant="h6"
              className="!text-lg text-left !font-semibold Mukta600 text-[--suggestion-text]"
            >
              {video.title}
            </Typography>

            <Box className="mt-1 flex items-center gap-1">
              <Box className="flex items-center gap-1">
                <Typography
                  variant="h6"
                  className="!text-sm text-left !font-medium Mukta500 text-[--text-gray]"
                >
                  View Count:
                </Typography>
                <Typography
                  variant="h6"
                  className="!text-sm text-left !font-medium Mukta500 text-[--suggestion-text]"
                >
                  {video.viewCount}
                </Typography>
              </Box>
              <Divider sx={{ height: 19, m: 0.5 }} orientation="vertical" />
              <Box className="flex items-center gap-1">
                <Typography
                  variant="h6"
                  className="!text-sm text-left !font-medium Mukta500 text-[--text-gray]"
                >
                  Like Count:
                </Typography>
                <Typography
                  variant="h6"
                  className="!text-sm text-left !font-medium Mukta500 text-[--suggestion-text]"
                >
                  {video.likeCount}
                </Typography>
              </Box>
            </Box>

            <Box className="border rounded-md p-2 border-[--border] mt-4">
              <div className="youtube-video">
                {isVideoPlaying(video.videoId) ? (
                  <iframe
                    src={`https://www.youtube.com/embed/${video.videoId}?autoplay=1`}
                    frameBorder="0"
                    className="!max-h-[318px] !min-h-[318px] !h-full w-full rounded-md border-none"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title="YouTube Video"
                  ></iframe>
                ) : (
                  <div
                    className="youtube-thumbnail"
                    onClick={() => playVideoActionType(video.videoId)}
                  >
                    <img
                      src={`https://img.youtube.com/vi/${video.videoId}/maxresdefault.jpg`}
                      alt="YouTube Thumbnail"
                      className="!max-h-[318px] !min-h-[318px] !h-full w-full rounded-md border-none"
                    />
                    <div className="play-button"></div>
                  </div>
                )}
              </div>

              
                {/* <Box className="o-video">
                  <iframe
                    className="!max-h-[318px] !min-h-[318px] !h-full w-full rounded-md border-none"
                    src={video.videoUrl}
                    allowFullScreen
                  ></iframe>
                </Box> */}

              <Typography
                variant="h6"
                className="!text-sm text-left mt-2 Mukta500 !font-medium Mukta500 text-[--suggestion-text]"
              >
                {renderDescription(video.description, index)}
                {video.description.length > 100 && (
                  <span
                    className="pl-[6px] cursor-pointer text-left Mukta600 !font-semibold text-[--black]"
                    onClick={() => toggleExpand(index)}
                  >
                    {video.expanded ? " View Less" : " Read More"}
                  </span>
                )}
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default VideoList;

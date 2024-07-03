import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import React from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import Heading from "@/common/Heading";
import TelegramIcon from "@mui/icons-material/Telegram";
import Link from "next/link";

const suggestionsData = [
  "Find Classical music for studying",
  "Recommend music for relaxing",
  "Play music to help me focus",
  "Suggest songs for workout",
];

const HomePage = () => {
  return (
    <Box>
      <Box className="lg:max-w-[681px] max-w-full">
        <Heading headinText="Welcome! What music are you in the mood for today?" />

        <Box className="mt-8 px-4 lg:px-8">
          <Paper
            component="form"
            className="border !shadow-none border-[--border]"
            sx={{
              p: "2px 4px",
              display: "flex",
              alignItems: "center",
              width: "100%",
            }}
          >
            <IconButton sx={{ p: "10px" }} aria-label="menu">
              <SearchIcon />
            </IconButton>
            <InputBase
              sx={{ ml: 1, flex: 1 }}
              className="text-[--text-dark] Mukta500 rounded h-[48px] !text-[14px] font-medium"
              placeholder="Searching here..."
              defaultValue={"I am looking for some relaxing music"}
            />
            <Link href="/video-list">
              <IconButton
                color="primary"
                sx={{ p: "10px" }}
                aria-label="directions"
              >
                <TelegramIcon className="!text-[30px]" />
              </IconButton>
            </Link>
          </Paper>
        </Box>

        <Box className="mt-[18px] pb-5  px-4 lg:px-8">
          <Typography
            variant="h6"
            className="!text-sm  text-start Mukta500 !font-medium text-[--suggestion-text]"
          >
            Get started with an example below
          </Typography>

          <Box className="grid lg:grid-cols-2 grid-vol-1 gap-[18px] mt-[14px]">
            {suggestionsData.map((suggestion, index) => (
              <Box
                key={index}
                className="border-[--border]  cursor-pointer hover:bg-slate-50  bg-[--white] px-[18px] rounded-[10px] py-[14px] border"
              >
                <Typography
                  variant="h6"
                  className="!text-sm text-start Mukta500 !font-medium text-[--suggestion-text]"
                >
                  {suggestion}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default HomePage;

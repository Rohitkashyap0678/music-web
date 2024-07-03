import Image from "next/image";
import { Box, Button } from "@mui/material";
import HomePage from "@/components/HomePage";
export default function Home() {

  return (
    <main className="flex justify-center items-center bg-image h-full py-5 px-4 lg:p-10">
      <Box className="flex justify-center  md:items-center container w-full !h-full">
        <HomePage />
      </Box>
    </main>
  );
}

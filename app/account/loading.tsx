"use client";

import React from "react";
import Box from "@/components/Box";
import { BounceLoader } from "react-spinners";

type Props = {};

const loading = (props: Props) => {
  return (
    <Box className="h-full flex items-center justify-center">
      <BounceLoader color="#22c55e" size={40} />
    </Box>
  );
};

export default loading;

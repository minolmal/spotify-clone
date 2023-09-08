"use client";
import React, { useEffect, useState } from "react";

import { ProductWithPrice } from "@/types/types";

import AuthModal from "@/components/AuthModal";
import SubscribeModal from "@/components/SubscribeModal";
import UploadModal from "@/components/UploadModal";

type ModalProviderProps = {
  products: ProductWithPrice[];
};

const ModalProvider: React.FC<ModalProviderProps> = ({ products }) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <>
      <AuthModal />
      <UploadModal />
      <SubscribeModal products={products} />
    </>
  );
};

export default ModalProvider;

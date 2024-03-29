"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("3a82b417-52c5-4b3a-9b14-74e72a3f579b");
  }, []);

  return null;
};

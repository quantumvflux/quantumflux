"use client";
import { DialogSection } from "@/app/extra/DialogSection/DialogSection";
import { Hero } from "@/app/home/hero/Hero";
import { useAtom } from "jotai";
import EscapingCat from "../extra/escapingCat/EscapingCat";
import { isDialogPlayingAtom } from "@/state/store";

export const MainComponentsWrapper = () => {
  const [isDialogPlaying] = useAtom(isDialogPlayingAtom);
  return (
    <>
      <Hero />
      <EscapingCat />
      {isDialogPlaying ? <DialogSection /> : null}
    </>
  );
};

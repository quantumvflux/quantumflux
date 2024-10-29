"use client";
import Image from "next/image";
import profile from "@/public/assets/profile-1.jpg";
import { TypeWriter } from "./typeWritter/TypeWritter";
import { VscTriangleDown } from "react-icons/vsc";
import {
  dialogScript,
  completedDialogScript,
  IDialog,
} from "@/consts/dialogScript";
import { useState } from "react";
import { DialogOptionsSection } from "./dialogOptionsSection/DialogOptionsSection";
import { isDialogPlayingAtom, isGameCompleteAtom } from "@/state/store";
import { useAtom } from "jotai";
import { AiOutlineClose } from "react-icons/ai";

export const DialogSection = () => {
  const [dialogIndex, setDialogIndex] = useState<number>(0);
  const [isGameComplete] = useAtom(isGameCompleteAtom);
  const [_isDialogPlaying, setIsDialogPlaying] = useAtom(isDialogPlayingAtom);

  const condition = isGameComplete ? completedDialogScript : dialogScript;

  const [currentDialog, setCurrentDialog] = useState<IDialog>(
    condition[dialogIndex]
  );

  const handleNextDialog = () => {
    setDialogIndex((prevIndex) => (prevIndex + 1) % condition.length);
    setCurrentDialog(condition[dialogIndex]);
  };

  const handleCloseDialog = () => {
    setIsDialogPlaying(false);
  };

  return (
    <div className="w-11/12 md:w-2/3 h-60 md:h-[300px] flex justify-center items-center fixed bottom-8 left-0 right-0 m-auto bg-gray-300 border-4 border-gray-600 overflow-hidden rounded-xl">
      <div className="relative h-60 w-56 md:h-[300px] md:w-[400px]">
        <Image
          src={profile}
          alt="Profile"
          fill
          className="rounded-md object-cover"
        />
      </div>
      <div className="h-60 md:h-[300px] w-full p-8 text-2xl relative">
        <TypeWriter text={currentDialog.text} />
        <DialogOptionsSection currentDialog={currentDialog} />
        <div className="absolute bottom-4 right-8" onClick={handleNextDialog}>
          <VscTriangleDown className="text-gray-500 hover:text-gray-800 hover:cursor-pointer h-12 w-12 animate-bounce" />
        </div>
        {/* <div
          className="absolute top-8 right-8 text-gray-500 hover:text-gray-800 hover:cursor-pointer"
          onClick={handleCloseDialog}
        >
          <AiOutlineClose className="h-12 w-12" />
        </div> */}
      </div>
    </div>
  );
};

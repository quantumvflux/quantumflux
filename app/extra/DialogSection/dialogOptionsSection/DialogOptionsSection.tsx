import { IDialog } from "@/consts/dialogScript";
import { isDialogPlayingAtom, isGamePlayingAtom } from "@/state/store";
import { useAtom } from "jotai";

export const DialogOptionsSection = ({
  currentDialog,
}: {
  currentDialog: IDialog;
}) => {
  const [_isDialogPlaying, setIsDialogPlaying] = useAtom(isDialogPlayingAtom);
  const [_isGamePlaying, setIsGamePlaying] = useAtom(isGamePlayingAtom);

  const handleOptionClick = (option: string) => {
    if (option === "yes!") {
      setIsDialogPlaying(false);
      setIsGamePlaying(true);
    }
  };

  return (
    <div className="absolute bottom-4 left-8 flex flex-col gap-2">
      {currentDialog.options
        ? currentDialog.options.map((option) => (
            <button
              key={option}
              className="text-gray-600 hover:underline border-2 border-gray-700 px-4"
              onClick={() => handleOptionClick(option)}
            >
              {option}
            </button>
          ))
        : null}
    </div>
  );
};

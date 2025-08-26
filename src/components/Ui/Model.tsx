import { ReactNode } from "react";
import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";

interface IProps {
  title: string;
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

const Model = ({ title, isOpen, onClose, children }: IProps) => {
  return (
    <Dialog open={isOpen} onClose={onClose} className="relative z-10 focus:outline-none">
      <div className="fixed inset-0 z-10 w-screen overflow-y-auto bg-black/30">
        <div className="flex min-h-full items-center justify-center p-4">
          <DialogPanel
            transition
            className="w-full max-w-lg space-y-4 rounded-lg bg-white p-8 shadow-lg duration-300 ease-out 
                      data-closed:transform-[scale(95%)] data-closed:opacity-0"
          >
            <DialogTitle className="font-bold text-lg">{title}</DialogTitle>

            <div>{children}</div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
};

export default Model;

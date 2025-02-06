import { cn } from "@/lib/utils";
import { useState } from "react";

import {
  Modal,
  ModalBody,
  ModalContent,
  ModalTrigger,
} from "../../components/ui/animated-modal";
import Image from "next/image";
import { Billboard } from "@/types/billboard";

export const BillboardCard = ({
  row,
  onSelect,
  billboardDetails,
}: {
  row: Billboard;
  onSelect: React.Dispatch<React.SetStateAction<Billboard | null>>;
  billboardDetails: Billboard | null;
}) => {
  const [bgImage, setBgImage] = useState(row.image);

  return (
    <Modal>
      <ModalTrigger
        className="bg-black dark:bg-white dark:text-black text-white flex justify-center group/modal-btn"
        onClick={() => onSelect(row)}
      >
        <div
          className={cn(
            "group w-full cursor-pointer overflow-hidden relative card h-96 rounded-md shadow-xl mx-auto flex flex-col justify-end p-4 border border-transparent dark:border-neutral-800",
            "before:fixed before:inset-0 before:opacity-0 before:z-[-1]",
            "hover:after:content-[''] hover:after:absolute hover:after:inset-0 hover:after:bg-black hover:after:opacity-50",
            "transition-all duration-500"
          )}
          style={{
            backgroundImage: `url(${bgImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          onError={() => setBgImage("https://placehold.co/600x400")}
        >
          <div className="text relative z-50 bg-black bg-opacity-50 p-4">
            <h1 className="font-bold text-xl md:text-3xl text-gray-50">
              {row?.advertiser ?? ""}
            </h1>
            <p className="font-normal text-base text-gray-50 my-2">
              {row?.billboardText ?? ""}
            </p>
            <p className="font-normal text-base text-gray-50">
              {row?.address ?? ""}
            </p>
          </div>
        </div>
      </ModalTrigger>
      <ModalBody className="flex items-center justify-center min-h-[300px]">
        {billboardDetails ? (
          <ModalContent className="p-6 bg-white dark:bg-gray-900 rounded-lg shadow-xl animate-fade-in">
            <div className="relative overflow-hidden rounded-lg">
              <Image
                width={100}
                height={100}
                src={billboardDetails.image}
                alt="Billboard"
                className="w-full h-64 object-cover rounded-lg transform hover:scale-105 transition-transform duration-300 ease-in-out"
              />
            </div>
            <div className="text-center mt-6 space-y-4">
              <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
                {billboardDetails.advertiser}
              </h2>
              <p className="text-gray-600 dark:text-gray-300 text-lg">
                {billboardDetails.billboardText}
              </p>
              <p className="text-gray-500 dark:text-gray-400 italic">
                📍 {billboardDetails.address}
              </p>
              <div className="flex items-center justify-center space-x-4">
                <div className="px-4 py-2 bg-indigo-500 text-white rounded-md shadow-md animate-pulse">
                  📷 {billboardDetails.photosTaken} Photos Taken
                </div>
                <div className="px-4 py-2 bg-green-500 text-white rounded-md shadow-md">
                  🏙️ X: {billboardDetails.x}, Y: {billboardDetails.y}
                </div>
              </div>
            </div>
          </ModalContent>
        ) : (
          <div className="flex items-center justify-center">
            <div className="h-12 w-12 border-4 border-gray-300 dark:border-gray-600 border-t-indigo-500 rounded-full animate-spin"></div>
          </div>
        )}
      </ModalBody>
    </Modal>
  );
};

"use client";
import React, { useEffect, useState } from "react";
import { SparklesCore } from "../components/ui/sparkles";
import { Icon } from "@iconify/react";
import { provideInstructions } from "@/hooks/useDrones";
import { BillboardCard } from "@/components/card/billboard";
import { fetchBillboardDetails } from "@/hooks/useBillboards";
import { Billboard } from "@/types/billboard";

export default function Home() {
  const [selectedRow, setSelectedRow] = useState<Billboard | null>(null); // State to store selected row
  const [billboardDetails, setBillboardDetails] = useState<Billboard | null>(
    null
  );
  const [instructions, setInstructions] = useState("");
  const [billboards, setBillboards] = useState([]);

  const handleIconClick = (value: string) => {
    setInstructions((prev) => prev + value);
  };

  const handleReset = () => {
    setInstructions("");
    setBillboards([]);
  };

  const handleSubmit = async () => {
    const result = await provideInstructions(instructions);
    console.log("result", result);

    if (!result?.isError) {
      setBillboards(result?.data?.billboards);
    }
  };

  // Fetch API when a billboard is selected
  useEffect(() => {
    if (selectedRow) {
      const fetchDetails = async () => {
        try {
          const result = await fetchBillboardDetails(selectedRow.id);
          if (!result?.isError) {
            setBillboardDetails(result?.data?.billboard);
          }
        } catch (error) {
          console.error("Error fetching billboard details:", error);
        }
      };

      fetchDetails();
    }
  }, [selectedRow]); // Runs when `selectedRow` changes

  return (
    <div className="h-[100vh] w-full bg-black flex flex-col items-center pt-10 overflow-hidden rounded-md">
      <h1 className="w-full md:text-7xl text-3xl lg:text-9xl font-bold text-center text-white relative z-20">
        Drones
      </h1>
      <div className="w-full h-40 relative">
        {/* Gradients */}
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-full blur-sm" />
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />
        {/* Core component */}
        <SparklesCore
          background="transparent"
          minSize={0.4}
          maxSize={2}
          particleDensity={1200}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
        {/* Radial Gradient to prevent sharp edges */}
        <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
        <div>
          <div className="text-white text-3xl text-center">Drone Actions</div>
          <div className="flex flex-row space-x-10 justify-center my-10">
            <div
              className="hover:scale-y-125 hover:scale-x-125 cursor-pointer p-2 border-4 rounded-md"
              onClick={() => handleIconClick("^")}
            >
              <Icon icon="line-md:arrow-up" color="#FFFFFF" fontSize={50} />
            </div>
            <div
              className="hover:scale-y-125 hover:scale-x-125 cursor-pointer p-2 border-4 rounded-md"
              onClick={() => handleIconClick("v")}
            >
              <Icon icon="line-md:arrow-down" color="#FFFFFF" fontSize={50} />
            </div>
            <div
              className="hover:scale-y-125 hover:scale-x-125 cursor-pointer p-2 border-4 rounded-md"
              onClick={() => handleIconClick("<")}
            >
              <Icon icon="line-md:arrow-left" color="#FFFFFF" fontSize={50} />
            </div>
            <div
              className="hover:scale-y-125 hover:scale-x-125 cursor-pointer p-2 border-4 rounded-md"
              onClick={() => handleIconClick(">")}
            >
              <Icon icon="line-md:arrow-right" color="#FFFFFF" fontSize={50} />
            </div>
          </div>
          <div className="flex flex-row space-x-10 justify-center my-10">
            <div
              className="hover:scale-y-125 hover:scale-x-125 cursor-pointer p-2 border-4 rounded-md"
              onClick={() => handleIconClick("x")}
            >
              <Icon icon="akar-icons:camera" color="#FFFFFF" fontSize={50} />
            </div>
          </div>
          {/* Display Instructions */}
          <div className="text-white text-2xl text-center mt-5">
            Set of Instructions <br />
            {instructions}
          </div>
          {/* Action Buttons */}
          {instructions && (
            <div className="flex justify-center mt-5 space-x-5">
              <button
                onClick={handleReset}
                className="px-4 py-2 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 transition-colors"
              >
                Reset
              </button>
              <button
                onClick={handleSubmit}
                className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
              >
                Submit
              </button>
            </div>
          )}

          <div className="w-full grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 m-4 p-8 overflow-auto max-h-[450px]">
            {billboards?.map((row, index) => (
              <BillboardCard
                key={index}
                row={row}
                onSelect={setSelectedRow}
                billboardDetails={billboardDetails}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

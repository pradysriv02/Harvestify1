"use client";
import DragDrop from "../../components/dragndrop";

export default function Diseaseprediction() {
  return (
    <div className="w-500 flex-col gap-10 h-500 h-full w-full flex justify-center items-center">
      <DragDrop />
      <button
        type="submit"
        class="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-green-300 rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-green-700 dark:hover:bg-green-700">
        Predict
      </button>
    </div>
  );
}

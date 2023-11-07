import React from "react";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

export default function RecipeCard({ recipe }) {
  const { recipeName, ingredients, description } = recipe;

  return (
    <div className="max-w-sm rounded-xl overflow-hidden shadow-lg bg-white">
      <div className="">
        <div className="font-bold text-xl px-6 py-4">{recipeName}</div>
        <div className="bg-slate-200 px-6 py-4">
          <p>Ingredients:</p>
          <p className="text-gray-700 text-base">{ingredients}</p>
        </div>
      </div>
      <div className="px-6 py-4">
        <p>{description}</p>
      </div>
      <div>
        <button>
          <EditIcon />
        </button>
        <button>
          <DeleteIcon />
        </button>
      </div>
    </div>
  );
}
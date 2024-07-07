import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "./Accordion";

import {
  SNIADANIA,
  SLODKOSCI,
  SLODKIE_DODATKI,
  SMOOTHIES,
} from "@/setup/recipes";

const recipes = [SNIADANIA, SLODKOSCI, SLODKIE_DODATKI, SMOOTHIES];

export default function RecipesAccordion() {
  return (
    <div className=" py-1 ">
      <Accordion>
        {recipes.map((recipesList) => (
          <AccordionItem
            value={recipesList.title}
            className="border-b border-dashed border-black"
          >
            <AccordionTrigger className="text-xl py-3">
              {recipesList.title}
            </AccordionTrigger>
            <AccordionContent>
              <ol className="list-decimal font-sans list-inside flex flex-col gap-y-1 pb-6 ">
                {recipesList.recipes.map((recipe) => (
                  <li className="text-sm">{recipe}</li>
                ))}
              </ol>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}

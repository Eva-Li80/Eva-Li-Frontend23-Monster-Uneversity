"use client";
import React, { createContext, useReducer } from "react";
import { Action, Monster, MonsterState } from "../types/type";
import data from "../../../public/db.json";

export const MonsterContext = createContext<
  { state: MonsterState; dispatch: React.Dispatch<Action> } | undefined
>(undefined);

const initialMonsterState: MonsterState = { monsters: data as Monster[] };

// Reducer function
const reducer = (state: MonsterState, action: Action): MonsterState => {
  switch (action.type) {
    case "Add":
      return {
        ...state,
        monsters: [...state.monsters, action.payload as Monster],
      };
    case "Remove":
      return {
        ...state,
        monsters: state.monsters.filter(
          (monster: Monster) => monster.id !== action.payload
        ),
      };
    case "Update":
      const updatePayload = action.payload as Monster;
      return {
        ...state,
        monsters: state.monsters.map((i: Monster) => {
          if (i.id === updatePayload.id) {
            return action.payload ? updatePayload : i
          } else {
            return i;
          }
        }),
      };

    default:
      return state;
  }
};

type MonsterProviderProps = {
  children: React.ReactNode;
};

export const MonsterProvider: React.FC<MonsterProviderProps> = ({
  children,
}: MonsterProviderProps) => {
  const [state, dispatch] = useReducer(reducer, initialMonsterState);

  return (
    <MonsterContext.Provider value={{ state, dispatch }}>
      {children}
    </MonsterContext.Provider>
  );
};

export const useMonsterContext = () => {
  const monster = React.useContext(MonsterContext);
  if (monster === undefined) {
    throw new Error("useMonsterContext must be used within a MonsterProvider");
  }
  return monster;
};

export type Monster = {
    id: string;
    first_name: string;
    last_name: string;
    description: string;
    abilities: {
        science: string[];
        magic: string[];
    };
    origin: string;
    num_horns?: number;
    num_eyes: number;
    num_arms: number;
};

 // GlobalState
 export type MonsterState = {
    monsters: Monster[];
  };
  
  // Actions
 export type Action = {
    type: "Add" | "Remove" | "Update";
    payload: Monster | string;
  };
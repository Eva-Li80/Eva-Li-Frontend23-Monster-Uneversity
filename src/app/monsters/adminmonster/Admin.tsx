"use client";
import { useMonsterContext } from "@/app/context/conextProvider";
import { Monster } from "@/app/types/type";
import { stat } from "fs";
import React, { ChangeEvent, useState } from "react";

const Admin = () => {
  const { state, dispatch } = useMonsterContext();
  const [selectedMonster, setSelectedMonster] = useState<Monster | null>(null);

  const addMonster = () => {
    setTimeout(() => {
      const newMonster = {
        id: "10",
        first_name: "Wisp",
        last_name: "Shadowglimmer",
        description:
          "A mysterious monster with wispy tendrils and shadowy abilities.",
        abilities: {
          science: ["Dark matter research", "Stealth technology"],
          magic: ["Shadow manipulation", "Illusions"],
        },
        origin: "Shadewood",
        num_eyes: 2,
        num_arms: 0,
        num_tentacles: 6,
      };

      const isDuplicate = state.monsters.some(
        (mon) => mon.id === newMonster.id
      );

      if (isDuplicate) {
        alert("Monster with this id already exists");
        return;
      }

      dispatch({ type: "Add", payload: newMonster });
    }, 500);
  };

  const deleteMonster = (id: string) => {
    setTimeout(() => {
      dispatch({ type: "Remove", payload: id });
    }, 500);
  };


  const handleUpdate = () => {
    if (selectedMonster) {
      dispatch({ type: "Update", payload: selectedMonster });
    }
  };

  return (
    <div className="admin">
      <div className="ett">
        {state.monsters.map((monster) => (
          <div>
            <h2 className="name">
              {monster.first_name} {monster.last_name}
              <button
                className="delete"
                onClick={() => deleteMonster(monster.id)}
              >
                X
              </button>
            </h2>
            <div className="upname">
              <button onClick={() => setSelectedMonster(monster)}>
                Uppdatera
              </button>
              <span className="up">{monster.first_name}</span>
            </div>
          </div>
        ))}
      </div>
      <div className="två">
        <button onClick={addMonster}>Add monster</button>
        <div className="uppdatera">

        {selectedMonster && (
          <div className="update">
            <div>
              <label>
                Förnamn:
                <input
                  type="text"
                  value={selectedMonster.first_name}
                  onChange={(e) =>
                    setSelectedMonster({
                      ...selectedMonster,
                      first_name: e.target.value || "",
                    })
                  }
                  />
              </label>
            </div>
            <div>
              <label>
                Efternamn:
                <input
                  type="text"
                  value={selectedMonster.last_name}
                  onChange={(e) =>
                    setSelectedMonster({
                      ...selectedMonster,
                      last_name: e.target.value,
                    })
                  }
                  />
              </label>
            </div>
            <button className="up-btn" onClick={handleUpdate}>Uppdatera Monster</button>
          </div>
        )}
        </div>
      </div>
    </div>
  );
};

export default Admin;

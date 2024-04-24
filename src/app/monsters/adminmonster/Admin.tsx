"use client";
import { useMonsterContext } from "@/app/context/conextProvider";
import { Monster } from "@/app/types/type";
import { stat } from "fs";
import React, { ChangeEvent, useState } from "react";

const Admin = () => {
  const { state, dispatch } = useMonsterContext();
  const [selectedMonster, setSelectedMonster] = useState<Monster | null>(null);
  const [id, setId] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [description, setDescription] = useState("");
  const [scienceAbilities, setScienceAbilities] = useState([]);
  const [magicAbilities, setMagicAbilities] = useState([]);
  const [origin, setOrigin] = useState("");
  const [numEyes, setNumEyes] = useState(0);
  const [numArms, setNumArms] = useState(0);
  const [numTenticles, setNumTenticles] = useState(0);

  const addMonster = (event: { preventDefault: () => void; }) => {
    event.preventDefault();
      const newMonster = {
        id: id,
        first_name: firstName,
        last_name: lastName,
        description: description,
        abilities: {
          science: scienceAbilities,
          magic: magicAbilities,
        },
        origin: origin,
        num_eyes: numEyes,
        num_arms: numArms,
        num_tentacles: numTenticles,
      };

      const isDuplicate = state.monsters.some(
        (mon) => mon.id === newMonster.id
      );

      if (isDuplicate) {
        alert("Monster with this id already exists");
        return;
      }

      dispatch({ type: "Add", payload: newMonster });
    
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
          <div key={monster.id}>
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
        <form onSubmit={addMonster}>
          <div>
            <label>
              ID:
              <input
                type="text"
                value={id}
                onChange={(e) => setId(e.target.value)}
              />
            </label>
          </div>
          <div>
            <label>
              Förnamn:
              <input
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </label>
          </div>
          <div>
            <label>
              Efternamn:
              <input
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </label>
          </div>
          <div>
            <label>
              Beskrivning:
              <input
                type="text"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </label>
          </div>
          {/* Lägg till fler input-fält för abilities här, liknande ovan */}
          <div>
            <label>
              Ursprung:
              <input
                type="text"
                value={origin}
                onChange={(e) => setOrigin(e.target.value)}
              />
            </label>
          </div>
          <div>
            <label>
              Antal ögon:
              <input
                type="number"
                value={numEyes}
                onChange={(e) => setNumEyes(Number(e.target.value))}
              />
            </label>
          </div>
          <div>
            <label>
              Antal armar:
              <input
                type="number"
                value={numArms}
                onChange={(e) => setNumArms(Number(e.target.value))}
              />
            </label>
          </div>
          <div>
            <label>
              Antal tentakler:
              <input
                type="number"
                value={numTenticles}
                onChange={(e) => setNumTenticles(Number(e.target.value))}
              />
            </label>
          </div>
          <button type="submit">Lägg till Monster</button>
        </form>

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
                        first_name: e.target.value,
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
              <button className="up-btn" onClick={handleUpdate}>
                Uppdatera Monster
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Admin;

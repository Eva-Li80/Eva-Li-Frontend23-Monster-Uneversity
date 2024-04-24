"use client"
import { useMonsterContext } from "@/app/context/conextProvider";
import { ChangeEvent, useState } from "react";


const MonsterSearch = ({}) => {
  const { state } = useMonsterContext();
  const [searchName, setSearchName] = useState<string>("");
  const [foundMonster, setFoundMonster] = useState<string | null>(null);
 

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchName(e.target.value);
    setFoundMonster(null);
  };

  const handleSearchClick = (name: string) => {
    const found = state.monsters.find((t) => t.first_name === name);
    if (found) {
      setFoundMonster(found.first_name);
    }
  };

  return (
    <div className="monstersearch">
      <div className="monster-input">
        <input
          type="text"
          placeholder="Search by name"
          value={searchName}
          onChange={handleSearch}
        />
        <button className="search-btn"
          style={{ marginLeft: 10 }}
          onClick={() => handleSearchClick(searchName)}
        >
          sök på namnet
        </button>
        {foundMonster ? (
          <div>
            <p>Monster {foundMonster} hittades</p>
          </div>
        ): (
          <div>
            <p>Inget monster hittat än.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default MonsterSearch;

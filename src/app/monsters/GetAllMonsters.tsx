"use client"
import Link from "next/link";
import { useMonsterContext } from "../context/conextProvider";

const GetAllMonsters = () => {
  const { state } = useMonsterContext();
 
  return (
    <div className="all">
      {state.monsters.map((mons) => (
        <div key={mons.id}>
          <Link href={`/monsters/${mons.id}`}>
            <h2>
              Namn {mons.first_name}  {mons.last_name}
            </h2>
          </Link>

        </div>
      ))}

    </div>
  );
};

export default GetAllMonsters;

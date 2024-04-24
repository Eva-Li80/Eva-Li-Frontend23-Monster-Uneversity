"use client";
import { useMonsterContext } from "@/app/context/conextProvider";
import { Monster } from "@/app/types/type";
import Link from "next/link";
import React from "react";

export default function MonsterDetails({ params }: { params: Monster }) {
  const id = params.id;
  const { state } = useMonsterContext();
  const monster = state.monsters.find((mon) => mon.id === id);

  return (
    <>
      <Link href="/">Tillbaka till alla monster</Link>
    <div className="details">
      <h2>Monster details {id}</h2>
      <p>Fakta: {monster?.description}</p>
      <p>Armar: {monster?.num_arms}</p>
      <p>Ögon: {monster?.num_eyes}</p>
      <p>Horn: {monster?.num_horns}</p>
      <p>Ursprung: {monster?.origin}</p>
      <p>Magic: {monster?.abilities.magic}</p>
      <p>Sience: {monster?.abilities.science}</p>
    </div>
    </>
  );
}

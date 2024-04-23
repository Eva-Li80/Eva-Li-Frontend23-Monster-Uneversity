
import Link from "next/link";

export default function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="title">Welcome to the Monster Uneversity <span className="goast">👽</span></h1>
      <Link className="link" href="./monsters">Klicka för att komma till alla Monster🍀 </Link>
    </main>
  );
}

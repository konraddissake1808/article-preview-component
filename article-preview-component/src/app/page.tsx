import Image from "next/image";
import Article from "./components/article";

export default function Home() {
  return (
    <main className="flex h-screen flex-col items-center justify-center">
      <Article />
    </main>
  );
}

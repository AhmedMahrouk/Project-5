import { useNavigate } from "react-router-dom";
import { Button } from "@/components";

export const HomeView = () => {
  const navigate = useNavigate();

  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-900 text-white">
      <section className="w-full max-w-3xl space-y-8 text-center">
        <h1 className="font-bold text-5xl tracking-tight">TMDB Explorer</h1>
        <p className="text-gray-400 text-lg">Explore movies and discover people using a fast, modern interface.</p>
        <Button onClick={() => navigate("/now-playing")}>Enter</Button>
        <footer className="pt-10 text-gray-500 text-sm">Built with React, Vite and React Router</footer>
      </section>
    </main>
  );
};

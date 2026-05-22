import { Route, Routes } from "react-router-dom";
import { MainLayout } from "@/layouts/MainLayout";
import { CreditsView, ErrorView, HomeView, MovieView, NowPlayingView, ReviewsView, SearchView, TrendingView } from "@/views";

export const App = () => {
  return (
    <Routes>
      <Route element={<HomeView />} path="/" />
      <Route element={<MainLayout />}>
        <Route element={<NowPlayingView />} path="/now-playing" />
        <Route element={<TrendingView />} path="/trending" />
        <Route element={<SearchView />} path="/search" />
        <Route element={<MovieView />} path="/movie/:id">
          <Route element={<CreditsView />} path="credits" />
          <Route element={<ReviewsView />} path="reviews" />
        </Route>
      </Route>
      <Route element={<ErrorView />} path="*" />
    </Routes>
  );
};

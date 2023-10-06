import { BrowserRouter, Routes, Route } from "react-router-dom";

// project
import { Main } from "@/pages/Main";

export const MainRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
    </BrowserRouter>
  );
};

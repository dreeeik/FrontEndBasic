import { Route, Routes } from "react-router-dom";
import { TireList } from "../pages/TireList";
import { TireDetails } from "../pages/TireDetails";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<TireList />} />
      <Route path="/tires/:id" element={<TireDetails />} />
    </Routes>
  );
};

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Search from "pages/Search";
import User from "pages/User";

const AppRouter: React.FC = () => {
  return (
    <div className="w-screen bg-primary flex flex-row justify-center ">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Search />} />
          <Route path="/users/:username" element={<User />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default AppRouter;

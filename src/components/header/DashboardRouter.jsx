import { useLocation, useNavigate } from "react-router-dom";

const DashboardRouter = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const currentPath = location.pathname
    ?.split("/")
    .filter((path) => path !== "");

  return (
    <>
      <div className="hidden md:flex items-center gap-2">
        <span
          className="px-2 py-1 flex justify-center items-center text-text-muted hover:bg-bg-hover rounded-md cursor-pointer font-light"
          onClick={() => navigate("/")}
        >
          Dashboards
        </span>
        <span className="text-text-muted">/</span>
        <span
          className="px-2 py-1 flex justify-center items-center text-text-primary hover:bg-bg-hover rounded-md cursor-pointer capitalize"
          onClick={() => navigate("/")}
          >
          {currentPath[0] || "Default"}
        </span>
      </div>
    </>
  );
};

export default DashboardRouter;

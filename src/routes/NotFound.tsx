import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  const navigateToHome = () => navigate("/");
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
      <p className="mb-4">
        Sorry, the page you are looking for does not exist.
      </p>
      <Button
        aria-label="go back home"
        title="go back home"
        onClick={navigateToHome}
        variant={"link"}
        className="text-blue-500"
      >
        Go back to Home
      </Button>
    </div>
  );
};

export default NotFound;

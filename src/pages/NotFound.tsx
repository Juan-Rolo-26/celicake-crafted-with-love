import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Home } from "lucide-react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-cream">
      <div className="text-center px-4">
        <h1 className="mb-4 text-6xl font-display font-bold text-primary">404</h1>
        <p className="mb-6 text-xl text-muted-foreground">
          ¡Ups! Esta página no existe
        </p>
        <Button variant="default" asChild>
          <a href="/">
            <Home size={18} />
            Volver al inicio
          </a>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;

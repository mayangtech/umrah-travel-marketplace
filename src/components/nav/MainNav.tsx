import { Button } from "@/components/ui/button";
import { LogIn, User } from "lucide-react";
import { Link } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";

export const MainNav = () => {
  const { isAuthenticated } = useAuth();

  return (
    <nav className="border-b">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link to="/" className="text-2xl font-bold text-primary">
          Umrah Marketplace
        </Link>
        {isAuthenticated ? (
          <Link to="/dashboard">
            <Button variant="outline" size="sm">
              <User className="mr-2 h-4 w-4" />
              Dashboard
            </Button>
          </Link>
        ) : (
          <Link to="/login">
            <Button variant="outline" size="sm">
              <LogIn className="mr-2 h-4 w-4" />
              Login
            </Button>
          </Link>
        )}
      </div>
    </nav>
  );
};
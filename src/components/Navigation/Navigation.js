import { Button } from "components/Button";
import { useAuth } from "hooks";

export const Navigation = () => {
  const { isLoggedIn } = useAuth();
  
    return (
      <nav>
        <Button sx={{ color: 'white' }} to="/">
          Home
        </Button>
        {isLoggedIn && (
          <Button sx={{ color: 'white' }} to="/contacts">
            Contacts
          </Button>
        )}
      </nav>
    );
}
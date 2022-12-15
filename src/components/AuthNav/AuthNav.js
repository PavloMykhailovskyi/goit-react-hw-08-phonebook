import { Button } from "components/Button";

export const AuthNav = () => {
    return (
      <div>
        <Button sx={{ color: 'white' }} to="/register">
          Register
        </Button>
        <Button sx={{ color: 'white' }} to="/login">
          Log In
        </Button>
      </div>
    );
}
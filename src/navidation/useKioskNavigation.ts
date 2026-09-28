import { useNavigate } from "react-router-dom";

export function useKioskNavigation() {
  const navigate = useNavigate();

  const goTo = (path: string) => {
    navigate(path);
  };

  return {
    goTo,
  };
}
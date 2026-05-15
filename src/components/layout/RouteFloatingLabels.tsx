import { useLocation } from "react-router-dom";
import FloatingLabels from "../landing/FloatingLabels";

export default function RouteFloatingLabels() {
  const { pathname } = useLocation();

  if (pathname !== "/") return null;

  return <FloatingLabels />;
}

import { Outlet, useLocation, useNavigate } from '@modern-js/runtime/router';
import { AboutPages } from './pages'

export default function AboutLayout() {
  return (
    <div>
      <AboutPages />
    </div>
  );
}
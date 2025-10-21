import { Link, useLocation } from 'react-router-dom';
import Icon from '@/components/ui/icon';

const navItems = [
  { path: '/', label: 'Главная', icon: 'Home' },
  { path: '/nutrition', label: 'Питание', icon: 'Apple' },
  { path: '/activity', label: 'Активность', icon: 'Footprints' },
  { path: '/wellness', label: 'Здоровье', icon: 'HeartPulse' },
  { path: '/about', label: 'О создателе', icon: 'User' },
  { path: '/resources', label: 'Ресурсы', icon: 'BookOpen' },
];

export default function Navigation() {
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2 font-bold text-xl text-primary hover-scale">
            <Icon name="Heart" size={24} />
            ЗОЖ
          </Link>
          
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-200 ${
                  location.pathname === item.path
                    ? 'bg-primary text-white'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                <Icon name={item.icon} size={18} />
                <span className="text-sm font-medium">{item.label}</span>
              </Link>
            ))}
          </div>

          <button className="md:hidden p-2">
            <Icon name="Menu" size={24} />
          </button>
        </div>
      </div>
    </nav>
  );
}

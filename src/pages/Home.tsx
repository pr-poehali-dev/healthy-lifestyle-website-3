import { Link } from 'react-router-dom';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <div className="min-h-screen">
      <div 
        className="relative h-screen bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(https://cdn.poehali.dev/projects/b4af39c5-2fbd-4582-979e-47c9ccc27e27/files/34c05140-bc1c-4376-a7c6-24e8a72740ba.jpg)'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-white/90"></div>
        
        <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-center">
          <div className="animate-fade-in">
            <img 
              src="https://cdn.poehali.dev/projects/b4af39c5-2fbd-4582-979e-47c9ccc27e27/files/2bb16130-c0ff-473c-a4f8-82ac4fb5c24c.jpg"
              alt="Эмблема здорового образа жизни"
              className="w-32 h-32 mx-auto mb-6 rounded-full shadow-2xl"
            />
            
            <h1 className="text-6xl md:text-8xl font-bold mb-4 text-white drop-shadow-lg" style={{ fontFamily: 'Poppins, sans-serif' }}>
              ЗДОРОВЫЙ
            </h1>
            <h1 className="text-6xl md:text-8xl font-bold mb-8 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent" style={{ fontFamily: 'Poppins, sans-serif' }}>
              ОБРАЗ ЖИЗНИ
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-700 max-w-2xl mx-auto mb-12 font-light" style={{ fontFamily: 'Open Sans, sans-serif' }}>
              Образовательный проект 9 класса о важности здорового питания, физической активности и заботы о себе
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center mb-16">
              <Link to="/nutrition">
                <Button size="lg" className="gap-2 hover-scale shadow-lg">
                  <Icon name="Apple" size={20} />
                  Правильное питание
                </Button>
              </Link>
              <Link to="/activity">
                <Button size="lg" variant="secondary" className="gap-2 hover-scale shadow-lg">
                  <Icon name="Activity" size={20} />
                  Физическая активность
                </Button>
              </Link>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              <div className="flex flex-col items-center gap-2 bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover-scale">
                <Icon name="Apple" size={48} className="text-primary" />
                <span className="text-sm font-medium text-gray-700">Питание</span>
              </div>
              <div className="flex flex-col items-center gap-2 bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover-scale">
                <Icon name="Footprints" size={48} className="text-secondary" />
                <span className="text-sm font-medium text-gray-700">Активность</span>
              </div>
              <div className="flex flex-col items-center gap-2 bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover-scale">
                <Icon name="Droplet" size={48} className="text-accent" />
                <span className="text-sm font-medium text-gray-700">Гидратация</span>
              </div>
              <div className="flex flex-col items-center gap-2 bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover-scale">
                <Icon name="HeartPulse" size={48} className="text-primary" />
                <span className="text-sm font-medium text-gray-700">Здоровье</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

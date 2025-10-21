import Icon from '@/components/ui/icon';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function Wellness() {
  const wellnessPillars = [
    {
      title: 'Сон',
      description: 'Подросткам необходимо 8-10 часов качественного сна',
      icon: 'Moon',
      color: 'text-purple-500',
      tips: [
        'Ложитесь спать в одно время',
        'Избегайте гаджетов за час до сна',
        'Проветривайте спальню'
      ]
    },
    {
      title: 'Ментальное здоровье',
      description: 'Забота о психологическом благополучии',
      icon: 'Brain',
      color: 'text-pink-500',
      tips: [
        'Общайтесь с друзьями',
        'Занимайтесь хобби',
        'Не бойтесь просить помощи'
      ]
    },
    {
      title: 'Гигиена',
      description: 'Ежедневные здоровые привычки',
      icon: 'Sparkles',
      color: 'text-blue-500',
      tips: [
        'Мойте руки регулярно',
        'Чистите зубы 2 раза в день',
        'Принимайте душ ежедневно'
      ]
    }
  ];

  return (
    <div className="min-h-screen pt-24 pb-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 animate-fade-in">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-primary/10 rounded-full mb-4">
            <Icon name="HeartPulse" size={40} className="text-primary" />
          </div>
          <h1 className="text-5xl font-bold mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Общее здоровье
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto" style={{ fontFamily: 'Open Sans, sans-serif' }}>
            Здоровье — это не только отсутствие болезней, но и полное физическое, психическое и социальное благополучие
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {wellnessPillars.map((pillar, index) => (
            <Card key={index} className="hover-scale border-2">
              <CardHeader className="text-center">
                <div className={`inline-flex items-center justify-center w-16 h-16 bg-gray-100 rounded-full mx-auto mb-3`}>
                  <Icon name={pillar.icon} size={32} className={pillar.color} />
                </div>
                <CardTitle className="text-2xl">{pillar.title}</CardTitle>
                <CardDescription className="text-base">{pillar.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {pillar.tips.map((tip, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <Icon name="Check" size={18} className="text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{tip}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="bg-gradient-to-br from-primary/5 to-secondary/5 border-2 border-primary/20 mb-6">
          <CardHeader>
            <CardTitle className="text-3xl flex items-center gap-2">
              <Icon name="AlertCircle" size={32} className="text-destructive" />
              Вредные привычки
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg mb-4">Избегайте факторов, которые негативно влияют на здоровье:</p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-start gap-3 p-4 bg-white rounded-lg border">
                <Icon name="Ban" size={24} className="text-destructive mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold mb-1">Курение и алкоголь</h4>
                  <p className="text-sm text-gray-600">Наносят непоправимый вред растущему организму</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 bg-white rounded-lg border">
                <Icon name="Ban" size={24} className="text-destructive mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold mb-1">Малоподвижный образ жизни</h4>
                  <p className="text-sm text-gray-600">Приводит к проблемам с осанкой и лишним весом</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-accent/10 to-primary/10 border-2 border-accent/20">
          <CardHeader>
            <CardTitle className="text-3xl flex items-center gap-2">
              <Icon name="Heart" size={32} className="text-primary" />
              Формула здоровья
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-4 gap-4 text-center">
              <div className="p-4 bg-white rounded-xl">
                <div className="text-4xl font-bold text-primary mb-2">8-10</div>
                <p className="text-sm text-gray-600">часов сна</p>
              </div>
              <div className="p-4 bg-white rounded-xl">
                <div className="text-4xl font-bold text-secondary mb-2">60</div>
                <p className="text-sm text-gray-600">минут активности</p>
              </div>
              <div className="p-4 bg-white rounded-xl">
                <div className="text-4xl font-bold text-accent mb-2">5</div>
                <p className="text-sm text-gray-600">порций овощей/фруктов</p>
              </div>
              <div className="p-4 bg-white rounded-xl">
                <div className="text-4xl font-bold text-primary mb-2">2L</div>
                <p className="text-sm text-gray-600">воды в день</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

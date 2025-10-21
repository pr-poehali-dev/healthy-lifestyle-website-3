import Icon from '@/components/ui/icon';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function Nutrition() {
  const nutritionTips = [
    {
      title: 'Разнообразие продуктов',
      description: 'Включайте в рацион овощи, фрукты, цельнозерновые продукты, белки и полезные жиры',
      icon: 'Salad',
      color: 'text-primary'
    },
    {
      title: 'Режим питания',
      description: 'Ешьте регулярно 4-5 раз в день небольшими порциями для поддержания энергии',
      icon: 'Clock',
      color: 'text-secondary'
    },
    {
      title: 'Водный баланс',
      description: 'Пейте 1.5-2 литра чистой воды в день для нормального функционирования организма',
      icon: 'Droplet',
      color: 'text-accent'
    },
    {
      title: 'Ограничение сахара',
      description: 'Сократите потребление сладких напитков и продуктов с добавленным сахаром',
      icon: 'AlertCircle',
      color: 'text-destructive'
    }
  ];

  return (
    <div className="min-h-screen pt-24 pb-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 animate-fade-in">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-primary/10 rounded-full mb-4">
            <Icon name="Apple" size={40} className="text-primary" />
          </div>
          <h1 className="text-5xl font-bold mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Правильное питание
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto" style={{ fontFamily: 'Open Sans, sans-serif' }}>
            Основа здорового образа жизни — сбалансированное и разнообразное питание
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {nutritionTips.map((tip, index) => (
            <Card key={index} className="hover-scale border-2">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <Icon name={tip.icon} size={32} className={tip.color} />
                  <CardTitle className="text-2xl">{tip.title}</CardTitle>
                </div>
                <CardDescription className="text-base">{tip.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>

        <Card className="bg-gradient-to-br from-primary/5 to-secondary/5 border-2 border-primary/20">
          <CardHeader>
            <CardTitle className="text-3xl flex items-center gap-2">
              <Icon name="Lightbulb" size={32} className="text-primary" />
              Полезные советы
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3 text-lg">
              <li className="flex items-start gap-3">
                <Icon name="Check" size={24} className="text-primary mt-1 flex-shrink-0" />
                <span>Завтракайте каждый день — это запускает метаболизм</span>
              </li>
              <li className="flex items-start gap-3">
                <Icon name="Check" size={24} className="text-primary mt-1 flex-shrink-0" />
                <span>Добавляйте овощи и фрукты в каждый приём пищи</span>
              </li>
              <li className="flex items-start gap-3">
                <Icon name="Check" size={24} className="text-primary mt-1 flex-shrink-0" />
                <span>Ограничьте фастфуд и полуфабрикаты</span>
              </li>
              <li className="flex items-start gap-3">
                <Icon name="Check" size={24} className="text-primary mt-1 flex-shrink-0" />
                <span>Читайте состав продуктов на этикетках</span>
              </li>
              <li className="flex items-start gap-3">
                <Icon name="Check" size={24} className="text-primary mt-1 flex-shrink-0" />
                <span>Готовьте дома чаще — так вы контролируете ингредиенты</span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

import Icon from '@/components/ui/icon';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function Activity() {
  const activities = [
    {
      title: 'Ходьба и бег',
      description: 'Ежедневная активность минимум 30 минут улучшает работу сердца',
      icon: 'Footprints',
      benefits: ['Укрепляет сердце', 'Сжигает калории', 'Улучшает настроение']
    },
    {
      title: 'Силовые тренировки',
      description: '2-3 раза в неделю для укрепления мышц и костей',
      icon: 'Dumbbell',
      benefits: ['Формирует фигуру', 'Увеличивает силу', 'Повышает метаболизм']
    },
    {
      title: 'Растяжка и йога',
      description: 'Гибкость и расслабление для общего самочувствия',
      icon: 'Sparkles',
      benefits: ['Развивает гибкость', 'Снимает стресс', 'Улучшает осанку']
    }
  ];

  return (
    <div className="min-h-screen pt-24 pb-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 animate-fade-in">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-secondary/10 rounded-full mb-4">
            <Icon name="Activity" size={40} className="text-secondary" />
          </div>
          <h1 className="text-5xl font-bold mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Физическая активность
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto" style={{ fontFamily: 'Open Sans, sans-serif' }}>
            Движение — это жизнь! Регулярная физическая активность укрепляет тело и дух
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {activities.map((activity, index) => (
            <Card key={index} className="hover-scale border-2">
              <CardHeader className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-secondary/10 rounded-full mx-auto mb-3">
                  <Icon name={activity.icon} size={32} className="text-secondary" />
                </div>
                <CardTitle className="text-2xl">{activity.title}</CardTitle>
                <CardDescription className="text-base">{activity.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {activity.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <Icon name="CheckCircle2" size={18} className="text-primary flex-shrink-0" />
                      <span className="text-sm">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-gradient-to-br from-secondary/10 to-primary/10 border-2 border-secondary/20">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-2">
                <Icon name="Target" size={28} className="text-secondary" />
                Рекомендации ВОЗ
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-start gap-3">
                <Icon name="CircleDot" size={20} className="text-secondary mt-1 flex-shrink-0" />
                <p>Подростки 13-17 лет: минимум 60 минут активности в день</p>
              </div>
              <div className="flex items-start gap-3">
                <Icon name="CircleDot" size={20} className="text-secondary mt-1 flex-shrink-0" />
                <p>Включать упражнения для укрепления мышц 3 раза в неделю</p>
              </div>
              <div className="flex items-start gap-3">
                <Icon name="CircleDot" size={20} className="text-secondary mt-1 flex-shrink-0" />
                <p>Ограничить время у экрана до 2 часов в день</p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-accent/10 to-primary/10 border-2 border-accent/20">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-2">
                <Icon name="Zap" size={28} className="text-accent" />
                Быстрый старт
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-start gap-3">
                <Icon name="Star" size={20} className="text-accent mt-1 flex-shrink-0" />
                <p>Начните с 10-минутных прогулок каждый день</p>
              </div>
              <div className="flex items-start gap-3">
                <Icon name="Star" size={20} className="text-accent mt-1 flex-shrink-0" />
                <p>Выбирайте лестницу вместо лифта</p>
              </div>
              <div className="flex items-start gap-3">
                <Icon name="Star" size={20} className="text-accent mt-1 flex-shrink-0" />
                <p>Занимайтесь спортом с друзьями — это веселее!</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

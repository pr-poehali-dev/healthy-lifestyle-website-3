import Icon from '@/components/ui/icon';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function Resources() {
  const resources = [
    {
      category: 'Официальные источники',
      icon: 'Shield',
      color: 'text-primary',
      items: [
        {
          title: 'Всемирная организация здравоохранения (ВОЗ)',
          description: 'Рекомендации по питанию и физической активности',
          url: 'https://www.who.int/ru'
        },
        {
          title: 'Министерство здравоохранения РФ',
          description: 'Национальные программы по здоровому образу жизни',
          url: 'https://minzdrav.gov.ru'
        }
      ]
    },
    {
      category: 'Образовательные материалы',
      icon: 'BookOpen',
      color: 'text-secondary',
      items: [
        {
          title: 'Учебники по биологии и ОБЖ',
          description: 'Школьная программа 8-9 классов'
        },
        {
          title: 'Научно-популярные статьи',
          description: 'Публикации о здоровье подростков'
        }
      ]
    },
    {
      category: 'Визуальные материалы',
      icon: 'Image',
      color: 'text-accent',
      items: [
        {
          title: 'Инфографика о питании',
          description: 'Пирамида питания и калорийность продуктов'
        },
        {
          title: 'Схемы упражнений',
          description: 'Иллюстрации правильной техники выполнения'
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen pt-24 pb-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 animate-fade-in">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-primary/10 rounded-full mb-4">
            <Icon name="BookOpen" size={40} className="text-primary" />
          </div>
          <h1 className="text-5xl font-bold mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Использованные ресурсы
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto" style={{ fontFamily: 'Open Sans, sans-serif' }}>
            Список источников информации, использованных при создании проекта
          </p>
        </div>

        <div className="space-y-6">
          {resources.map((resource, index) => (
            <Card key={index} className="border-2 hover-scale">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-3">
                  <Icon name={resource.icon} size={32} className={resource.color} />
                  {resource.category}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {resource.items.map((item, idx) => (
                    <div key={idx} className="p-4 bg-gray-50 rounded-lg border">
                      <h4 className="font-semibold text-lg mb-1 flex items-start gap-2">
                        <Icon name="ExternalLink" size={20} className="text-primary mt-1 flex-shrink-0" />
                        {item.title}
                      </h4>
                      <p className="text-gray-600 mb-2">{item.description}</p>
                      {item.url && (
                        <a 
                          href={item.url} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-primary hover:underline text-sm font-medium inline-flex items-center gap-1"
                        >
                          Перейти на сайт
                          <Icon name="ArrowRight" size={16} />
                        </a>
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="mt-8 bg-gradient-to-br from-primary/5 to-secondary/5 border-2 border-primary/20">
          <CardHeader>
            <CardTitle className="text-2xl flex items-center gap-2">
              <Icon name="Info" size={28} className="text-primary" />
              Примечание
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700">
              Вся информация, представленная на сайте, носит образовательный характер и основана на официальных 
              рекомендациях медицинских организаций. При возникновении проблем со здоровьем обязательно 
              обращайтесь к врачу.
            </p>
          </CardContent>
        </Card>

        <Card className="mt-6 border-2">
          <CardHeader>
            <CardTitle className="text-2xl flex items-center gap-2">
              <Icon name="Heart" size={28} className="text-destructive" />
              Благодарности
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <Icon name="Check" size={20} className="text-primary mt-1 flex-shrink-0" />
                <p>Учителю биологии за помощь в подборе материалов</p>
              </div>
              <div className="flex items-start gap-3">
                <Icon name="Check" size={20} className="text-primary mt-1 flex-shrink-0" />
                <p>Школьной библиотеке за предоставленную литературу</p>
              </div>
              <div className="flex items-start gap-3">
                <Icon name="Check" size={20} className="text-primary mt-1 flex-shrink-0" />
                <p>Одноклассникам за поддержку и обратную связь</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

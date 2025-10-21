import Icon from '@/components/ui/icon';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function About() {
  return (
    <div className="min-h-screen pt-24 pb-16 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12 animate-fade-in">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-primary/10 rounded-full mb-4">
            <Icon name="User" size={40} className="text-primary" />
          </div>
          <h1 className="text-5xl font-bold mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
            О создателе
          </h1>
        </div>

        <Card className="mb-8 hover-scale border-2">
          <CardHeader>
            <CardTitle className="text-3xl text-center">Проект 9 класса</CardTitle>
          </CardHeader>
          <CardContent className="text-center space-y-4">
            <div className="w-32 h-32 bg-gradient-to-br from-primary to-secondary rounded-full mx-auto flex items-center justify-center text-white text-5xl font-bold">
              9
            </div>
            <p className="text-lg text-gray-600">
              Этот образовательный проект создан учеником 9 класса в рамках изучения темы здорового образа жизни
            </p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-primary/5 to-secondary/5 border-2 border-primary/20 mb-8">
          <CardHeader>
            <CardTitle className="text-2xl flex items-center gap-2">
              <Icon name="Target" size={28} className="text-primary" />
              Цель проекта
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <p className="text-lg">
              Информировать сверстников о важности здорового образа жизни и помочь сформировать полезные привычки
            </p>
            <div className="grid md:grid-cols-2 gap-4 mt-4">
              <div className="flex items-start gap-3 p-4 bg-white rounded-lg">
                <Icon name="BookOpen" size={24} className="text-primary flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold mb-1">Образование</h4>
                  <p className="text-sm text-gray-600">Предоставить достоверную информацию о ЗОЖ</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 bg-white rounded-lg">
                <Icon name="Users" size={24} className="text-secondary flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold mb-1">Мотивация</h4>
                  <p className="text-sm text-gray-600">Вдохновить на позитивные изменения</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-2">
          <CardHeader>
            <CardTitle className="text-2xl flex items-center gap-2">
              <Icon name="Mail" size={28} className="text-primary" />
              Обратная связь
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 mb-4">
              Если у вас есть вопросы или предложения по улучшению проекта, буду рад обратной связи!
            </p>
            <div className="flex flex-wrap gap-3">
              <div className="flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-lg">
                <Icon name="School" size={20} className="text-primary" />
                <span className="text-sm font-medium">9 класс</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-secondary/10 rounded-lg">
                <Icon name="Calendar" size={20} className="text-secondary" />
                <span className="text-sm font-medium">2024-2025 учебный год</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

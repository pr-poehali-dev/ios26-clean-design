import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const features = [
    { icon: 'Zap', title: 'Молниеносная скорость', desc: 'Работайте быстрее с нашей оптимизированной платформой' },
    { icon: 'Shield', title: 'Безопасность данных', desc: 'Ваши данные под надёжной защитой 24/7' },
    { icon: 'Sparkles', title: 'Интуитивный интерфейс', desc: 'Начните работу без обучения за 5 минут' },
    { icon: 'TrendingUp', title: 'Аналитика в реальном времени', desc: 'Отслеживайте метрики и рост бизнеса' },
  ];

  const capabilities = [
    { icon: 'Layers', title: 'Многоуровневая архитектура', desc: 'Масштабируйте проекты любой сложности' },
    { icon: 'Workflow', title: 'Автоматизация процессов', desc: 'Сократите рутину на 70% с умными алгоритмами' },
    { icon: 'Users', title: 'Командная работа', desc: 'Совместное редактирование и комментарии' },
    { icon: 'Globe', title: 'Доступ из любой точки', desc: 'Работайте с любого устройства и браузера' },
    { icon: 'Puzzle', title: 'Интеграции', desc: 'Подключайте любые сервисы через API' },
    { icon: 'LineChart', title: 'Прогнозирование', desc: 'ИИ-аналитика для принятия решений' },
  ];

  const plans = [
    {
      name: 'Starter',
      price: '990',
      period: 'мес',
      features: ['5 проектов', '10 ГБ хранилища', 'Базовая поддержка', 'Email уведомления'],
      popular: false,
    },
    {
      name: 'Professional',
      price: '2990',
      period: 'мес',
      features: ['50 проектов', '100 ГБ хранилища', 'Приоритетная поддержка', 'API доступ', 'Кастомные интеграции'],
      popular: true,
    },
    {
      name: 'Enterprise',
      price: 'По запросу',
      period: '',
      features: ['Безлимитные проекты', 'Безлимитное хранилище', 'Личный менеджер', 'SLA 99.9%', 'Выделенная инфраструктура'],
      popular: false,
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-glass-purple via-background to-glass-blue">
      <div className="fixed inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDEzOSwgOTIsIDI0NiwgMC4wNSkiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-30" />
      
      <div className="relative">
        <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl w-full text-center space-y-8 animate-fade-in">
            <div className="inline-block">
              <div className="px-4 py-2 rounded-full bg-white/40 backdrop-blur-md border border-white/20 text-sm font-medium text-primary mb-6 animate-scale-in">
                ✨ Новое поколение SaaS-платформ
              </div>
            </div>
            
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight">
              <span className="bg-gradient-to-r from-vivid-purple via-primary to-ocean-blue bg-clip-text text-transparent">
                Управляйте бизнесом
              </span>
              <br />
              <span className="text-foreground">интуитивно и эффективно</span>
            </h1>
            
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto font-light">
              Единая платформа для автоматизации процессов, анализа данных и роста вашей компании
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <Button size="lg" className="rounded-3xl px-8 py-6 text-lg font-semibold shadow-2xl hover:shadow-primary/50 transition-all hover:scale-105 bg-gradient-to-r from-vivid-purple to-primary">
                Начать бесплатно
                <Icon name="ArrowRight" size={20} className="ml-2" />
              </Button>
              <Button size="lg" variant="outline" className="rounded-3xl px-8 py-6 text-lg font-semibold backdrop-blur-md bg-white/60 hover:bg-white/80 border-white/40 transition-all hover:scale-105">
                Смотреть демо
                <Icon name="Play" size={20} className="ml-2" />
              </Button>
            </div>

            <div className="pt-16 animate-float">
              <Card className="rounded-4xl p-8 backdrop-blur-xl bg-white/70 border-white/40 shadow-2xl">
                <img 
                  src="https://cdn.poehali.dev/projects/201e33a2-1cc2-419f-9efe-b691fcc4a945/files/83206b0a-5bed-43d7-a5ca-953671ac2817.jpg" 
                  alt="Platform Dashboard" 
                  className="w-full h-auto rounded-3xl shadow-lg"
                />
              </Card>
            </div>
          </div>
        </section>

        <section id="benefits" className="py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16 space-y-4">
              <h2 className="text-4xl sm:text-5xl font-bold text-foreground">
                Почему выбирают нас
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Мы создали инструмент, который реально упрощает работу
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {features.map((feature, i) => (
                <Card 
                  key={i}
                  className="rounded-3xl p-8 backdrop-blur-xl bg-white/60 border-white/40 hover:bg-white/80 transition-all duration-300 hover:scale-105 hover:shadow-2xl group"
                  style={{ animationDelay: `${i * 100}ms` }}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-vivid-purple to-primary flex items-center justify-center shadow-lg group-hover:shadow-primary/50 transition-shadow">
                      <Icon name={feature.icon} size={28} className="text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-2 text-foreground">{feature.title}</h3>
                      <p className="text-muted-foreground">{feature.desc}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="capabilities" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent to-white/50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16 space-y-4">
              <h2 className="text-4xl sm:text-5xl font-bold text-foreground">
                Возможности платформы
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Полный набор инструментов для цифровой трансформации
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {capabilities.map((cap, i) => (
                <Card 
                  key={i}
                  className="rounded-3xl p-6 backdrop-blur-xl bg-white/50 border-white/30 hover:bg-white/70 transition-all duration-300 hover:scale-105"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-ocean-blue to-secondary flex items-center justify-center mb-4 shadow-md">
                    <Icon name={cap.icon} size={24} className="text-white" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-foreground">{cap.title}</h3>
                  <p className="text-sm text-muted-foreground">{cap.desc}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="pricing" className="py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16 space-y-4">
              <h2 className="text-4xl sm:text-5xl font-bold text-foreground">
                Выберите свой тариф
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Прозрачные цены без скрытых платежей
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {plans.map((plan, i) => (
                <Card 
                  key={i}
                  className={`rounded-4xl p-8 backdrop-blur-xl transition-all duration-300 hover:scale-105 ${
                    plan.popular 
                      ? 'bg-gradient-to-br from-vivid-purple/20 to-primary/20 border-vivid-purple/40 shadow-2xl scale-105' 
                      : 'bg-white/60 border-white/40'
                  }`}
                >
                  {plan.popular && (
                    <div className="inline-block px-4 py-1 rounded-full bg-gradient-to-r from-vivid-purple to-primary text-white text-sm font-semibold mb-4">
                      Популярный
                    </div>
                  )}
                  
                  <h3 className="text-2xl font-bold text-foreground mb-2">{plan.name}</h3>
                  
                  <div className="mb-6">
                    {plan.period ? (
                      <div className="flex items-baseline">
                        <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                        <span className="text-lg text-muted-foreground ml-2">₽/{plan.period}</span>
                      </div>
                    ) : (
                      <span className="text-3xl font-bold text-foreground">{plan.price}</span>
                    )}
                  </div>

                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, j) => (
                      <li key={j} className="flex items-center gap-2 text-sm text-foreground">
                        <Icon name="Check" size={18} className="text-vivid-purple flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Button 
                    className={`w-full rounded-2xl py-6 font-semibold transition-all ${
                      plan.popular
                        ? 'bg-gradient-to-r from-vivid-purple to-primary hover:shadow-lg hover:shadow-primary/50'
                        : 'bg-white hover:bg-gray-50 text-foreground border border-border'
                    }`}
                    variant={plan.popular ? 'default' : 'outline'}
                  >
                    Выбрать тариф
                  </Button>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <Card className="rounded-4xl p-8 sm:p-12 backdrop-blur-xl bg-white/70 border-white/40 shadow-2xl">
              <div className="text-center mb-8 space-y-3">
                <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
                  Свяжитесь с нами
                </h2>
                <p className="text-muted-foreground">
                  Ответим на все вопросы и поможем начать работу
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Ваше имя
                  </label>
                  <Input 
                    placeholder="Иван Иванов"
                    className="rounded-2xl backdrop-blur-sm bg-white/80 border-white/60 h-12"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Email
                  </label>
                  <Input 
                    type="email"
                    placeholder="ivan@example.com"
                    className="rounded-2xl backdrop-blur-sm bg-white/80 border-white/60 h-12"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Сообщение
                  </label>
                  <Textarea 
                    placeholder="Расскажите о вашем проекте..."
                    className="rounded-2xl backdrop-blur-sm bg-white/80 border-white/60 min-h-32"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                  />
                </div>

                <Button 
                  type="submit"
                  size="lg"
                  className="w-full rounded-2xl py-6 text-lg font-semibold bg-gradient-to-r from-vivid-purple to-primary hover:shadow-lg hover:shadow-primary/50 transition-all"
                >
                  Отправить сообщение
                  <Icon name="Send" size={20} className="ml-2" />
                </Button>
              </form>
            </Card>
          </div>
        </section>

        <footer className="py-12 px-4 sm:px-6 lg:px-8 backdrop-blur-xl bg-white/50 border-t border-white/40">
          <div className="max-w-6xl mx-auto text-center">
            <p className="text-muted-foreground">
              © 2024 SaaS Platform. Все права защищены.
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;
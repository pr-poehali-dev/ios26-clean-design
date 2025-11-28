import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [formData, setFormData] = useState({ name: '', email: '', company: '', message: '' });
  const [activeMetric, setActiveMetric] = useState(0);

  const metrics = [
    { value: '10M+', label: 'Активных пользователей', icon: 'Users' },
    { value: '$50M', label: 'Привлечено инвестиций', icon: 'TrendingUp' },
    { value: '150%', label: 'Рост год к году', icon: 'BarChart3' },
    { value: '99.9%', label: 'Uptime сервиса', icon: 'Zap' },
  ];

  const problems = [
    {
      title: 'Проблема',
      description: 'Компании тратят миллионы на неэффективные процессы и устаревшие инструменты. 70% рабочего времени уходит на рутину вместо роста бизнеса.',
      icon: 'AlertTriangle',
      color: 'from-red-500 to-orange-500',
    },
    {
      title: 'Наше решение',
      description: 'Мы автоматизируем все процессы с помощью ИИ, сокращая затраты на 60% и освобождая время для стратегических задач. Внедрение за 48 часов.',
      icon: 'Sparkles',
      color: 'from-vivid-purple to-primary',
    },
  ];

  const features = [
    { 
      icon: 'Brain', 
      title: 'ИИ-движок', 
      desc: 'Машинное обучение анализирует данные и принимает решения за вас',
      gradient: 'from-purple-500 to-pink-500'
    },
    { 
      icon: 'Rocket', 
      title: 'Быстрый запуск', 
      desc: 'От подписания до запуска 48 часов — без сложных интеграций',
      gradient: 'from-blue-500 to-cyan-500'
    },
    { 
      icon: 'Shield', 
      title: 'Безопасность enterprise', 
      desc: 'SOC 2, GDPR, шифрование данных и резервное копирование',
      gradient: 'from-green-500 to-emerald-500'
    },
    { 
      icon: 'Code', 
      title: 'Открытое API', 
      desc: 'Интегрируйте с любыми сервисами через REST и GraphQL',
      gradient: 'from-orange-500 to-red-500'
    },
  ];

  const team = [
    {
      name: 'Александр Петров',
      role: 'CEO & Co-Founder',
      bio: 'Ex-Google, 15 лет в enterprise SaaS',
      image: 'https://cdn.poehali.dev/projects/201e33a2-1cc2-419f-9efe-b691fcc4a945/files/f9d38a9d-9a2c-48d3-ad92-5c71ba34ef3b.jpg',
      linkedin: '#'
    },
    {
      name: 'Мария Иванова',
      role: 'CTO & Co-Founder',
      bio: 'Ex-Microsoft, AI/ML эксперт',
      image: 'https://cdn.poehali.dev/projects/201e33a2-1cc2-419f-9efe-b691fcc4a945/files/f9d38a9d-9a2c-48d3-ad92-5c71ba34ef3b.jpg',
      linkedin: '#'
    },
    {
      name: 'Дмитрий Сидоров',
      role: 'Head of Product',
      bio: 'Ex-Yandex, запустил 5 продуктов',
      image: 'https://cdn.poehali.dev/projects/201e33a2-1cc2-419f-9efe-b691fcc4a945/files/f9d38a9d-9a2c-48d3-ad92-5c71ba34ef3b.jpg',
      linkedin: '#'
    },
  ];

  const investors = [
    { name: 'Sequoia Capital', logo: '🌲' },
    { name: 'Y Combinator', logo: '🚀' },
    { name: 'a16z', logo: '💎' },
    { name: 'Tiger Global', logo: '🐯' },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Investor form submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <nav className="fixed top-0 w-full backdrop-blur-xl bg-white/70 border-b border-gray-200/50 z-50 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2 text-2xl font-bold">
            <span className="bg-gradient-to-r from-vivid-purple to-primary bg-clip-text text-transparent">
              YourStartup
            </span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#product" className="text-sm font-medium hover:text-primary transition-colors">Продукт</a>
            <a href="#metrics" className="text-sm font-medium hover:text-primary transition-colors">Метрики</a>
            <a href="#team" className="text-sm font-medium hover:text-primary transition-colors">Команда</a>
            <Button size="sm" className="rounded-full">Связаться</Button>
          </div>
        </div>
      </nav>

      <div className="pt-20">
        <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(139,92,246,0.1),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(59,130,246,0.1),transparent_50%)]" />
          
          <div className="max-w-7xl w-full grid lg:grid-cols-2 gap-12 items-center relative z-10">
            <div className="space-y-8 animate-fade-in">
              <div className="inline-block">
                <div className="px-4 py-2 rounded-full bg-gradient-to-r from-vivid-purple/20 to-primary/20 border border-vivid-purple/30 text-sm font-semibold text-vivid-purple">
                  🚀 Seed раунд: $5M привлечено
                </div>
              </div>
              
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-tight">
                Автоматизируем <br />
                <span className="bg-gradient-to-r from-vivid-purple via-primary to-ocean-blue bg-clip-text text-transparent">
                  бизнес будущего
                </span>
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed">
                ИИ-платформа, которая заменяет 50+ инструментов и сокращает операционные расходы на 60%. 
                Присоединяйтесь к 10 000+ компаний, которые уже растут с нами.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="rounded-full px-8 py-6 text-lg font-semibold bg-gradient-to-r from-vivid-purple to-primary hover:shadow-xl transition-all hover:scale-105">
                  Получить Early Access
                  <Icon name="ArrowRight" size={20} className="ml-2" />
                </Button>
                <Button size="lg" variant="outline" className="rounded-full px-8 py-6 text-lg font-semibold hover:bg-gray-50 transition-all">
                  Смотреть Demo (3 мин)
                  <Icon name="Play" size={20} className="ml-2" />
                </Button>
              </div>

              <div className="flex items-center gap-8 pt-4">
                <div>
                  <div className="text-3xl font-bold text-foreground">4.9/5.0</div>
                  <div className="text-sm text-muted-foreground">на Product Hunt</div>
                </div>
                <div className="h-12 w-px bg-gray-300" />
                <div>
                  <div className="text-3xl font-bold text-foreground">500K+</div>
                  <div className="text-sm text-muted-foreground">пользователей</div>
                </div>
              </div>
            </div>

            <div className="relative animate-float">
              <div className="absolute inset-0 bg-gradient-to-r from-vivid-purple/20 to-primary/20 rounded-4xl blur-3xl" />
              <Card className="rounded-4xl p-4 backdrop-blur-xl bg-white/80 border-white/60 shadow-2xl relative">
                <img 
                  src="https://cdn.poehali.dev/projects/201e33a2-1cc2-419f-9efe-b691fcc4a945/files/14a2f1fd-1907-446f-a89a-63cde1d7575f.jpg"
                  alt="Product Interface" 
                  className="w-full h-auto rounded-3xl"
                />
              </Card>
            </div>
          </div>
        </section>

        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-vivid-purple to-primary">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h3 className="text-2xl font-bold text-white">При поддержке ведущих инвесторов</h3>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {investors.map((investor, i) => (
                <div key={i} className="flex flex-col items-center gap-2 text-white/90">
                  <div className="text-4xl">{investor.logo}</div>
                  <div className="text-sm font-semibold">{investor.name}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="problem" className="py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {problems.map((item, i) => (
                <Card 
                  key={i}
                  className="rounded-4xl p-8 backdrop-blur-xl bg-white/80 border-white/60 shadow-xl hover:shadow-2xl transition-all hover:scale-105"
                >
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-6 shadow-lg`}>
                    <Icon name={item.icon} size={32} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-foreground">{item.title}</h3>
                  <p className="text-muted-foreground text-lg leading-relaxed">{item.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="metrics" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-blue-50/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16 space-y-4">
              <h2 className="text-4xl sm:text-5xl font-bold text-foreground">
                Наши показатели роста
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Прозрачные метрики, которые говорят сами за себя
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
              {metrics.map((metric, i) => (
                <Card 
                  key={i}
                  className="rounded-3xl p-6 backdrop-blur-xl bg-white/80 border-white/60 hover:shadow-xl transition-all cursor-pointer hover:scale-105"
                  onClick={() => setActiveMetric(i)}
                >
                  <div className="flex flex-col items-center text-center gap-3">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br from-vivid-purple to-primary flex items-center justify-center ${activeMetric === i ? 'scale-110 shadow-lg' : ''} transition-all`}>
                      <Icon name={metric.icon} size={24} className="text-white" />
                    </div>
                    <div className="text-3xl sm:text-4xl font-bold text-foreground">{metric.value}</div>
                    <div className="text-sm text-muted-foreground">{metric.label}</div>
                  </div>
                </Card>
              ))}
            </div>

            <Card className="rounded-4xl p-12 backdrop-blur-xl bg-white/80 border-white/60 shadow-2xl">
              <img 
                src="https://cdn.poehali.dev/projects/201e33a2-1cc2-419f-9efe-b691fcc4a945/files/947199b9-b1bd-46ea-8edf-56b61d124e59.jpg"
                alt="Team Working" 
                className="w-full h-auto rounded-3xl"
              />
            </Card>
          </div>
        </section>

        <section id="product" className="py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16 space-y-4">
              <h2 className="text-4xl sm:text-5xl font-bold text-foreground">
                Технологии, которые меняют правила игры
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Собрали лучшее из мира ИИ, облачных вычислений и UX
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {features.map((feature, i) => (
                <Card 
                  key={i}
                  className="rounded-3xl p-8 backdrop-blur-xl bg-white/70 border-white/50 hover:bg-white/90 transition-all hover:scale-105 group"
                >
                  <div className="flex items-start gap-4">
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow`}>
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

        <section id="team" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-purple-50/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16 space-y-4">
              <h2 className="text-4xl sm:text-5xl font-bold text-foreground">
                Команда основателей
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Опыт из Google, Microsoft, Yandex — более 40 лет в tech
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {team.map((member, i) => (
                <Card 
                  key={i}
                  className="rounded-3xl overflow-hidden backdrop-blur-xl bg-white/80 border-white/60 hover:shadow-2xl transition-all hover:scale-105"
                >
                  <div className="aspect-square overflow-hidden">
                    <img 
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6 space-y-2">
                    <h3 className="text-xl font-bold text-foreground">{member.name}</h3>
                    <p className="text-sm font-semibold text-primary">{member.role}</p>
                    <p className="text-sm text-muted-foreground">{member.bio}</p>
                    <a 
                      href={member.linkedin}
                      className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline mt-2"
                    >
                      <Icon name="Linkedin" size={16} />
                      LinkedIn
                    </a>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="investors" className="py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <Card className="rounded-4xl p-8 sm:p-12 backdrop-blur-xl bg-gradient-to-br from-white/90 to-purple-50/90 border-white/60 shadow-2xl">
              <div className="text-center mb-8 space-y-3">
                <div className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-vivid-purple to-primary text-white text-sm font-semibold mb-4">
                  💼 Для инвесторов и партнёров
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
                  Давайте обсудим сотрудничество
                </h2>
                <p className="text-muted-foreground">
                  Ищем стратегических инвесторов для Series A раунда ($15M)
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Ваше имя
                    </label>
                    <Input 
                      placeholder="Иван Иванов"
                      className="rounded-2xl bg-white/90 border-white/80 h-12"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Компания / Фонд
                    </label>
                    <Input 
                      placeholder="Acme Ventures"
                      className="rounded-2xl bg-white/90 border-white/80 h-12"
                      value={formData.company}
                      onChange={(e) => setFormData({...formData, company: e.target.value})}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Email
                  </label>
                  <Input 
                    type="email"
                    placeholder="investor@fund.com"
                    className="rounded-2xl bg-white/90 border-white/80 h-12"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Чем интересен наш стартап?
                  </label>
                  <Textarea 
                    placeholder="Расскажите о ваших интересах и возможных условиях..."
                    className="rounded-2xl bg-white/90 border-white/80 min-h-32"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                  />
                </div>

                <Button 
                  type="submit"
                  size="lg"
                  className="w-full rounded-2xl py-6 text-lg font-semibold bg-gradient-to-r from-vivid-purple to-primary hover:shadow-xl transition-all"
                >
                  Отправить запрос
                  <Icon name="Send" size={20} className="ml-2" />
                </Button>

                <p className="text-xs text-center text-muted-foreground">
                  Deck и финансовая модель будут отправлены после NDA
                </p>
              </form>
            </Card>
          </div>
        </section>

        <footer className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-4 gap-8 mb-12">
              <div className="space-y-4">
                <div className="text-2xl font-bold">YourStartup</div>
                <p className="text-sm text-slate-300">
                  ИИ-платформа для автоматизации бизнеса будущего
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold mb-4">Продукт</h4>
                <ul className="space-y-2 text-sm text-slate-300">
                  <li><a href="#" className="hover:text-white transition-colors">Возможности</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Интеграции</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Безопасность</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">API Docs</a></li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold mb-4">Компания</h4>
                <ul className="space-y-2 text-sm text-slate-300">
                  <li><a href="#" className="hover:text-white transition-colors">О нас</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Блог</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Карьера</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Пресса</a></li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold mb-4">Контакты</h4>
                <ul className="space-y-2 text-sm text-slate-300">
                  <li>hello@yourstartup.com</li>
                  <li>+7 (495) 123-45-67</li>
                  <li className="flex gap-3 pt-2">
                    <a href="#" className="hover:text-white transition-colors"><Icon name="Twitter" size={20} /></a>
                    <a href="#" className="hover:text-white transition-colors"><Icon name="Linkedin" size={20} /></a>
                    <a href="#" className="hover:text-white transition-colors"><Icon name="Github" size={20} /></a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="border-t border-slate-700 pt-8 text-center text-sm text-slate-400">
              © 2024 YourStartup. Все права защищены.
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;

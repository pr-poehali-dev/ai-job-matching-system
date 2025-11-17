import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [userType, setUserType] = useState<'candidate' | 'employer'>('candidate');

  const skills = [
    { name: 'JavaScript', match: 95, demand: 'Высокий' },
    { name: 'React', match: 90, demand: 'Высокий' },
    { name: 'TypeScript', match: 85, demand: 'Растущий' },
    { name: 'Node.js', match: 80, demand: 'Высокий' },
    { name: 'Python', match: 75, demand: 'Стабильный' },
  ];

  const features = [
    {
      icon: 'Brain',
      title: 'AI-анализ навыков',
      description: 'Умный алгоритм анализирует ваши компетенции и находит идеальные совпадения',
    },
    {
      icon: 'Target',
      title: 'Точный подбор',
      description: 'Совместимость по реальным навыкам, а не ключевым словам',
    },
    {
      icon: 'FileText',
      title: 'Помощь с резюме',
      description: 'AI помогает составить профессиональное резюме за минуты',
    },
    {
      icon: 'TrendingUp',
      title: 'Аналитика рынка',
      description: 'Понимайте, какие навыки востребованы и где вы можете расти',
    },
  ];

  const howItWorks = [
    {
      step: 1,
      title: 'Расскажите о себе',
      description: 'Загрузите резюме или заполните профиль',
      icon: 'Upload',
    },
    {
      step: 2,
      title: 'AI анализирует навыки',
      description: 'Алгоритм оценивает ваши компетенции',
      icon: 'Sparkles',
    },
    {
      step: 3,
      title: 'Получите совпадения',
      description: 'Смотрите подходящие вакансии и компании',
      icon: 'CheckCircle',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
              <Icon name="Sparkles" size={24} className="text-white" />
            </div>
            <span className="text-2xl font-heading font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              AI JobMatcher
            </span>
          </div>
          <div className="hidden md:flex items-center gap-6">
            <a href="#features" className="text-sm font-medium hover:text-primary transition-colors">
              Возможности
            </a>
            <a href="#how-it-works" className="text-sm font-medium hover:text-primary transition-colors">
              Как работает
            </a>
            <a href="#about" className="text-sm font-medium hover:text-primary transition-colors">
              О проекте
            </a>
          </div>
          <Dialog open={isLoginOpen} onOpenChange={setIsLoginOpen}>
            <DialogTrigger asChild>
              <Button className="font-medium">
                <Icon name="LogIn" size={18} className="mr-2" />
                Войти
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
              <DialogHeader>
                <DialogTitle className="font-heading text-2xl">Добро пожаловать</DialogTitle>
                <DialogDescription>Войдите или создайте аккаунт</DialogDescription>
              </DialogHeader>
              <Tabs defaultValue="candidate" className="w-full" onValueChange={(v) => setUserType(v as any)}>
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="candidate">Соискатель</TabsTrigger>
                  <TabsTrigger value="employer">Работодатель</TabsTrigger>
                </TabsList>
                <TabsContent value="candidate" className="space-y-4 mt-6">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="your@email.com" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="password">Пароль</Label>
                    <Input id="password" type="password" placeholder="••••••••" />
                  </div>
                  <Button className="w-full">Войти как соискатель</Button>
                </TabsContent>
                <TabsContent value="employer" className="space-y-4 mt-6">
                  <div className="space-y-2">
                    <Label htmlFor="company-email">Корпоративный email</Label>
                    <Input id="company-email" type="email" placeholder="hr@company.com" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="company-password">Пароль</Label>
                    <Input id="company-password" type="password" placeholder="••••••••" />
                  </div>
                  <Button className="w-full">Войти как работодатель</Button>
                </TabsContent>
              </Tabs>
            </DialogContent>
          </Dialog>
        </div>
      </nav>

      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto text-center max-w-5xl">
          <Badge className="mb-6 animate-fade-in" variant="secondary">
            <Icon name="Zap" size={14} className="mr-1" />
            Powered by AI
          </Badge>
          <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6 animate-fade-up bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient-shift">
            Найдите идеальную работу с помощью AI
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto animate-fade-up" style={{ animationDelay: '0.1s' }}>
            AI JobMatcher анализирует ваши навыки и подбирает компании и вакансии, которые действительно вам подходят.
            Никаких ключевых слов — только реальная совместимость.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up" style={{ animationDelay: '0.2s' }}>
            <Button size="lg" className="text-lg px-8" onClick={() => setIsLoginOpen(true)}>
              <Icon name="Rocket" size={20} className="mr-2" />
              Начать поиск
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8">
              <Icon name="Play" size={20} className="mr-2" />
              Посмотреть демо
            </Button>
          </div>

          <div className="mt-16 p-8 bg-card rounded-2xl border border-border shadow-2xl animate-scale-in" style={{ animationDelay: '0.3s' }}>
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-heading font-bold">Ваш AI-профиль</h3>
              <Badge variant="outline" className="text-sm">
                <Icon name="TrendingUp" size={14} className="mr-1" />
                Обновлено сегодня
              </Badge>
            </div>
            <div className="grid md:grid-cols-2 gap-6 text-left">
              <div>
                <h4 className="font-semibold mb-4 flex items-center">
                  <Icon name="Award" size={18} className="mr-2 text-primary" />
                  Топ навыков
                </h4>
                <div className="space-y-3">
                  {skills.map((skill, i) => (
                    <div key={i} className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-muted-foreground">{skill.match}% совместимость</span>
                      </div>
                      <Progress value={skill.match} className="h-2" />
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="font-semibold mb-4 flex items-center">
                  <Icon name="Briefcase" size={18} className="mr-2 text-secondary" />
                  Рекомендованные вакансии
                </h4>
                <div className="space-y-3">
                  {['Senior Frontend Developer', 'React Engineer', 'Full Stack Developer'].map((job, i) => (
                    <Card key={i} className="hover:border-primary transition-all cursor-pointer">
                      <CardHeader className="p-4">
                        <div className="flex items-start justify-between">
                          <div>
                            <CardTitle className="text-base">{job}</CardTitle>
                            <CardDescription className="text-sm">Tech Company • Удаленно</CardDescription>
                          </div>
                          <Badge variant="secondary" className="text-xs">
                            {95 - i * 5}%
                          </Badge>
                        </div>
                      </CardHeader>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="py-20 px-4 bg-muted/50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <Badge className="mb-4" variant="outline">
              Возможности
            </Badge>
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
              Почему AI JobMatcher?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Современная технология для умного поиска работы
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, i) => (
              <Card
                key={i}
                className="hover:shadow-xl transition-all hover:-translate-y-1 border-2 hover:border-primary/50"
              >
                <CardHeader>
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-4">
                    <Icon name={feature.icon as any} size={24} className="text-white" />
                  </div>
                  <CardTitle className="font-heading">{feature.title}</CardTitle>
                  <CardDescription className="text-base">{feature.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="how-it-works" className="py-20 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-16">
            <Badge className="mb-4" variant="outline">
              Как это работает
            </Badge>
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
              Три простых шага к идеальной работе
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {howItWorks.map((item, i) => (
              <div key={i} className="relative">
                {i < howItWorks.length - 1 && (
                  <div className="hidden md:block absolute top-16 left-[60%] w-[80%] h-[2px] bg-gradient-to-r from-primary to-secondary" />
                )}
                <div className="text-center">
                  <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-6 relative">
                    <div className="w-28 h-28 rounded-full bg-background flex items-center justify-center">
                      <Icon name={item.icon as any} size={48} className="text-primary" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-10 h-10 rounded-full bg-secondary text-white flex items-center justify-center font-bold text-lg">
                      {item.step}
                    </div>
                  </div>
                  <h3 className="text-2xl font-heading font-bold mb-3">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-4 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
        <div className="container mx-auto max-w-4xl text-center">
          <Badge className="mb-4" variant="outline">
            О проекте
          </Badge>
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
            Миссия AI JobMatcher
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Мы создали платформу, которая соединяет людей и работодателей по реальным совместимым навыкам, а не ключевым словам.
            Наш AI анализирует глубину компетенций и находит идеальные совпадения для обеих сторон.
          </p>
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <Card>
              <CardHeader className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">10K+</div>
                <CardDescription>Активных пользователей</CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">95%</div>
                <CardDescription>Точность подбора</CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">500+</div>
                <CardDescription>Компаний-партнеров</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <Card className="border-2 border-primary/20 shadow-2xl">
            <CardHeader className="text-center pb-8">
              <CardTitle className="text-3xl md:text-4xl font-heading font-bold mb-4">
                Готовы найти работу мечты?
              </CardTitle>
              <CardDescription className="text-lg">
                Присоединяйтесь к тысячам профессионалов, которые уже нашли идеальную работу с AI JobMatcher
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col sm:flex-row gap-4 justify-center pb-8">
              <Button size="lg" className="text-lg px-8" onClick={() => setIsLoginOpen(true)}>
                <Icon name="UserPlus" size={20} className="mr-2" />
                Создать аккаунт
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8">
                <Icon name="MessageCircle" size={20} className="mr-2" />
                Связаться с нами
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="py-12 px-4 border-t border-border bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                  <Icon name="Sparkles" size={18} className="text-white" />
                </div>
                <span className="text-xl font-heading font-bold">AI JobMatcher</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Умный подбор работы с помощью искусственного интеллекта
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Продукт</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Возможности
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Цены
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Демо
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Компания</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    О нас
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Команда
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Карьера
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <Icon name="Mail" size={16} />
                  <a href="mailto:hello@aijobmatcher.com" className="hover:text-primary transition-colors">
                    hello@aijobmatcher.com
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="MessageSquare" size={16} />
                  <a href="#" className="hover:text-primary transition-colors">
                    Поддержка
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">© 2024 AI JobMatcher. Все права защищены.</p>
            <div className="flex gap-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Icon name="Github" size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Icon name="Linkedin" size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Icon name="Twitter" size={20} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;

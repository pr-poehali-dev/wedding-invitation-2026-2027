import { useEffect, useState } from 'react';
import { Card } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const weddingDate = new Date(2026, 7, 22);
  const today = new Date();
  const daysUntil = Math.ceil((weddingDate.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));

  return (
    <div className="min-h-screen bg-background">
      <section className="min-h-screen flex items-center justify-center px-4 py-20">
        <div className={`text-center max-w-3xl transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h1 className="text-7xl md:text-9xl font-light mb-6 text-foreground tracking-wide">
            Анна & Максим
          </h1>
          <div className="font-handwriting text-4xl md:text-5xl text-muted-foreground mb-8">
            Save the date
          </div>
          <div className="text-6xl md:text-7xl font-light text-accent mb-6">
            22.08.2026
          </div>
          <p className="text-lg text-muted-foreground">
            {daysUntil > 0 ? `Через ${daysUntil} дней` : 'Сегодня!'}
          </p>
        </div>
      </section>

      <section className="py-20 px-4 bg-card">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-light text-center mb-16 text-foreground">
            Наша история
          </h2>
          <div className="space-y-12">
            <div className="animate-fade-in">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center">
                  <Icon name="Heart" className="text-accent" size={28} />
                </div>
                <div>
                  <div className="font-handwriting text-2xl text-accent mb-2">2020</div>
                  <h3 className="text-2xl font-medium mb-3">Встреча</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Мы встретились теплым летним вечером в парке. Это была случайная встреча, которая изменила нашу жизнь навсегда.
                  </p>
                </div>
              </div>
            </div>

            <Separator />

            <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center">
                  <Icon name="Coffee" className="text-accent" size={28} />
                </div>
                <div>
                  <div className="font-handwriting text-2xl text-accent mb-2">2022</div>
                  <h3 className="text-2xl font-medium mb-3">Первое путешествие</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Наше первое совместное путешествие показало, что мы идеально подходим друг другу. Мы открыли новые горизонты вместе.
                  </p>
                </div>
              </div>
            </div>

            <Separator />

            <div className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center">
                  <Icon name="Sparkles" className="text-accent" size={28} />
                </div>
                <div>
                  <div className="font-handwriting text-2xl text-accent mb-2">2025</div>
                  <h3 className="text-2xl font-medium mb-3">Предложение</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    На закате у моря прозвучал тот самый вопрос. Конечно, ответ был «Да!». Теперь мы готовы начать новую главу вместе.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-light text-center mb-16 text-foreground">
            Детали
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 text-center hover:shadow-lg transition-shadow border-border/50">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-accent/10 flex items-center justify-center">
                <Icon name="MapPin" className="text-accent" size={28} />
              </div>
              <h3 className="text-2xl font-medium mb-3">Место</h3>
              <p className="text-muted-foreground leading-relaxed">
                Загородный клуб<br />
                «Усадьба»<br />
                Московская область
              </p>
            </Card>

            <Card className="p-8 text-center hover:shadow-lg transition-shadow border-border/50">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-accent/10 flex items-center justify-center">
                <Icon name="Clock" className="text-accent" size={28} />
              </div>
              <h3 className="text-2xl font-medium mb-3">Время</h3>
              <p className="text-muted-foreground leading-relaxed">
                Сбор гостей<br />
                15:00<br />
                Церемония в 16:00
              </p>
            </Card>

            <Card className="p-8 text-center hover:shadow-lg transition-shadow border-border/50">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-accent/10 flex items-center justify-center">
                <Icon name="Shirt" className="text-accent" size={28} />
              </div>
              <h3 className="text-2xl font-medium mb-3">Дресс-код</h3>
              <p className="text-muted-foreground leading-relaxed">
                Элегантный casual<br />
                Светлые тона<br />
                Без белого
              </p>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-card">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-light text-center mb-16 text-foreground">
            Программа дня
          </h2>
          <div className="space-y-6">
            <div className="flex gap-6 items-start group">
              <div className="flex-shrink-0 text-right w-24">
                <span className="text-2xl font-light text-accent">15:00</span>
              </div>
              <div className="flex-shrink-0 w-px h-full bg-border relative">
                <div className="w-3 h-3 rounded-full bg-accent absolute -left-1.5 top-2"></div>
              </div>
              <div className="flex-1 pb-8">
                <h3 className="text-2xl font-medium mb-2">Сбор гостей</h3>
                <p className="text-muted-foreground">Встреча гостей, приветственные напитки</p>
              </div>
            </div>

            <div className="flex gap-6 items-start group">
              <div className="flex-shrink-0 text-right w-24">
                <span className="text-2xl font-light text-accent">16:00</span>
              </div>
              <div className="flex-shrink-0 w-px h-full bg-border relative">
                <div className="w-3 h-3 rounded-full bg-accent absolute -left-1.5 top-2"></div>
              </div>
              <div className="flex-1 pb-8">
                <h3 className="text-2xl font-medium mb-2">Церемония</h3>
                <p className="text-muted-foreground">Официальная часть на открытом воздухе</p>
              </div>
            </div>

            <div className="flex gap-6 items-start group">
              <div className="flex-shrink-0 text-right w-24">
                <span className="text-2xl font-light text-accent">17:00</span>
              </div>
              <div className="flex-shrink-0 w-px h-full bg-border relative">
                <div className="w-3 h-3 rounded-full bg-accent absolute -left-1.5 top-2"></div>
              </div>
              <div className="flex-1 pb-8">
                <h3 className="text-2xl font-medium mb-2">Фуршет</h3>
                <p className="text-muted-foreground">Легкие закуски и напитки в саду</p>
              </div>
            </div>

            <div className="flex gap-6 items-start group">
              <div className="flex-shrink-0 text-right w-24">
                <span className="text-2xl font-light text-accent">18:30</span>
              </div>
              <div className="flex-shrink-0 w-px h-full bg-border relative">
                <div className="w-3 h-3 rounded-full bg-accent absolute -left-1.5 top-2"></div>
              </div>
              <div className="flex-1 pb-8">
                <h3 className="text-2xl font-medium mb-2">Банкет</h3>
                <p className="text-muted-foreground">Праздничный ужин и развлечения</p>
              </div>
            </div>

            <div className="flex gap-6 items-start group">
              <div className="flex-shrink-0 text-right w-24">
                <span className="text-2xl font-light text-accent">21:00</span>
              </div>
              <div className="flex-shrink-0 w-px h-full bg-border relative">
                <div className="w-3 h-3 rounded-full bg-accent absolute -left-1.5 top-2"></div>
              </div>
              <div className="flex-1 pb-8">
                <h3 className="text-2xl font-medium mb-2">Танцы</h3>
                <p className="text-muted-foreground">Танцпол открыт до утра</p>
              </div>
            </div>

            <div className="flex gap-6 items-start group">
              <div className="flex-shrink-0 text-right w-24">
                <span className="text-2xl font-light text-accent">00:00</span>
              </div>
              <div className="flex-shrink-0 w-px h-full bg-border relative">
                <div className="w-3 h-3 rounded-full bg-accent absolute -left-1.5 top-2"></div>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-medium mb-2">Торт и салют</h3>
                <p className="text-muted-foreground">Финальный аккорд вечера</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 text-center">
        <div className="max-w-2xl mx-auto">
          <div className="font-handwriting text-4xl md:text-5xl text-muted-foreground mb-8">
            До встречи!
          </div>
          <p className="text-lg text-muted-foreground mb-8">
            Будем рады видеть вас на нашем празднике.<br />
            С любовью, Анна и Максим
          </p>
          <Icon name="Heart" className="text-accent mx-auto" size={32} />
        </div>
      </section>
    </div>
  );
};

export default Index;

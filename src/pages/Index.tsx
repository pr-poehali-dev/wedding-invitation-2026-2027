import { useEffect, useState } from 'react';

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
      <div className="max-w-2xl mx-auto px-6 py-12">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-light mb-4 tracking-widest uppercase text-foreground/80">
              Сайт-приглашение
            </h1>
            <div className="font-handwriting text-5xl md:text-6xl text-foreground/70">
              на свадьбу
            </div>
          </div>

          <div className="bg-card p-8 md:p-12 mb-8 shadow-sm border-2 border-accent/30">
            <h2 className="text-3xl font-light mb-6 text-center uppercase tracking-wide">
              Любовь — это...
            </h2>
            
            <div className="relative mb-8">
              <div className="font-handwriting text-accent text-4xl md:text-5xl absolute inset-0 flex items-center justify-center opacity-20 leading-relaxed whitespace-pre-wrap text-center">
                I Love You I Love You I Love You I Love You I Love You
              </div>
              <div className="relative z-10 bg-card/90 p-4 mx-auto max-w-sm">
                <div className="aspect-[3/4] bg-muted flex items-center justify-center">
                  <span className="text-muted-foreground text-sm">Фото пары</span>
                </div>
              </div>
            </div>

            <p className="text-center text-sm leading-relaxed text-muted-foreground mb-8">
              ...совместные мечты
            </p>

            <div className="relative mb-8">
              <div className="bg-accent w-full h-48 relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 bg-card h-16 rounded-b-[50%]"></div>
                <div className="absolute inset-0 flex items-center justify-center text-card p-8">
                  <p className="text-sm text-center leading-relaxed">
                    Рады пригласить вас разделить с нами<br />
                    один из самых важных дней в нашей жизни.<br />
                    Ждём вас на нашей свадьбе!
                  </p>
                </div>
              </div>
              <div className="text-center font-handwriting text-xl text-foreground mt-4">
                Руслан и Вероника
              </div>
            </div>

            <div className="mb-8">
              <div className="flex justify-center gap-4 mb-4">
                <div className="text-center">
                  <div className="text-sm uppercase text-muted-foreground mb-2">Пятница</div>
                  <div className="text-4xl font-light border-4 border-foreground w-24 h-24 flex items-center justify-center">
                    4
                  </div>
                  <div className="text-sm uppercase text-muted-foreground mt-2">июля</div>
                </div>
                <div className="text-center">
                  <div className="text-sm uppercase text-muted-foreground mb-2">Суббота</div>
                  <div className="text-4xl font-light border-4 border-accent w-24 h-24 flex items-center justify-center relative">
                    <span className="relative z-10">5</span>
                    <div className="absolute inset-0 border-4 border-accent rounded-full scale-125"></div>
                  </div>
                  <div className="text-sm uppercase text-muted-foreground mt-2">июля</div>
                </div>
                <div className="text-center">
                  <div className="text-sm uppercase text-muted-foreground mb-2">Воскресенье</div>
                  <div className="text-4xl font-light border-4 border-foreground w-24 h-24 flex items-center justify-center">
                    6
                  </div>
                  <div className="text-sm uppercase text-muted-foreground mt-2">июля</div>
                </div>
              </div>
              <div className="text-center font-handwriting text-2xl text-foreground/70">
                Ближе очень будет!
              </div>
            </div>

            <div className="bg-secondary/30 p-6 mb-8 relative">
              <svg className="absolute top-0 left-0 w-full h-full" style={{ fill: 'none', stroke: 'hsl(var(--accent))', strokeWidth: 2 }}>
                <path d="M 0,50 Q 100,20 200,50 T 400,50" />
              </svg>
              <p className="text-sm leading-relaxed text-center relative z-10">
                Торжественная церемония<br />
                и последующий уютный вечер будут<br />
                проходить на одной площадке:<br />
                <strong>"All Seasons"</strong><br />
                по адресу: ул. Большая<br />
                Морская, 33а
              </p>
            </div>

            <div className="mb-8">
              <div className="aspect-[3/4] bg-muted flex items-center justify-center mb-4">
                <span className="text-muted-foreground text-sm">Фото церемонии</span>
              </div>
            </div>
          </div>

          <div className="bg-card p-8 md:p-12 mb-8 shadow-sm border-2 border-accent/30">
            <h2 className="text-3xl font-light mb-8 text-center uppercase tracking-wide">
              Пожелания
            </h2>

            <div className="space-y-6 mb-8">
              <div className="border-2 border-accent/40 rounded-[30px] p-6">
                <div className="flex gap-3">
                  <span className="text-2xl font-handwriting text-accent">1</span>
                  <p className="text-sm leading-relaxed">
                    Чтобы наши руки были свободны для объятий, будем рады подарку подъезда в конвертике!
                  </p>
                </div>
              </div>

              <div className="border-2 border-accent/40 rounded-[30px] p-6">
                <div className="flex gap-3">
                  <span className="text-2xl font-handwriting text-accent">2</span>
                  <p className="text-sm leading-relaxed">
                    Не переживайте: мы не будем выкидывать гостей, говорить поздравления и петь песни, свадьба будет действовать в спокойном формате!
                  </p>
                </div>
              </div>

              <div className="border-2 border-accent/40 rounded-[30px] p-6">
                <div className="flex gap-3">
                  <span className="text-2xl font-handwriting text-accent">3</span>
                  <p className="text-sm leading-relaxed">
                    Если вы хотите преподнести нам цветы - то пусть это будет одна или более роза, пожалуйста без букетов, доставайте букет!
                  </p>
                </div>
              </div>

              <div className="border-2 border-accent/40 rounded-[30px] p-6">
                <div className="flex gap-3">
                  <span className="text-2xl font-handwriting text-accent">4</span>
                  <p className="text-sm leading-relaxed">
                    Для наших маленьких гостей мы предусмотрели няню с анимацией, чтобы родители могли насладиться праздником!
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center mb-8">
              <div className="font-handwriting text-3xl text-foreground/70 mb-4">
                О Контактах
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground mb-4">
                На все вопросы Вы можете<br />
                написать нашему<br />
                свадебному организатору:<br />
                <strong>Юлия</strong>
              </p>
              <div className="flex justify-center gap-4">
                <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center text-card">
                  <span className="text-sm">📱</span>
                </div>
                <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center text-card">
                  <span className="text-sm">💬</span>
                </div>
              </div>
            </div>

            <div className="relative mb-8">
              <div className="font-handwriting text-accent text-4xl md:text-5xl absolute inset-0 flex items-center justify-center opacity-20 leading-relaxed">
                Cheers! Cheers! Cheers! Cheers!
              </div>
              <div className="relative z-10 bg-card/90 p-4 mx-auto max-w-sm">
                <div className="aspect-[3/4] bg-muted flex items-center justify-center">
                  <span className="text-muted-foreground text-sm">Фото с бокалами</span>
                </div>
              </div>
            </div>

            <div className="text-center text-sm leading-relaxed text-muted-foreground mb-8">
              Для подтверждения<br />
              присутствия заполните для нас<br />
              кружочек с фразой "Горько!"
            </div>

            <div className="mb-8">
              <div className="aspect-[3/4] bg-muted flex items-center justify-center">
                <span className="text-muted-foreground text-sm">Фото пары</span>
              </div>
            </div>

            <div className="text-center">
              <div className="font-handwriting text-4xl text-accent mb-2">
                With Love
              </div>
              <div className="text-xl font-light tracking-widest uppercase">
                Руслан и Вероника
              </div>
            </div>
          </div>

          <div className="text-center text-sm text-muted-foreground py-8">
            <p className="mb-2">22 августа 2026</p>
            <p>{daysUntil > 0 ? `Осталось дней: ${daysUntil}` : 'Сегодня!'}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;

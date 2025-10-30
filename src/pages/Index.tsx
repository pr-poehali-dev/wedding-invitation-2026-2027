import { useEffect, useState } from 'react';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({ name: '', phone: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const weddingDate = new Date(2026, 7, 22);
  const today = new Date();
  const daysUntil = Math.ceil((weddingDate.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name.trim()) {
      toast({
        title: 'Ошибка',
        description: 'Пожалуйста, укажите ваше имя',
        variant: 'destructive'
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('https://functions.poehali.dev/0b1d2bee-ab26-42ee-995c-87c7c8e66eba', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        toast({
          title: 'Спасибо!',
          description: 'Ваша анкета успешно отправлена',
        });
        setFormData({ name: '', phone: '', message: '' });
      } else {
        throw new Error('Ошибка отправки');
      }
    } catch (error) {
      toast({
        title: 'Ошибка',
        description: 'Не удалось отправить анкету. Попробуйте позже.',
        variant: 'destructive'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-xl mx-auto px-6 py-12">
        <div className={`space-y-16 transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          
          <section className="relative">
            <h2 className="text-2xl font-light mb-8 text-muted-foreground">Мы женимся ...</h2>
            <div className="relative">
              <div className="font-handwriting text-accent text-3xl absolute inset-0 opacity-10 whitespace-pre-wrap leading-relaxed">
                I Love You I Love You I Love You I Love You I Love You I Love You
              </div>
              <div className="relative z-10 max-w-xs mx-auto transform rotate-3">
                <div className="bg-white p-3 shadow-lg">
                  <div className="aspect-[3/4] bg-gray-200 flex items-center justify-center">
                    <span className="text-gray-400 text-sm">Фото пары</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="relative">
            <div className="bg-accent/90 p-8 relative overflow-hidden max-w-sm mx-auto transform -rotate-2 shadow-lg">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-12 bg-accent-foreground/20 rounded-full flex items-center justify-center">
                <div className="w-6 h-6 border-2 border-accent-foreground/40 rounded-full"></div>
              </div>
              <div className="relative z-10 text-accent-foreground text-center pt-4">
                <p className="text-sm leading-relaxed mb-4">
                  Мы так рады пригласить вас разделить с нами 
                  один из самых важных дней в нашей жизни. 
                  Ждём вас на нашей свадьбе!
                </p>
                <div className="font-handwriting text-2xl">
                  Руслан и Вероника
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-light mb-6 text-muted-foreground">Когда?</h2>
            <div className="flex justify-center gap-3 mb-4">
              <div className="text-center">
                <div className="text-xs uppercase text-muted-foreground mb-1">Воскресенье</div>
                <div className="text-3xl font-light border-2 border-foreground/30 w-16 h-16 flex items-center justify-center">
                  6
                </div>
                <div className="text-xs uppercase text-muted-foreground mt-1">июля</div>
              </div>
              <div className="text-center relative">
                <div className="text-xs uppercase text-muted-foreground mb-1">Понедельник</div>
                <div className="text-3xl font-light border-2 border-foreground/30 w-16 h-16 flex items-center justify-center relative z-10">
                  7
                </div>
                <svg className="absolute inset-0 w-full h-full -z-10" viewBox="0 0 80 80">
                  <path d="M 10,40 Q 40,60 70,40 T 70,10" fill="none" stroke="hsl(var(--accent))" strokeWidth="3" />
                </svg>
                <div className="text-xs uppercase text-muted-foreground mt-1">июля</div>
              </div>
              <div className="text-center">
                <div className="text-xs uppercase text-muted-foreground mb-1">Вторник</div>
                <div className="text-3xl font-light border-2 border-foreground/30 w-16 h-16 flex items-center justify-center">
                  8
                </div>
                <div className="text-xs uppercase text-muted-foreground mt-1">июля</div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-light mb-6 text-muted-foreground">Где?</h2>
            <div className="relative max-w-sm mx-auto">
              <svg className="absolute -left-8 top-0 w-16 h-24" viewBox="0 0 60 100">
                <path d="M 50,0 Q 30,30 30,60 L 30,100" fill="none" stroke="hsl(var(--accent))" strokeWidth="2" strokeDasharray="5,5" />
                <circle cx="30" cy="100" r="8" fill="hsl(var(--accent))" />
                <circle cx="30" cy="100" r="12" fill="none" stroke="hsl(var(--accent))" strokeWidth="2" />
              </svg>
              <div className="bg-card/80 p-6 text-sm leading-relaxed text-muted-foreground">
                Милый вечер будет проходить по адресу ул. Малая Семёновская д. 3, стр. 29
                <br /><br />
                Лофт оранжевый с летней верандой
              </div>
            </div>
            <div className="mt-8 max-w-xs mx-auto transform -rotate-1">
              <div className="bg-white p-3 shadow-lg">
                <div className="aspect-[3/4] bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-400 text-sm">Фото места</span>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-light mb-6 text-muted-foreground">Программа дня</h2>
            <div className="space-y-4 text-sm">
              <div className="flex items-start gap-4">
                <div className="w-20 text-right text-muted-foreground flex-shrink-0">
                  <div className="font-light">Сбор гостей</div>
                  <div className="text-xs">10:00 - 11:30</div>
                </div>
                <div className="flex-1 border-l-2 border-accent/30 pl-4 pb-2"></div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-20 text-right text-muted-foreground flex-shrink-0">
                  <div className="font-light">Церемония</div>
                  <div className="text-xs">12:00 - 14:00</div>
                </div>
                <div className="flex-1 border-l-2 border-accent/30 pl-4 pb-2"></div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-20 text-right text-muted-foreground flex-shrink-0">
                  <div className="font-light">Праздничный ужин</div>
                </div>
                <div className="flex-1 border-l-2 border-accent/30 pl-4 pb-2"></div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-light mb-6 text-center text-muted-foreground">Детали</h2>
            <div className="space-y-4">
              <div className="bg-card/60 p-5 rounded-lg shadow-sm">
                <p className="text-sm text-muted-foreground">
                  <strong>Вот те хз?</strong><br />
                  Да "да", чтобы ты не сказал, второй возможности не появится
                </p>
              </div>
              <div className="bg-card/60 p-5 rounded-lg shadow-sm">
                <p className="text-sm text-muted-foreground">
                  <strong>Будут ли конкурсы или викторины?</strong><br />
                  Свободное да!
                </p>
              </div>
              <div className="bg-card/60 p-5 rounded-lg shadow-sm">
                <p className="text-sm text-muted-foreground">
                  <strong>Если дарить?</strong><br />
                  Можем выйти ты из кубышки только из предоставленных советов
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-light mb-6 text-center text-muted-foreground">Дресс-код</h2>
            <div className="max-w-sm mx-auto bg-card/60 p-6 rounded-lg shadow-sm">
              <div className="flex justify-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-white border-2 border-muted"></div>
                <div className="w-10 h-10 rounded-full bg-gray-200 border-2 border-muted"></div>
                <div className="w-10 h-10 rounded-full bg-gray-300 border-2 border-muted"></div>
                <div className="w-10 h-10 rounded-full bg-green-100 border-2 border-muted"></div>
                <div className="w-10 h-10 rounded-full bg-green-200 border-2 border-muted"></div>
                <div className="w-10 h-10 rounded-full bg-green-700 border-2 border-muted"></div>
              </div>
            </div>
          </section>

          <section className="relative">
            <svg className="absolute top-0 left-0 w-full h-24" viewBox="0 0 400 100">
              <path d="M 0,50 Q 100,20 200,50 T 400,50" fill="none" stroke="hsl(var(--accent))" strokeWidth="2" />
            </svg>
            <div className="relative z-10 pt-16">
              <div className="font-handwriting text-accent text-4xl absolute inset-0 opacity-10 text-center leading-relaxed">
                we waiting we waiting we waiting
              </div>
              <div className="relative z-10 max-w-xs mx-auto transform rotate-2">
                <div className="bg-white p-3 shadow-lg">
                  <div className="aspect-[2/3] bg-gray-200 flex items-center justify-center">
                    <span className="text-gray-400 text-sm">Фото пары</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-light mb-6 text-center text-muted-foreground">Контакты</h2>
            <div className="max-w-sm mx-auto bg-card/60 p-6 rounded-lg shadow-sm text-center text-sm">
              <div className="flex justify-center gap-3 mb-4">
                <div className="w-8 h-8 flex items-center justify-center text-accent">▷</div>
                <span className="text-muted-foreground">Катя</span>
              </div>
              <div className="flex justify-center gap-3 mb-4">
                <div className="w-8 h-8 flex items-center justify-center text-accent">▷</div>
                <span className="text-muted-foreground">Рома</span>
              </div>
              <div className="flex justify-center gap-3">
                <div className="w-8 h-8 flex items-center justify-center text-accent">▷</div>
                <span className="text-muted-foreground">Общий чат</span>
              </div>
            </div>
          </section>

          <section className="text-center pb-8">
            <div className="font-handwriting text-3xl text-foreground/60 mb-4">
              анкета гостя
            </div>
            <p className="text-sm text-muted-foreground mb-6">
              Подтвердите ваше присутствие
            </p>
            <form onSubmit={handleSubmit} className="space-y-3 max-w-sm mx-auto mb-6">
              <input 
                type="text" 
                placeholder="Ваше имя" 
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 bg-card/60 border border-muted rounded-lg text-sm"
                required
              />
              <input 
                type="text" 
                placeholder="Твой номер телефона" 
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full px-4 py-3 bg-card/60 border border-muted rounded-lg text-sm"
              />
              <textarea 
                placeholder="Что пожелаете" 
                rows={3}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-3 bg-card/60 border border-muted rounded-lg text-sm"
              />
              <button 
                type="submit"
                disabled={isSubmitting}
                className="w-full px-4 py-3 bg-accent text-accent-foreground rounded-lg text-sm font-medium hover:bg-accent/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Отправка...' : 'Отправить'}
              </button>
            </form>
          </section>

          <section className="text-center pb-12">
            <div className="max-w-xs mx-auto transform -rotate-1 mb-8">
              <div className="bg-white p-3 shadow-lg">
                <div className="aspect-[3/4] bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-400 text-sm">Фото пары</span>
                </div>
              </div>
            </div>
            <div className="font-handwriting text-4xl text-accent mb-2">
              With Love
            </div>
            <div className="text-xl font-light tracking-widest uppercase text-foreground/70">
              Руслан и Вероника
            </div>
            <div className="mt-6 text-sm text-muted-foreground">
              22 августа 2026
            </div>
            <div className="text-xs text-muted-foreground mt-2">
              {daysUntil > 0 ? `Осталось дней: ${daysUntil}` : 'Сегодня!'}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Index;
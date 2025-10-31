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
    <div className="min-h-screen bg-gradient-to-b from-gray-100 via-white to-gray-100 relative overflow-hidden">
      
      <svg className="absolute top-0 left-0 w-full h-full pointer-events-none" style={{ zIndex: 1 }}>
        <defs>
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        
        <path 
          d="M -100,200 Q 150,100 400,300 T 900,400 L 900,600 Q 600,500 300,700 T -100,800 Z" 
          fill="#8B1538" 
          opacity="0.08"
          className="animate-float-slow"
        />
        
        <path 
          d="M 1200,300 Q 900,400 600,200 T 0,500 L 0,800 Q 300,700 600,900 T 1200,1000 Z" 
          fill="#8B1538" 
          opacity="0.06"
          className="animate-float-slower"
        />

        <circle cx="50%" cy="20%" r="150" fill="#DC143C" opacity="0.03" className="animate-pulse-slow" />
        <circle cx="20%" cy="60%" r="200" fill="#8B1538" opacity="0.04" className="animate-pulse-slower" />
        <circle cx="80%" cy="80%" r="180" fill="#DC143C" opacity="0.03" className="animate-pulse-slow" />
      </svg>

      <div className="max-w-4xl mx-auto relative" style={{ zIndex: 10 }}>
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          
          <section className="min-h-screen flex flex-col items-center justify-center px-6 py-16 relative">
            <div className="absolute top-8 right-8 w-16 h-16 opacity-20 animate-spin-slow">
              <div className="w-full h-full rounded-full border-4 border-dashed border-accent"></div>
            </div>

            <div className="text-center mb-8 animate-fade-in-up">
              <div className="font-handwriting text-accent text-5xl md:text-6xl mb-4">
                She said - yes!
              </div>
            </div>

            <div className="relative mb-12 animate-fade-in" style={{ animationDelay: '300ms' }}>
              <div className="absolute -top-8 -left-8 w-24 h-24 border-4 border-accent/20 rounded-lg transform -rotate-6"></div>
              <div className="bg-white p-6 shadow-2xl transform hover:scale-105 transition-transform duration-500">
                <div className="w-64 h-80 bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                  <img 
                    src="https://cdn.poehali.dev/files/22a024cd-2711-4e43-845d-6e9b35ba1cf6.png" 
                    alt="Руслан и Вероника" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-16 h-16 opacity-30">
                <svg viewBox="0 0 100 100" className="animate-pulse-slow">
                  <path d="M50,15 L61,35 L83,40 L66,56 L70,78 L50,67 L30,78 L34,56 L17,40 L39,35 Z" fill="#DC143C" />
                </svg>
              </div>
            </div>

            <div className="text-center max-w-md animate-fade-in-up" style={{ animationDelay: '600ms' }}>
              <h1 className="text-3xl md:text-4xl font-light mb-4">Дорогие гости!</h1>
              <p className="text-base text-gray-700 leading-relaxed">
                Мы рады честь пригласить вас на праздник, который мы готовим с любовью. 
                Каждого из вас отдельное место в нашем сердце и за праздничным столом!
              </p>
            </div>

            <svg className="absolute bottom-0 left-0 w-full opacity-30" viewBox="0 0 1200 200" preserveAspectRatio="none">
              <path d="M0,100 Q300,50 600,100 T1200,100 L1200,200 L0,200 Z" fill="url(#gradient1)" />
              <defs>
                <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#DC143C" stopOpacity="0.1" />
                  <stop offset="50%" stopColor="#8B1538" stopOpacity="0.2" />
                  <stop offset="100%" stopColor="#DC143C" stopOpacity="0.1" />
                </linearGradient>
              </defs>
            </svg>
          </section>

          <section className="min-h-screen flex flex-col items-center justify-center px-6 py-16 relative">
            <svg className="absolute top-0 left-0 w-full" viewBox="0 0 1200 200" preserveAspectRatio="none">
              <path d="M0,100 Q300,150 600,100 T1200,100 L1200,0 L0,0 Z" fill="url(#gradient2)" />
              <defs>
                <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#8B1538" stopOpacity="0.1" />
                  <stop offset="50%" stopColor="#DC143C" stopOpacity="0.15" />
                  <stop offset="100%" stopColor="#8B1538" stopOpacity="0.1" />
                </linearGradient>
              </defs>
            </svg>

            <div className="text-center mb-12 animate-fade-in-up">
              <h2 className="text-3xl md:text-4xl font-light mb-2">В этот день</h2>
              <div className="inline-flex items-center gap-3 mt-6">
                <div className="w-12 h-12 border-2 border-gray-300 rounded flex items-center justify-center text-xl">23</div>
                <div className="w-12 h-12 border-2 border-gray-300 rounded flex items-center justify-center text-xl">24</div>
                <div className="relative">
                  <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center text-white text-2xl font-bold transform scale-110">
                    22
                  </div>
                  <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 text-xs text-accent font-medium">ИЮЛЯ</div>
                </div>
                <div className="w-12 h-12 border-2 border-gray-300 rounded flex items-center justify-center text-xl">26</div>
                <div className="w-12 h-12 border-2 border-gray-300 rounded flex items-center justify-center text-xl">27</div>
              </div>
            </div>

            <div className="relative mb-12 animate-fade-in" style={{ animationDelay: '300ms' }}>
              <div className="bg-white p-6 shadow-2xl max-w-sm transform hover:scale-105 transition-transform duration-500">
                <img 
                  src="https://cdn.poehali.dev/files/22a024cd-2711-4e43-845d-6e9b35ba1cf6.png" 
                  alt="Мы женимся" 
                  className="w-full h-80 object-cover grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>
              <div className="absolute -top-6 -right-6 bg-white px-4 py-2 shadow-lg transform rotate-3">
                <span className="font-handwriting text-accent text-2xl">Love</span>
              </div>
            </div>

            <div className="text-center animate-fade-in-up" style={{ animationDelay: '600ms' }}>
              <h3 className="text-4xl md:text-5xl font-light mb-2">МЫ ЖЕНИМСЯ!</h3>
            </div>

            <svg className="absolute bottom-0 left-0 w-full opacity-20" viewBox="0 0 1200 300" preserveAspectRatio="none">
              <path 
                d="M0,150 Q200,100 400,150 T800,150 Q1000,100 1200,150 L1200,300 L0,300 Z" 
                fill="#DC143C" 
                opacity="0.1"
                className="animate-wave"
              />
            </svg>
          </section>

          <section className="min-h-screen bg-accent text-white px-6 py-16 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-float-slow"></div>
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-white/10 rounded-full blur-3xl animate-float-slower"></div>

            <div className="relative z-10 max-w-2xl mx-auto">
              <div className="text-center mb-12 animate-fade-in-up">
                <h2 className="text-3xl md:text-4xl font-light mb-8">Ждем вас</h2>
              </div>

              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg mb-8 animate-fade-in" style={{ animationDelay: '200ms' }}>
                <div className="flex items-center justify-center mb-6">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 2C6.686 2 4 4.686 4 8c0 5 6 10 6 10s6-5 6-10c0-3.314-2.686-6-6-6zm0 8a2 2 0 110-4 2 2 0 010 4z"/>
                    </svg>
                  </div>
                </div>
                <h3 className="text-2xl font-light text-center mb-4">Место проведения</h3>
                <p className="text-center text-lg mb-2">Вертолетка - панорамное кафе</p>
                <p className="text-center text-white/80">Самара, Ветвистая ул., 2А</p>
              </div>

              <div className="relative mb-8 animate-fade-in" style={{ animationDelay: '400ms' }}>
                <img 
                  src="https://cdn.poehali.dev/files/1ddceec9-551f-4a0c-b014-035602a1698e.png" 
                  alt="Место проведения" 
                  className="w-full h-96 object-cover rounded-lg shadow-2xl transform hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute -bottom-4 -right-4 bg-white text-accent px-6 py-3 rounded-full shadow-xl font-handwriting text-xl transform rotate-3">
                  22.08.2026
                </div>
              </div>

              <div className="text-center animate-fade-in-up" style={{ animationDelay: '600ms' }}>
                <button className="bg-white text-accent px-8 py-3 rounded-full text-lg font-medium hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
                  Как добраться
                </button>
              </div>
            </div>
          </section>

          <section className="min-h-screen flex flex-col items-center justify-center px-6 py-16 relative bg-gradient-to-b from-white to-gray-50">
            <svg className="absolute top-0 left-0 w-full h-32 opacity-10" viewBox="0 0 1200 100">
              <path d="M0,50 Q300,20 600,50 T1200,50" stroke="#DC143C" strokeWidth="3" fill="none" className="animate-draw" />
            </svg>

            <div className="max-w-md mx-auto w-full relative z-10">
              <div className="text-center mb-8 animate-fade-in-up">
                <h2 className="text-3xl md:text-4xl font-light mb-4">Анкета гостя</h2>
                <p className="text-gray-600">Подтвердите ваше присутствие</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4 animate-fade-in" style={{ animationDelay: '300ms' }}>
                <div className="relative">
                  <input 
                    type="text" 
                    placeholder="Ваше имя" 
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-6 py-4 bg-white border-2 border-gray-200 rounded-lg text-base focus:border-accent focus:outline-none transition-all duration-300 hover:shadow-md"
                    required
                  />
                </div>
                <div className="relative">
                  <input 
                    type="text" 
                    placeholder="Твой номер телефона" 
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-6 py-4 bg-white border-2 border-gray-200 rounded-lg text-base focus:border-accent focus:outline-none transition-all duration-300 hover:shadow-md"
                  />
                </div>
                <div className="relative">
                  <textarea 
                    placeholder="Что пожелаете" 
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-6 py-4 bg-white border-2 border-gray-200 rounded-lg text-base focus:border-accent focus:outline-none transition-all duration-300 resize-none hover:shadow-md"
                  />
                </div>
                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-accent text-white px-6 py-4 rounded-lg text-lg font-medium hover:bg-accent/90 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                >
                  {isSubmitting ? 'Отправка...' : 'Отправить'}
                </button>
              </form>

              <div className="mt-12 text-center animate-fade-in-up" style={{ animationDelay: '600ms' }}>
                <p className="font-handwriting text-accent text-2xl">С любовью,</p>
                <p className="text-xl font-light mt-2">Руслан и Вероника</p>
              </div>
            </div>

            <svg className="absolute bottom-0 left-0 w-full h-32 opacity-10" viewBox="0 0 1200 100">
              <path d="M0,50 Q300,80 600,50 T1200,50" stroke="#8B1538" strokeWidth="3" fill="none" className="animate-draw" />
            </svg>
          </section>

        </div>
      </div>
    </div>
  );
};

export default Index;

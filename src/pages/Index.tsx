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

  const generateCalendar = () => {
    const days = [];
    const daysInMonth = 31;
    const startDay = 4;
    
    const dayNames = ['ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ', 'ВС', 'ПН'];
    
    for (let i = 0; i < startDay; i++) {
      days.push(<div key={`empty-${i}`} className="h-10"></div>);
    }
    
    for (let day = 1; day <= daysInMonth; day++) {
      days.push(
        <div key={day} className="h-10 flex items-center justify-center text-lg relative">
          {day === 22 && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-8 h-8 bg-[#DC143C] rounded-full flex items-center justify-center transform -rotate-12">
                <span className="text-white text-sm font-bold">♥</span>
              </div>
            </div>
          )}
          <span className={day === 22 ? 'relative z-10 text-white font-semibold' : ''}>{day}</span>
        </div>
      );
    }
    
    return days;
  };

  return (
    <div className="min-h-screen bg-[#F5EBE0] overflow-hidden">
      <div className="max-w-2xl mx-auto px-4 py-8">
        <div className={`space-y-12 transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          
          <section className="relative min-h-[60vh] flex items-center justify-center -mx-4">
            <div 
              className="absolute inset-0 font-handwriting text-[#DC143C] text-4xl opacity-60 pointer-events-none overflow-hidden"
            >
              <div className="absolute top-8 -left-8 transform rotate-12">I Love You</div>
              <div className="absolute top-32 -right-12 transform -rotate-6">I Love You</div>
              <div className="absolute bottom-32 -left-16 transform rotate-3">I Love You</div>
              <div className="absolute top-1/2 left-0 transform -rotate-12">I Love You</div>
              <div className="absolute bottom-12 -right-20 transform rotate-6">I Love You</div>
              <div className="absolute top-16 right-4 transform rotate-3">I Love You</div>
            </div>
            
            <div className="relative z-10 transform rotate-6 hover:rotate-3 transition-transform duration-500">
              <div className="bg-white p-4 shadow-2xl max-w-sm">
                <img 
                  src="https://cdn.poehali.dev/files/22a024cd-2711-4e43-845d-6e9b35ba1cf6.png" 
                  alt="Руслан и Вероника" 
                  className="w-full aspect-[3/4] object-cover"
                />
              </div>
            </div>
          </section>

          <section className="text-center py-8">
            <h1 className="text-3xl md:text-4xl font-light mb-4">Дорогие наши<br />друзья и родные!</h1>
            <p className="text-base md:text-lg text-gray-700 max-w-lg mx-auto leading-relaxed">
              Это официальное приглашение на нашу свадьбу! А получили вы его потому, 
              что мы очень хотим видеть вас в этот день рядом с нами!
            </p>
          </section>

          <section className="py-8">
            <div className="bg-white border-4 border-gray-900 max-w-md mx-auto p-6 shadow-xl">
              <h2 className="text-2xl md:text-3xl font-light mb-6 text-center">Август</h2>
              <div className="grid grid-cols-7 gap-1 text-center text-sm mb-2">
                {['ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ', 'ВС', 'ПН'].map(day => (
                  <div key={day} className="text-gray-500 font-medium">{day}</div>
                ))}
              </div>
              <div className="grid grid-cols-7 gap-1">
                {generateCalendar()}
              </div>
            </div>
            <div className="text-center mt-6 text-xl md:text-2xl font-light">
              22 августа, 2026 | 12:00
            </div>
          </section>

          <section className="py-8 relative -mx-4">
            <div 
              className="absolute inset-0 font-handwriting text-[#DC143C] text-4xl opacity-60 pointer-events-none overflow-hidden"
            >
              <div className="absolute top-0 -left-12 transform -rotate-6">I Love You</div>
              <div className="absolute top-20 -right-16 transform rotate-12">I Love You</div>
              <div className="absolute bottom-12 -left-20 transform rotate-3">I Love You</div>
              <div className="absolute top-40 left-0 transform rotate-6">I Love You</div>
            </div>

            <div className="relative z-10">
              <svg className="w-full max-w-2xl mx-auto mb-8" viewBox="0 0 800 120" xmlns="http://www.w3.org/2000/svg">
                <path 
                  d="M 0,60 Q 200,20 400,60 T 800,60" 
                  fill="none" 
                  stroke="#DC143C" 
                  strokeWidth="3"
                />
              </svg>

              <div className="text-center mb-6 px-4">
                <h2 className="text-3xl md:text-4xl font-light mb-4">Место<br />проведения</h2>
                <p className="text-lg text-gray-700 font-medium">Вертолетка - панорамное кафе</p>
                <p className="text-base text-gray-600">Самара, Ветвистая ул., 2А</p>
              </div>

              <div className="flex justify-center mb-8 px-4">
                <button className="bg-[#DC143C] text-white px-8 py-3 rounded-full text-lg font-medium hover:bg-[#B01030] transition-colors shadow-lg">
                  Как добраться
                </button>
              </div>

              <div className="relative transform -rotate-3 hover:rotate-0 transition-transform duration-500 max-w-md mx-auto px-4">
                <img 
                  src="https://cdn.poehali.dev/files/1ddceec9-551f-4a0c-b014-035602a1698e.png" 
                  alt="Место проведения" 
                  className="w-full aspect-[3/4] object-cover shadow-2xl"
                />
              </div>

              <svg className="w-full max-w-2xl mx-auto mt-12" viewBox="0 0 800 120" xmlns="http://www.w3.org/2000/svg">
                <path 
                  d="M 0,60 Q 200,100 400,60 T 800,60" 
                  fill="none" 
                  stroke="#DC143C" 
                  strokeWidth="3"
                />
              </svg>
            </div>
          </section>

          <section className="py-8">
            <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4">
              <h2 className="text-2xl md:text-3xl font-light text-center mb-6">Анкета гостя</h2>
              <input 
                type="text" 
                placeholder="Ваше имя" 
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 bg-white border-2 border-gray-300 rounded-lg text-base focus:border-[#DC143C] focus:outline-none transition-colors"
                required
              />
              <input 
                type="text" 
                placeholder="Твой номер телефона" 
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full px-4 py-3 bg-white border-2 border-gray-300 rounded-lg text-base focus:border-[#DC143C] focus:outline-none transition-colors"
              />
              <textarea 
                placeholder="Что пожелаете" 
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-3 bg-white border-2 border-gray-300 rounded-lg text-base focus:border-[#DC143C] focus:outline-none transition-colors resize-none"
              />
              <button 
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#DC143C] text-white px-4 py-3 rounded-lg text-lg font-medium hover:bg-[#B01030] transition-colors shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Отправка...' : 'Отправить'}
              </button>
            </form>
          </section>

        </div>
      </div>
    </div>
  );
};

export default Index;
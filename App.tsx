
import React, { useState } from 'react';
import { FEELING_OPTIONS } from './constants';
import FeelingSelector from './components/FeelingSelector';

const App: React.FC = () => {
  const [name, setName] = useState('');
  const [className, setClassName] = useState('');
  const [selectedFeeling, setSelectedFeeling] = useState<string | null>(null);
  const [comment, setComment] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !className || !selectedFeeling) {
      setError('الرجاء تعبئة الاسم والصف واختيار شعورك.');
      return;
    }
    setError('');
    console.log({
      name,
      className,
      feeling: selectedFeeling,
      comment,
    });
    setIsSubmitted(true);
  };
  
  const handleReset = () => {
    setName('');
    setClassName('');
    setSelectedFeeling(null);
    setComment('');
    setError('');
    setIsSubmitted(false);
  };


  return (
    <div className="bg-slate-50 min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-2xl mx-auto">
        {isSubmitted ? (
          <div className="bg-white p-8 sm:p-12 rounded-2xl shadow-xl text-center transition-opacity duration-500">
            <div className="text-7xl mb-4">🎉</div>
            <h1 className="text-3xl sm:text-4xl font-bold text-teal-600 mb-2">شكرًا لك!</h1>
            <p className="text-lg text-gray-600 mb-8">تم استلام إجابتك بنجاح. يومك سعيد!</p>
            <button
              onClick={handleReset}
              className="px-8 py-3 bg-teal-500 text-white font-bold rounded-lg hover:bg-teal-600 focus:outline-none focus:ring-4 focus:ring-teal-300 transition-colors"
            >
              إرسال رد جديد
            </button>
          </div>
        ) : (
          <div className="bg-white p-8 sm:p-12 rounded-2xl shadow-xl">
            <header className="text-center mb-10">
              <h1 className="text-4xl sm:text-5xl font-bold text-gray-800">كيف الحال؟</h1>
              <p className="text-lg text-gray-500 mt-2">شاركنا كيف تشعر اليوم</p>
            </header>
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-lg font-medium text-gray-800 mb-2">
                    الاسم
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-teal-500 focus:border-teal-500 transition-colors"
                    placeholder="اكتب اسمك هنا"
                  />
                </div>
                <div>
                  <label htmlFor="class" className="block text-lg font-medium text-gray-800 mb-2">
                    الصف
                  </label>
                  <input
                    type="text"
                    id="class"
                    value={className}
                    onChange={(e) => setClassName(e.target.value)}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-teal-500 focus:border-teal-500 transition-colors"
                    placeholder="مثال: الرابع (أ)"
                  />
                </div>
              </div>

              <FeelingSelector
                options={FEELING_OPTIONS}
                selectedValue={selectedFeeling}
                onSelect={setSelectedFeeling}
              />

              <div>
                <label htmlFor="comment" className="block text-lg font-medium text-gray-800 mb-2">
                  هل تود إضافة تعليق؟ (اختياري)
                </label>
                <textarea
                  id="comment"
                  rows={4}
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-teal-500 focus:border-teal-500 transition-colors"
                  placeholder="يمكنك أن تشرح أكثر عن شعورك هنا..."
                ></textarea>
              </div>

              {error && <p className="text-red-500 text-center font-semibold">{error}</p>}

              <div className="text-center pt-4">
                <button
                  type="submit"
                  className="w-full md:w-auto px-12 py-4 bg-teal-500 text-white text-lg font-bold rounded-lg hover:bg-teal-600 focus:outline-none focus:ring-4 focus:ring-teal-300 transform hover:scale-105 transition-all"
                >
                  إرسال
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;

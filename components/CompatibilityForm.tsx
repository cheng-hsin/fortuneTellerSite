import { useState, useEffect, FormEvent } from 'react';
import { useRouter } from 'next/router';

const CompatibilityForm: React.FC = () => {
  const [date1, setDate1] = useState<string>('');
  const [date2, setDate2] = useState<string>('');
  const router = useRouter();

  useEffect(() => {
    const savedDate1 = localStorage.getItem('date1');
    const savedDate2 = localStorage.getItem('date2');
    
    if (savedDate1) setDate1(savedDate1);
    if (savedDate2) setDate2(savedDate2);
  }, []);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    localStorage.setItem('date1', date1);
    localStorage.setItem('date2', date2);
    router.push(`/result?date1=${date1}&date2=${date2}`);
  };

  const handleClear = () => {
    setDate1('');
    setDate2('');
    localStorage.removeItem('date1');
    localStorage.removeItem('date2');
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-lg max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">愛情星座奇幻配對器</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-6">
          <label className="block text-gray-700 font-semibold mb-2">甲方 - 出生日期</label>
          <input
            type="date"
            value={date1}
            onChange={(e) => setDate1(e.target.value)}
            required
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 font-semibold mb-2">乙方 - 出生日期</label>
          <input
            type="date"
            value={date2}
            onChange={(e) => setDate2(e.target.value)}
            required
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="flex space-x-4">
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition duration-300"
          >
            計算兼容性
          </button>
          <button
            type="button"
            onClick={handleClear}
            className="w-full bg-red-600 text-white py-3 rounded-lg hover:bg-red-700 transition duration-300"
          >
            清除
          </button>
        </div>
      </form>
    </div>
  );
};

export default CompatibilityForm;

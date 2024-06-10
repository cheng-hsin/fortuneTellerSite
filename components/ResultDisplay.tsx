import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const calculateCompatibility = (date1: string, date2: string): { score: number, analysis1: string, analysis2: string, compatibilityAnalysis: string } => {
  const w1 = 0.5;
  const w2 = 0.5;

  const birth1 = new Date(date1);
  const birth2 = new Date(date2);
  const ageDiff = Math.abs((birth1.getTime() - birth2.getTime()) / (1000 * 60 * 60 * 24 * 365.25));
  const ageMatch = Math.max(0, 100 - ageDiff * 5);

  const zodiacSign = (day: number, month: number): string => {
    if ((month == 1 && day >= 20) || (month == 2 && day <= 18)) return "水瓶座";
    if ((month == 2 && day >= 19) || (month == 3 && day <= 20)) return "雙魚座";
    if ((month == 3 && day >= 21) || (month == 4 && day <= 19)) return "牡羊座";
    if ((month == 4 && day >= 20) || (month == 5 && day <= 20)) return "金牛座";
    if ((month == 5 && day >= 21) || (month == 6 && day <= 20)) return "雙子座";
    if ((month == 6 && day >= 21) || (month == 7 && day <= 22)) return "巨蟹座";
    if ((month == 7 && day >= 23) || (month == 8 && day <= 22)) return "獅子座";
    if ((month == 8 && day >= 23) || (month == 9 && day <= 22)) return "處女座";
    if ((month == 9 && day >= 23) || (month == 10 && day <= 22)) return "天秤座";
    if ((month == 10 && day >= 23) || (month == 11 && day <= 21)) return "天蠍座";
    if ((month == 11 && day >= 22) || (month == 12 && day <= 21)) return "射手座";
    return "摩羯座";
  };

  const zodiacAnalysis = (sign: string): string => {
    const analyses: { [key: string]: string } = {
      // 星座详细描述
    };
    return analyses[sign] || "沒有分析資料。";
  };

  const compatibilityAnalysis = (sign1: string, sign2: string): string => {
    const analyses: { [key: string]: string } = {
      // 星座配對分析详细描述
      "水瓶座水瓶座": "兩個水瓶座在一起，可以激發無限的創意和想像力。他們共享自由的生活方式，但也需要避免過於疏離。",
      // 其他星座组合
    };
    return analyses[sign1 + sign2] || "沒有特定的配對分析資料。";
  };

  const sign1 = zodiacSign(birth1.getUTCDate(), birth1.getUTCMonth() + 1);
  const sign2 = zodiacSign(birth2.getUTCDate(), birth2.getUTCMonth() + 1);
  const analysis1 = zodiacAnalysis(sign1);
  const analysis2 = zodiacAnalysis(sign2);
  const compatibilityAnalysisResult = compatibilityAnalysis(sign1, sign2);

  const compatibilityChart: { [key: string]: number } = {
    "水瓶座雙魚座": 80,
    // 其他组合的兼容性得分
    "摩羯座摩羯座": 75,
  };

  const zodiacMatch = (compatibilityChart[sign1 + sign2] || 50) + (Math.random() * 10 - 5);

  const matchingPercentage = w1 * ageMatch + w2 * zodiacMatch;
  return {
    score: Math.max(0, Math.min(100, matchingPercentage)),
    analysis1,
    analysis2,
    compatibilityAnalysis: compatibilityAnalysisResult
  };
};

const ResultDisplay: React.FC = () => {
  const router = useRouter();
  const { date1, date2 } = router.query;
  const [result, setResult] = useState<{ score: number, analysis1: string, analysis2: string, compatibilityAnalysis: string } | null>(null);

  useEffect(() => {
    if (date1 && date2) {
      const result = calculateCompatibility(date1 as string, date2 as string);
      setResult(result);
    }
  }, [date1, date2]);

  const handleBack = () => {
    router.push('/');
  };

  if (!date1 || !date2) {
    return <p className="text-red-500">請提供完整的信息來計算兼容性。</p>;
  }

  return (
    <div className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-lg text-center">
      <h1 className="text-xl font-bold mb-4">{date1} 和 {date2} 的兼容性</h1>
      {result !== null ? (
        <>
          <p className="text-2xl text-blue-600 font-semibold">兼容性分數: {(result.score / 10).toFixed(1)} 分</p>
          <p className="text-lg mt-4">個性分析：</p>
          <p className="text-md text-gray-700">{result.analysis1}</p>
          <p className="text-md text-gray-700">{result.analysis2}</p>
          <p className="text-lg mt-4">配對分析：</p>
          <p className="text-md text-gray-700">{result.compatibilityAnalysis}</p>
          <button
            onClick={handleBack}
            className="mt-4 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300"
          >
            返回
          </button>
        </>
      ) : (
        <p>計算中...</p>
      )}
    </div>
  );
};

export default ResultDisplay;

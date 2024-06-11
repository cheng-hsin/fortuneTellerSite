"use client";
import Image from "next/image";
import { useState } from "react";
export default function Page() {
  const zodiacs = [
    {
      name: "白羊座",
      date: "3.21-4.20",
      img: "/images/aries.png",
      details: {
        keyword: "行動",
        planet: "火星",
        color: "紅色",
        gemstone: "紅寶石",
        element: "火",
        traits: "積極、勇敢",
        compatibility: "獅子座",
        luckyNumber: "5",
      },
    },
    {
      name: "金牛座",
      date: "4.21-5.21",
      img: "/images/taurus.png",
      details: {
        keyword: "穩定",
        planet: "金星",
        color: "綠色",
        gemstone: "翡翠",
        element: "土",
        traits: "穩健、實在",
        compatibility: "處女座",
        luckyNumber: "6",
      },
    },
    {
      name: "雙子座",
      date: "5.22-6.21",
      img: "/images/gemini.png",
      details: {
        keyword: "溝通",
        planet: "水星",
        color: "黃色",
        gemstone: "貓眼石",
        element: "風",
        traits: "多變、機智",
        compatibility: "天秤座",
        luckyNumber: "7",
      },
    },
    {
      name: "巨蟹座",
      date: "6.22-7.22",
      img: "/images/cancer.png",
      details: {
        keyword: "感情",
        planet: "月亮",
        color: "白色",
        gemstone: "珍珠",
        element: "水",
        traits: "敏感、家庭",
        compatibility: "天蠍座",
        luckyNumber: "2",
      },
    },
    {
      name: "獅子座",
      date: "7.23-8.22",
      img: "/images/leo.png",
      details: {
        keyword: "榮耀",
        planet: "太陽",
        color: "金色",
        gemstone: "黃玉",
        element: "火",
        traits: "自信、領導",
        compatibility: "射手座",
        luckyNumber: "1",
      },
    },
    {
      name: "處女座",
      date: "8.23-9.23",
      img: "/images/virgo.png",
      details: {
        keyword: "分析",
        planet: "水星",
        color: "灰色",
        gemstone: "青金石",
        element: "土",
        traits: "細心、挑剔",
        compatibility: "摩羯座",
        luckyNumber: "3",
      },
    },
    {
      name: "天秤座",
      date: "9.24-10.23",
      img: "/images/libra.png",
      details: {
        keyword: "平衡",
        planet: "金星",
        color: "藍色",
        gemstone: "藍寶石",
        element: "風",
        traits: "優雅、公正",
        compatibility: "雙子座",
        luckyNumber: "8",
      },
    },
    {
      name: "天蠍座",
      date: "10.24-11.22",
      img: "/images/scorpio.png",
      details: {
        keyword: "變革",
        planet: "冥王星",
        color: "黑色",
        gemstone: "黑瑪瑙",
        element: "水",
        traits: "神秘、專注",
        compatibility: "巨蟹座",
        luckyNumber: "4",
      },
    },
    {
      name: "射手座",
      date: "11.23-12.21",
      img: "/images/sagittarius.png",
      details: {
        keyword: "探索",
        planet: "木星",
        color: "紫色",
        gemstone: "紫水晶",
        element: "火",
        traits: "自由、樂觀",
        compatibility: "白羊座",
        luckyNumber: "9",
      },
    },
    {
      name: "摩羯座",
      date: "12.22-1.20",
      img: "/images/capricorn.png",
      details: {
        keyword: "責任",
        planet: "土星",
        color: "棕色",
        gemstone: "茶晶",
        element: "土",
        traits: "嚴謹、務實",
        compatibility: "金牛座",
        luckyNumber: "10",
      },
    },
    {
      name: "水瓶座",
      date: "1.21-2.19",
      img: "/images/aquarius.png",
      details: {
        keyword: "創新",
        planet: "天王星",
        color: "藍綠色",
        gemstone: "青金石",
        element: "風",
        traits: "獨立、前衛",
        compatibility: "雙子座",
        luckyNumber: "11",
      },
    },
    {
      name: "雙魚座",
      date: "2.20-3.20",
      img: "/images/pisces.png",
      details: {
        keyword: "夢想",
        planet: "海王星",
        color: "海藍色",
        gemstone: "海藍寶",
        element: "水",
        traits: "浪漫、善良",
        compatibility: "巨蟹座",
        luckyNumber: "12",
      },
    },
  ];
  const [selectedZodiac, setSelectedZodiac] = useState(zodiacs[0]);

  return (
    <>
      <div className="container mx-auto p-4">
        <nav className="bg-red-600 font-bold py-2 mb-4 active:bg-red-700">
          <ul className="flex flex-wrap justify-around m-0 p-0 list-none">
            {zodiacs.map((zodiac, index) => (
              <li
                key={index}
                className="flex-1 text-center cursor-pointer p-2"
                onClick={() => setSelectedZodiac(zodiac)}
              >
                <div className="flex flex-col items-center">
                  {zodiac.img ? (
                    <Image
                      src={zodiac.img}
                      alt={zodiac.name}
                      width={50}
                      height={50}
                    />
                  ) : (
                    <span className="text-white">No Image</span>
                  )}
                  <span className="text-white">{zodiac.name}</span>
                  <span className="text-white text-sm">{zodiac.date}</span>
                </div>
              </li>
            ))}
          </ul>
        </nav>
        <div className="">
          <div className="bg-gradient-to-r from-indigo-900 via-purple-900 to-purple-700 text-white rounded-lg shadow-lg p-6">
            <div className="flex flex-col md:flex-row items-center">
              <div className="w-full md:w-1/3 flex flex-col items-center mb-4 md:mb-0">
                <Image
                  src={selectedZodiac.img}
                  alt={selectedZodiac.name}
                  className="rounded-full ring-2 ring-red-500"
                  width={100}
                  height={100}
                />
                <h2 className="text-4xl font-bold mt-2">
                  {selectedZodiac.name}
                </h2>
                <h3 className="text-xl">({selectedZodiac.date})</h3>
              </div>
              <div className="w-full md:w-2/3 p-4">
                <div className="grid grid-cols-2 gap-4">
                  <p>
                    <strong>關鍵詞:</strong> {selectedZodiac.details.keyword}
                  </p>
                  <p>
                    <strong>主宰星:</strong> {selectedZodiac.details.planet}
                  </p>
                  <p>
                    <strong>顏色:</strong> {selectedZodiac.details.color}
                  </p>
                  <p>
                    <strong>寶石:</strong> {selectedZodiac.details.gemstone}
                  </p>
                  <p>
                    <strong>元素:</strong> {selectedZodiac.details.element}
                  </p>
                  <p>
                    <strong>性格特徵:</strong> {selectedZodiac.details.traits}
                  </p>
                  <p>
                    <strong>配對星座:</strong>{" "}
                    {selectedZodiac.details.compatibility}
                  </p>
                  <p>
                    <strong>幸運數字:</strong>{" "}
                    {selectedZodiac.details.luckyNumber}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

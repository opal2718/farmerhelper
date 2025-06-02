'use client';

import NavBar from '@/components/NavBar';
import { useRouter } from 'next/navigation';

const matchedWorkers = [
  {
    name: 'Nguyen Thi Mai',
    nationality: '베트남',
    visaStatus: 'E-9',
    visaExpiry: '2025-12-15',
    experience: '3년',
    jobPreference: '과일 수확',
    language: ['한국어(기초)', '베트남어(모국어)'],
    matchScore: 88,
    intro: '성실하게 일하겠습니다. 한국에서 일하고 싶은 꿈을 이루고 싶어요.',
    //videoUrl: '/intro-video.mp4', // 실제 URL로 교체 가능
  },
  {
    name: 'Abdullah Rahman',
    nationality: '인도네시아',
    visaStatus: 'E-9',
    visaExpiry: '2025-07-10',
    experience: '1년',
    jobPreference: '채소 수확',
    language: ['인도네시아어(모국어)', '한국어(초급)'],
    matchScore: 74,
    intro: '농장에서 다양한 일을 해봤습니다. 건강하고 책임감 있습니다.',
    videoUrl: '',
  },
];

export default function MatchPage() {
    const router = useRouter();
  return (
    <main className="flex flex-col min-h-screen">
        <button
        onClick={() => router.back()}
        className="absolute top-4 left-4 text-sm text-blue-600 hover:underline"
      >
        ← 뒤로가기
      </button>
      <header className="text-center py-4 font-bold text-xl">
        AI 맞춤형 인재 추천
      </header>

      <section className="flex-grow px-4 py-4 space-y-6">
        {matchedWorkers.map((worker, idx) => (
          <div key={idx} className="border rounded-lg p-4 shadow-sm bg-white space-y-2">
            <div className="flex justify-between items-center">
              <h2 className="font-bold text-lg">{worker.name}</h2>
              <span className="text-sm text-gray-500">인공지능 기반 추천 적합도: {worker.matchScore}%</span>
            </div>
            <p className="text-sm text-gray-600">국적: {worker.nationality}</p>
            <p className="text-sm text-gray-600">희망 직종: {worker.jobPreference}</p>
            <p className="text-sm text-gray-600">경력: {worker.experience}</p>
            <p className="text-sm text-gray-600">언어: {worker.language.join(', ')}</p>
            <p className="text-sm text-gray-600">
              비자 상태: {worker.visaStatus} (만료일: {worker.visaExpiry})
            </p>
            {isVisaExpiringSoon(worker.visaExpiry) && (
              <p className="text-sm text-red-500">⚠️ 비자 만료일이 가까워요!</p>
            )}
            <p className="text-sm mt-2 italic text-gray-800">자기소개: {worker.intro}</p>

            {worker.videoUrl && (
              <video className="mt-2 w-full rounded" controls>
                <source src={worker.videoUrl} type="video/mp4" />
                브라우저가 비디오를 지원하지 않습니다.
              </video>
            )}

            <div className="mt-3 flex gap-2">
              <button className="flex-1 bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition">
                채용 요청
              </button>
              <button className="flex-1 border border-blue-600 text-blue-600 py-2 rounded hover:bg-blue-50 transition">
                연락하기
              </button>
            </div>
          </div>
        ))}
      </section>

      <NavBar />
    </main>
  );
}

function isVisaExpiringSoon(dateStr: string) {
  const expiry = new Date(dateStr);
  const today = new Date();
  const diffDays = (expiry.getTime() - today.getTime()) / (1000 * 60 * 60 * 24);
  return diffDays < 60;
}

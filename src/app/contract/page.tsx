'use client';

import NavBar from '@/components/NavBar';
import { useState } from 'react';

export default function ContractPage() {
  const [language, setLanguage] = useState<'ko' | 'en'>('ko');

  const contractContent = {
    ko: `본 계약은 고용주와 외국인 노동자 간의 고용 조건에 관한 표준 계약입니다.
- 근무기간: 2025년 6월 1일 ~ 2026년 5월 31일
- 근무장소: 대전광역시 ○○농장
- 근무시간: 주 5일, 1일 8시간
- 급여: 월 2,200,000원 (세전)
- 기타: 숙소 제공, 보험 가입 의무 등`,
    en: `This is a standard employment contract between the employer and the foreign worker.
- Period: June 1, 2025 ~ May 31, 2026
- Workplace: ○○ Farm, Daejeon
- Working hours: 5 days/week, 8 hours/day
- Salary: 2,200,000 KRW/month (before tax)
- Other: Accommodation provided, insurance required`,
  };

  return (
    <main className="flex flex-col min-h-screen">
      {/* 헤더 */}
      <header className="text-center py-4 font-bold text-xl">
        전자 계약서
      </header>

      {/* 계약 내용 */}
      <section className="flex-grow px-6 py-4 space-y-4">
        <div className="flex justify-end">
          <button
            className="text-sm text-blue-600 underline"
            onClick={() => setLanguage(language === 'ko' ? 'en' : 'ko')}
          >
            {language === 'ko' ? 'View in English' : '한국어로 보기'}
          </button>
        </div>

        <div className="whitespace-pre-wrap p-4 rounded-lg shadow text-sm text-gray-800 border border-gray-300">
          {contractContent[language]}
        </div>

        <button
          className="w-full mt-4 bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
          onClick={() => alert('전자 서명 기능은 아직 구현되지 않았습니다.')}
        >
          전자 서명하기
        </button>

        <button
          className="w-full mt-2 border border-blue-600 text-blue-600 py-2 rounded hover:bg-blue-50 transition"
          onClick={() => alert('PDF 다운로드 기능은 추후 구현 예정입니다.')}
        >
          PDF로 저장
        </button>
      </section>

      <NavBar />
    </main>
  );
}

'use client';

import Link from 'next/link';
import NavBar from '@/components/NavBar';

export default function Home() {
  return (
    <main className="flex flex-col justify-between min-h-screen">
      {/* Hero 영역 */}
      <section className="flex flex-col items-center justify-center text-center px-6 py-16 space-y-4">
        <h1 className="text-4xl font-extrabold tracking-tight text-blue-900">
          상생이음
        </h1>
        <h4 className="text-xl font-extrabold tracking-tight text-[#8E8EB9]">
          AI 기반 외국인 근로 지원 플랫폼
        </h4>
        <p className="text-lg text-gray-600 max-w-xl">
          상생이음 농촌 고령층 고용주와 외국인 노동자를 위한
          <br className="hidden sm:block" />
          AI 기반 고용·계약·행정 지원 플랫폼입니다.
        </p>
      </section>

      {/* 기능 카드 */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 px-6 pb-24">
        <FeatureCard
          title="AI 인재 추천"
          description="경력, 언어, 비자 상태 등 다양한 조건을 기반으로 최적의 인재를 자동 추천합니다."
          href="/employer/match"
        />
        <FeatureCard
          title="간편 계약서 체결"
          description="다국어 번역 및 음성 안내를 지원하는 전자 계약서로 법적 절차를 빠르고 정확하게 진행하세요."
          href="/contract"
        />
        <FeatureCard
          title="생활/법률 정보 제공"
          description="외국인 노동자가 정착에 필요한 정보를 챗봇으로 쉽게 받아볼 수 있습니다."
          href="/info"
        />
      </section>

      <NavBar />
    </main>
  );
}

function FeatureCard({
  title,
  description,
  href,
}: {
  title: string;
  description: string;
  href: string;
}) {
  return (
    <Link href={href}>
      <div className="bg-white rounded-xl shadow-md p-5 hover:shadow-lg transition cursor-pointer">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 text-sm">{description}</p>
      </div>
    </Link>
  );
}

import NavBar from '@/components/NavBar';

export default function EmployerPage() {
  return (
    <main className="flex flex-col justify-between min-h-screen">
      <section className="flex-grow px-4 py-6">
        <h1 className="text-2xl font-bold mb-4 text-center">고용주 전용 기능</h1>
        <ul className="space-y-4">
          <FeatureItem
            title="간편 구인 공고 등록"
            description="음성 입력 및 추천 양식으로 손쉽게 구인 공고를 작성할 수 있습니다."
          />
          <FeatureItem
            title="AI 인재 추천"
            description="영상 및 음성 자기소개를 포함한 맞춤형 노동자 추천을 받을 수 있습니다."
          />
          <FeatureItem
            title="다국어 전자 계약"
            description="표준 계약서를 기반으로 주요 조항을 음성으로 안내받고 쉽게 체결하세요."
          />
          <FeatureItem
            title="근무 및 행정 지원"
            description="비자 만료, 서류 제출일 등 중요한 일정 알림을 받아보세요."
          />
        </ul>
      </section>
      <NavBar />
    </main>
  );
}

function FeatureItem({ title, description }: { title: string; description: string }) {
  return (
    <li className="border p-4 rounded-xl shadow-sm hover:shadow-md transition">
      <h2 className="font-semibold text-lg">{title}</h2>
      <p className="text-sm text-gray-600 mt-1">{description}</p>
    </li>
  );
}

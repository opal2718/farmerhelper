'use client';

import { useState } from 'react';
import NavBar from '@/components/NavBar';
import { useRouter } from 'next/navigation';


export default function PostJobPage() {
    const router = useRouter();
  const [form, setForm] = useState({

    title: '',
    jobType: '',
    location: '',
    pay: '',
    description: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    alert('등록이 완료되었습니다!\n(실제 저장 기능은 아직 미구현)');
    console.log(form);
  };

  return (
    <main className="flex flex-col min-h-screen">
        <button
        onClick={() => router.back()}
        className="absolute top-4 left-4 text-sm text-blue-600 hover:underline"
      >
        ← 뒤로가기
      </button>
      <header className="text-center py-4 font-bold text-xl">
        간편 구인 공고 등록
      </header>

      <section className="flex-grow px-6 py-4 space-y-4">
        <Input label="제목" name="title" value={form.title} onChange={handleChange} />

        <Select
          label="직종"
          name="jobType"
          value={form.jobType}
          onChange={handleChange}
          options={['과일 수확', '채소 수확', '포장 작업', '청소', '기타']}
        />

        <Input label="근무지" name="location" value={form.location} onChange={handleChange} />
        <Input label="급여 (원/월)" name="pay" value={form.pay} onChange={handleChange} />

        <Textarea label="상세 설명" name="description" value={form.description} onChange={handleChange} />

        <button
          onClick={handleSubmit}
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
        >
          등록하기
        </button>
      </section>

      <NavBar />
    </main>
  );
}

function Input({ label, name, value, onChange }: any) {
  return (
    <div>
      <label className="block mb-1 font-medium text-sm">{label}</label>
      <input
        name={name}
        value={value}
        onChange={onChange}
        className="w-full px-3 py-2 border border-gray-300 rounded-lg"
        placeholder={`${label}을 입력하세요`}
      />
    </div>
  );
}

function Textarea({ label, name, value, onChange }: any) {
  return (
    <div>
      <label className="block mb-1 font-medium text-sm">{label}</label>
      <textarea
        name={name}
        value={value}
        onChange={onChange}
        rows={4}
        className="w-full px-3 py-2 border border-gray-300 rounded-lg"
        placeholder={`${label}을 입력하세요`}
      />
    </div>
  );
}

function Select({ label, name, value, onChange, options }: any) {
  return (
    <div>
      <label className="block mb-1 font-medium text-sm">{label}</label>
      <select
        name={name}
        value={value}
        onChange={onChange}
        className="w-full px-3 py-2 border border-gray-300 rounded-lg"
      >
        <option value="">선택하세요</option>
        {options.map((opt: string) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
    </div>
  );
}

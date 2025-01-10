'use client';
import { useState } from 'react';

export default function FAQ() {
  const [activeAccordion, setActiveAccordion] = useState<number>(0);

  const toggleAccordion = (id: number ) => {
    setActiveAccordion((prevId) => (prevId === id ? 0 : id));
  };

  const faqs = [
    {
      id: 1,
      question: 'Can I cancel at anytime?',
      answer:
        'Yes, you can cancel anytime no questions are asked while you cancel but we would highly appreciate if you will give us some feedback.',
    },
    {
      id: 2,
      question: 'My team has credits. How do we use them?',
      answer:
        'Once your team signs up for a subscription plan. This is where we sit down, grab a cup of coffee and dial in the details.',
    },
    {
      id: 3,
      question: "How does Preline's pricing work?",
      answer:
        'Our subscriptions are tiered. Understanding the task at hand and ironing out the wrinkles is key.',
    },
    {
      id: 4,
      question: 'How secure is Preline?',
      answer:
        'Protecting the data you trust to Preline is our first priority. This part is really crucial in keeping the project in line to completion.',
    },
    {
      id: 5,
      question: 'How do I get access to a theme I purchased?',
      answer:
        "If you lose the link for a theme you purchased, don't panic! We've got you covered. You can login to your account, tap your avatar in the upper right corner, and tap Purchases. If you didn't create a login or can't remember the information, you can use our handy Redownload page, just remember to use the same email you originally made your purchases with.",
    },
    {
      id: 6,
      question: 'Upgrade License Type',
      answer:
        'There may be times when you need to upgrade your license from the original type you purchased and we have a solution that ensures you can apply your original purchase cost to the new license purchase.',
    },
  ];

  return (
    <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      {/* Title */}
      <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
        <h2 className="text-2xl font-bold md:text-4xl md:leading-tight dark:text-white">
          Tus preguntas respondidas
        </h2>
      </div>
      {/* End Title */}

      <div className="max-w-2xl mx-auto">
        <div className="hs-accordion-group">
          {faqs.map(({ id, question, answer }) => (
            <div
              key={id}
              className={`hs-accordion rounded-xl p-6 ${
                activeAccordion === id
                  ? 'bg-gray-100 dark:bg-white/10'
                  : 'dark:bg-transparent'
              }`}
            >
              <button
                className="hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-start text-gray-800 rounded-lg transition hover:text-gray-500 focus:outline-none focus:text-gray-500 dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:text-neutral-400"
                onClick={() => toggleAccordion(id)}
              >
                {question}
                <svg
                  className={`shrink-0 size-5 text-gray-600 group-hover:text-gray-500 dark:text-neutral-400 ${
                    activeAccordion === id ? 'hidden' : 'block'
                  }`}
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
                <svg
                  className={`shrink-0 size-5 text-gray-600 group-hover:text-gray-500 dark:text-neutral-400 ${
                    activeAccordion === id ? 'block' : 'hidden'
                  }`}
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m18 15-6-6-6 6" />
                </svg>
              </button>
              {activeAccordion === id && (
                <div className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300 mt-4">
                  <p className="text-gray-800 dark:text-neutral-200">{answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

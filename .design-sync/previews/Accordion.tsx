import { Accordion } from '@eraiki/react';

const faq = [
  { title: 'How do I change my plan?', content: 'Go to Settings → Billing and choose the plan that fits your team. Changes apply from the next billing cycle.' },
  { title: 'Can I cancel at any time?', content: 'Yes. Your workspace stays active until the end of the period you already paid for.' },
  { title: 'Do you offer discounts for non-profits?', content: 'We offer 50% off every plan for registered non-profit organisations.' },
  { title: 'Where is my data stored?', content: 'All data is stored in EU data centres and encrypted at rest.' },
];

export const FirstOpen = () => <div style={{ width: 480 }}><Accordion items={faq} /></div>;
export const AllClosed = () => <div style={{ width: 480 }}><Accordion items={faq} defaultOpen={null} /></div>;

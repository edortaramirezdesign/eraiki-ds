import { Contact001 } from '@eraiki/react';

const fields = [
  { label: 'Full name:', placeholder: 'Ane Etxeberria' },
  { label: 'Email:', placeholder: 'ane@eraiki.com', type: 'email' },
  { label: 'Phone:', placeholder: '+34 600 000 000', type: 'tel' },
  { label: 'Tell us about your project:', placeholder: 'Location, size, timeline…', multiline: true },
];

export const TextForm = () => (
  <Contact001 label="Contact" title="Let's talk about your project" fields={fields} submitLabel="Send message">
    Tell us a little about what you have in mind and we will get back to you within two working days.
  </Contact001>
);
export const FormText = () => (
  <Contact001 order="form-text" label="Visit us" title="Book a visit to the workshop" fields={fields.slice(0, 2).concat(fields[3])} submitLabel="Request a visit">
    See the materials, meet the team and walk through a finished project with us.
  </Contact001>
);

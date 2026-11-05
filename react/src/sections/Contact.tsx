import type { FormEvent, ReactNode } from 'react';
import { cx } from '../cx';
import { Button } from '../Button';
import { TextField } from '../TextField';
import { TextArea } from '../TextArea';
import { Head, Body } from './parts';

export interface ContactField {
  /** Uppercase label (ends with a colon by convention, e.g. "Email:"). */
  label: string;
  placeholder?: string;
  /** Form field name. */
  name?: string;
  /** Input type for single-line fields (text, email, tel…). */
  type?: string;
  /** Renders a multi-line TextArea instead of a TextField. */
  multiline?: boolean;
  required?: boolean;
}

export interface ContactSplitFormProps {
  label?: ReactNode;
  /** Heading (heading M). */
  title?: ReactNode;
  /** Supporting paragraph. */
  children?: ReactNode;
  /** Form fields, top to bottom. */
  fields?: ContactField[];
  /** Label of the primary submit button. */
  submitLabel?: ReactNode;
  onSubmit?: (e: FormEvent<HTMLFormElement>) => void;
  /** Which column leads: the message (default) or the form. */
  order?: 'text-form' | 'form-text';
  className?: string;
}

const DEFAULT_FIELDS: ContactField[] = [
  { label: 'Name:', placeholder: 'Your name', name: 'name' },
  { label: 'Email:', placeholder: 'you@example.com', name: 'email', type: 'email' },
  { label: 'Phone:', placeholder: '+34 600 000 000', name: 'phone', type: 'tel' },
  { label: 'Message:', placeholder: 'How can we help?', name: 'message', multiline: true },
];

/** Contact Split Form — message (eyebrow, heading, copy) beside a form of fields + one primary submit button. */
export function ContactSplitForm({ label, title, children, fields = DEFAULT_FIELDS, submitLabel = 'Send', onSubmit, order = 'text-form', className }: ContactSplitFormProps) {
  const text = (
    <div className="ek-textgroup ek-contact__text">
      <div className="ek-textgroup__top"><Head label={label} title={title} size="m" /><Body>{children}</Body></div>
    </div>
  );
  const form = (
    <form className="ek-contact__form" onSubmit={(e) => { e.preventDefault(); onSubmit?.(e); }}>
      {fields.map((f, i) => f.multiline
        ? <TextArea key={i} className="ek-datefield--full" label={f.label} placeholder={f.placeholder} name={f.name} required={f.required} />
        : <TextField key={i} className="ek-datefield--full" label={f.label} placeholder={f.placeholder} name={f.name} type={f.type} required={f.required} />)}
      <div><Button type="submit">{submitLabel}</Button></div>
    </form>
  );
  return <div className={cx('ek-contact', className)}>{order === 'form-text' ? <>{form}{text}</> : <>{text}{form}</>}</div>;
}

import { Banner, Button } from '@eraiki/react';

export const Kinds = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: 12, width: 520 }}>
    <Banner kind="info" title="New version available">Refresh the page to get the latest features.</Banner>
    <Banner kind="success" title="Payment received">We have sent the receipt to your email.</Banner>
    <Banner kind="alert" title="Your trial ends in 3 days">Choose a plan to keep your projects.</Banner>
    <Banner kind="error" title="Upload failed">The file is larger than 10 MB.</Banner>
  </div>
);
export const Closable = () => (
  <div style={{ width: 520 }}>
    <Banner kind="info" title="Heads up" closable>A longer description accompanies the title to give more context.</Banner>
  </div>
);
export const WithAction = () => (
  <div style={{ width: 520 }}>
    <Banner kind="alert" title="Unsaved changes" action={<Button variant="tertiary" size="small" style={{ alignSelf: 'center' }}>Review</Button>}>
      You have edits that haven't been published yet.
    </Banner>
  </div>
);
export const TitleOnly = () => (
  <div style={{ width: 520 }}>
    <Banner kind="success" title="Settings saved" closable />
  </div>
);

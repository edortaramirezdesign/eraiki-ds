import { useRef, useState } from 'react';
import { cx } from './cx';
import { Icon } from './Icon';

export interface FileDropProps {
  /** Visual state; `uploading` / `error` show the progress bar. */
  status?: 'idle' | 'uploading' | 'error';
  /** Upload progress 0–100 (with `uploading` / `error`). */
  progress?: number;
  /** Already uploaded file names, listed under the drop zone with a remove button. */
  files?: string[];
  onRemove?: (name: string) => void;
  /** Called with the picked or dropped files. */
  onFiles?: (files: File[]) => void;
  /** Called by the button in `uploading` (Cancel) and `error` (Retry) states. */
  onCancel?: () => void;
  onRetry?: () => void;
  accept?: string;
  multiple?: boolean;
  className?: string;
}

const TEXT = { idle: 'Upload or drag and drop', uploading: 'Uploading…', error: 'Upload failed' };
const BTN = { idle: 'Upload', uploading: 'Cancel', error: 'Retry' };

/** Drag-and-drop / browse upload zone with progress and uploaded-file list. */
export function FileDrop({ status = 'idle', progress = 0, files, onRemove, onFiles, onCancel, onRetry, accept, multiple, className }: FileDropProps) {
  const [drag, setDrag] = useState(false);
  const input = useRef<HTMLInputElement>(null);
  const act = () => (status === 'uploading' ? onCancel?.() : status === 'error' ? onRetry?.() : input.current?.click());
  return (
    <div className={cx('ek-filedrop-wrap', className)}>
      <div className={cx('ek-filedrop', drag && 'is-dragging', status === 'uploading' && 'is-uploading', status === 'error' && 'is-error')}
        onDragOver={(e) => { e.preventDefault(); setDrag(true); }} onDragLeave={() => setDrag(false)}
        onDrop={(e) => { e.preventDefault(); setDrag(false); onFiles?.([...e.dataTransfer.files]); }}>
        <span className="ek-filedrop__hint"><Icon name="upload" /><span className="ek-filedrop__text">{TEXT[status]}</span></span>
        {status !== 'idle' && <div className="ek-filedrop__bar"><div className="ek-filedrop__bar-fill" style={{ width: `${progress}%` }} /></div>}
        <button type="button" className={cx('ek-btn', 'ek-btn--primary', drag && 'is-disabled')} onClick={act}>{BTN[status]}</button>
        <input ref={input} type="file" hidden accept={accept} multiple={multiple} onChange={(e) => onFiles?.([...(e.target.files ?? [])])} />
      </div>
      {files && files.length > 0 && (
        <div className="ek-filedrop__docs">
          {files.map((f) => (
            <div key={f} className="ek-filedrop__doc">
              <span className="ek-filedrop__doc-name">{f}</span>
              <button type="button" className="ek-btn ek-btn--tertiary ek-btn--icon ek-btn--sm" aria-label={`Remove ${f}`} onClick={() => onRemove?.(f)}><Icon name="closeXs" /></button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

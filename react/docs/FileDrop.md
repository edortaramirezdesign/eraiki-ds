---
category: Forms
keywords: ["file drop", "file upload", "upload", "drag and drop", "dropzone", "attach", "attachment", "import", "documents", "files", "browse", "uploading"]
---

A drag-and-drop upload area, with dragging, uploading, and error states and a list of uploaded files.

The File drop lets users upload files by dragging them onto a target area or by browsing to select them. It makes uploading direct and forgiving, giving continuous feedback throughout the process so users always know what's happening with their files.

It surfaces the full lifecycle through its states —default, hover, dragging, uploading, and upload-failed (default and hover)— and can display the list of uploaded documents below the dropzone, each with its own default and disabled state. To be clear and trustworthy, it should state the accepted file types and size limits up front and always show progress and error feedback.

## When to use
- Uploading one or more files, especially where drag-and-drop is convenient.
- Flows that need visible progress and error feedback during upload.
- Showing the list of uploaded documents alongside the dropzone.
- Cases where stating accepted types and size limits up front helps users succeed.

## When not to use
- Non-file inputs (plain text, values) — use the appropriate field.
- Trivial cases where a single simple "browse" button is enough and drag-and-drop adds nothing.
- Uploads that give no feedback on progress or errors — that breaks the pattern's purpose.
- Very constrained layouts where a full dropzone doesn't fit.

## Design properties → React props
State Uploading → `status="uploading"` + `progress`; Upload failed → `status="error"`; Dragging is live on drag-over; Uploaded files → `files`.

export interface HtmlProps {
  title: string;
  content: string;
}

export function Html({ title, content }: HtmlProps) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${title} - NRTH ID</title>
<link rel="stylesheet" href="/tailwind.css" />
</head>
<body>
${content}
</body>
</html>`;
}

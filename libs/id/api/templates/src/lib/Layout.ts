export interface LayoutProps {
  title: string;
  content: string;
}

export function Layout({ title, content }: LayoutProps) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${title}</title>
</head>
<body>
${content}
</body>
</html>`;
}

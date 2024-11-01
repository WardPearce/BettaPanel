import { AnsiUp } from 'ansi_up';

const ansiup = new AnsiUp();
ansiup.ansi_to_html('\u001b[m');

function handleCarriageReturn(line: string): string {
  if (line.indexOf('\r') !== -1) {
    const parts = line.split('\r');
    let result = parts.shift();
    parts.map(part => {
      if (result)
        result = part + result.substring(part.length);
    });
    return result ? result : '';
  }

  return line;
}

function markDaemon(line: string, panelName: string) {
  if (line.trim().indexOf('[DAEMON]') === 0) {
    return `<span class="chip primary" style="margin: 0;">${panelName}</span>` + line.substring(8);
  }

  return line;
}

function handleLine(line: string, panelName: string): string {
  return markDaemon(ansiup.ansi_to_html(handleCarriageReturn(line)), panelName);
}


export function consoleLogs(base64Message: string, panelName: string): string[] {
  const lines = atob(base64Message);
  let newLines = lines.replaceAll('\r\n', '\n');
  let linesOutput: string[] = [];
  newLines.split('\n').forEach(line => {
    linesOutput.push(handleLine(line, panelName));
  });
  return linesOutput;
}
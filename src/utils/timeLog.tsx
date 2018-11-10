export default function TimeLog (label: string, block: () => void) {
  const globalConsole = global.console
  globalConsole.time(label)
  block()
  globalConsole.timeEnd(label)
}

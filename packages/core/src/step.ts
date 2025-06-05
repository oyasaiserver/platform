import ora from 'ora'

export async function step(
  title: string,
  fn: () => Promise<void>
): Promise<void> {
  const spinner = ora(title).start()
  try {
    await fn()
    spinner.succeed()
  } catch (e) {
    spinner.fail()
    console.error(e)
    process.exit(1)
  }
}

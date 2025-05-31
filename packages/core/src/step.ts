import task from 'tasuku'

export async function step(
  title: string,
  fn: () => Promise<void>
): Promise<void> {
  await task(title, fn)
}

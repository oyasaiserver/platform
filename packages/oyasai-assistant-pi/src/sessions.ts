import type { createBrain } from "./brain.js";
type Session = Awaited<ReturnType<typeof createBrain>>;

export class Sessions {
  private entries = new Map<string, { session: Session; used: number }>();
  constructor(private now = Date.now) {}
  reset(actor: string) {
    this.entries.get(actor)?.session.dispose();
    this.entries.delete(actor);
  }
  expire(idleMs: number) {
    for (const [actor, entry] of this.entries)
      if (this.now() - entry.used >= idleMs) this.reset(actor);
  }
  async get(
    actor: string,
    idleMs: number,
    maxMessages: number,
    maxChars: number,
    create: () => Promise<Session>,
  ) {
    this.expire(idleMs);
    let entry = this.entries.get(actor);
    if (
      entry &&
      (entry.session.messages.length >= maxMessages ||
        JSON.stringify(entry.session.messages).length >= maxChars)
    ) {
      this.reset(actor);
      entry = undefined;
    }
    if (!entry) {
      if (this.entries.size >= 32)
        this.reset(
          [...this.entries].sort((a, b) => a[1].used - b[1].used)[0][0],
        );
      entry = { session: await create(), used: this.now() };
      this.entries.set(actor, entry);
    }
    entry.used = this.now();
    return entry.session;
  }
  touch(actor: string) {
    const entry = this.entries.get(actor);
    if (entry) entry.used = this.now();
  }
}

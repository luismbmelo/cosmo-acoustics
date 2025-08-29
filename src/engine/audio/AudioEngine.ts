import * as Tone from 'tone';

export interface AudioEngineOptions {
  // Placeholder for future configuration
  _placeholder?: never;
}

export class AudioEngine {
  constructor(_options: AudioEngineOptions = {}) {
    void _options;
    /* TODO: initialize Tone.js context */
  }

  async start(): Promise<void> {
    await Tone.start();
    Tone.Transport.start();
  }

  stop(): void {
    Tone.Transport.stop();
  }
}

export type InteractionCallback = (event: PointerEvent) => void;

export class InteractionManager {
  private element: HTMLElement;
  constructor(element: HTMLElement) {
    this.element = element;
  }

  onPointerDown(_cb: InteractionCallback): void {
    this.element.addEventListener('pointerdown', _cb);
  }

  dispose(): void {
    // TODO: remove listeners
  }
}

export interface IDisposable {
    /**
     * Invoked when the context of a service container is disposed of.
     */
    dispose(): void;
}

export interface IAsyncService {
    /**
     * Invoked when this service is being compiled.
     *
     * The contextId argument reflects the context argument that was given to
     * the {@link ServiceContainer.on} method.
     *
     * @param contextId
     * @returns {Promise<void>}
     */
    initialize(contextId: any): Promise<void>;
}

/**
 * A template class for creating instances with a parameter that can be logged.
 * @class
 */
export default class BunLibTemplate {
    /**
     * Creates an instance of BunLibTemplate.
     * @param {string} param - The parameter to be stored and logged.
     */
    constructor(param: string);
    /**
     * The stored parameter.
     * @type {string}
     * @private
     */
    private param;
    /**
     * Logs the stored parameter to the console.
     * @returns {void}
     */
    logParam(): void;
}

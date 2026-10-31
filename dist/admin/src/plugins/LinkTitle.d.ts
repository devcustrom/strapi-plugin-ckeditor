import { LinkUI, Plugin, LinkDecoratorManualDefinition } from 'ckeditor5';
/**
 * Name of the `link.decorators` entry used by {@link LinkTitle}.
 *
 * The decorator id in the model is `linkOpenInNewTab`.
 */
export declare const OPEN_IN_NEW_TAB_DECORATOR_NAME = "openInNewTab";
/**
 * Manual link decorator toggled by the {@link LinkTitle} switch.
 *
 * Use it together with the {@link LinkTitle} plugin in custom presets:
 *
 * ```ts
 * link: {
 *   decorators: {
 *     [OPEN_IN_NEW_TAB_DECORATOR_NAME]: openInNewTabLinkDecorator,
 *   },
 * },
 * ```
 */
export declare const openInNewTabLinkDecorator: LinkDecoratorManualDefinition;
/**
 * Adds two controls to the CKEditor link form:
 *
 * - a "Link title" text input, stored in the model as `anchorTitle` and rendered as `<a title="...">`;
 * - an "Open in a new tab" switch, backed by the {@link openInNewTabLinkDecorator} manual decorator.
 *
 * The preset must include both this plugin and the decorator. The `defaultHtml` preset does.
 */
export declare class LinkTitle extends Plugin {
    /**
     * The switch displayed in the link form.
     */
    private _targetSwitch;
    /**
     * The manual decorator controlled by the switch.
     */
    private _targetDecorator;
    /**
     * @inheritDoc
     */
    static get pluginName(): string;
    /**
     * @inheritDoc
     */
    static get requires(): (typeof LinkUI)[];
    /**
     * @inheritDoc
     */
    init(): void;
    private _extendConversion;
    private _extendLinkUi;
    private _decorateFormView;
    private _syncFormView;
    private _applyTitle;
    private _readActiveLinkState;
    private _getActiveLinkRanges;
}

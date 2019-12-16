import Backbone from 'backbone';
export as namespace grapesjs;

export function init(config: IEditorConfig): IEditor;

export var editors: IEditor[];
export var plugins: IPluginManager;

// export interface plugins: IPluginManager;

export interface IEditorConfig  extends IEditorViewConfig {
    container: string | HTMLElement;
    components?: any;
    autorender?: boolean;
    plugins?: Plugin[];
    pluginsOpts?: any;
    storageManager?: any;
    blockManager?: any;
    panels?: any;
    [pluginId: string]: IPluginOptions;
}

export interface IEditorViewConfig {
    height?: string;
    width?: string;
    stylePrefix?: any;
    el?: HTMLElement;
    cssIcons?: any;
}

export interface IEditor {
    $: any;
    editor: IEditorModel;
    I18n: any;
    DomComponents: any;
    LayerManager: any;
    CssComposer: any;
    StorageManager: any;
    AssetManager: any;
    BlockManager: any;
    TraitManager: any;
    SelectorManager: any;

    init(): this;

    getHtml(opts: any): string;
    getComponents(): any;
    getWrapper();
    addComponents(components: any, opts?: {
        avoidUpdateStyle?: boolean;
    }): any[];

    setStyle(style: any): any;

    getContainer(): HTMLElement;

    refresh(): void
}

export interface IEditorModel extends Backbone.Model {

}

export interface IEditorView extends Backbone.View {
    initialize(): void;

    render(): this;
}

export interface IPluginManager {
    add(id: string, plugin: Plugin): Plugin;

    get(id: string): Plugin;
}

export type Plugin = (editor: IEditor, plgOptions: any)=> any;

export interface IPluginOptions {

}
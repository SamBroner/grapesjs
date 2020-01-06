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
    plugins?: PluginFn[];
    pluginsOpts?: any;
    storageManager?: any;
    blockManager?: {
        appendTo: HTMLElement;
        blocks: ({
            id: string;
            label?: string;
            attributes?: {
                class: string;
            };
            select?: boolean;
            content: string | {
                type: string;
            };
            activate?: boolean;
        })[];
    };
    panels?: any;
    [pluginId: string]: IPluginOptions;
}

export interface IEditorViewConfig {
    height?: string;
    width?: string;
    el?: HTMLElement;
    cssIcons?: any;
}

export interface IEditor extends Backbone.Model {
    $: any;
    editor: IEditorModel;
    I18n: any;
    LayerManager: any;
    CssComposer: any;
    StorageManager: any;
    DomComponents: IDomComponents;
    AssetManager: any;
    BlockManager: any;
    TraitManager: any;
    SelectorManager: any;

    init(): this;
    getHtml(opts: any): string;
    getComponents(): any;
    getWrapper();
    /**
     * 
     * @param components HTML String or Component Model
     * @param opts 
     */
    addComponents(components: Array<Object> | Object | string, opts?: {
        avoidUpdateStyle?: boolean;
    }): any[];
    setStyle(style: any): any;
    getContainer(): HTMLElement;
    refresh(): void
}

export interface IEditorModel extends Backbone.Model {

}

export interface IBlockManager {

}

export interface IEditorView extends Backbone.View {
    initialize(): void;

    render(): this;
}

export interface IPluginManager {
    add(id: string, plugin: PluginFn): PluginFn;

    get(id: string): PluginFn;
}

export type PluginFn = (editor: IEditor, plgOptions?: any) => any;

export interface IPluginOptions {

}

export interface IDomComponents {

    addType(type: string, methods: IComponentMethods): any;
    load(data?: any): any;
    store(noStore: boolean): any;
    addComponent(component: IComponent): IComponent | IComponent[];
}

export interface IComponent {
    tagName?: string;
    type?: string;
    removable?: boolean;
    draggable?: boolean;
    droppable?: boolean;
    badgable?: boolean;
    stylable?: boolean;
    copyable?: boolean;
    content?: string;
    style?: any;
    attributes?: any;
    traits?: any[];

    is?(type: string): boolean;
}

export interface IComponentMethods {
    isComponent: any;
    model?: {
        defaults: IComponent;
    }
    view?: any;
    extend?: any;
    extendFn?: any;
}

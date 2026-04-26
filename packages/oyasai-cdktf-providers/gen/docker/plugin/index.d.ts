import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface PluginConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docker Plugin alias
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/plugin#alias Plugin#alias}
    */
    readonly alias?: string;
    /**
    * HTTP client timeout to enable the plugin
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/plugin#enable_timeout Plugin#enable_timeout}
    */
    readonly enableTimeout?: number;
    /**
    * If `true` the plugin is enabled. Defaults to `true`
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/plugin#enabled Plugin#enabled}
    */
    readonly enabled?: boolean | cdktf.IResolvable;
    /**
    * The environment variables in the form of `KEY=VALUE`, e.g. `DEBUG=0`
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/plugin#env Plugin#env}
    */
    readonly env?: string[];
    /**
    * If true, then the plugin is destroyed forcibly
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/plugin#force_destroy Plugin#force_destroy}
    */
    readonly forceDestroy?: boolean | cdktf.IResolvable;
    /**
    * If true, then the plugin is disabled forcibly
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/plugin#force_disable Plugin#force_disable}
    */
    readonly forceDisable?: boolean | cdktf.IResolvable;
    /**
    * If true, grant all permissions necessary to run the plugin
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/plugin#grant_all_permissions Plugin#grant_all_permissions}
    */
    readonly grantAllPermissions?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/plugin#id Plugin#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docker Plugin name
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/plugin#name Plugin#name}
    */
    readonly name: string;
    /**
    * grant_permissions block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/plugin#grant_permissions Plugin#grant_permissions}
    */
    readonly grantPermissions?: PluginGrantPermissions[] | cdktf.IResolvable;
}
export interface PluginGrantPermissions {
    /**
    * The name of the permission
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/plugin#name Plugin#name}
    */
    readonly name: string;
    /**
    * The value of the permission
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/plugin#value Plugin#value}
    */
    readonly value: string[];
}
export declare function pluginGrantPermissionsToTerraform(struct?: PluginGrantPermissions | cdktf.IResolvable): any;
export declare function pluginGrantPermissionsToHclTerraform(struct?: PluginGrantPermissions | cdktf.IResolvable): any;
export declare class PluginGrantPermissionsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): PluginGrantPermissions | cdktf.IResolvable | undefined;
    set internalValue(value: PluginGrantPermissions | cdktf.IResolvable | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    private _value?;
    get value(): string[];
    set value(value: string[]);
    get valueInput(): string[];
}
export declare class PluginGrantPermissionsList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: PluginGrantPermissions[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): PluginGrantPermissionsOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/plugin docker_plugin}
*/
export declare class Plugin extends cdktf.TerraformResource {
    static readonly tfResourceType = "docker_plugin";
    /**
    * Generates CDKTF code for importing a Plugin resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the Plugin to import
    * @param importFromId The id of the existing Plugin that should be imported. Refer to the {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/plugin#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the Plugin to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/plugin docker_plugin} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options PluginConfig
    */
    constructor(scope: Construct, id: string, config: PluginConfig);
    private _alias?;
    get alias(): string;
    set alias(value: string);
    resetAlias(): void;
    get aliasInput(): string;
    private _enableTimeout?;
    get enableTimeout(): number;
    set enableTimeout(value: number);
    resetEnableTimeout(): void;
    get enableTimeoutInput(): number;
    private _enabled?;
    get enabled(): boolean | cdktf.IResolvable;
    set enabled(value: boolean | cdktf.IResolvable);
    resetEnabled(): void;
    get enabledInput(): any;
    private _env?;
    get env(): string[];
    set env(value: string[]);
    resetEnv(): void;
    get envInput(): string[];
    private _forceDestroy?;
    get forceDestroy(): boolean | cdktf.IResolvable;
    set forceDestroy(value: boolean | cdktf.IResolvable);
    resetForceDestroy(): void;
    get forceDestroyInput(): any;
    private _forceDisable?;
    get forceDisable(): boolean | cdktf.IResolvable;
    set forceDisable(value: boolean | cdktf.IResolvable);
    resetForceDisable(): void;
    get forceDisableInput(): any;
    private _grantAllPermissions?;
    get grantAllPermissions(): boolean | cdktf.IResolvable;
    set grantAllPermissions(value: boolean | cdktf.IResolvable);
    resetGrantAllPermissions(): void;
    get grantAllPermissionsInput(): any;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    get pluginReference(): any;
    private _grantPermissions;
    get grantPermissions(): PluginGrantPermissionsList;
    putGrantPermissions(value: PluginGrantPermissions[] | cdktf.IResolvable): void;
    resetGrantPermissions(): void;
    get grantPermissionsInput(): any;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}

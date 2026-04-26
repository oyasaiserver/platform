import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataDockerPluginConfig extends cdktf.TerraformMetaArguments {
    /**
    * The alias of the Docker plugin. If the tag is omitted, `:latest` is complemented to the attribute value.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/data-sources/plugin#alias DataDockerPlugin#alias}
    */
    readonly alias?: string;
    /**
    * The ID of the plugin, which has precedence over the `alias` of both are given
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/data-sources/plugin#id DataDockerPlugin#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/data-sources/plugin docker_plugin}
*/
export declare class DataDockerPlugin extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "docker_plugin";
    /**
    * Generates CDKTF code for importing a DataDockerPlugin resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataDockerPlugin to import
    * @param importFromId The id of the existing DataDockerPlugin that should be imported. Refer to the {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/data-sources/plugin#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataDockerPlugin to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/data-sources/plugin docker_plugin} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataDockerPluginConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataDockerPluginConfig);
    private _alias?;
    get alias(): string;
    set alias(value: string);
    resetAlias(): void;
    get aliasInput(): string;
    get enabled(): any;
    get env(): any;
    get grantAllPermissions(): any;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string;
    get name(): any;
    get pluginReference(): any;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}

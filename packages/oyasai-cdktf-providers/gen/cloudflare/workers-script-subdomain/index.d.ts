import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface WorkersScriptSubdomainConfig extends cdktf.TerraformMetaArguments {
    /**
    * Identifier.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/workers_script_subdomain#account_id WorkersScriptSubdomain#account_id}
    */
    readonly accountId?: string;
    /**
    * Whether the Worker should be available on the workers.dev subdomain.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/workers_script_subdomain#enabled WorkersScriptSubdomain#enabled}
    */
    readonly enabled: boolean | cdktf.IResolvable;
    /**
    * Whether the Worker's Preview URLs should be available on the workers.dev subdomain.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/workers_script_subdomain#previews_enabled WorkersScriptSubdomain#previews_enabled}
    */
    readonly previewsEnabled?: boolean | cdktf.IResolvable;
    /**
    * Name of the script, used in URLs and route configuration.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/workers_script_subdomain#script_name WorkersScriptSubdomain#script_name}
    */
    readonly scriptName: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/workers_script_subdomain cloudflare_workers_script_subdomain}
*/
export declare class WorkersScriptSubdomain extends cdktf.TerraformResource {
    static readonly tfResourceType = "cloudflare_workers_script_subdomain";
    /**
    * Generates CDKTF code for importing a WorkersScriptSubdomain resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the WorkersScriptSubdomain to import
    * @param importFromId The id of the existing WorkersScriptSubdomain that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/workers_script_subdomain#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the WorkersScriptSubdomain to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/workers_script_subdomain cloudflare_workers_script_subdomain} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options WorkersScriptSubdomainConfig
    */
    constructor(scope: Construct, id: string, config: WorkersScriptSubdomainConfig);
    private _accountId?;
    get accountId(): string;
    set accountId(value: string);
    resetAccountId(): void;
    get accountIdInput(): string;
    private _enabled?;
    get enabled(): boolean | cdktf.IResolvable;
    set enabled(value: boolean | cdktf.IResolvable);
    get enabledInput(): any;
    get id(): any;
    private _previewsEnabled?;
    get previewsEnabled(): boolean | cdktf.IResolvable;
    set previewsEnabled(value: boolean | cdktf.IResolvable);
    resetPreviewsEnabled(): void;
    get previewsEnabledInput(): any;
    private _scriptName?;
    get scriptName(): string;
    set scriptName(value: string);
    get scriptNameInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}

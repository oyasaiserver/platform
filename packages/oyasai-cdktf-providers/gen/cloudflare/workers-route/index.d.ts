import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface WorkersRouteConfig extends cdktf.TerraformMetaArguments {
    /**
    * Pattern to match incoming requests against. [Learn more](https://developers.cloudflare.com/workers/configuration/routing/routes/#matching-behavior).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/workers_route#pattern WorkersRoute#pattern}
    */
    readonly pattern: string;
    /**
    * Name of the script to run if the route matches.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/workers_route#script WorkersRoute#script}
    */
    readonly script?: string;
    /**
    * Identifier.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/workers_route#zone_id WorkersRoute#zone_id}
    */
    readonly zoneId?: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/workers_route cloudflare_workers_route}
*/
export declare class WorkersRoute extends cdktf.TerraformResource {
    static readonly tfResourceType = "cloudflare_workers_route";
    /**
    * Generates CDKTF code for importing a WorkersRoute resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the WorkersRoute to import
    * @param importFromId The id of the existing WorkersRoute that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/workers_route#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the WorkersRoute to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/workers_route cloudflare_workers_route} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options WorkersRouteConfig
    */
    constructor(scope: Construct, id: string, config: WorkersRouteConfig);
    get id(): any;
    private _pattern?;
    get pattern(): string;
    set pattern(value: string);
    get patternInput(): string;
    private _script?;
    get script(): string;
    set script(value: string);
    resetScript(): void;
    get scriptInput(): string;
    private _zoneId?;
    get zoneId(): string;
    set zoneId(value: string);
    resetZoneId(): void;
    get zoneIdInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}

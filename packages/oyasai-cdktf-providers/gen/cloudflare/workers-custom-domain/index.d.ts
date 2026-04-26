import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface WorkersCustomDomainConfig extends cdktf.TerraformMetaArguments {
    /**
    * Identifier.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/workers_custom_domain#account_id WorkersCustomDomain#account_id}
    */
    readonly accountId?: string;
    /**
    * Worker environment associated with the domain.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/workers_custom_domain#environment WorkersCustomDomain#environment}
    */
    readonly environment?: string;
    /**
    * Hostname of the domain. Can be either the zone apex or a subdomain of the zone. Requests to this hostname will be routed to the configured Worker.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/workers_custom_domain#hostname WorkersCustomDomain#hostname}
    */
    readonly hostname: string;
    /**
    * Name of the Worker associated with the domain. Requests to the configured hostname will be routed to this Worker.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/workers_custom_domain#service WorkersCustomDomain#service}
    */
    readonly service: string;
    /**
    * ID of the zone containing the domain hostname.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/workers_custom_domain#zone_id WorkersCustomDomain#zone_id}
    */
    readonly zoneId?: string;
    /**
    * Name of the zone containing the domain hostname.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/workers_custom_domain#zone_name WorkersCustomDomain#zone_name}
    */
    readonly zoneName?: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/workers_custom_domain cloudflare_workers_custom_domain}
*/
export declare class WorkersCustomDomain extends cdktf.TerraformResource {
    static readonly tfResourceType = "cloudflare_workers_custom_domain";
    /**
    * Generates CDKTF code for importing a WorkersCustomDomain resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the WorkersCustomDomain to import
    * @param importFromId The id of the existing WorkersCustomDomain that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/workers_custom_domain#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the WorkersCustomDomain to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/workers_custom_domain cloudflare_workers_custom_domain} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options WorkersCustomDomainConfig
    */
    constructor(scope: Construct, id: string, config: WorkersCustomDomainConfig);
    private _accountId?;
    get accountId(): string;
    set accountId(value: string);
    resetAccountId(): void;
    get accountIdInput(): string;
    get certId(): any;
    private _environment?;
    get environment(): string;
    set environment(value: string);
    resetEnvironment(): void;
    get environmentInput(): string;
    private _hostname?;
    get hostname(): string;
    set hostname(value: string);
    get hostnameInput(): string;
    get id(): any;
    private _service?;
    get service(): string;
    set service(value: string);
    get serviceInput(): string;
    private _zoneId?;
    get zoneId(): string;
    set zoneId(value: string);
    resetZoneId(): void;
    get zoneIdInput(): string;
    private _zoneName?;
    get zoneName(): string;
    set zoneName(value: string);
    resetZoneName(): void;
    get zoneNameInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}

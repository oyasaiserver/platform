import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataCloudflareWorkersCustomDomainConfig extends cdktf.TerraformMetaArguments {
    /**
    * Identifier.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/workers_custom_domain#account_id DataCloudflareWorkersCustomDomain#account_id}
    */
    readonly accountId?: string;
    /**
    * ID of the domain.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/workers_custom_domain#domain_id DataCloudflareWorkersCustomDomain#domain_id}
    */
    readonly domainId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/workers_custom_domain#filter DataCloudflareWorkersCustomDomain#filter}
    */
    readonly filter?: DataCloudflareWorkersCustomDomainFilter;
}
export interface DataCloudflareWorkersCustomDomainFilter {
    /**
    * Worker environment associated with the domain.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/workers_custom_domain#environment DataCloudflareWorkersCustomDomain#environment}
    */
    readonly environment?: string;
    /**
    * Hostname of the domain.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/workers_custom_domain#hostname DataCloudflareWorkersCustomDomain#hostname}
    */
    readonly hostname?: string;
    /**
    * Name of the Worker associated with the domain.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/workers_custom_domain#service DataCloudflareWorkersCustomDomain#service}
    */
    readonly service?: string;
    /**
    * ID of the zone containing the domain hostname.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/workers_custom_domain#zone_id DataCloudflareWorkersCustomDomain#zone_id}
    */
    readonly zoneId?: string;
    /**
    * Name of the zone containing the domain hostname.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/workers_custom_domain#zone_name DataCloudflareWorkersCustomDomain#zone_name}
    */
    readonly zoneName?: string;
}
export declare function dataCloudflareWorkersCustomDomainFilterToTerraform(struct?: DataCloudflareWorkersCustomDomainFilter | cdktf.IResolvable): any;
export declare function dataCloudflareWorkersCustomDomainFilterToHclTerraform(struct?: DataCloudflareWorkersCustomDomainFilter | cdktf.IResolvable): any;
export declare class DataCloudflareWorkersCustomDomainFilterOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareWorkersCustomDomainFilter | cdktf.IResolvable | undefined;
    set internalValue(value: DataCloudflareWorkersCustomDomainFilter | cdktf.IResolvable | undefined);
    private _environment?;
    get environment(): string;
    set environment(value: string);
    resetEnvironment(): void;
    get environmentInput(): string;
    private _hostname?;
    get hostname(): string;
    set hostname(value: string);
    resetHostname(): void;
    get hostnameInput(): string;
    private _service?;
    get service(): string;
    set service(value: string);
    resetService(): void;
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
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/workers_custom_domain cloudflare_workers_custom_domain}
*/
export declare class DataCloudflareWorkersCustomDomain extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "cloudflare_workers_custom_domain";
    /**
    * Generates CDKTF code for importing a DataCloudflareWorkersCustomDomain resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareWorkersCustomDomain to import
    * @param importFromId The id of the existing DataCloudflareWorkersCustomDomain that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/workers_custom_domain#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareWorkersCustomDomain to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/workers_custom_domain cloudflare_workers_custom_domain} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareWorkersCustomDomainConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataCloudflareWorkersCustomDomainConfig);
    private _accountId?;
    get accountId(): string;
    set accountId(value: string);
    resetAccountId(): void;
    get accountIdInput(): string;
    get certId(): any;
    private _domainId?;
    get domainId(): string;
    set domainId(value: string);
    resetDomainId(): void;
    get domainIdInput(): string;
    get environment(): any;
    private _filter;
    get filter(): DataCloudflareWorkersCustomDomainFilterOutputReference;
    putFilter(value: DataCloudflareWorkersCustomDomainFilter): void;
    resetFilter(): void;
    get filterInput(): any;
    get hostname(): any;
    get id(): any;
    get service(): any;
    get zoneId(): any;
    get zoneName(): any;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}

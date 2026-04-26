import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface EnterpriseIpAllowListEntryConfig extends cdktf.TerraformMetaArguments {
    /**
    * The slug of the enterprise to apply the IP allow list entry to.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/enterprise_ip_allow_list_entry#enterprise_slug EnterpriseIpAllowListEntry#enterprise_slug}
    */
    readonly enterpriseSlug: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/enterprise_ip_allow_list_entry#id EnterpriseIpAllowListEntry#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * An IP address or range of IP addresses in CIDR notation.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/enterprise_ip_allow_list_entry#ip EnterpriseIpAllowListEntry#ip}
    */
    readonly ip: string;
    /**
    * Whether the entry is currently active.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/enterprise_ip_allow_list_entry#is_active EnterpriseIpAllowListEntry#is_active}
    */
    readonly isActive?: boolean | cdktf.IResolvable;
    /**
    * An optional name for the IP allow list entry.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/enterprise_ip_allow_list_entry#name EnterpriseIpAllowListEntry#name}
    */
    readonly name?: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/enterprise_ip_allow_list_entry github_enterprise_ip_allow_list_entry}
*/
export declare class EnterpriseIpAllowListEntry extends cdktf.TerraformResource {
    static readonly tfResourceType = "github_enterprise_ip_allow_list_entry";
    /**
    * Generates CDKTF code for importing a EnterpriseIpAllowListEntry resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the EnterpriseIpAllowListEntry to import
    * @param importFromId The id of the existing EnterpriseIpAllowListEntry that should be imported. Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/enterprise_ip_allow_list_entry#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the EnterpriseIpAllowListEntry to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/enterprise_ip_allow_list_entry github_enterprise_ip_allow_list_entry} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options EnterpriseIpAllowListEntryConfig
    */
    constructor(scope: Construct, id: string, config: EnterpriseIpAllowListEntryConfig);
    get createdAt(): any;
    private _enterpriseSlug?;
    get enterpriseSlug(): string;
    set enterpriseSlug(value: string);
    get enterpriseSlugInput(): string;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string;
    private _ip?;
    get ip(): string;
    set ip(value: string);
    get ipInput(): string;
    private _isActive?;
    get isActive(): boolean | cdktf.IResolvable;
    set isActive(value: boolean | cdktf.IResolvable);
    resetIsActive(): void;
    get isActiveInput(): any;
    private _name?;
    get name(): string;
    set name(value: string);
    resetName(): void;
    get nameInput(): string;
    get updatedAt(): any;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}

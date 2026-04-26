import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface MagicTransitSiteAclConfig extends cdktf.TerraformMetaArguments {
    /**
    * Identifier
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/magic_transit_site_acl#account_id MagicTransitSiteAcl#account_id}
    */
    readonly accountId?: string;
    /**
    * Description for the ACL.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/magic_transit_site_acl#description MagicTransitSiteAcl#description}
    */
    readonly description?: string;
    /**
    * The desired forwarding action for this ACL policy. If set to "false", the policy will forward traffic to Cloudflare. If set to "true", the policy will forward traffic locally on the Magic Connector. If not included in request, will default to false.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/magic_transit_site_acl#forward_locally MagicTransitSiteAcl#forward_locally}
    */
    readonly forwardLocally?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/magic_transit_site_acl#lan_1 MagicTransitSiteAcl#lan_1}
    */
    readonly lan1: MagicTransitSiteAclLan1;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/magic_transit_site_acl#lan_2 MagicTransitSiteAcl#lan_2}
    */
    readonly lan2: MagicTransitSiteAclLan2;
    /**
    * The name of the ACL.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/magic_transit_site_acl#name MagicTransitSiteAcl#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/magic_transit_site_acl#protocols MagicTransitSiteAcl#protocols}
    */
    readonly protocols?: string[];
    /**
    * Identifier
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/magic_transit_site_acl#site_id MagicTransitSiteAcl#site_id}
    */
    readonly siteId: string;
    /**
    * The desired traffic direction for this ACL policy. If set to "false", the policy will allow bidirectional traffic. If set to "true", the policy will only allow traffic in one direction. If not included in request, will default to false.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/magic_transit_site_acl#unidirectional MagicTransitSiteAcl#unidirectional}
    */
    readonly unidirectional?: boolean | cdktf.IResolvable;
}
export interface MagicTransitSiteAclLan1 {
    /**
    * The identifier for the LAN you want to create an ACL policy with.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/magic_transit_site_acl#lan_id MagicTransitSiteAcl#lan_id}
    */
    readonly lanId: string;
    /**
    * The name of the LAN based on the provided lan_id.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/magic_transit_site_acl#lan_name MagicTransitSiteAcl#lan_name}
    */
    readonly lanName?: string;
    /**
    * Array of port ranges on the provided LAN that will be included in the ACL. If no ports or port rangess are provided, communication on any port on this LAN is allowed.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/magic_transit_site_acl#port_ranges MagicTransitSiteAcl#port_ranges}
    */
    readonly portRanges?: string[];
    /**
    * Array of ports on the provided LAN that will be included in the ACL. If no ports or port ranges are provided, communication on any port on this LAN is allowed.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/magic_transit_site_acl#ports MagicTransitSiteAcl#ports}
    */
    readonly ports?: number[];
    /**
    * Array of subnet IPs within the LAN that will be included in the ACL. If no subnets are provided, communication on any subnets on this LAN are allowed.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/magic_transit_site_acl#subnets MagicTransitSiteAcl#subnets}
    */
    readonly subnets?: string[];
}
export declare function magicTransitSiteAclLan1ToTerraform(struct?: MagicTransitSiteAclLan1 | cdktf.IResolvable): any;
export declare function magicTransitSiteAclLan1ToHclTerraform(struct?: MagicTransitSiteAclLan1 | cdktf.IResolvable): any;
export declare class MagicTransitSiteAclLan1OutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): MagicTransitSiteAclLan1 | cdktf.IResolvable | undefined;
    set internalValue(value: MagicTransitSiteAclLan1 | cdktf.IResolvable | undefined);
    private _lanId?;
    get lanId(): string;
    set lanId(value: string);
    get lanIdInput(): string;
    private _lanName?;
    get lanName(): string;
    set lanName(value: string);
    resetLanName(): void;
    get lanNameInput(): string;
    private _portRanges?;
    get portRanges(): string[];
    set portRanges(value: string[]);
    resetPortRanges(): void;
    get portRangesInput(): string[];
    private _ports?;
    get ports(): number[];
    set ports(value: number[]);
    resetPorts(): void;
    get portsInput(): number[];
    private _subnets?;
    get subnets(): string[];
    set subnets(value: string[]);
    resetSubnets(): void;
    get subnetsInput(): string[];
}
export interface MagicTransitSiteAclLan2 {
    /**
    * The identifier for the LAN you want to create an ACL policy with.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/magic_transit_site_acl#lan_id MagicTransitSiteAcl#lan_id}
    */
    readonly lanId: string;
    /**
    * The name of the LAN based on the provided lan_id.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/magic_transit_site_acl#lan_name MagicTransitSiteAcl#lan_name}
    */
    readonly lanName?: string;
    /**
    * Array of port ranges on the provided LAN that will be included in the ACL. If no ports or port rangess are provided, communication on any port on this LAN is allowed.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/magic_transit_site_acl#port_ranges MagicTransitSiteAcl#port_ranges}
    */
    readonly portRanges?: string[];
    /**
    * Array of ports on the provided LAN that will be included in the ACL. If no ports or port ranges are provided, communication on any port on this LAN is allowed.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/magic_transit_site_acl#ports MagicTransitSiteAcl#ports}
    */
    readonly ports?: number[];
    /**
    * Array of subnet IPs within the LAN that will be included in the ACL. If no subnets are provided, communication on any subnets on this LAN are allowed.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/magic_transit_site_acl#subnets MagicTransitSiteAcl#subnets}
    */
    readonly subnets?: string[];
}
export declare function magicTransitSiteAclLan2ToTerraform(struct?: MagicTransitSiteAclLan2 | cdktf.IResolvable): any;
export declare function magicTransitSiteAclLan2ToHclTerraform(struct?: MagicTransitSiteAclLan2 | cdktf.IResolvable): any;
export declare class MagicTransitSiteAclLan2OutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): MagicTransitSiteAclLan2 | cdktf.IResolvable | undefined;
    set internalValue(value: MagicTransitSiteAclLan2 | cdktf.IResolvable | undefined);
    private _lanId?;
    get lanId(): string;
    set lanId(value: string);
    get lanIdInput(): string;
    private _lanName?;
    get lanName(): string;
    set lanName(value: string);
    resetLanName(): void;
    get lanNameInput(): string;
    private _portRanges?;
    get portRanges(): string[];
    set portRanges(value: string[]);
    resetPortRanges(): void;
    get portRangesInput(): string[];
    private _ports?;
    get ports(): number[];
    set ports(value: number[]);
    resetPorts(): void;
    get portsInput(): number[];
    private _subnets?;
    get subnets(): string[];
    set subnets(value: string[]);
    resetSubnets(): void;
    get subnetsInput(): string[];
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/magic_transit_site_acl cloudflare_magic_transit_site_acl}
*/
export declare class MagicTransitSiteAcl extends cdktf.TerraformResource {
    static readonly tfResourceType = "cloudflare_magic_transit_site_acl";
    /**
    * Generates CDKTF code for importing a MagicTransitSiteAcl resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the MagicTransitSiteAcl to import
    * @param importFromId The id of the existing MagicTransitSiteAcl that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/magic_transit_site_acl#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the MagicTransitSiteAcl to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/magic_transit_site_acl cloudflare_magic_transit_site_acl} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options MagicTransitSiteAclConfig
    */
    constructor(scope: Construct, id: string, config: MagicTransitSiteAclConfig);
    private _accountId?;
    get accountId(): string;
    set accountId(value: string);
    resetAccountId(): void;
    get accountIdInput(): string;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string;
    private _forwardLocally?;
    get forwardLocally(): boolean | cdktf.IResolvable;
    set forwardLocally(value: boolean | cdktf.IResolvable);
    resetForwardLocally(): void;
    get forwardLocallyInput(): any;
    get id(): any;
    private _lan1;
    get lan1(): MagicTransitSiteAclLan1OutputReference;
    putLan1(value: MagicTransitSiteAclLan1): void;
    get lan1Input(): any;
    private _lan2;
    get lan2(): MagicTransitSiteAclLan2OutputReference;
    putLan2(value: MagicTransitSiteAclLan2): void;
    get lan2Input(): any;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    private _protocols?;
    get protocols(): string[];
    set protocols(value: string[]);
    resetProtocols(): void;
    get protocolsInput(): string[];
    private _siteId?;
    get siteId(): string;
    set siteId(value: string);
    get siteIdInput(): string;
    private _unidirectional?;
    get unidirectional(): boolean | cdktf.IResolvable;
    set unidirectional(value: boolean | cdktf.IResolvable);
    resetUnidirectional(): void;
    get unidirectionalInput(): any;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface MagicTransitSiteConfig extends cdktf.TerraformMetaArguments {
    /**
    * Identifier
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/magic_transit_site#account_id MagicTransitSite#account_id}
    */
    readonly accountId?: string;
    /**
    * Magic Connector identifier tag.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/magic_transit_site#connector_id MagicTransitSite#connector_id}
    */
    readonly connectorId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/magic_transit_site#description MagicTransitSite#description}
    */
    readonly description?: string;
    /**
    * Site high availability mode. If set to true, the site can have two connectors and runs in high availability mode.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/magic_transit_site#ha_mode MagicTransitSite#ha_mode}
    */
    readonly haMode?: boolean | cdktf.IResolvable;
    /**
    * Location of site in latitude and longitude.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/magic_transit_site#location MagicTransitSite#location}
    */
    readonly location?: MagicTransitSiteLocation;
    /**
    * The name of the site.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/magic_transit_site#name MagicTransitSite#name}
    */
    readonly name: string;
    /**
    * Magic Connector identifier tag. Used when high availability mode is on.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/magic_transit_site#secondary_connector_id MagicTransitSite#secondary_connector_id}
    */
    readonly secondaryConnectorId?: string;
}
export interface MagicTransitSiteLocation {
    /**
    * Latitude
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/magic_transit_site#lat MagicTransitSite#lat}
    */
    readonly lat?: string;
    /**
    * Longitude
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/magic_transit_site#lon MagicTransitSite#lon}
    */
    readonly lon?: string;
}
export declare function magicTransitSiteLocationToTerraform(struct?: MagicTransitSiteLocation | cdktf.IResolvable): any;
export declare function magicTransitSiteLocationToHclTerraform(struct?: MagicTransitSiteLocation | cdktf.IResolvable): any;
export declare class MagicTransitSiteLocationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): MagicTransitSiteLocation | cdktf.IResolvable | undefined;
    set internalValue(value: MagicTransitSiteLocation | cdktf.IResolvable | undefined);
    private _lat?;
    get lat(): string;
    set lat(value: string);
    resetLat(): void;
    get latInput(): string;
    private _lon?;
    get lon(): string;
    set lon(value: string);
    resetLon(): void;
    get lonInput(): string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/magic_transit_site cloudflare_magic_transit_site}
*/
export declare class MagicTransitSite extends cdktf.TerraformResource {
    static readonly tfResourceType = "cloudflare_magic_transit_site";
    /**
    * Generates CDKTF code for importing a MagicTransitSite resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the MagicTransitSite to import
    * @param importFromId The id of the existing MagicTransitSite that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/magic_transit_site#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the MagicTransitSite to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/magic_transit_site cloudflare_magic_transit_site} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options MagicTransitSiteConfig
    */
    constructor(scope: Construct, id: string, config: MagicTransitSiteConfig);
    private _accountId?;
    get accountId(): string;
    set accountId(value: string);
    resetAccountId(): void;
    get accountIdInput(): string;
    private _connectorId?;
    get connectorId(): string;
    set connectorId(value: string);
    resetConnectorId(): void;
    get connectorIdInput(): string;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string;
    private _haMode?;
    get haMode(): boolean | cdktf.IResolvable;
    set haMode(value: boolean | cdktf.IResolvable);
    resetHaMode(): void;
    get haModeInput(): any;
    get id(): any;
    private _location;
    get location(): MagicTransitSiteLocationOutputReference;
    putLocation(value: MagicTransitSiteLocation): void;
    resetLocation(): void;
    get locationInput(): any;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    private _secondaryConnectorId?;
    get secondaryConnectorId(): string;
    set secondaryConnectorId(value: string);
    resetSecondaryConnectorId(): void;
    get secondaryConnectorIdInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
